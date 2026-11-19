# SEOUL110 website

Static site (HTML · CSS · vanilla JS). No build step and no dependencies.

```
dist/                 ← the website (deployed)
  index.html
  style.css
  app.js              ← all copy (KO · EN · 中文), pages and routing
  assets/             ← logo and images
  IMAGE-ASSETS.md     ← images to replace before launch
design-reference/     ← approved mockup (not deployed)
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

## Before launch

Fill in `CONFIG` at the top of `dist/app.js`:

- `CONTACT_EMAIL`: company email for the partnership inquiry form
- `SHOP_URL`: Seoul Chango shop address

Pages use hash links (`#about`, `#cosmetics`, `#journal-schedule` …), so no server rewrites are needed.
