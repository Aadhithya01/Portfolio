import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Credentials } from '@/components/Credentials';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Sidebar } from '@/components/layout/Sidebar';
import { MobileBar } from '@/components/layout/MobileBar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { MotionProvider } from '@/components/anim/MotionProvider';
import { AnimatedBackground } from '@/components/anim/AnimatedBackground';
import { SpotlightCursor } from '@/components/anim/SpotlightCursor';
import { ScrollProgress } from '@/components/anim/ScrollProgress';
import { BackToTop } from '@/components/anim/BackToTop';
import { useActiveSection } from '@/hooks/use-active-section';
import { portfolioData } from '@/data/portfolio-data';

const SECTION_IDS = ['about', 'experience', 'projects', 'skills', 'credentials', 'contact'];

export default function App() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <MotionProvider>
        <AnimatedBackground />
        <SpotlightCursor />
        <ScrollProgress />
        <MobileBar />

        <div className="container mx-auto max-w-7xl px-6 font-body antialiased md:px-10 lg:flex lg:gap-14 xl:gap-20">
          <Sidebar active={active} />

          <main className="w-full pb-20 pt-14 lg:w-[58%] lg:py-24">
            <div className="space-y-24 lg:space-y-28">
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Credentials />
              <Contact />
            </div>

            <footer className="mt-20 flex flex-col items-center gap-2 border-t border-border/60 pt-8 text-center text-xs text-muted-foreground lg:flex-row lg:justify-between lg:text-left">
              <p>
                © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
              </p>
              <p>Built with React, Tailwind &amp; Framer Motion.</p>
            </footer>
          </main>
        </div>

        {/* Desktop theme toggle — floats bottom-left; mobile has it in the top bar */}
        <div className="fixed bottom-6 left-6 z-50 hidden lg:block">
          <div className="rounded-full border border-border bg-card/70 backdrop-blur">
            <ThemeToggle />
          </div>
        </div>

        <BackToTop />
        <Toaster />
      </MotionProvider>
    </ThemeProvider>
  );
}
