import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';
import { Award } from 'lucide-react';

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline">
          Certifications & Awards
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Award className="h-6 w-6 flex-shrink-0 text-accent" />
                    <div>
                      <h3 className="font-semibold">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
