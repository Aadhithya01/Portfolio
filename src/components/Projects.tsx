import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio-data';
import { ArrowUpRight } from 'lucide-react';

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <CardHeader>
                <div className="relative h-48 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <CardTitle className="mt-4 font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm font-semibold mb-2 text-primary">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0 h-auto">
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
