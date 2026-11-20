/* SEOUL110 — partnership inquiry endpoint (Vercel Serverless Function)
 * POST /api/contact  (JSON)
 *
 * Sends the inquiry to the company inbox via SMTP (Gmail by default).
 * All credentials come from server environment variables — never from code:
 *   GMAIL_USER          sending Gmail account, e.g. seoul110.co@gmail.com
 *   GMAIL_APP_PASSWORD  16-character Google "App password" for that account (NOT the normal password)
 *   CONTACT_TO          inbox that receives inquiries (default: GMAIL_USER)
 *   AUTO_REPLY          "false" turns off the confirmation email to the visitor (default: on)
 * Optional, only to use a non-Gmail SMTP server:
 *   SMTP_HOST (default smtp.gmail.com) · SMTP_PORT (default 465) · SMTP_SECURE ("false" for STARTTLS/plain)
 */
const nodemailer = require('nodemailer');

const LIMITS = { name: 100, company: 150, email: 254, country: 100, interest: 100, message: 5000, lang: 5 };
const MIN_FILL_MS = 3000;                         // faster than this = almost certainly a bot
const RATE = { windowMs: 10 * 60 * 1000, max: 5 }; // per IP, best effort (per warm instance)
const hits = new Map();

const EMAIL_RE = /^[^\s@<>()[\],;:"]+@[^\s@<>()[\],;:"]+\.[^\s@<>()[\],;:"]{2,}$/;
const LANG_NAMES = { ko: '한국어 Korean', en: 'English', zh: '中文 Chinese' };

/* Confirmation email to the visitor. Fixed text only: nothing the visitor typed is echoed back,
   so the form cannot be abused to send arbitrary content to other people. */
const AUTO_REPLY = {
  ko: {
    subject: '[SEOUL110] 문의가 접수되었습니다',
    lines: ['안녕하세요, SEOUL110입니다.', '홈페이지를 통해 보내주신 문의가 정상적으로 접수되었습니다.', '담당자가 내용을 확인한 뒤 영업일 기준 2~3일 이내에 이 이메일 주소로 답변드리겠습니다.', '추가로 전달하실 내용이 있으면 이 메일에 바로 회신해 주세요.', '감사합니다.'],
    note: '본 메일은 문의 접수 확인을 위해 자동으로 발송되었습니다. 문의하신 적이 없다면 이 메일을 무시하셔도 됩니다.'
  },
  en: {
    subject: '[SEOUL110] We have received your inquiry',
    lines: ['Hello, this is SEOUL110.', 'Thank you for contacting us through our website. Your inquiry has been received.', 'Our team will review it and reply to this email address within 2–3 business days.', 'If you would like to add anything, simply reply to this email.', 'Best regards,'],
    note: 'This is an automatic confirmation of your inquiry. If you did not contact us, please ignore this email.'
  },
  zh: {
    subject: '[SEOUL110] 我们已收到您的咨询',
    lines: ['您好，这里是 SEOUL110。', '感谢您通过官网与我们联系，您的咨询已成功提交。', '我们的负责人确认内容后，将在 2–3 个工作日内回复至此邮箱。', '如需补充信息，请直接回复本邮件。', '谢谢。'],
    note: '本邮件为咨询提交后的自动确认邮件。如果您并未提交咨询，请忽略本邮件。'
  }
};

function autoReplyMail(lang, from, replyTo) {
  const t = AUTO_REPLY[lang] || AUTO_REPLY.en;
  const sign = ['SEOUL110', 'Seoul, Korea', replyTo];
  const text = t.lines.join('\n\n') + '\n\n' + sign.join('\n') + '\n\n—\n' + t.note;
  const html = `<div style="font-family:Arial,sans-serif;font-size:15px;color:#111;line-height:1.7;max-width:560px">
${t.lines.map(l => `<p style="margin:0 0 14px">${esc(l)}</p>`).join('')}
<p style="margin:22px 0 0;border-top:2px solid #098774;padding-top:12px"><b>SEOUL110</b><br>Seoul, Korea<br>
<a href="mailto:${esc(replyTo)}" style="color:#098774">${esc(replyTo)}</a></p>
<p style="color:#888;font-size:12px;margin-top:24px">${esc(t.note)}</p></div>`;
  return { from, replyTo, subject: t.subject, text, html, headers: { 'Auto-Submitted': 'auto-replied', 'X-Auto-Response-Suppress': 'All' } };
}

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

async function readBody(req) {
  if (req.body !== undefined) return typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body;
  let raw = '';
  for await (const chunk of req) { raw += chunk; if (raw.length > 64 * 1024) throw new Error('too_large'); }
  return JSON.parse(raw || '{}');
}

const clean = (v, max) => String(v ?? '').replace(/\r\n?/g, '\n').trim().slice(0, max);
const oneLine = v => v.replace(/[\r\n\t]+/g, ' ').trim();
const esc = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter(t => now - t < RATE.windowMs);
  if (list.length >= RATE.max) { hits.set(ip, list); return true; }
  list.push(now); hits.set(ip, list);
  if (hits.size > 5000) hits.clear();
  return false;
}

function sameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true; // non-browser clients; other checks still apply
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  try { return new URL(origin).host === host; } catch (e) { return false; }
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return send(res, 405, { ok: false, code: 'method' }); }
  if (!String(req.headers['content-type'] || '').includes('application/json')) return send(res, 415, { ok: false, code: 'invalid' });
  if (!sameOrigin(req)) return send(res, 403, { ok: false, code: 'forbidden' });

  let b;
  try { b = await readBody(req); } catch (e) { return send(res, 400, { ok: false, code: 'invalid' }); }
  if (!b || typeof b !== 'object') return send(res, 400, { ok: false, code: 'invalid' });

  // Honeypot: hidden field real visitors never see. Pretend success so bots don't adapt.
  if (clean(b.hp_field, 200)) return send(res, 200, { ok: true });

  const elapsed = Number(b.elapsed);
  if (!Number.isFinite(elapsed) || elapsed < MIN_FILL_MS) return send(res, 400, { ok: false, code: 'too_fast' });

  const d = {};
  for (const k of Object.keys(LIMITS)) d[k] = clean(b[k], LIMITS[k]);
  for (const k of ['name', 'company', 'email', 'country', 'interest', 'lang']) d[k] = oneLine(d[k]);
  const missing = !d.name || !d.company || !d.email || !d.message || b.agree !== true;
  if (missing || !EMAIL_RE.test(d.email)) return send(res, 400, { ok: false, code: 'invalid' });
  if ((d.message.match(/https?:\/\//gi) || []).length > 5) return send(res, 400, { ok: false, code: 'spam' });

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (rateLimited(ip)) return send(res, 429, { ok: false, code: 'rate_limited' });

  const user = (process.env.GMAIL_USER || '').trim(), pass = (process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');
  const to = process.env.CONTACT_TO || user;
  if (!user || !pass || !to) {
    console.error('[contact] Missing GMAIL_USER / GMAIL_APP_PASSWORD / CONTACT_TO environment variables');
    return send(res, 503, { ok: false, code: 'not_configured' });
  }

  const port = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE !== 'false' : port === 465,
    auth: { user, pass },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000
  });

  const langName = LANG_NAMES[d.lang] || d.lang || '-';
  const rows = [
    ['이름 Name', d.name], ['회사명 Company', d.company], ['이메일 Email', d.email],
    ['국가 Country / Market', d.country || '-'], ['관심 분야 Interest', d.interest || '-'], ['작성 언어 Site language', langName]
  ];
  const subject = `[SEOUL110 문의 Inquiry] ${d.company} · ${d.interest || '-'} — ${d.name}`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') +
    `\n\n문의 내용 Message:\n${d.message}\n\n—\n홈페이지 문의 폼으로 접수되었습니다. ‘답장’을 누르면 ${d.email} 로 회신됩니다.\nSent from the seoul110 website inquiry form. Reply goes to ${d.email}.`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#111;line-height:1.6">
<h2 style="font-size:18px;margin:0 0 16px">SEOUL110 홈페이지 문의 · Website inquiry</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows.map(([k, v]) =>
    `<tr><td style="color:#098774;font-weight:bold;vertical-align:top;white-space:nowrap">${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}</table>
<h3 style="font-size:15px;margin:20px 0 8px">문의 내용 Message</h3>
<div style="white-space:pre-wrap;border-left:4px solid #098774;padding:8px 14px;background:#f6f6f3">${esc(d.message)}</div>
<p style="color:#777;font-size:12px;margin-top:24px">‘답장’을 누르면 ${esc(d.email)} 로 회신됩니다. · Reply goes to ${esc(d.email)}.</p></div>`;

  try {
    const info = await transporter.sendMail({
      from: { name: 'SEOUL110 Website', address: user },
      to,
      replyTo: { name: d.name, address: d.email },
      subject, text, html
    });
    if (!info.accepted || !info.accepted.length) throw new Error('No recipient accepted the message');
  } catch (e) {
    console.error('[contact] send failed:', e && (e.code || ''), e && e.message);
    return send(res, 502, { ok: false, code: 'send_failed' });
  }

  // The inquiry is delivered. The confirmation to the visitor is best effort and never turns success into failure.
  if (process.env.AUTO_REPLY !== 'false') {
    try {
      await transporter.sendMail({ ...autoReplyMail(d.lang, { name: 'SEOUL110', address: user }, to), to: d.email });
    } catch (e) {
      console.error('[contact] auto-reply failed:', e && (e.code || ''), e && e.message);
    }
  }
  return send(res, 200, { ok: true });
};
