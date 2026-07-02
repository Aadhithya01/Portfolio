/**
 * Fixed, full-page ambient background: morphing aurora blobs, a faint grid,
 * and a field of twinkling particles. Pure CSS animation so it stays cheap.
 */

// Deterministic particle field — no re-render, no randomness on hydrate.
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  top: `${(i * 53 + 11) % 97}%`,
  left: `${(i * 37 + 7) % 95}%`,
  size: 2 + (i % 3),
  delay: `${(i % 7) * 0.6}s`,
  duration: `${3 + (i % 5)}s`,
  color: i % 3 === 0 ? 'hsl(var(--accent-2))' : 'hsl(var(--accent))',
}));

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Morphing aurora blobs */}
      <div className="absolute -top-48 -left-36 h-[34rem] w-[34rem] bg-accent/15 blur-3xl animate-float-slow [animation-delay:0s] animate-blob-morph" />
      <div className="absolute top-1/3 -right-44 h-[30rem] w-[30rem] bg-[hsl(var(--accent-2))]/15 blur-3xl animate-float-slow [animation-delay:-6s] animate-blob-morph" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] bg-accent/10 blur-3xl animate-float-slow [animation-delay:-12s] animate-blob-morph" />

      {/* Twinkling particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
