import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';
import { Briefcase, Check } from 'lucide-react';

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline">
          Work Experience
        </h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-border"></div>
          {experience.map((job, index) => (
            <div key={index} className="relative pl-10 pb-12">
              <div className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline">{job.role}</CardTitle>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-primary">{job.company}</span> | {job.duration}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
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
