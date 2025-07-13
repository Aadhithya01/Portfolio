import { portfolioData } from '@/data/portfolio-data';

export function About() {
  return (
    <section id="about" className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-headline text-primary mb-8 text-center">
          About Me
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-justify">
          {portfolioData.about.summary}
        </p>
      </div>
    </section>
  );
}
