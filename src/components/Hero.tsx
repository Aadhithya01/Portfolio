import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { Mail, Github, Linkedin, Download, ArrowDown, Code2, BookOpen, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

// Chips that float around the portrait.
const floatChips = [
  { label: 'LangChain', className: 'left-[-8%] top-[18%]', delay: 0 },
  { label: 'MCP', className: 'right-[-6%] top-[10%]', delay: 0.4 },
  { label: 'RAG', className: 'left-[-4%] bottom-[24%]', delay: 0.8 },
  { label: 'FastAPI', className: 'right-[-10%] bottom-[16%]', delay: 1.2 },
  { label: 'AWS', className: 'right-[6%] top-[-6%]', delay: 1.6 },
];

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
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-12 lg:gap-8">
        {/* Left: intro */}
        <div className="order-2 text-center lg:order-1 lg:col-span-7 lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to opportunities
            <span className="mx-1 h-3 w-px bg-border" />
            <MapPin className="h-3.5 w-3.5" /> {portfolioData.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-headline text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl"
          >
            Hi, I'm <span className="text-gradient animate-text-gradient">{portfolioData.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 h-9 font-headline text-xl text-muted-foreground sm:text-2xl md:text-3xl"
          >
            <span className="text-foreground">{typed}</span>
            <span className="ml-0.5 inline-block w-[3px] translate-y-1 bg-accent align-middle animate-blink" style={{ height: '1.1em' }} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0"
          >
            {portfolioData.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex justify-center gap-2 lg:justify-start"
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

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2 lg:col-span-5"
        >
          <div className="relative">
            {/* glow */}
            <div className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-tr from-accent/40 to-[hsl(var(--accent-2))]/40 blur-2xl" />

            <div className="relative w-64 rounded-[2rem] p-[3px] sm:w-72 md:w-80">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-accent via-[hsl(var(--accent-2))] to-accent animate-spin-slow" />
              <div className="relative aspect-square overflow-hidden rounded-[2rem] border-4 border-background">
                <img
                  src={profileImage}
                  alt={portfolioData.name}
                  className="h-full w-full object-cover"
                  data-ai-hint={portfolioData.avatarHint}
                />
              </div>
            </div>

            {/* floating tech chips */}
            {floatChips.map((chip) => (
              <motion.span
                key={chip.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + chip.delay * 0.15 }}
                className={`absolute ${chip.className} animate-float rounded-full border border-accent/30 bg-card/80 px-3 py-1 text-xs font-medium text-foreground shadow-lg backdrop-blur`}
                style={{ animationDelay: `${chip.delay}s` }}
              >
                {chip.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
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
