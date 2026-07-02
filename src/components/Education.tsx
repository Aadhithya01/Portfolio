import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { GraduationCap, Trophy } from 'lucide-react';

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="relative py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Background" title="Education" />

        <div className="mx-auto max-w-4xl space-y-6">
          {education.map((edu) => (
            <Reveal key={edu.degree}>
              <div className="gradient-border rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-shadow hover:shadow-xl hover:shadow-accent/10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h3 className="font-headline text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-accent">{edu.institution}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{edu.score}</p>
                    {edu.honor && (
                      <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--accent-2))]/30 bg-[hsl(var(--accent-2))]/10 px-3 py-1.5 text-sm font-medium text-foreground">
                        <Trophy className="h-4 w-4 text-[hsl(var(--accent-2))]" />
                        {edu.honor}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
