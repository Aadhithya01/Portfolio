'use client';
import { About } from '@/components/About';
import { Certifications } from '@/components/Certifications';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Publications } from '@/components/Publications';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Publications />
      </main>
      <Footer />
    </div>
  );
}
