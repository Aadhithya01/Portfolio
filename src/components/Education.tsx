import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';

export function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="space-y-6">
      <h2 className="text-3xl font-bold font-headline text-primary">Education</h2>
      <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="border-border bg-secondary hover:shadow-xl hover:shadow-accent/10 transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                    <div>
                        <CardTitle className="font-headline text-xl text-primary">{edu.degree}</CardTitle>
                        <CardDescription className="text-base">{edu.institution}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">{edu.duration}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{edu.score}</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
}
