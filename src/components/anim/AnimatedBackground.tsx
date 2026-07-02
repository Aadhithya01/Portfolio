/**
 * Fixed, full-page ambient background: drifting aurora blobs + a faint grid.
 * Pure CSS animation so it stays cheap and runs behind everything.
 */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="absolute -top-48 -left-36 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-44 h-[30rem] w-[30rem] rounded-full bg-[hsl(var(--accent-2))]/10 blur-3xl animate-float-slow [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-accent/[0.07] blur-3xl animate-float-slow [animation-delay:-12s]" />
    </div>
  );
}
