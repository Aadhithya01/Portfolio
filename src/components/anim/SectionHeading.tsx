import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-14 flex flex-col items-center text-center">
      {eyebrow && (
        <Reveal>
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-accent font-headline">
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-3xl font-bold font-headline sm:text-4xl md:text-5xl text-gradient animate-text-gradient">
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-accent to-[hsl(var(--accent-2))]" />
      </Reveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-2xl text-muted-foreground">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
