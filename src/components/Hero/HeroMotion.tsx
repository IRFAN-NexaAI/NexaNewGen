import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// GSAP entrance for the hero headline. Client-only island; static content stays visible without JS.
export default function HeroMotion() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { if (ref.current && !matchMedia('(prefers-reduced-motion: reduce)').matches) gsap.from(ref.current.children, { y: 24, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' }); }, []);
  return <div ref={ref} className="contents" aria-hidden="true" />;
}
