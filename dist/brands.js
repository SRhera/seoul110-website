/* ==================================================================
 * SEOUL110 — BRANDS & PRODUCTS DATA
 * Edit brand and product information here. No other file needs to change.
 *
 * IMAGES
 *   Put files in  assets/brands/<brand-id>/  with the file names below.
 *   A missing file is never replaced by a made-up picture: the page shows a
 *   plain colour panel with the brand / product name until the file exists.
 *   Images are always shown whole, at their own ratio (never cropped).
 *     cover   : brand representative image (optional). If empty, the first
 *               visible product image is used, at its original ratio.
 *     image   : product detail image (the vertical product visual).
 *
 * COPY
 *   All intro texts are DESIGN DRAFTS — replace freely. Every text has
 *   ko / en / zh. Product names stay as given (English) unless `local` is set.
 *   Do not add ingredients, amounts, efficacy, test results, certifications,
 *   origin or volume until they are confirmed.
 *
 * VISIBILITY & SALES
 *   visible   : false hides a brand or product everywhere.
 *   status    : '' (not shown) | 'available' | 'coming' | 'paused'
 *               Leave '' until the status is confirmed — nothing is displayed.
 *   shopUrl   : SEOUL CHANGO product page. The "View on SEOUL CHANGO ↗" button
 *               appears ONLY when this is filled in. No prices, cart or checkout.
 * ================================================================== */

const BRAND_STATUS_LABEL = {
  available: { ko: '판매 중', en: 'Available', zh: '在售' },
  coming:    { ko: '출시 예정', en: 'Coming soon', zh: '即将上市' },
  paused:    { ko: '판매 일시 중지', en: 'Temporarily unavailable', zh: '暂停销售' }
};

const BRANDS = [
  {
    id: 'haruro',
    visible: true,
    name: { en: 'HARURO', local: { ko: '하루로' } },
    intro: {   // DRAFT
      ko: '매일의 익숙한 순간을 편안한 스킨케어로 채웁니다.',
      en: 'Comfortable skincare for the familiar moments of every day.',
      zh: '以舒适的护肤，充实每天熟悉的时刻。'
    },
    theme: { bg: '#f4ebdc', ink: '#2f2a24', accent: '#d39a1c' },   // cream & beige, logo-dot yellow
    cover: 'assets/brands/haruro/haruro-brand-introduction.webp',   // brand & product introduction poster
    products: [
      { id: 'radiance-repair-cream',    visible: true, name: 'Radiance Repair Cream',    image: 'assets/brands/haruro/radiance-repair-cream.webp',    description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      { id: 'hydra-barrier-cleanser',   visible: true, name: 'Hydra Barrier Cleanser',   image: 'assets/brands/haruro/hydra-barrier-cleanser.webp',   description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      // Toner and toner pad appear together in one image, so they are shown as ONE entry (not split, not repeated).
      { id: 'hydra-infusion-toner',     visible: true, name: 'Hydra Infusion Toner & Toner Pad',     image: 'assets/brands/haruro/hydra-infusion-toner-and-pad.webp', description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      { id: 'hydra-infusion-toner-pad', visible: false, name: 'Hydra Infusion Toner Pad', image: 'assets/brands/haruro/hydra-infusion-toner-and-pad.webp', description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      // Added from the supplied images.
      { id: 'dna-recovery-serum', visible: true, name: 'DNA Recovery Serum', image: 'assets/brands/haruro/dna-recovery-serum.webp', description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' }
    ]
  },
  {
    id: 'donghae-skin',
    visible: true,
    name: { en: 'DONGHAE SKIN', local: { ko: '동해스킨' } },
    intro: {   // DRAFT
      ko: '맑은 바다의 분위기를 담은 수분 스킨케어.',
      en: 'Hydrating skincare inspired by the mood of a clear sea.',
      zh: '蕴含清澈大海氛围的保湿护肤。'
    },
    theme: { bg: '#eaf1fa', ink: '#14306f', accent: '#1d44a6' },   // blue & white (logo royal blue)
    cover: 'assets/brands/donghae-skin/donghae-skin-product-collection.webp',   // product collection poster
    products: [
      { id: 'first-light-serum',    visible: true, name: 'First Light Serum',    image: 'assets/brands/donghae-skin/first-light-serum.webp',    description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      { id: 'calm-current-essence', visible: true, name: 'Calm Current Essence', image: 'assets/brands/donghae-skin/calm-current-essence.webp', description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
            { id: 'silk-tide-cream',      visible: true, name: 'Silk Tide Cream',      image: 'assets/brands/donghae-skin/silk-tide-cream.webp',      description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      // Added from the supplied images.
      { id: 'omega-balance-serum',  visible: true, name: 'Omega Balance Serum', image: 'assets/brands/donghae-skin/omega-balance-serum.webp', description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      { id: 'shore-veil-cream',     visible: true, name: 'Shore Veil Cream',    image: 'assets/brands/donghae-skin/shore-veil-cream.webp',    description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' }
    ]
  },
  {
    id: 'starry-night-garden',
    visible: true,
    name: { en: 'STARRY NIGHT GARDEN', local: { ko: '별밤정원' } },
    intro: {   // DRAFT
      ko: '하루의 끝, 나를 돌보는 밤의 스킨케어.',
      en: 'Night-time skincare for caring for yourself at the end of the day.',
      zh: '一天结束时，呵护自己的夜间护肤。'
    },
    theme: { bg: '#1b2440', ink: '#ffffff', accent: '#f1b9c8', dark: true },   // navy & soft pink
    cover: '',
    products: [
      { id: 'midnight-secret-ampoule', visible: true, name: 'Midnight Secret Ampoule', local: { ko: '자정의 비밀 앰플' }, image: 'assets/brands/starry-night-garden/midnight-secret-ampoule.webp', description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' }
    ]
  },
  {
    id: 'anyu',
    visible: true,
    name: { en: 'ANYU' },
    intro: {   // DRAFT
      ko: '촉촉한 수분과 부드러운 사용감을 위한 스킨케어.',
      en: 'Skincare for moisture and a soft, smooth feel.',
      zh: '带来水润与柔和肤感的护肤。'
    },
    theme: { bg: '#f6f0e6', ink: '#3b2b25', accent: '#7a3128' },   // white, cream, texture · logo burgundy
    cover: '',
    products: [
      { id: 'cell-recovery-essence',  visible: true, name: 'Cell Recovery Essence',  image: 'assets/brands/anyu/cell-recovery-essence.webp',  description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      { id: 'protein-restore-cream',  visible: true, name: 'Protein Restore Cream',  image: 'assets/brands/anyu/protein-restore-cream.webp',  description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      // Added from the supplied images.
      { id: 'cell-recovery-ampoule',          visible: true, name: 'Cell Recovery Ampoule',          image: 'assets/brands/anyu/cell-recovery-ampoule.webp',          description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      { id: 'lift-restore-ampoule',           visible: true, name: 'Lift Restore Ampoule',           image: 'assets/brands/anyu/lift-restore-ampoule.webp',           description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' },
      { id: 'radiance-capsule-sleeping-mask', visible: true, name: 'Radiance Capsule Sleeping Mask', image: 'assets/brands/anyu/radiance-capsule-sleeping-mask.webp', description: { ko: '', en: '', zh: '' }, status: '', shopUrl: '' }
    ]
  }
];
