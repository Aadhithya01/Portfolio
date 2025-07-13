import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';
import { Award } from 'lucide-react';

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-12 group">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline text-primary transition-colors duration-300 group-hover:text-accent">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-border bg-secondary transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50">
              <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                      <Award className="h-8 w-8 flex-shrink-0 text-accent" />
                      <div>
                          <h3 className="font-semibold text-lg">{cert.title}</h3>
                          <p className="text-sm text-muted-foreground">{cert.provider}</p>
                      </div>
                  </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
