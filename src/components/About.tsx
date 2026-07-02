import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { Reveal, RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { AnimatedCounter } from '@/components/anim/AnimatedCounter';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Who I am" title="About Me" />

        <Reveal>
          <div className="glass mx-auto max-w-3xl rounded-2xl p-8 text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {portfolioData.about.summary}
            </p>
          </div>
        </Reveal>

        {/* Animated stat band */}
        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {portfolioData.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="gradient-border group rounded-2xl border border-border bg-card/50 p-6 text-center backdrop-blur"
            >
              <div className="font-headline text-4xl font-bold text-gradient animate-text-gradient sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
