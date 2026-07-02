import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Briefcase, MapPin, CalendarDays, Sparkles } from 'lucide-react';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Career" title="Work Experience" />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline spine */}
          <div className="absolute left-4 top-2 h-full w-px bg-border" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-accent to-[hsl(var(--accent-2))]"
          />

          {experience.map((job) => (
            <div key={job.company} className="relative pl-12">
              {/* Node */}
              <span className="absolute left-4 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-accent/40" />
                <span className="h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              </span>

              <Reveal>
                <div className="gradient-border rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-accent/10">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-semibold text-foreground">{job.role}</h3>
                      <p className="text-accent">{job.company}</p>
                      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" /> {job.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {job.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {job.highlights.map((h, i) => (
                      <motion.div
                        key={h.title}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="rounded-xl border border-border/60 bg-secondary/40 p-4"
                      >
                        <h4 className="mb-2 flex items-start gap-2 font-medium text-foreground">
                          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {h.title}
                        </h4>
                        <ul className="space-y-1.5 pl-6 text-sm text-muted-foreground">
                          {h.points.map((p, j) => (
                            <li key={j} className="relative">
                              <span className="absolute -left-4 top-2 h-1.5 w-1.5 rounded-full bg-accent/60" />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
