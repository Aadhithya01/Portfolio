import { portfolioData } from '@/data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Wrench, Users, Lightbulb } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skillSections = [
  {
    title: 'Languages',
    icon: <Code className="h-6 w-6 text-accent" />,
    skills: portfolioData.skills.languages,
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Wrench className="h-6 w-6 text-accent" />,
    skills: portfolioData.skills.frameworks,
  },
  {
    title: 'Tools & Technologies',
    icon: <Lightbulb className="h-6 w-6 text-accent" />,
    skills: portfolioData.skills.tools,
  },
  {
    title: 'Soft Skills',
    icon: <Users className="h-6 w-6 text-accent" />,
    skills: portfolioData.skills.softSkills,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 group">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline transition-colors duration-300 group-hover:text-accent">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillSections.map((section) => (
            <Card key={section.title} className="bg-secondary transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-xl">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {section.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
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
