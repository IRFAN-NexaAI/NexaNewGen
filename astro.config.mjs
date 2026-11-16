// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// IRFAN – NEXA NEWGEN — Astro 5 (pinned, NOT Astro 7) + React 19 + Tailwind 4
// Site URL is the proposed Cloudflare Pages address. No deploy has been done;
// change `site` only when the real Pages project name is confirmed at deploy time.
export default defineConfig({
  site: 'https://irfan-nexanewgen.pages.dev',
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
