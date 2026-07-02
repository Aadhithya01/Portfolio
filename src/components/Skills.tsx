import { m } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { Brain, FlaskConical, Network, Boxes, Code2, Database, Cloud } from 'lucide-react';

const icons = [Brain, FlaskConical, Network, Boxes, Code2, Database, Cloud];

// Flat list for the scrolling marquee.
const marquee = portfolioData.skills.flatMap((s) => s.items);

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & Technologies"
        subtitle="The stack I use to design, build, and ship AI systems end to end."
      />

      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {portfolioData.skills.map((section, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <m.div
              key={section.title}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="gradient-border rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-headline text-base font-semibold text-foreground">
                  {section.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs text-foreground/80 transition-all hover:scale-105 hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </m.div>
          );
        })}
      </RevealGroup>

      {/* Dual-direction infinite marquee */}
      <div className="mt-8 space-y-3">
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee gap-3 pr-3">
            {[...marquee, ...marquee].map((item, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex shrink-0 animate-marquee-reverse gap-3 pr-3">
            {[...marquee.slice().reverse(), ...marquee.slice().reverse()].map((item, i) => (
              <span
                key={i}
                className="whitespace-nowrap rounded-full border border-accent/25 bg-accent/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
