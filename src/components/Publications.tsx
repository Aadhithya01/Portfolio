import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';
import { BookOpen } from 'lucide-react';

export function Publications() {
  const { publications } = portfolioData;

  if (!publications || publications.length === 0) {
    return null;
  }

  return (
    <section id="publications" className="space-y-6">
      <h2 className="text-3xl font-bold font-headline text-primary">
        Publications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publications.map((pub, index) => (
          <Card key={index} className="border-border bg-secondary hover:shadow-xl hover:shadow-accent/10 transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                  <BookOpen className="h-8 w-8 flex-shrink-0 text-accent" />
                  <div>
                      <h3 className="font-semibold text-lg">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground">{pub.source}</p>
                  </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
