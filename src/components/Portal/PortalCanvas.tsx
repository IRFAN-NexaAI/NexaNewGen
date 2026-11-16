import { useEffect, useRef } from 'react';
// Three.js portal: lazy-loaded on the client only (never during SSR/build).
// LOW mode: this island is not rendered at all — see the home page.
export default function PortalCanvas() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false; let raf = 0; let renderer: any; let scene: any; let camera: any;
    (async () => {
      const THREE = await import('three');
      if (cancelled || !ref.current) return;
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100); camera.position.z = 4;
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
      renderer.setSize(280, 280); ref.current.appendChild(renderer.domElement);
      const geo = new THREE.TorusGeometry(1.2, 0.08, 12, 64);
      const mat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true });
      const ring = new THREE.Mesh(geo, mat); scene.add(ring);
      const tick = () => { ring.rotation.x += 0.008; ring.rotation.y += 0.012; renderer.render(scene, camera); raf = requestAnimationFrame(tick); };
      tick();
    })();
    return () => { cancelled = true; cancelAnimationFrame(raf); renderer?.dispose(); };
  }, []);
  return <div ref={ref} className="mx-auto h-[280px] w-[280px]" aria-label="Rotating 3D portal ring" />;
}
