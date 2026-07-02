import { useEffect, useRef } from 'react';

/**
 * Soft radial glow that follows the pointer (fine-pointer devices only).
 * Written directly to the DOM via rAF so it never triggers React renders.
 */
export function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;

    const paint = () => {
      el.style.background = `radial-gradient(600px at ${x}px ${y}px, hsl(var(--accent) / 0.07), transparent 80%)`;
      raf = 0;
    };
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="pointer-events-none fixed inset-0 z-30 hidden lg:block" />;
}
