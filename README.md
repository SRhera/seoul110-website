# SEOUL110 website

Static site (HTML · CSS · vanilla JS), no build step, plus one Vercel serverless function
(`api/contact.js`) that emails inquiry-form submissions to the company inbox.

```
dist/                 ← the website (deployed)
  index.html
  style.css
  app.js              ← all copy (KO · EN · 中文), pages and routing
  assets/             ← logo and images
  IMAGE-ASSETS.md     ← images to replace before launch
design-reference/     ← approved mockup (not deployed)
api/contact.js        ← POST /api/contact: sends the inquiry form by email (Gmail SMTP)
vercel.json           ← tells Vercel to serve dist/ as-is
```

## Run locally

```bash
cd dist && python3 -m http.server 8080
```

Open http://localhost:8080

## Deploy to Vercel

Import this folder (or the Git repo containing it) as a Vercel project. `vercel.json` sets
no build command and `dist` as the output directory, so the Framework Preset can stay "Other".

With the CLI:

```bash
npx vercel --prod
```

## Inquiry form email (required)

The form posts to `/api/contact`, which sends the inquiry to the company inbox with the
visitor's email as **Reply-To**. Set these in Vercel → Project → Settings → Environment Variables
(Production and Preview), then redeploy:

| Variable | Value |
| --- | --- |
| `GMAIL_USER` | `seoul110.co@gmail.com` |
| `CONTACT_TO` | `seoul110.co@gmail.com` |
| `GMAIL_APP_PASSWORD` | Google **App password** for that account (mark as Sensitive) |

App password: sign in as seoul110.co@gmail.com → turn on 2-Step Verification →
https://myaccount.google.com/apppasswords → create one named "SEOUL110 website" → paste the
16 characters into Vercel. Never put it in code. Until it is set the form shows a "could not be
sent" message (with the direct email link) and keeps what the visitor typed.

Spam protection: hidden honeypot field, minimum fill time, same-origin + JSON-only requests,
field length/format checks, and a per-IP limit (5 per 10 minutes).

`python3 -m http.server` serves the static pages only; to try the form locally use `npx vercel dev`.

## Before launch

Fill in `CONFIG` at the top of `dist/app.js`:

- `CONTACT_EMAIL`: company email shown on the site (set: seoul110.co@gmail.com)
- `SHOP_URL`: Seoul Chango shop address

Pages use hash links (`#about`, `#cosmetics`, `#journal-schedule` …), so no server rewrites are needed.
