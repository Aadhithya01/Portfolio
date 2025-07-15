import { About } from '@/components/About';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Leadership } from '@/components/Leadership';
import { Projects } from '@/components/Projects';
import { Publications } from '@/components/Publications';
import { Skills } from '@/components/Skills';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="flex min-h-screen flex-col bg-background font-body antialiased">
            <Header />
            <main className="flex-grow">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Education />
                <Certifications />
                <Leadership />
                <Publications />
                <Contact />
            </main>
            <Footer />
            <Toaster />
        </div>
    </ThemeProvider>
  );
}
