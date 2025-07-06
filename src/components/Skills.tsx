import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolio-data';
import { Code, Wrench, Lightbulb, Users } from 'lucide-react';

export function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Languages', skills: skills.languages, icon: <Code className="h-6 w-6 text-accent" /> },
    { title: 'Frameworks & Libraries', skills: skills.frameworks, icon: <Wrench className="h-6 w-6 text-accent" /> },
    { title: 'Tools & Technologies', skills: skills.tools, icon: <Lightbulb className="h-6 w-6 text-accent" /> },
    { title: 'Soft Skills', skills: skills.softSkills, icon: <Users className="h-6 w-6 text-accent" /> },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline">Skills</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.title} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
