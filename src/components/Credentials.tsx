import { m } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { GraduationCap, Trophy, BadgeCheck, PenLine, ArrowUpRight } from 'lucide-react';

function SubHeading({ icon: Icon, label }: { icon: typeof GraduationCap; label: string }) {
  return (
    <div className="mb-3 flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="font-headline text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
        {label}
      </h3>
    </div>
  );
}

/** Education, Certifications and Publications combined into one side-by-side block. */
export function Credentials() {
  const { education, certifications, publications } = portfolioData;

  return (
    <section id="credentials" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Background"
        title="Education & Credentials"
        subtitle="Where I studied, what I'm certified in, and what I write about."
      />

      <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Left column: Certifications */}
        <m.div
          variants={staggerItem}
          className="gradient-border rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
        >
          <SubHeading icon={BadgeCheck} label="Certifications" />
          <ul className="space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert.title}
                className="group flex items-start gap-3 rounded-lg border border-border/60 bg-secondary/40 p-3 transition-colors hover:border-accent/40"
              >
                <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-medium leading-snug text-foreground">{cert.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {cert.provider} <span className="text-accent">· {cert.year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </m.div>

        {/* Right column: Education + Publications */}
        <div className="flex flex-col gap-4">
          <m.div
            variants={staggerItem}
            className="gradient-border rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
          >
            <SubHeading icon={GraduationCap} label="Education" />
            {education.map((edu) => (
              <div key={edu.degree}>
                <p className="text-sm font-semibold leading-snug text-foreground">{edu.degree}</p>
                <p className="text-sm text-accent">{edu.institution}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {edu.duration} · {edu.score}
                </p>
                {edu.honor && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[hsl(var(--accent-2))]/30 bg-[hsl(var(--accent-2))]/10 px-3 py-1.5 text-xs font-medium text-foreground">
                    <Trophy className="h-3.5 w-3.5 text-[hsl(var(--accent-2))]" />
                    {edu.honor}
                  </div>
                )}
              </div>
            ))}
          </m.div>

          <m.div
            variants={staggerItem}
            className="gradient-border flex-grow rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
          >
            <SubHeading icon={PenLine} label="Publications" />
            <ul className="space-y-3">
              {publications.map((pub) => (
                <li key={pub.title}>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-lg border border-border/60 bg-secondary/40 p-3 transition-colors hover:border-accent/40"
                  >
                    <PenLine className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div className="flex-grow">
                      <p className="text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                        {pub.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{pub.source}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </m.div>
        </div>
      </RevealGroup>
    </section>
  );
}
