import Image from 'next/image';
import { portfolioData } from '@/data/portfolio-data';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const socialIcons: { [key: string]: React.ReactNode } = {
    email: <Mail />,
    github: <Github />,
    linkedin: <Linkedin />,
  };

  return (
    <section id="home" className="flex items-center py-20 text-center">
      <div className="container mx-auto px-4">
        <Image
            src={portfolioData.avatarUrl}
            alt={portfolioData.name}
            width={128}
            height={128}
            className="rounded-full mx-auto mb-6 border-2 border-primary"
            data-ai-hint={portfolioData.avatarHint}
        />
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          {portfolioData.name}
        </h1>
        <p className="mb-6 text-lg text-muted-foreground sm:text-xl md:text-2xl font-headline">
          {portfolioData.role}
        </p>
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
