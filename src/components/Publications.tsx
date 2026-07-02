import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { PenLine, ArrowUpRight } from 'lucide-react';

export function Publications() {
  const { publications } = portfolioData;

  if (!publications || publications.length === 0) return null;

  return (
    <section id="publications" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Writing" title="Publications" />

        <RevealGroup className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {publications.map((pub) => (
            <motion.a
              key={pub.title}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="gradient-border group flex items-start gap-4 rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-shadow hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <PenLine className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <h3 className="font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground">{pub.source}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </motion.a>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
