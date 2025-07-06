import { summarizeExperience } from '@/ai/flows/summarize-experience';
import { portfolioData } from '@/data/portfolio-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';

export async function About() {
  const { summary } = await summarizeExperience({ 
    experienceSnippets: portfolioData.about.experienceSnippets 
  });

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold font-headline">
          About Me
        </h2>
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <User className="text-accent"/>
              Professional Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {summary}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
