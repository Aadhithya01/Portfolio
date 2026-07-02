import { m } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects"
        subtitle="Production systems and experiments across LLM applications, agents, and ML pipelines."
      />

      <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <m.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="gradient-border group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-shadow hover:shadow-2xl hover:shadow-accent/10"
          >
            {/* Hover spotlight */}
            <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

            <div className="mb-3 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <FolderGit2 className="h-5 w-5" />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </div>

            <h3 className="mb-2 font-headline text-base font-semibold text-foreground transition-colors group-hover:text-accent sm:text-lg">
              {project.title}
            </h3>
            <p className="mb-4 flex-grow text-[13px] leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-accent/30 bg-accent/5 text-[11px] text-foreground/80"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </m.a>
        ))}
      </RevealGroup>
    </section>
  );
}
