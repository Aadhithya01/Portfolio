import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';
import { Check } from 'lucide-react';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline text-primary">
          Work Experience
        </h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {experience.map((job, index) => (
            <div key={index} className="relative pl-12 pb-12">
              <div className="absolute left-4 top-1 h-4 w-4 rounded-full bg-primary -translate-x-1/2"></div>
              <Card className="border-border bg-secondary hover:shadow-xl hover:shadow-accent/10 transition-shadow">
                <CardHeader>
                    <div>
                      <CardTitle className="font-headline text-xl text-primary">{job.role}</CardTitle>
                      <CardDescription className="text-base">{job.company}</CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">{job.duration}</p>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
