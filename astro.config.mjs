// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// IRFAN – NEXA NEWGEN — Astro 5 (pinned, NOT Astro 7) + React 19 + Tailwind 4
// GitHub Pages build (PAGES_BUILD=1): site served from /NexaNewGen/ subpath.
// Cloudflare Pages build (default): site served from the domain root.
const isPages = process.env.PAGES_BUILD === '1';
export default defineConfig({
  site: isPages ? 'https://irfan-nexaai.github.io' : 'https://irfan-nexaai.pages.dev',
  base: isPages ? '/NexaNewGen' : '/',
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
