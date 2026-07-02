import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { Reveal, RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { AnimatedCounter } from '@/components/anim/AnimatedCounter';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5">
          {/* Left: summary */}
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Who I am" title="About Me" align="left" />
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {portfolioData.about.summary}
              </p>
            </Reveal>
          </div>

          {/* Right: impact stats */}
          <RevealGroup className="grid grid-cols-2 gap-4 lg:col-span-2">
            {portfolioData.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="gradient-border group rounded-2xl border border-border bg-card/50 p-5 text-center backdrop-blur"
              >
                <div className="font-headline text-3xl font-bold text-gradient animate-text-gradient sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
