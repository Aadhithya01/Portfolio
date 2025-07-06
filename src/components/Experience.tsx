import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';
import { Check } from 'lucide-react';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-3xl font-bold font-headline text-primary">
        Work Experience
      </h2>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <Card key={index} className="border-border bg-secondary hover:shadow-xl hover:shadow-accent/10 transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="font-headline text-xl text-primary">{job.role}</CardTitle>
                  <CardDescription className="text-base">{job.company}</CardDescription>
                </div>
                <div className="text-sm text-muted-foreground">{job.duration}</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
