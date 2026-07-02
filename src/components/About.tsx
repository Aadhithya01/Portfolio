import { m } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { Reveal, RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { AnimatedCounter } from '@/components/anim/AnimatedCounter';

export function About() {
  return (
    <section id="about" className="scroll-mt-24">
      <SectionHeading eyebrow="Who I am" title="About Me" />

      <Reveal>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {portfolioData.about.summary}
        </p>
      </Reveal>

      {/* Impact stats */}
      <RevealGroup className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {portfolioData.stats.map((stat) => (
          <m.div
            key={stat.label}
            variants={staggerItem}
            whileHover={{ y: -5 }}
            className="gradient-border rounded-xl border border-border bg-card/50 p-4 text-center backdrop-blur"
          >
            <div className="font-headline text-2xl font-bold text-gradient animate-text-gradient sm:text-3xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">{stat.label}</p>
          </m.div>
        ))}
      </RevealGroup>
    </section>
  );
}
