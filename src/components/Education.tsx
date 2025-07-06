import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline">Education</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  <GraduationCap className="h-6 w-6 text-accent" />
                  {edu.degree}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
                <p className="mt-2 text-sm">{edu.score}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
