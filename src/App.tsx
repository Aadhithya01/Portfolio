import { About } from '@/components/About';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Publications } from '@/components/Publications';
import { Skills } from '@/components/Skills';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { AnimatedBackground } from '@/components/anim/AnimatedBackground';
import { ScrollProgress } from '@/components/anim/ScrollProgress';
import { BackToTop } from '@/components/anim/BackToTop';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatedBackground />
      <ScrollProgress />
      <div className="flex min-h-screen flex-col font-body antialiased">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Publications />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}
