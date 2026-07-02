import { m } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Briefcase, MapPin, CalendarDays, Sparkles } from 'lucide-react';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="scroll-mt-24">
      <SectionHeading eyebrow="Career" title="Work Experience" />

      <div className="space-y-6">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <div className="gradient-border rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-accent/10 sm:p-6">
              <div className="mb-5 flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-semibold text-foreground sm:text-xl">
                    {job.role}
                  </h3>
                  <p className="text-sm text-accent sm:text-base">{job.company}</p>
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

              {/* Highlights side by side */}
              <div className="grid items-start gap-3 sm:grid-cols-2">
                {job.highlights.map((h, i) => (
                  <m.div
                    key={h.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="h-full rounded-xl border border-border/60 bg-secondary/40 p-4 transition-colors hover:border-accent/40"
                  >
                    <h4 className="mb-2 flex items-start gap-2 text-sm font-semibold text-foreground">
                      <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {h.title}
                    </h4>
                    <ul className="space-y-1.5 pl-6 text-[13px] leading-relaxed text-muted-foreground">
                      {h.points.map((p, j) => (
                        <li key={j} className="relative">
                          <span className="absolute -left-4 top-2 h-1.5 w-1.5 rounded-full bg-accent/60" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </m.div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
