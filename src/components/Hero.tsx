import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { Mail, Github, Linkedin, Download, ArrowDown, Code2, BookOpen, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/DSC_0384.JPG';
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

function useTypewriter(words: string[], speed = 90, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
          );
        },
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden py-20"
    >
      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        {/* Profile image with animated rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <span className="absolute inset-0 -m-2 rounded-full border border-accent/40 animate-pulse-ring" />
          <span className="absolute inset-0 -m-2 rounded-full border border-accent/30 animate-pulse-ring [animation-delay:1.2s]" />
          <div className="relative h-40 w-40 rounded-full p-[3px] sm:h-48 sm:w-48">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-[hsl(var(--accent-2))] to-accent animate-spin-slow" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background">
              <img
                src={profileImage}
                alt={portfolioData.name}
                className="h-full w-full object-cover"
                data-ai-hint={portfolioData.avatarHint}
              />
            </div>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Open to opportunities
          <span className="mx-1 h-3 w-px bg-border" />
          <MapPin className="h-3.5 w-3.5" /> {portfolioData.location}
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-3 font-headline text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        >
          <span className="text-gradient animate-text-gradient">{portfolioData.name}</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-5 h-9 font-headline text-xl text-muted-foreground sm:text-2xl md:text-3xl"
        >
          <span className="text-foreground">{typed}</span>
          <span className="ml-0.5 inline-block w-[3px] translate-y-1 bg-accent align-middle animate-blink" style={{ height: '1.1em' }} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-9 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          {portfolioData.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="group relative overflow-hidden shadow-lg shadow-accent/20">
            <a href={resumePdf} download>
              <span className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 transition-transform duration-700 group-hover:translate-x-[200%]" />
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent/40 hover:bg-accent/10">
            <a href="#contact">Get in touch</a>
          </Button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-8 flex justify-center gap-2"
        >
          {Object.entries(portfolioData.contact).map(([key, value]) => (
            <motion.a
              key={key}
              href={key === 'email' ? `mailto:${value}` : value}
              target={key === 'email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              {socialIcons[key]}
              <span className="sr-only">{key}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
