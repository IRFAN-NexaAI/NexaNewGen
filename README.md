# IRFAN – NEXA NEWGEN

> **ENTER THE FUTURE. EXPLORE THE IMPOSSIBLE.**

Premium futuristic AI universe website. $0 budget — free stack, free hosting.

## Stack (pinned)

| Tech | Version |
| --- | --- |
| Astro | 5.18.2 (NOT Astro 7) |
| React | 19.2.0 |
| TypeScript | 5.9 |
| Tailwind CSS | 4.1.13 |
| GSAP (+ ScrollTrigger) | 3.13 |
| Framer Motion | 11.18.2 |
| Three.js | 0.180 |
| Lucide Icons | 0.545 |

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Pages (15)

`/` · `/about` · `/ai-tools` · `/ai-video` · `/ai-image` · `/ai-music` ·
`/ai-automation` · `/ai-writing` · `/ai-learning` · `/products` ·
`/tutorials` · `/blog` · `/contact` · `/privacy` · `/affiliate-disclosure`

## Key features

- **Cinematic intro** — dark screen → particle → portal → brand, `ENTER THE UNIVERSE` / `SKIP INTRO`, `sessionStorage` so it never repeats in a session.
- **Living background** — canvas starfield + nebula + particles, scroll parallax (reverses on scroll-up), per-section themes, `prefers-reduced-motion` respected, pauses when the tab is hidden.
- **Background modes** — HIGH (full canvas + WebGL portal) / BALANCED (reduced particles) / LOW (CSS only, no WebGL). Auto-chosen by device capability (`hardwareConcurrency`, `deviceMemory`, screen size, `prefers-reduced-motion`) — LOW is the default for low-powered Android (e.g. Infinix Hot 10).
- **Portal navigation** — 10 portals, each with its own colour; click expands with rings/particles, then navigates.
- **AI Tools directory** — search + category + free/paid filters + sorting. No invented prices, features or affiliate partnerships. Affiliate links are placeholders (`#`) until real URLs are provided.
- **Products** — placeholder affiliate links only (`#`), no fake prices, affiliate disclosure on-page.
- **SEO** — unique title/description per page, canonical, Open Graph, Twitter cards, `sitemap.xml`, `robots.txt`, breadcrumb + Organization JSON-LD. GA/GSC: placeholder only, no keys or tracking IDs.

## Google account (future GSC/GA4)

**irfangd.1st@gmail.com** — never use `nexa.1st@gmail.com` (permanently disabled).

## Deploy (NOT done — needs approval)

1. Create empty GitHub repo `IRFAN-NexaNewGen` (note: the Muse GitHub App returned 403 on repo creation on 2026-11-08, so the repo may need to be created manually and the App granted access).
2. Push this folder, connect Cloudflare Pages (free) to the repo, project name `irfan-nexanewgen` → `https://irfan-nexanewgen.pages.dev`.
3. Verify in Google Search Console from a phone, using `irfangd.1st@gmail.com`, via the HTML-file method.

## Do not touch

`~/workspace/nexa-ultra-hybrid/` (live NEXA site, nexa1st.pages.dev) and
`~/workspace/nexa-link-cloudflare/` (link hub, nexa-1st.pages.dev) are separate projects and must never be modified by this one.
