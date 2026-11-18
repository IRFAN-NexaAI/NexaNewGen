const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export interface NavItem { label: string; href: string; color: string; blurb: string }
export const portals: NavItem[] = [
  { label: 'AI Tools', href: `${base}ai-tools`, color: '#22d3ee', blurb: 'The directory of AI tools' },
  { label: 'AI Video', href: `${base}ai-video`, color: '#a78bfa', blurb: 'Cinematic AI video tools' },
  { label: 'AI Image', href: `${base}ai-image`, color: '#f472b6', blurb: 'Colourful image universes' },
  { label: 'AI Music', href: `${base}ai-music`, color: '#34d399', blurb: 'Sound-wave worlds' },
  { label: 'AI Automation', href: `${base}ai-automation`, color: '#60a5fa', blurb: 'Cybernetic workflows' },
  { label: 'AI Writing', href: `${base}ai-writing`, color: '#facc15', blurb: 'Words, faster' },
  { label: 'AI Learning', href: `${base}ai-learning`, color: '#38bdf8', blurb: 'The knowledge galaxy' },
  { label: 'Affiliate Products', href: `${base}products`, color: '#e879f9', blurb: 'Recommended gear' },
  { label: 'Tutorials', href: `${base}tutorials`, color: '#fb923c', blurb: 'Learn step by step' },
  { label: 'Blog & News', href: `${base}blog`, color: '#c084fc', blurb: 'News from the universe' },
];
export const navLinks = [
  { label: 'Home', href: base }, { label: 'About', href: `${base}about` },
  { label: 'AI Tools', href: `${base}ai-tools` }, { label: 'Products', href: `${base}products` },
  { label: 'Tutorials', href: `${base}tutorials` }, { label: 'Blog', href: `${base}blog` },
  { label: 'Contact', href: `${base}contact` },
];
