import { portfolioData } from '@/data/portfolio-data';

export function About() {
  return (
    <section id="about" className="space-y-6">
      <h2 className="text-3xl font-bold font-headline text-primary">
        About Me
      </h2>
      <p className="text-lg text-muted-foreground leading-relaxed">
        {portfolioData.about.summary}
      </p>
    </section>
  );
}
