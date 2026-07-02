import { m } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { useTypewriter } from '@/hooks/use-typewriter';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Download, Code2, BookOpen, MapPin } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';
import resumePdf from '@/assets/Aadhithya_Resume.pdf';

const ROLES = [
  'AI Engineer',
  'LLM Application Developer',
  'MCP & Agent Builder',
  'ML Pipeline Engineer',
];

const socialIcons: Record<string, React.ReactNode> = {
  email: <Mail className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  leetcode: <Code2 className="h-5 w-5" />,
  medium: <BookOpen className="h-5 w-5" />,
};

interface SidebarProps {
  active: string;
}

export function Sidebar({ active }: SidebarProps) {
  const typed = useTypewriter(ROLES);

  return (
    <aside className="flex flex-col items-center gap-8 pt-24 text-center lg:sticky lg:top-0 lg:h-screen lg:w-[42%] lg:shrink-0 lg:items-start lg:justify-between lg:py-24 lg:text-left">
      <m.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center lg:items-start"
      >
        {/* Portrait */}
        <div className="relative mb-6">
          <div className="absolute inset-0 -m-3 bg-gradient-to-tr from-accent/40 to-[hsl(var(--accent-2))]/40 blur-xl animate-blob-morph" />
          <div className="relative h-28 w-28 rounded-2xl p-[2px] sm:h-32 sm:w-32">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-accent via-[hsl(var(--accent-2))] to-accent animate-spin-slow" />
            <img
              src={profileImage}
              alt={portfolioData.name}
              className="relative h-full w-full rounded-2xl border-2 border-background object-cover"
            />
          </div>
        </div>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1 text-xs text-muted-foreground backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to opportunities
          <span className="mx-0.5 h-3 w-px bg-border" />
          <MapPin className="h-3 w-3" /> {portfolioData.location}
        </span>

        <h1
          aria-label={portfolioData.name}
          className="font-headline text-4xl font-bold tracking-tight sm:text-5xl"
        >
          {portfolioData.name.split('').map((ch, i) => (
            <m.span
              key={i}
              aria-hidden
              initial={{ opacity: 0, y: 24, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.15 + i * 0.045, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block text-gradient animate-text-gradient"
            >
              {ch === ' ' ? ' ' : ch}
            </m.span>
          ))}
        </h1>

        <p className="mt-3 h-7 font-headline text-lg text-foreground sm:text-xl">
          {typed}
          <span
            className="ml-0.5 inline-block w-[2px] translate-y-0.5 bg-accent align-middle animate-blink"
            style={{ height: '1.05em' }}
          />
        </p>

        <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
          {portfolioData.tagline}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
          <Button asChild className="group relative overflow-hidden shadow-lg shadow-accent/20">
            <a href={resumePdf} download>
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-white/20 transition-transform duration-700 group-hover:translate-x-[200%]" />
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>
          <Button asChild variant="outline" className="border-accent/40 hover:bg-accent/10">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </m.div>

      {/* Section nav — desktop only */}
      <m.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="hidden lg:block"
        aria-label="Section navigation"
      >
        <ul className="space-y-1">
          {portfolioData.navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.name}>
                <a href={link.href} className="group flex items-center gap-4 py-2.5">
                  <span
                    className={`h-px transition-all duration-300 ${
                      isActive
                        ? 'w-16 bg-accent'
                        : 'w-8 bg-muted-foreground/40 group-hover:w-16 group-hover:bg-foreground'
                    }`}
                  />
                  <span
                    className={`font-headline text-xs font-semibold uppercase tracking-[0.25em] transition-colors ${
                      isActive
                        ? 'text-accent'
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`}
                  >
                    {link.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </m.nav>

      {/* Socials */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-2"
      >
        {Object.entries(portfolioData.contact).map(([key, value]) => (
          <m.a
            key={key}
            href={key === 'email' ? `mailto:${value}` : value}
            target={key === 'email' ? undefined : '_blank'}
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
          >
            {socialIcons[key]}
            <span className="sr-only">{key}</span>
          </m.a>
        ))}
      </m.div>
    </aside>
  );
}
