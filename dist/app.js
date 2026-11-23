/* SEOUL110 website — "Seoul Urban × Beauty Editorial"
 * ------------------------------------------------------------------
 * CONFIG: fill in once confirmed.
 */
const CONFIG = {
  CONTACT_EMAIL: 'seoul110.co@gmail.com',  // company email shown on the site and used for the direct-mail link
  CONTACT_ENDPOINT: '/api/contact',         // server function that delivers the inquiry form to the company inbox
  SHOP_URL: 'https://seoulchanggo.com',  // SEOUL CHANGO (서울창고) shop address — site not open yet, so SHOW_SHOP stays false
  SHOW_SHOP: false     // false hides every SEOUL CHANGO shop link and section; set true to show them again
};

/* IMAGE SLOTS — see IMAGE-ASSETS.md
 * temp:true  = TEMPORARY concept image cropped from the approved mockup (low resolution).
 *              Replace with the original files at the same path. Not official company photos.
 */
const IMG = {
  face:   { src: 'assets/ui-face.jpg',   temp: true,  alt: { en: 'Close-up of glowing skin', ko: '윤기 있는 피부 클로즈업', zh: '光泽肌肤特写' } },
  cream:  { src: 'assets/ui-cream.jpg',  temp: true,  alt: { en: 'Cream formulation texture', ko: '크림 제형 텍스처', zh: '乳霜质地' } },
  street: { src: 'assets/ui-street.jpg', temp: true,  alt: { en: 'Seoul street with N Seoul Tower', ko: '남산서울타워가 보이는 서울 거리', zh: '可见南山首尔塔的首尔街道' } },
  jar:    { src: 'assets/ui-jar.jpg',    temp: true,  alt: { en: 'Cream in a cosmetic jar', ko: '화장품 용기 속 크림', zh: '化妆品罐中的乳霜' } },
  edu:    { src: 'assets/ui-edu.jpg',    temp: true,  alt: { en: 'Makeup education session', ko: '메이크업 교육 현장', zh: '化妆教育现场' } },
  city:   { src: 'assets/seoul-skyline.webp', temp: false, alt: { en: 'Line illustration of the Seoul skyline: Gyeongbokgung, N Seoul Tower, Lotte World Tower and a Han River bridge', ko: '경복궁, 남산서울타워, 롯데월드타워, 한강 다리가 있는 서울 스카이라인 라인 일러스트', zh: '首尔天际线线描插画：景福宫、南山首尔塔、乐天世界大厦与汉江大桥' } }
};

const T = {
  en: {
    nav: { about: 'About', business: 'Business', brands: 'Brands', journal: 'Journal', contact: 'Contact', cosmetics: 'Cosmetics OEM·ODM', education: 'Education', global: 'Global Business', news: 'News', schedule: 'Education schedule', inquiry: 'Partnership inquiry', company: 'Company', shop: 'Seoul Chango Shop' },
    philosophy: {
      label: 'Our philosophy',
      tagLocal: { lang: 'ko', text: '서울, 그리고 그 너머의 모든 가능성.' },
      items: [['1', 'Origin', '시작', 'ko'], ['1', 'Philosophy', '철학', 'ko'], ['0', 'Potential', '가능성', 'ko']]
    },
    intro: {
      kicker: 'About SEOUL110',
      title: 'Your beauty partner in Seoul.',
      body: 'SEOUL110 connects Korean beauty expertise with partners in Korea and around the world — from custom cosmetics development and professional education to medical & aesthetic devices and global projects.'
    },
    cards: {
      cosmetics: { label: 'Business 01', title: ['Cosmetics', 'OEM·ODM'], body: 'Custom planning, development and production solutions built around your brand and market.' },
      education: { label: 'Business 02', title: ['Education'], body: 'Seminars, professional training visits to Korea and on-site programs in your country.' }
    },
    global: {
      kicker: 'Business 03 — Device · Global',
      title: ['From Seoul', 'to the world.'],
      body: 'We build long-term, cross-border projects with partners who share our vision.',
      list: [['Medical & aesthetic devices', 'Supply partnerships for professional medical and aesthetic equipment.'], ['Overseas projects', 'Beauty business projects developed with partners in each market.'], ['Global partnership', 'Distribution and joint projects with local partners.']]
    },
    shop: { kicker: 'Online shop', body: 'SEOUL110’s own online shop for everyday goods, health foods and functional cosmetics, open to customers in Korea and abroad.', cta: 'Visit the shop' },
    journal: { kicker: 'Journal', title: 'News & schedules', empty: 'Confirmed news and education schedules will be posted here.', all: 'View journal' },
    cta: { kicker: 'Contact', title: ['Let’s work', 'together.'], body: 'Tell us about your market and goals. We will get back to you with the right next step.', btn: 'Partnership inquiry' },
    brandsUi: {
      kicker: 'Brands', title: 'Beauty, felt in different ways.',
      body: 'Discover brands and products shaped by different routines and tastes.',
      explore: 'Explore the brand', lineup: 'Product line-up', details: 'Products', viewDetail: 'View details',
      inquiryKicker: 'Brand & product inquiry', inquiryTitle: 'Talk to us about this brand.',
      inquiryBody: 'For distribution, partnership or product questions, send us a message.',
      inquiryBtn: 'Brand inquiry', productInquiry: 'Ask about this product', others: 'Other brands',
      backList: 'All brands', backBrand: 'Back to', viewShop: 'View on SEOUL CHANGO',
      count: n => n === 1 ? '1 product' : `${n} products`
    },
    more: 'Learn more',
    footer: { line: 'Seoul-based beauty business partner for global collaboration.' },
    shopPending: 'The shop will be linked here once its official web address is confirmed.',
    pages: {
      about: {
        kicker: 'About', title: ['Seoul beauty,', 'connected.'],
        lead: 'SEOUL110 is a beauty business platform that starts in Seoul and works with partners worldwide. We bring together products, expertise and networks, shaped around each partner’s market and goals.',
        listTitle: 'What we do',
        list: [['Cosmetics OEM·ODM', 'Custom planning, development and production.', 'cosmetics'], ['Education', 'Seminars, Korea training visits and local programs.', 'education'], ['Devices', 'Medical & aesthetic equipment supply cooperation.', 'global'], ['Global', 'Overseas projects and partnerships.', 'global']],
        flowTitle: 'How we work',
        flow: [['Listen', 'Understand your market, customers and goals.'], ['Plan', 'Design the right product, program or project.'], ['Build', 'Develop and deliver with our network.'], ['Grow', 'Keep working as a long-term partner.']]
      },
      cosmetics: {
        kicker: 'Business 01', title: ['Cosmetics', 'OEM·ODM'],
        lead: 'Custom planning, development and production solutions — from your first idea to a finished product ready for market.',
        listTitle: 'Services',
        list: [['Product planning', 'Concept, target market and positioning designed with you.'], ['Formulation development', 'Custom formulas and textures developed for your brand.'], ['Production', 'Packaging and production coordination through to delivery.']],
        flowTitle: 'Process',
        flow: [['Consultation', 'Brand, market and budget review'], ['Concept', 'Product concept and line-up'], ['Development', 'Formulation and sampling'], ['Production', 'Packaging and manufacturing'], ['Launch', 'Delivery and follow-up support']]
      },
      education: {
        kicker: 'Business 02', title: ['Education'],
        lead: 'Learn Korean beauty where it happens. Programs for professionals and teams, in Korea and in your country.',
        listTitle: 'Programs',
        list: [['Seminars', 'Focused seminars on Korean beauty trends, techniques and products.'], ['Training visits to Korea', 'Professional training programs with site visits in Seoul.'], ['Local programs', 'On-site education delivered in your country with local partners.']],
        flowTitle: 'How to join',
        flow: [['Inquiry', 'Tell us your team and goals'], ['Program design', 'Topics, schedule and format'], ['Training', 'In Korea or on site'], ['Follow-up', 'Next steps and further programs']]
      },
      global: {
        kicker: 'Business 03', title: ['Global', 'Business'],
        lead: 'Device supply cooperation, overseas projects and partnerships that connect Seoul with markets around the world.',
        listTitle: 'Areas',
        list: [['Medical & aesthetic devices', 'Supply partnerships for professional medical and aesthetic equipment.'], ['Overseas projects', 'Beauty business projects developed with partners in each market.'], ['Partnerships', 'Distribution and joint business with local partners.']],
        flowTitle: 'Partnership',
        flow: [['Inquiry', 'Your market and interest'], ['Review', 'Fit and opportunity'], ['Agreement', 'Scope and terms'], ['Execution', 'Launch and long-term growth']]
      },
      journal: { kicker: 'Journal', title: ['Journal'], lead: 'Company news and confirmed education schedules.', tabs: { news: 'News', schedule: 'Education schedule' }, emptyTitle: 'Coming soon', empty: { news: 'Company news will be posted here.', schedule: 'Confirmed education schedules will be posted here.' } },
      contact: {
        kicker: 'Contact', title: ['Partnership', 'inquiry'],
        lead: 'Tell us about your company, market and plans. We will reply by email.',
        info: [['Email', 'To be announced'], ['Location', 'Seoul, Korea'], ['Languages', 'Korean · English · Chinese']],
        form: { name: 'Name', company: 'Company', email: 'Email', country: 'Country / Market', interest: 'Area of interest', message: 'Message', agree: 'I agree to the collection and use of my personal information for handling this inquiry.', send: 'Send inquiry', options: ['Cosmetics OEM·ODM', 'Brand & product inquiry', 'Education', 'Medical & aesthetic devices', 'Global business', 'Other'] },
        status: {
          sending: 'Sending…',
          success: 'Thank you. Your inquiry has been received. We will reply to the email address you entered.',
          duplicate: 'This inquiry has already been sent. To send another, please change the message.',
          invalid: 'Please check the required fields and your email address.',
          too_fast: 'Please take a moment to review your inquiry, then press send again.',
          rate_limited: 'Too many inquiries were sent in a short time. Please try again in a few minutes.',
          error: 'Your inquiry could not be sent. Your message is still here — please try again, or email us directly.'
        },
        direct: 'Prefer email? Write to us directly:'
      }
    }
  },

  ko: {
    nav: { about: '회사소개', business: '사업분야', brands: '브랜드', journal: '소식', contact: '문의', cosmetics: '화장품 OEM·ODM', education: '교육사업', global: '글로벌 비즈니스', news: '소식', schedule: '교육 일정', inquiry: '사업 제휴 문의', company: '회사소개', shop: '서울창고 SHOP' },
    philosophy: {
      label: '기업 철학',
      tagLocal: { lang: 'ko', text: '서울, 그리고 그 너머의 모든 가능성.' },
      items: [['1', 'Origin', '시작', 'ko'], ['1', 'Philosophy', '철학', 'ko'], ['0', 'Potential', '가능성', 'ko']]
    },
    intro: {
      kicker: 'About SEOUL110',
      title: '서울에서 시작하는 뷰티 파트너.',
      body: 'SEOUL110은 한국의 뷰티 전문성을 국내외 파트너와 연결합니다. 맞춤형 화장품 개발과 전문 교육부터 메디컬·에스테틱 디바이스, 글로벌 프로젝트까지 함께합니다.'
    },
    cards: {
      cosmetics: { label: 'Business 01', title: ['Cosmetics', 'OEM·ODM'], body: '브랜드와 시장에 맞춘 기획·개발·생산 솔루션.' },
      education: { label: 'Business 02', title: ['Education'], body: '세미나, 한국 방문 연수, 해외 현지 교육.' }
    },
    global: {
      kicker: 'Business 03 — Device · Global',
      title: ['서울에서', '세계로.'],
      body: '같은 방향을 보는 파트너와 국경을 넘는 장기 프로젝트를 만듭니다.',
      list: [['메디컬·에스테틱 디바이스', '전문 장비 공급 협력.'], ['해외 프로젝트', '각 시장의 파트너와 함께 만드는 뷰티 비즈니스 프로젝트.'], ['글로벌 파트너십', '현지 파트너와 함께하는 유통·공동 사업.']]
    },
    shop: { kicker: 'Online shop', body: 'SEOUL110이 직접 운영하는 온라인 쇼핑몰입니다. 생활용품, 건강식품, 기능성 화장품을 국내외 고객에게 선보입니다.', cta: '쇼핑몰 바로가기' },
    journal: { kicker: 'Journal', title: '소식과 교육 일정', empty: '확정된 소식과 교육 일정을 이곳에 안내합니다.', all: '소식 전체 보기' },
    cta: { kicker: 'Contact', title: ['함께', '시작하세요.'], body: '시장과 목표를 알려주시면 알맞은 다음 단계를 안내해 드립니다.', btn: '사업 제휴 문의' },
    brandsUi: {
      kicker: 'Brands', title: '각기 다른 감각으로 만나는 뷰티.',
      body: '서로 다른 일상과 취향을 담은 브랜드와 제품을 만나보세요.',
      explore: '브랜드 살펴보기', lineup: '제품 라인업', details: '제품 상세', viewDetail: '상세 보기',
      inquiryKicker: 'Brand & product inquiry', inquiryTitle: '이 브랜드에 대해 문의하세요.',
      inquiryBody: '유통, 제휴, 제품 관련 문의를 남겨주시면 답변드립니다.',
      inquiryBtn: '브랜드 문의', productInquiry: '이 제품 문의하기', others: '다른 브랜드 보기',
      backList: '브랜드 목록', backBrand: '돌아가기:', viewShop: '서울창고에서 보기',
      count: n => `제품 ${n}종`
    },
    more: '자세히 보기',
    footer: { line: '글로벌 협업을 위한 서울 기반 뷰티 비즈니스 파트너.' },
    shopPending: '서울창고 쇼핑몰은 공식 주소가 확정되면 이곳에 연결됩니다.',
    pages: {
      about: {
        kicker: 'About', title: ['서울의 뷰티를', '연결합니다.'],
        lead: 'SEOUL110은 서울에서 시작해 세계의 파트너와 함께하는 뷰티 비즈니스 플랫폼입니다. 파트너의 시장과 목표에 맞춰 제품, 지식, 네트워크를 연결합니다.',
        listTitle: '하는 일',
        list: [['화장품 OEM·ODM', '맞춤형 기획·개발·생산.', 'cosmetics'], ['교육사업', '세미나, 한국 방문 연수, 해외 현지 교육.', 'education'], ['디바이스', '메디컬·에스테틱 장비 공급 협력.', 'global'], ['글로벌', '해외 사업과 파트너십.', 'global']],
        flowTitle: '일하는 방식',
        flow: [['경청', '시장, 고객, 목표를 먼저 이해합니다.'], ['설계', '맞는 제품, 교육, 프로젝트를 설계합니다.'], ['실행', '네트워크와 함께 개발하고 전달합니다.'], ['성장', '장기 파트너로 계속 함께합니다.']]
      },
      cosmetics: {
        kicker: 'Business 01', title: ['화장품', 'OEM·ODM'],
        lead: '아이디어 단계부터 시장에 나갈 완제품까지, 맞춤형 기획·개발·생산 솔루션을 제공합니다.',
        listTitle: '서비스',
        list: [['제품 기획', '콘셉트, 타깃 시장, 포지셔닝을 함께 설계합니다.'], ['제형 개발', '브랜드에 맞는 맞춤 제형과 사용감을 개발합니다.'], ['생산', '패키지 제작부터 생산, 납품까지 진행합니다.']],
        flowTitle: '진행 과정',
        flow: [['상담', '브랜드·시장·예산 검토'], ['기획', '제품 콘셉트와 라인업'], ['개발', '제형 개발과 샘플링'], ['생산', '패키지와 제조'], ['출시', '납품과 사후 지원']]
      },
      education: {
        kicker: 'Business 02', title: ['교육사업'],
        lead: '한국 뷰티를 현장에서 배웁니다. 한국과 해외 현지에서 전문가와 팀을 위한 교육을 진행합니다.',
        listTitle: '프로그램',
        list: [['세미나', 'K-뷰티 트렌드, 테크닉, 제품에 관한 세미나.'], ['한국 방문 연수', '서울 현장 방문을 포함한 전문 연수 프로그램.'], ['해외 현지 교육', '현지 파트너와 함께하는 방문 교육.']],
        flowTitle: '참여 방법',
        flow: [['문의', '팀 구성과 목표 공유'], ['프로그램 설계', '주제·일정·방식'], ['교육 진행', '한국 또는 현지'], ['후속 지원', '다음 과정 안내']]
      },
      global: {
        kicker: 'Business 03', title: ['글로벌', '비즈니스'],
        lead: '디바이스 공급 협력, 해외 사업, 파트너십으로 서울과 세계 시장을 연결합니다.',
        listTitle: '사업 영역',
        list: [['메디컬·에스테틱 디바이스', '전문 장비 공급 협력.'], ['해외 프로젝트', '각 시장의 파트너와 함께 만드는 뷰티 비즈니스 프로젝트.'], ['파트너십', '현지 파트너와 함께하는 유통·공동 사업.']],
        flowTitle: '제휴 과정',
        flow: [['문의', '시장과 관심 분야'], ['검토', '적합성과 기회'], ['협의', '범위와 조건'], ['실행', '런칭과 장기 성장']]
      },
      journal: { kicker: 'Journal', title: ['소식'], lead: '회사 소식과 확정된 교육 일정을 안내합니다.', tabs: { news: '소식', schedule: '교육 일정' }, emptyTitle: '준비 중입니다', empty: { news: '회사 소식을 이곳에 안내합니다.', schedule: '확정된 교육 일정을 이곳에 안내합니다.' } },
      contact: {
        kicker: 'Contact', title: ['사업 제휴', '문의'],
        lead: '회사, 시장, 계획을 알려주세요. 이메일로 답변드립니다.',
        info: [['이메일', '추후 안내'], ['위치', '대한민국 서울'], ['상담 언어', '한국어 · 영어 · 중국어']],
        form: { name: '이름', company: '회사명', email: '이메일', country: '국가 / 시장', interest: '관심 분야', message: '문의 내용', agree: '문의 처리를 위한 개인정보 수집·이용에 동의합니다.', send: '문의 보내기', options: ['화장품 OEM·ODM', '브랜드·제품 문의', '교육사업', '메디컬·에스테틱 디바이스', '글로벌 비즈니스', '기타'] },
        status: {
          sending: '전송 중…',
          success: '문의가 접수되었습니다. 입력하신 이메일로 답변드리겠습니다.',
          duplicate: '이미 전송된 문의입니다. 추가 문의는 내용을 수정한 뒤 보내주세요.',
          invalid: '필수 항목과 이메일 주소를 확인해 주세요.',
          too_fast: '문의 내용을 한 번 더 확인하신 뒤 다시 보내기를 눌러주세요.',
          rate_limited: '짧은 시간에 많은 문의가 전송되었습니다. 몇 분 후 다시 시도해 주세요.',
          error: '문의를 전송하지 못했습니다. 작성하신 내용은 그대로 남아 있으니 다시 시도하시거나 이메일로 직접 보내주세요.'
        },
        direct: '이메일로 직접 문의하기:'
      }
    }
  },

  zh: {
    nav: { about: '公司介绍', business: '业务领域', brands: '品牌', journal: '新闻', contact: '联系我们', cosmetics: '化妆品 OEM·ODM', education: '教育事业', global: '全球业务', news: '新闻', schedule: '教育日程', inquiry: '商务合作咨询', company: '公司介绍', shop: '首尔仓库 SHOP' },
    philosophy: {
      label: '企业理念',
      tagLocal: { lang: 'zh', text: '首尔，以及更远处的无限可能。' },
      items: [['1', 'Origin', '起点', 'zh'], ['1', 'Philosophy', '理念', 'zh'], ['0', 'Potential', '可能性', 'zh']]
    },
    intro: {
      kicker: 'About SEOUL110',
      title: '您在首尔的美妆合作伙伴。',
      body: 'SEOUL110 将韩国美妆领域的专业经验带给韩国及世界各地的合作伙伴，业务涵盖定制化妆品开发、专业教育、医疗美容仪器及全球项目。'
    },
    cards: {
      cosmetics: { label: 'Business 01', title: ['Cosmetics', 'OEM·ODM'], body: '根据品牌与市场量身定制的企划、开发与生产解决方案。' },
      education: { label: 'Business 02', title: ['Education'], body: '研讨会、韩国访问研修及海外当地培训。' }
    },
    global: {
      kicker: 'Business 03 — Device · Global',
      title: ['从首尔', '走向世界。'],
      body: '与志同道合的伙伴携手，打造长期跨境项目。',
      list: [['医疗美容仪器', '专业医疗美容设备的供应合作。'], ['海外项目', '与各市场伙伴共同打造的美妆商业项目。'], ['全球合作', '与当地伙伴开展分销与合作业务。']]
    },
    shop: { kicker: 'Online shop', body: 'SEOUL110 自营线上商城，为韩国及海外顾客提供生活用品、健康食品与功能性化妆品。', cta: '前往商城' },
    journal: { kicker: 'Journal', title: '新闻与教育日程', empty: '已确认的新闻与教育日程将在此发布。', all: '查看全部' },
    cta: { kicker: 'Contact', title: ['期待', '与您合作。'], body: '请告诉我们您的市场与目标，我们将为您安排合适的下一步。', btn: '商务合作咨询' },
    brandsUi: {
      kicker: 'Brands', title: '以不同的感性，遇见美。',
      body: '探索承载不同日常与喜好的品牌与产品。',
      explore: '了解品牌', lineup: '产品系列', details: '产品详情', viewDetail: '查看详情',
      inquiryKicker: 'Brand & product inquiry', inquiryTitle: '欢迎咨询该品牌。',
      inquiryBody: '如有分销、合作或产品相关问题，请给我们留言。',
      inquiryBtn: '品牌咨询', productInquiry: '咨询该产品', others: '其他品牌',
      backList: '全部品牌', backBrand: '返回', viewShop: '在首尔仓库查看',
      count: n => `${n} 款产品`
    },
    more: '了解更多',
    footer: { line: '立足首尔、面向全球合作的美妆商业伙伴。' },
    shopPending: '首尔仓库商城的官方网址确定后，将在此开放访问。',
    pages: {
      about: {
        kicker: 'About', title: ['连接', '首尔之美。'],
        lead: 'SEOUL110 是源自首尔、与全球伙伴合作的美妆商业平台。我们根据合作伙伴的市场与目标，连接产品、知识与网络。',
        listTitle: '我们的业务',
        list: [['化妆品 OEM·ODM', '定制企划、开发与生产。', 'cosmetics'], ['教育事业', '研讨会、韩国研修与当地培训。', 'education'], ['仪器设备', '医疗美容设备供应合作。', 'global'], ['全球业务', '海外项目与合作。', 'global']],
        flowTitle: '合作方式',
        flow: [['倾听', '了解您的市场、客户与目标。'], ['规划', '设计合适的产品、课程或项目。'], ['执行', '与我们的网络共同开发与交付。'], ['成长', '作为长期伙伴持续合作。']]
      },
      cosmetics: {
        kicker: 'Business 01', title: ['化妆品', 'OEM·ODM'],
        lead: '从最初的创意到可上市的成品，提供定制化企划、开发与生产解决方案。',
        listTitle: '服务内容',
        list: [['产品企划', '与您共同制定概念、目标市场与定位。'], ['配方开发', '为您的品牌开发专属配方与肤感。'], ['生产', '包装、生产直至交付的全程协调。']],
        flowTitle: '流程',
        flow: [['咨询', '品牌、市场与预算'], ['企划', '产品概念与系列'], ['开发', '配方开发与打样'], ['生产', '包装与制造'], ['上市', '交付与后续支持']]
      },
      education: {
        kicker: 'Business 02', title: ['教育事业'],
        lead: '走进现场，学习韩国美妆。我们在韩国及当地为专业人士与团队开展培训。',
        listTitle: '课程',
        list: [['研讨会', '关于 K-Beauty 趋势、技术与产品的专题研讨。'], ['韩国访问研修', '包含首尔现场参访的专业研修课程。'], ['海外当地培训', '与当地伙伴合作的上门培训。']],
        flowTitle: '参加方式',
        flow: [['咨询', '团队与目标'], ['课程设计', '主题、日程与形式'], ['培训', '韩国或当地'], ['后续', '下一阶段课程']]
      },
      global: {
        kicker: 'Business 03', title: ['全球', '业务'],
        lead: '通过仪器供应合作、海外项目与合作伙伴关系，连接首尔与世界市场。',
        listTitle: '业务范围',
        list: [['医疗美容仪器', '专业医疗美容设备的供应合作。'], ['海外项目', '与各市场伙伴共同打造的美妆商业项目。'], ['合作伙伴', '与当地伙伴的分销与合作业务。']],
        flowTitle: '合作流程',
        flow: [['咨询', '市场与意向'], ['评估', '契合度与机会'], ['协商', '范围与条件'], ['执行', '启动与长期发展']]
      },
      journal: { kicker: 'Journal', title: ['新闻'], lead: '公司新闻与已确认的教育日程。', tabs: { news: '新闻', schedule: '教育日程' }, emptyTitle: '敬请期待', empty: { news: '公司新闻将在此发布。', schedule: '已确认的教育日程将在此发布。' } },
      contact: {
        kicker: 'Contact', title: ['商务合作', '咨询'],
        lead: '请告诉我们您的公司、市场与计划，我们将通过邮件回复。',
        info: [['邮箱', '待公布'], ['地址', '韩国首尔'], ['语言', '韩语 · 英语 · 中文']],
        form: { name: '姓名', company: '公司名称', email: '邮箱', country: '国家 / 市场', interest: '感兴趣的业务', message: '咨询内容', agree: '我同意为处理本次咨询而收集和使用个人信息。', send: '发送咨询', options: ['化妆品 OEM·ODM', '品牌与产品咨询', '教育事业', '医疗美容仪器', '全球业务', '其他'] },
        status: {
          sending: '发送中…',
          success: '您的咨询已收到。我们将回复至您填写的邮箱。',
          duplicate: '该咨询已发送。如需再次咨询，请修改内容后发送。',
          invalid: '请检查必填项和邮箱地址。',
          too_fast: '请再次确认咨询内容后，重新点击发送。',
          rate_limited: '短时间内发送次数过多，请几分钟后再试。',
          error: '咨询未能发送。您填写的内容仍保留在此，请重试或直接发送邮件给我们。'
        },
        direct: '也可直接发送邮件：'
      }
    }
  }
};

/* ---------- State ---------- */
const PAGES = ['home', 'about', 'cosmetics', 'education', 'global', 'brands', 'journal', 'contact'];
const BRAND_PAGES = ['brands', 'brand', 'product'];
const BUSINESS = ['cosmetics', 'education', 'global'];
const params = new URLSearchParams(location.search);
let page = 'home', tab = 'news', brandId = '', productId = '', inquiryPrefill = null;
/* Routing uses the URL hash (#about, #cosmetics, #journal-schedule …) so the site works on any static host.
   Old ?page= links are still understood. */
function parseRoute() {
  const h = location.hash.slice(1) || params.get('page') || 'home';
  brandId = ''; productId = '';
  if (h.startsWith('brand-')) { page = 'brand'; brandId = h.slice(6); return; }
  if (h.startsWith('product-')) { page = 'product'; [brandId, productId] = h.slice(8).split('--'); return; }
  if (h.startsWith('journal') || h === 'news') { page = 'journal'; tab = (h === 'journal-schedule' || params.get('tab') === 'schedule') ? 'schedule' : 'news'; }
  else page = PAGES.includes(h) ? h : 'home';
}
parseRoute();
let lang = (() => {
  const q = params.get('lang');
  if (T[q]) return q;
  try { const s = localStorage.getItem('seoul110-lang'); if (T[s]) return s; } catch (e) {}
  return 'en'; // overseas partners first
})();

const $ = s => document.querySelector(s);
const brandHref = b => `#brand-${b.id}`;
const productHref = (b, p) => `#product-${b.id}--${p.id}`;
const href = (p, extra = '') => p === 'journal' ? (extra.includes('schedule') ? '#journal-schedule' : '#journal-news') : `#${p}`;
const br = arr => arr.join('<br>');
const img = (key, cls = '', decorative = false) => {
  const i = IMG[key];
  return `<img class="${cls}" src="${i.src}" alt="${decorative ? '' : i.alt[lang]}" loading="${cls.includes('eager') ? 'eager' : 'lazy'}" decoding="async"${i.temp ? ' data-temp-image' : ''}>`;
};

/* ---------- Header / footer ---------- */
function renderHeader(t) {
  const n = t.nav;
  const dd = (id, label, active, links) => `
    <div class="dd${active ? ' active' : ''}">
      <button type="button" class="dd-btn" aria-expanded="false" aria-controls="dd-${id}">${label}</button>
      <div class="sub" id="dd-${id}">${links.map(([p, l, x]) => `<a href="${href(p, x || '')}"${p === page && (!x || x.includes(tab)) ? ' aria-current="page"' : ''}>${l}</a>`).join('')}</div>
    </div>`;
  $('#nav').innerHTML = `
    <a class="top${page === 'about' ? ' active' : ''}" href="${href('about')}"${page === 'about' ? ' aria-current="page"' : ''}>${n.about}</a>
    ${dd('biz', n.business, BUSINESS.includes(page), [['cosmetics', n.cosmetics], ['education', n.education], ['global', n.global]])}
    <a class="top${BRAND_PAGES.includes(page) ? ' active' : ''}" href="#brands"${page === 'brands' ? ' aria-current="page"' : ''}>${n.brands}</a>
    ${dd('jr', n.journal, page === 'journal', [['journal', n.news, '&tab=news'], ['journal', n.schedule, '&tab=schedule']])}
    <a class="top${page === 'contact' ? ' active' : ''}" href="${href('contact')}"${page === 'contact' ? ' aria-current="page"' : ''}>${n.contact}</a>
    ${CONFIG.SHOW_SHOP ? `<a class="shop-m" href="#" data-shop>${n.shop} ↗</a>` : ''}`;
  $('#shopLink').textContent = n.shop + ' ↗';
  $('#shopLink').hidden = !CONFIG.SHOW_SHOP;
  $('#lang').innerHTML = [['ko', 'KOR', '한국어'], ['en', 'ENG', 'English'], ['zh', '中文', '中文']]
    .map(([k, l, full]) => `<button type="button" data-lang="${k}" lang="${k}" class="${k === lang ? 'on' : ''}" aria-pressed="${k === lang}" aria-label="${full}">${l}</button>`).join('');
  document.querySelector('.logo').href = href('home');
}

function renderFooter(t) {
  const n = t.nav;
  $('#footer').innerHTML = `
    <div class="f-top">
      <div><a class="logo" href="${href('home')}" aria-label="SEOUL110 home"><img src="assets/logo-seoul110.png" alt="SEOUL110" width="1695" height="287"></a><p>${t.footer.line}</p></div>
      <nav class="f-links" aria-label="Footer">
        <div><b>${n.company}</b><a href="${href('about')}">${n.about}</a></div>
        <div><b>${n.business}</b><a href="${href('cosmetics')}">${n.cosmetics}</a><a href="${href('education')}">${n.education}</a><a href="${href('global')}">${n.global}</a></div>
        <div><b>${n.brands}</b>${visibleBrands().map(b => `<a href="${brandHref(b)}">${b.name.en}</a>`).join('')}</div>
        <div><b>${n.journal}</b><a href="${href('journal', '&tab=news')}">${n.news}</a><a href="${href('journal', '&tab=schedule')}">${n.schedule}</a></div>
        <div><b>${n.contact}</b><a href="${href('contact')}">${n.inquiry}</a>${CONFIG.SHOW_SHOP ? `<a href="#" data-shop>${n.shop} ↗</a>` : ''}</div>
      </nav>
    </div>
    <div class="f-bottom"><span>SEOUL110 · SEOUL, KOREA</span><span>© 2026 SEOUL110. All rights reserved.</span></div>`;
}

function cta(t) {
  return `<section class="cta reveal"><span class="cta-g" aria-hidden="true"></span><div><p class="kicker light">${t.cta.kicker}</p><h2 class="display">${br(t.cta.title)}</h2><p>${t.cta.body}</p></div><a class="btn" href="${href('contact')}">${t.cta.btn} <span aria-hidden="true">→</span></a></section>`;
}

/* ---------- Home ---------- */
function home(t) {
  const c = t.cards, g = t.global;
  return `
  <section class="hero" aria-labelledby="hero-title">
    <h1 id="hero-title" lang="en"><span>Seoul is a</span><span>beauty</span><span>state of mind.</span></h1>
    <div class="hero-art">
      <span class="g" aria-hidden="true"></span>
      <figure class="slot face">${img('face', 'eager')}</figure>
      <figure class="slot street">${img('street', 'eager')}</figure>
      <figure class="slot cream">${img('cream', 'eager')}</figure>
    </div>
  </section>

  <section class="philo reveal" aria-labelledby="philo-title">
    <p class="philo-kicker"><span>${t.philosophy.label}</span><span lang="en">The meaning of 110</span></p>
    <h2 id="philo-title" class="sr-only" lang="en">One. One. Open.</h2>
    <ol class="philo-digits">${t.philosophy.items.map(([n, en, loc, l], i) => `
      <li><span class="d ${n === '0' ? 'zero' : 'one'}" aria-hidden="true">${n}</span><span class="w" lang="en" aria-hidden="true">${i === 2 ? 'Open.' : 'One.'}</span><span class="meta"><b lang="en">${en}</b><small lang="${l}">${loc}</small></span></li>`).join('')}
    </ol>
    <div class="philo-tag">
      <p class="philo-en" lang="en">Seoul, and everything beyond.</p>
      <p class="philo-local" lang="${t.philosophy.tagLocal.lang}">${t.philosophy.tagLocal.text}</p>
    </div>
  </section>

  <section class="edit-blocks" aria-label="${t.nav.business}">
    <a class="eb eb-cos reveal" href="${href('cosmetics')}">
      <figure class="slot">${img('jar')}</figure>
      <div class="eb-copy"><small>${c.cosmetics.label}</small><h2 class="display" lang="en">${br(c.cosmetics.title)}</h2><span class="bar" aria-hidden="true"></span><p>${c.cosmetics.body}</p><span class="more">${t.more} <span aria-hidden="true">→</span></span></div>
    </a>
    <a class="eb eb-edu reveal" href="${href('education')}">
      <figure class="slot">${img('edu')}</figure>
      <div class="eb-copy"><small>${c.education.label}</small><h2 class="display" lang="en">${br(c.education.title)}</h2><span class="bar" aria-hidden="true"></span><p>${c.education.body}</p><span class="more">${t.more} <span aria-hidden="true">→</span></span></div>
    </a>
  </section>

${brandsSection(t, 'home')}

  <section class="section intro reveal">
    <p class="kicker">${t.intro.kicker}</p>
    <h2 class="display">${t.intro.title}</h2>
    <div class="intro-body"><p class="lead">${t.intro.body}</p><a class="more" href="${href('about')}">${t.more} <span aria-hidden="true">→</span></a></div>
  </section>

  <section class="global reveal">
    <div class="global-copy">
      <div class="gc-head"><p class="kicker">${g.kicker}</p>
      <h2 class="display">${br(g.title)}</h2>
      <p class="lead">${g.body}</p></div>
      <div class="gc-body"><ol class="g-list">${g.list.map(([b, s]) => `<li><b>${b}</b><span>${s}</span></li>`).join('')}</ol>
      <a class="more" href="${href('global')}">${t.more} <span aria-hidden="true">→</span></a></div>
    </div>
    <div class="global-art"><span class="g" aria-hidden="true"></span><figure class="slot global-img">${img('city')}</figure></div>
  </section>

  ${CONFIG.SHOW_SHOP ? `<section class="section shop reveal" id="shop">
    <div><p class="kicker">${t.shop.kicker}</p><h2 class="display" lang="en">Seoul<br><em>Chango</em></h2><span class="ko" lang="ko">서울창고</span></div>
    <div><p class="lead">${t.shop.body}</p><a class="btn" href="#" data-shop>${t.shop.cta} <span aria-hidden="true">↗</span></a></div>
  </section>` : ''}

  <section class="section journal-home reveal">
    <div class="news-head"><div><p class="kicker">${t.journal.kicker}</p><h2 class="display">${t.journal.title}</h2></div><a class="more" href="${href('journal')}">${t.journal.all} <span aria-hidden="true">→</span></a></div>
    <div class="news-list">
      <a class="news-row" href="${href('journal', '&tab=news')}"><small>${t.nav.news}</small><span>${t.pages.journal.empty.news}</span><b aria-hidden="true">→</b></a>
      <a class="news-row" href="${href('journal', '&tab=schedule')}"><small>${t.nav.schedule}</small><span>${t.pages.journal.empty.schedule}</span><b aria-hidden="true">→</b></a>
    </div>
  </section>
  ${cta(t)}`;
}

/* ---------- Sub pages: same system, varied per page ---------- */
function pageHero(p, keys, variant) {
  const imgs = (keys || []).map((k, i) => `<figure class="slot ph-img ph-img-${i + 1}">${img(k, 'eager')}</figure>`).join('');
  return `<section class="page-hero ${variant || ''}${imgs ? ' has-img' : ''}">
    <div class="ph-copy"><p class="kicker">${p.kicker}</p><h1 class="display">${br(p.title)}</h1><p class="lead">${p.lead}</p></div>
    ${imgs ? `<div class="ph-art"><span class="g" aria-hidden="true"></span>${imgs}</div>` : ''}
  </section>`;
}
const editList = (title, arr, linked) => `<section class="section reveal elist-wrap"><p class="kicker">${title}</p><ol class="elist">${arr.map(([h, s, p]) => {
  const inner = `<span class="no" aria-hidden="true"></span><h3>${h}</h3><p>${s}</p>`;
  return `<li>${linked && p ? `<a href="${href(p)}">${inner}<b aria-hidden="true">→</b></a>` : `<div>${inner}</div>`}</li>`;
}).join('')}</ol></section>`;
const flow = (title, arr) => `<section class="section tight reveal"><p class="kicker">${title}</p><ol class="flow" style="--n:${arr.length}">${arr.map(([b, s]) => `<li><b>${b}</b><span>${s}</span></li>`).join('')}</ol></section>`;

function about(t) { const p = t.pages.about; return pageHero(p, ['street', 'face'], 'v-about') + editList(p.listTitle, p.list, true) + flow(p.flowTitle, p.flow) + cta(t); }
function business(t, key, keys, variant) { const p = t.pages[key]; return pageHero(p, keys, variant) + editList(p.listTitle, p.list) + flow(p.flowTitle, p.flow) + cta(t); }

function journal(t) {
  const p = t.pages.journal;
  return pageHero(p) + `<section class="section reveal">
    <div class="tabs" role="tablist" aria-label="${p.title[0]}">${Object.entries(p.tabs).map(([k, v]) => `<a role="tab" href="${href('journal', '&tab=' + k)}" aria-selected="${k === tab}" class="${k === tab ? 'on' : ''}">${v}</a>`).join('')}</div>
    <div class="empty" role="tabpanel"><h2 class="display">${p.emptyTitle}</h2><p>${p.empty[tab]}</p></div>
  </section>` + cta(t);
}

function contact(t) {
  const p = t.pages.contact, f = p.form;
  return pageHero(p, null, 'v-contact') + `<section class="section contact reveal">
    <aside><dl>${p.info.map(([k, v], i) => `<dt>${k}</dt><dd>${i === 0 && CONFIG.CONTACT_EMAIL ? `<a href="mailto:${CONFIG.CONTACT_EMAIL}">${CONFIG.CONTACT_EMAIL}</a>` : v}</dd>`).join('')}</dl></aside>
    <form id="contactForm" novalidate>
      <div class="row"><label>${f.name} *<input name="name" required autocomplete="name"></label><label>${f.company} *<input name="company" required autocomplete="organization"></label></div>
      <div class="row"><label>${f.email} *<input type="email" name="email" required autocomplete="email"></label><label>${f.country}<input name="country" autocomplete="country-name"></label></div>
      <label>${f.interest}<select name="interest">${f.options.map(o => `<option>${o}</option>`).join('')}</select></label>
      <label>${f.message} *<textarea name="message" required></textarea></label>
      <label class="check"><input type="checkbox" name="agree" required><span>${f.agree}</span></label>
      <div class="hp" aria-hidden="true"><label>Leave this field empty<input name="hp_field" tabindex="-1" autocomplete="off"></label></div>
      <div><button class="btn" type="submit"><span class="btn-label">${f.send}</span> <span aria-hidden="true">→</span></button></div>
      <div id="formNote" class="notice" role="status" aria-live="polite" hidden></div>
      ${CONFIG.CONTACT_EMAIL ? `<p class="direct">${p.direct} <a href="mailto:${CONFIG.CONTACT_EMAIL}">${CONFIG.CONTACT_EMAIL}</a></p>` : ''}
    </form>
  </section>`;
}

/* ---------- Brands & products (data: brands.js) ---------- */
const visibleBrands = () => BRANDS.filter(b => b.visible);
const visibleProducts = b => b.products.filter(p => p.visible);
const findBrand = id => visibleBrands().find(b => b.id === id);
const brandLocal = b => (b.name.local && b.name.local[lang]) || '';
const tx = o => (o && (o[lang] || '')) || '';
const themeStyle = b => `--b-bg:${b.theme.bg};--b-ink:${b.theme.ink};--b-accent:${b.theme.accent}`;
/* Image slot: shows the file whole at its own ratio. If the file is missing,
   a plain colour panel with the name is shown instead (no generated picture). */
const brandImg = (src, alt, b, label, cls = '') => `<figure class="bimg ${cls}${b.theme.dark ? ' dark' : ''}" style="${themeStyle(b)}">
  ${src ? `<img src="${src}" alt="${alt}" loading="lazy" decoding="async" data-fallback>` : ''}
  <span class="bimg-ph"${src ? ' hidden' : ''} aria-hidden="${src ? 'true' : 'false'}"><b>${b.name.en}</b>${label ? `<small>${label}</small>` : ''}</span>
</figure>`;
const coverSrc = b => b.cover || (visibleProducts(b)[0] || {}).image || '';

function brandCard(t, b) {
  const u = t.brandsUi, loc = brandLocal(b);
  return `<a class="bcard reveal" href="${brandHref(b)}" style="${themeStyle(b)}">
    ${brandImg(coverSrc(b), `${b.name.en}${loc ? ' ' + loc : ''}`, b, '', 'bcard-media')}
    <div class="bcard-body">
      <h3 class="bcard-name"><span lang="en">${b.name.en}</span>${loc ? `<small lang="ko">${loc}</small>` : ''}</h3>
      <p>${tx(b.intro)}</p>
      <span class="more">${u.explore} <span aria-hidden="true">→</span></span>
    </div>
  </a>`;
}
function brandsSection(t, where) {
  const u = t.brandsUi, list = visibleBrands();
  if (!list.length) return '';
  const head = where === 'home'
    ? `<div class="brands-head"><div><p class="kicker">${u.kicker}</p><h2 class="display">${u.title}</h2></div><p class="lead">${u.body}</p></div>`
    : '';
  return `<section class="section brands-sec${where === 'home' ? '' : ' tight'}" aria-label="${t.nav.brands}">${head}
    <div class="bgrid">${list.map(b => brandCard(t, b)).join('')}</div>
  </section>`;
}
function brandsPage(t) {
  const u = t.brandsUi;
  return pageHero({ kicker: u.kicker, title: [u.title], lead: u.body }) + brandsSection(t, 'list') + cta(t);
}
function brandDetail(t, b) {
  const u = t.brandsUi, loc = brandLocal(b), prods = visibleProducts(b);
  const others = visibleBrands().filter(x => x.id !== b.id);
  return `<div class="brand-scope${b.theme.dark ? ' dark' : ''}" style="${themeStyle(b)}">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="#brands">${u.backList}</a><span aria-hidden="true">/</span><span aria-current="page">${b.name.en}</span></nav>
  <section class="bhero">
    <div class="bhero-copy">
      <p class="kicker">${u.kicker}</p>
      <h1 class="display" lang="en">${b.name.en}</h1>
      ${loc ? `<p class="bhero-local" lang="ko">${loc}</p>` : ''}
      <p class="lead">${tx(b.intro)}</p>
      <p class="bhero-count">${u.count(prods.length)}</p>
    </div>
    ${brandImg(coverSrc(b), `${b.name.en}${loc ? ' ' + loc : ''}`, b, '', 'bhero-media')}
  </section>
  ${prods.length ? `<section class="section blineup">
    <p class="kicker">${u.lineup}</p>
    <ol class="lineup">${prods.map(p => `<li><a href="${productHref(b, p)}"><span lang="en">${p.name}</span>${p.local && p.local[lang] ? `<small>${p.local[lang]}</small>` : ''}<b aria-hidden="true">→</b></a></li>`).join('')}</ol>
  </section>
  <section class="section tight bproducts">
    <p class="kicker">${u.details}</p>
    <div class="pgrid">${prods.map(p => `<a class="pcard" href="${productHref(b, p)}">
      ${brandImg(p.image, p.name, b, p.name, 'pcard-media')}
      <span class="pcard-name" lang="en">${p.name}</span>
      ${p.local && p.local[lang] ? `<small class="pcard-local">${p.local[lang]}</small>` : ''}
      <span class="more">${u.viewDetail} <span aria-hidden="true">→</span></span>
    </a>`).join('')}</div>
  </section>` : ''}
  <section class="binquiry">
    <div><p class="kicker">${u.inquiryKicker}</p><h2 class="display">${u.inquiryTitle}</h2><p>${u.inquiryBody}</p></div>
    <a class="btn" href="#contact" data-inquiry="${b.name.en}">${u.inquiryBtn} <span aria-hidden="true">→</span></a>
  </section>
</div>
${others.length ? `<section class="section bothers"><p class="kicker">${u.others}</p><div class="bgrid small">${others.map(o => brandCard(t, o)).join('')}</div></section>` : ''}`;
}
function productDetail(t, b, p) {
  const u = t.brandsUi, loc = p.local && p.local[lang], desc = tx(p.description);
  const status = p.status && BRAND_STATUS_LABEL[p.status] ? BRAND_STATUS_LABEL[p.status][lang] : '';
  const siblings = visibleProducts(b).filter(x => x.id !== p.id);
  return `<div class="brand-scope${b.theme.dark ? ' dark' : ''}" style="${themeStyle(b)}">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="#brands">${u.backList}</a><span aria-hidden="true">/</span><a href="${brandHref(b)}">${b.name.en}</a><span aria-hidden="true">/</span><span aria-current="page">${p.name}</span></nav>
  <section class="pdetail">
    <div class="pdetail-copy">
      <p class="kicker"><a href="${brandHref(b)}">${b.name.en}</a></p>
      <h1 class="display" lang="en">${p.name}</h1>
      ${loc ? `<p class="bhero-local">${loc}</p>` : ''}
      ${status ? `<p class="pstatus">${status}</p>` : ''}
      ${desc ? `<div class="pdesc">${desc.split('\n').filter(Boolean).map(x => `<p>${x}</p>`).join('')}</div>` : ''}
      <div class="pactions">
        ${CONFIG.SHOW_SHOP && p.shopUrl ? `<a class="btn" href="${p.shopUrl}" target="_blank" rel="noopener">${u.viewShop} <span aria-hidden="true">↗</span></a>` : ''}
        <a class="btn ghost" href="#contact" data-inquiry="${b.name.en}|${p.name}">${u.productInquiry} <span aria-hidden="true">→</span></a>
      </div>
      <p class="pback"><a class="more" href="${brandHref(b)}"><span aria-hidden="true">←</span> ${u.backBrand} ${b.name.en}</a> <a class="more" href="#brands">${u.backList}</a></p>
    </div>
    ${brandImg(p.image, `${b.name.en} ${p.name}`, b, p.name, 'pdetail-media')}
  </section>
</div>
${siblings.length ? `<section class="section bothers"><p class="kicker">${b.name.en}</p><div class="pgrid">${siblings.map(s => `<a class="pcard" href="${productHref(b, s)}" style="${themeStyle(b)}">${brandImg(s.image, s.name, b, s.name, 'pcard-media')}<span class="pcard-name" lang="en">${s.name}</span><span class="more">${u.viewDetail} <span aria-hidden="true">→</span></span></a>`).join('')}</div></section>` : ''}`;
}

/* ---------- Render ---------- */
const META = {
  en: 'SEOUL110 — Seoul-based beauty business partner for cosmetics OEM·ODM, professional education, medical & aesthetic devices and global projects.',
  ko: 'SEOUL110 — 화장품 OEM·ODM, 뷰티 교육, 메디컬·에스테틱 디바이스, 글로벌 프로젝트를 연결하는 서울 기반 뷰티 비즈니스 파트너.',
  zh: 'SEOUL110——立足首尔的美妆商业伙伴：化妆品 OEM·ODM、专业教育、医疗美容仪器与全球项目。'
};
function render() {
  const t = T[lang];
  document.documentElement.lang = lang;
  const curBrand = BRAND_PAGES.includes(page) ? findBrand(brandId) : null;
  const curProduct = curBrand && page === 'product' ? visibleProducts(curBrand).find(x => x.id === productId) : null;
  if ((page === 'brand' && !curBrand) || (page === 'product' && !curProduct)) page = curBrand ? 'brand' : 'brands';
  const name = page === 'home' ? '' : page === 'journal' ? t.nav.journal
    : page === 'brand' ? curBrand.name.en : page === 'product' ? `${curProduct.name} · ${curBrand.name.en}` : (t.nav[page] || '');
  document.title = name ? `${name} — SEOUL110` : 'SEOUL110 — Seoul is a beauty state of mind.';
  document.querySelector('meta[name=description]').content = META[lang];
  renderHeader(t);
  renderFooter(t);
  const view = {
    home: () => home(t),
    about: () => about(t),
    cosmetics: () => business(t, 'cosmetics', ['jar', 'cream'], 'v-cos'),
    education: () => business(t, 'education', ['edu'], 'v-edu'),
    global: () => business(t, 'global', ['city'], 'v-global'),
    brands: () => brandsPage(t),
    brand: () => brandDetail(t, curBrand),
    product: () => productDetail(t, curBrand, curProduct),
    journal: () => journal(t),
    contact: () => contact(t)
  }[page];
  $('#content').innerHTML = view();
  bind(t);
}

function bind(t) {
  document.querySelectorAll('[data-shop]').forEach(a => {
    if (CONFIG.SHOP_URL) { a.href = CONFIG.SHOP_URL; a.target = '_blank'; a.rel = 'noopener'; }
    else a.onclick = e => { e.preventDefault(); closeMenu(); toast(t.shopPending); };
  });
  document.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => {
    lang = b.dataset.lang;
    try { localStorage.setItem('seoul110-lang', lang); } catch (e) {}
    closeMenu(); render();
  });
  document.querySelectorAll('.dd-btn').forEach(b => b.onclick = e => {
    e.stopPropagation();
    const open = b.getAttribute('aria-expanded') !== 'true';
    document.querySelectorAll('.dd-btn').forEach(x => x.setAttribute('aria-expanded', 'false'));
    b.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('img[data-fallback]').forEach(im => {
    const fail = () => { const ph = im.nextElementSibling; im.remove(); if (ph) { ph.hidden = false; ph.setAttribute('aria-hidden', 'false'); } };
    if (im.complete && im.naturalWidth === 0) fail(); else im.addEventListener('error', fail, { once: true });
  });
  document.querySelectorAll('[data-inquiry]').forEach(a => a.addEventListener('click', () => { inquiryPrefill = a.dataset.inquiry; }));
  const form = $('#contactForm');
  if (form && inquiryPrefill) {
    const [bn, pn] = inquiryPrefill.split('|');
    contactDraft = null;
    form.interest.selectedIndex = 1;
    form.message.value = `Brand: ${bn}${pn ? `\nProduct: ${pn}` : ''}\n\n`;
    inquiryPrefill = null;
  }
  if (form) bindContactForm(form, t.pages.contact);
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -6% 0px' });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('in'));
}

/* ---------- Inquiry form: sends through the server (CONFIG.CONTACT_ENDPOINT), never the visitor's mail app ---------- */
const FIELDS = ['name', 'company', 'email', 'country', 'interest', 'message'];
let contactDraft = null, contactSending = false, contactLastSent = '';
try { contactLastSent = sessionStorage.getItem('seoul110-inquiry-sent') || ''; } catch (e) {}
const fingerprint = d => FIELDS.map(k => (d[k] || '').trim().toLowerCase()).join('\u241f');

function bindContactForm(form, p) {
  const note = $('#formNote'), btn = form.querySelector('button[type=submit]'), label = btn.querySelector('.btn-label');
  const sendLabel = label.textContent, openedAt = Date.now();
  const show = (kind, msg) => { note.hidden = false; note.className = `notice ${kind}`; note.textContent = msg; };
  // Keep what was typed across re-renders (e.g. language switch) and failed attempts.
  if (contactDraft) {
    FIELDS.forEach(k => { if (contactDraft[k] != null) form[k].value = contactDraft[k]; });
    form.agree.checked = !!contactDraft.agree;
  }
  form.addEventListener('input', () => {
    contactDraft = Object.fromEntries(FIELDS.map(k => [k, form[k].value]));
    contactDraft.agree = form.agree.checked;
  });
  const setSending = on => {
    contactSending = on;
    btn.disabled = on; form.setAttribute('aria-busy', on);
    label.textContent = on ? p.status.sending : sendLabel;
  };
  if (contactSending) setSending(true);

  form.onsubmit = async e => {
    e.preventDefault();
    if (contactSending) return;                        // no double submit while a request is in flight
    if (!form.reportValidity()) { show('error', p.status.invalid); return; }
    const d = Object.fromEntries(FIELDS.map(k => [k, form[k].value.trim()]));
    if (fingerprint(d) === contactLastSent) { show('error', p.status.duplicate); return; }
    setSending(true); show('pending', p.status.sending);
    const ctrl = 'AbortController' in window ? new AbortController() : null;
    const timer = ctrl && setTimeout(() => ctrl.abort(), 25000);
    let code = 'error';
    try {
      const r = await fetch(CONFIG.CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, agree: form.agree.checked, lang, hp_field: form.hp_field.value, elapsed: Date.now() - openedAt }),
        signal: ctrl && ctrl.signal
      });
      const res = await r.json().catch(() => ({}));
      code = r.ok && res.ok === true ? 'success' : (res.code || 'error');
    } catch (err) { code = 'error'; }
    clearTimeout(timer);
    setSending(false);
    if (code === 'success') {                          // only after the server confirmed delivery
      contactLastSent = fingerprint(d);
      try { sessionStorage.setItem('seoul110-inquiry-sent', contactLastSent); } catch (e) {}
      contactDraft = null; form.reset();
      show('ok', p.status.success);
    } else {
      show('error', p.status[code] || p.status.error); // form content is kept
    }
  };
}

function toast(msg) {
  let el = $('#toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('show'), 3200);
}
window.addEventListener('hashchange', () => {
  parseRoute(); closeMenu(); render();
  window.scrollTo(0, 0); $('#content').focus({ preventScroll: true });
});

/* ---------- Menu ---------- */
const menuBtn = $('#menu');
function closeMenu() { $('#nav').classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-open'); }
menuBtn.addEventListener('click', () => {
  const open = $('#nav').classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  document.body.classList.toggle('menu-open', open);
});
document.addEventListener('click', e => { if (!e.target.closest('.dd')) document.querySelectorAll('.dd-btn').forEach(x => x.setAttribute('aria-expanded', 'false')); });
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  const openBtn = document.querySelector('.dd-btn[aria-expanded=true]');
  if (openBtn) { openBtn.setAttribute('aria-expanded', 'false'); openBtn.focus(); } else closeMenu();
});
window.addEventListener('scroll', () => $('.site-header').classList.toggle('scrolled', scrollY > 10), { passive: true });

render();
