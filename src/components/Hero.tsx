import Image from 'next/image';
import { portfolioData } from '@/data/portfolio-data';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const socialIcons: { [key: string]: React.ReactNode } = {
    email: <Mail />,
    github: <Github />,
    linkedin: <Linkedin />,
  };

  return (
    <section id="home" className="flex items-center py-12 text-center relative overflow-hidden group">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-background via-accent/10 to-background bg-[size:200%_200%] animate-background-pan -z-10"></div>
      <div className="container mx-auto flex flex-col items-center px-4">
        <Image
            src={portfolioData.avatarUrl}
            alt={portfolioData.name}
            width={128}
            height={128}
            className="rounded-full mx-auto mb-6 border-2 border-primary"
            data-ai-hint={portfolioData.avatarHint}
        />
        <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[200%_auto] text-transparent bg-clip-text">
          {portfolioData.name}
        </h1>
        <p className="mb-6 text-lg text-muted-foreground sm:text-xl md:text-2xl font-headline transition-colors duration-300 group-hover:text-accent">
          {portfolioData.role}
        </p>
        
        <Button asChild size="lg" className="mb-8">
            <a href={portfolioData.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
            </a>
        </Button>
        
        <div className="flex justify-center gap-4">
          {Object.entries(portfolioData.contact).map(([key, value]) => (
            <Button asChild variant="ghost" size="icon" key={key}>
              <a href={key === 'email' ? `mailto:${value}` : value} target="_blank" rel="noopener noreferrer">
                {socialIcons[key]}
                <span className="sr-only">{key}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
