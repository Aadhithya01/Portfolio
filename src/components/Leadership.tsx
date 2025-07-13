import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { portfolioData } from '@/data/portfolio-data';
import { Users } from 'lucide-react';

export function Leadership() {
  const { leadership } = portfolioData;

  if (!leadership || leadership.length === 0) {
    return null;
  }

  return (
    <section id="leadership" className="py-12 bg-secondary group">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline text-primary transition-colors duration-300 group-hover:text-accent">
          Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {leadership.map((item, index) => (
            <Card key={index} className="border-border bg-background transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50">
              <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                      <Users className="h-8 w-8 flex-shrink-0 text-accent" />
                      <div>
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.provider}</p>
                      </div>
                  </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
