'use client';
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
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Separator className="my-4 md:my-8" />
        <About />
        <Separator className="my-4 md:my-8" />
        <Experience />
        <Separator className="my-4 md:my-8" />
        <Projects />
        <Separator className="my-4 md:my-8" />
        <Skills />
        <Separator className="my-4 md:my-8" />
        <Education />
        <Separator className="my-4 md:my-8" />
        <Certifications />
        <Separator className="my-4 md:my-8" />
        <Leadership />
        <Separator className="my-4 md:my-8" />
        <Publications />
        <Separator className="my-4 md:my-8" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
