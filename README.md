# TitleIQ & Consultancy website

Production Astro website converted from the approved Claude prototype. The browser output contains no React, Babel, UI framework or CSS framework.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The production output is `dist/`. To test the Pages Function locally, build and run `npm run cf:dev`. Put local enquiry values in `.dev.vars`; never commit that file.

## Cloudflare Pages

Connect this GitHub repository in **Workers & Pages → Create application → Pages**.

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Production branch: `main`
- Node.js: current LTS

Under **Settings → Variables and Secrets**, add these to Production and Preview:

- `SITE_URL`: `https://titleiq.nz`
- `ENQUIRY_TO_EMAIL`: `amy@titleiq.co.nz`
- `ENQUIRY_FROM_EMAIL`: a sender verified with Resend
- `EMAIL_API_KEY`: the Resend API key, encrypted as a secret
- `EMAIL_API_URL`: optional; defaults to `https://api.resend.com/emails`

The form posts to `/api/enquiry`. The Function validates required fields, rejects the honeypot, applies a basic per-IP cooldown using Cloudflare Cache, sends through Resend, and does not log personal data.

## GitHub

```bash
git init
git add .
git commit -m "TitleIQ website - initial Astro build"
git branch -M main
git remote add origin <REPOSITORY_URL>
git push -u origin main
```

## Before launch

- Verify the Resend sender domain and all environment values.
- Add `titleiq.nz` as the custom domain and redirect `www.titleiq.nz` to the apex.
- Supply a final branded 1200 × 630 social image.
- Obtain legal review of the Privacy Policy.
- Replace the Terms of Engagement placeholder with the approved document.
- Confirm whether analytics will be used; none are installed.
- Complete an end-to-end production enquiry test.
