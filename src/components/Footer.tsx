import { portfolioData } from '@/data/portfolio-data';
import { Mail, Github, Linkedin, Code2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
  { href: `mailto:${portfolioData.contact.email}`, icon: Mail, label: 'Email' },
  { href: portfolioData.contact.github, icon: Github, label: 'GitHub' },
  { href: portfolioData.contact.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: portfolioData.contact.leetcode, icon: Code2, label: 'LeetCode' },
  { href: portfolioData.contact.medium, icon: BookOpen, label: 'Medium' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-10 text-center">
        <a href="#home" className="font-headline text-2xl font-bold text-gradient animate-text-gradient">
          {portfolioData.name}
        </a>
        <div className="flex gap-2">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
              aria-label={s.label}
            >
              <s.icon className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {currentYear} {portfolioData.name}. Built with React, Tailwind &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
