import React from 'react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio-data';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  const { name, role, contact, resumeUrl } = portfolioData;

  const socialIcons: { [key: string]: React.ReactNode } = {
    email: <Mail />,
    github: <Github />,
    linkedin: <Linkedin />,
  };

  return (
    <section id="home" className="flex min-h-[calc(100vh-4rem)] items-center py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          {name}
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl font-headline">
          {role}
        </p>
        <div className="flex justify-center gap-4 mb-8">
          {Object.entries(contact).map(([key, value]) => (
            <Button asChild variant="ghost" size="icon" key={key}>
              <a href={key === 'email' ? `mailto:${value}` : value} target="_blank" rel="noopener noreferrer">
                {socialIcons[key]}
                <span className="sr-only">{key}</span>
              </a>
            </Button>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild size="lg">
            <a href={resumeUrl} download>
              <Download className="mr-2" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
