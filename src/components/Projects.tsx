import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio-data';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline text-primary">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden border-border bg-background transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/10 hover:border-accent/50">
              <CardHeader>
                <CardTitle className="font-headline text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-accent/80">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
