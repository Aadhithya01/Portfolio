import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-12 bg-secondary group">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline text-primary transition-colors duration-300 group-hover:text-accent">Education</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="border-border bg-background transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                      <div>
                          <CardTitle className="font-headline text-xl text-primary">{edu.degree}</CardTitle>
                          <CardDescription className="text-base">{edu.institution}</CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground text-right flex-shrink-0 ml-4">{edu.duration}</div>
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
