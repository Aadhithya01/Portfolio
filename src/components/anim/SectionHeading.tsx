import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

/** Left-aligned heading sized for the scrolling content column. */
export function SectionHeading({ eyebrow, title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-8 flex flex-col items-start ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1 font-headline text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-headline text-2xl font-bold sm:text-3xl">
          <span className="text-gradient animate-text-gradient">{title}</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-accent to-[hsl(var(--accent-2))]" />
      </Reveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
