import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline text-primary">Education</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="border-border bg-secondary hover:shadow-xl hover:shadow-accent/10 transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                      <div>
                          <CardTitle className="font-headline text-xl text-primary">{edu.degree}</CardTitle>
                          <CardDescription className="text-base">{edu.institution}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground text-right">{edu.duration}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.score}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
