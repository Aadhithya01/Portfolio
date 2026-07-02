/**
 * Fixed, full-page ambient background: drifting aurora blobs + a faint grid.
 * Pure CSS animation so it stays cheap and runs behind everything.
 */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-60" />

      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-[hsl(var(--accent-2))]/20 blur-3xl animate-float-slow [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl animate-float-slow [animation-delay:-12s]" />
    </div>
  );
}
