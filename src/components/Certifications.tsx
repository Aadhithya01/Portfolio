import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { BadgeCheck } from 'lucide-react';

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <RevealGroup className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {portfolioData.certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.01 }}
              className="gradient-border flex items-center gap-4 rounded-xl border border-border bg-card/60 p-5 backdrop-blur transition-shadow hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <BadgeCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium leading-snug text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {cert.provider} <span className="text-accent">· {cert.year}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
