import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isLeft = align === 'left';
  return (
    <div
      className={`mb-10 flex flex-col ${
        isLeft ? 'items-start text-left' : 'items-center text-center'
      } ${className}`}
    >
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
        <div
          className={`mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-accent to-[hsl(var(--accent-2))] ${
            isLeft ? '' : 'mx-auto'
          }`}
        />
      </Reveal>
      {subtitle && (
        <Reveal delay={0.15}>
          <p className={`mt-4 max-w-2xl text-muted-foreground ${isLeft ? '' : 'mx-auto'}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
