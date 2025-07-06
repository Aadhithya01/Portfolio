import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';
import { Award } from 'lucide-react';

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="space-y-6">
      <h2 className="text-3xl font-bold font-headline text-primary">
        Certifications & Leadership
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="border-border bg-secondary hover:shadow-xl hover:shadow-accent/10 transition-shadow">
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
    </section>
  );
}
