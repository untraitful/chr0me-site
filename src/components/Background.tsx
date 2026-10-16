import { useEffect, useRef } from 'react';

const NOISE =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

/** Drifting metal haze, a panning grid, film grain and a spotlight that follows the pointer. */
export default function Background() {
  const spot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spot.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${e.clientX}px`);
        el.style.setProperty('--my', `${e.clientY}px`);
        el.style.opacity = '1';
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
      <div
        className="absolute -left-[20vw] -top-[25vh] h-[70vh] w-[70vw] rounded-full bg-[radial-gradient(closest-side,rgba(210,210,220,0.13),transparent)] blur-2xl"
        style={{ animation: 'drift-a 22s ease-in-out infinite' }}
      />
      <div
        className="absolute -bottom-[30vh] -right-[15vw] h-[75vh] w-[65vw] rounded-full bg-[radial-gradient(closest-side,rgba(150,150,160,0.12),transparent)] blur-2xl"
        style={{ animation: 'drift-b 28s ease-in-out infinite' }}
      />
      <div
        className="absolute inset-0 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          animation: 'grid-pan 12s linear infinite',
        }}
      />
      <div
        ref={spot}
        className="absolute inset-0 opacity-0 transition-opacity duration-700"
        style={{ background: 'radial-gradient(500px circle at var(--mx, 50%) var(--my, 50%), rgba(235,235,240,0.07), transparent 60%)' }}
      />
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: NOISE }} />
    </div>
  );
}
