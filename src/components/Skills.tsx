import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { Brain, FlaskConical, Network, Boxes, Code2, Database, Cloud } from 'lucide-react';

const icons = [Brain, FlaskConical, Network, Boxes, Code2, Database, Cloud];

// Flat list for the scrolling marquee.
const marquee = portfolioData.skills.flatMap((s) => s.items);

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & Technologies"
          subtitle="The stack I use to design, build, and ship AI systems end to end."
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((section, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={section.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="gradient-border rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-headline text-lg font-semibold text-foreground">{section.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {section.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.08 }}
                      className="cursor-default rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>

      {/* Infinite marquee */}
      <div className="relative mt-16 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee gap-4 pr-4">
          {[...marquee, ...marquee].map((item, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-border bg-card/40 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
