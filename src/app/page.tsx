'use client';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Publications } from '@/components/Publications';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter, SidebarInset } from '@/components/ui/sidebar';
import { portfolioData } from '@/data/portfolio-data';
import { Mail, Github, Linkedin, Download, User, Briefcase, Code, Award, BookOpen, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Home() {
    const socialIcons: { [key: string]: React.ReactNode } = {
      email: <Mail />,
      github: <Github />,
      linkedin: <Linkedin />,
    };

    const navIcons: { [key: string]: React.ReactNode } = {
        'About': <User />,
        'Experience': <Briefcase />,
        'Projects': <Code />,
        'Education': <GraduationCap />,
        'Certifications': <Award />,
        'Publications': <BookOpen />,
    };

  return (
    <div className="bg-background">
      <SidebarProvider>
        <Sidebar className="bg-secondary text-secondary-foreground">
            <SidebarHeader className="items-center text-center p-6">
              <Image
                  src={portfolioData.avatarUrl}
                  alt={portfolioData.name}
                  width={128}
                  height={128}
                  className="rounded-full border-2 border-accent"
                  data-ai-hint={portfolioData.avatarHint}
              />
              <div className="mt-4">
                  <h1 className="text-2xl font-bold font-headline text-primary">{portfolioData.name}</h1>
                  <p className="text-muted-foreground">{portfolioData.role}</p>
              </div>
              <div className="flex justify-center gap-2 mt-2">
                  {Object.entries(portfolioData.contact).map(([key, value]) => (
                      <Button asChild variant="ghost" size="icon" key={key}>
                          <a href={key === 'email' ? `mailto:${value}` : value} target="_blank" rel="noopener noreferrer">
                              {socialIcons[key]}
                              <span className="sr-only">{key}</span>
                          </a>
                      </Button>
                  ))}
              </div>
            </SidebarHeader>
            <SidebarContent className="p-4">
              <SidebarMenu>
                {portfolioData.navLinks.map((link) => (
                  <SidebarMenuItem key={link.name}>
                    <Link href={link.href} className="w-full">
                      <SidebarMenuButton className="w-full justify-start gap-3">
                          {navIcons[link.name]}
                          <span>{link.name}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              <div className="mt-6">
                  <h3 className="px-2 mb-2 text-sm font-semibold text-muted-foreground">Skills</h3>
                  <div className="p-2 flex flex-wrap gap-1">
                      {[...portfolioData.skills.languages, ...portfolioData.skills.frameworks, ...portfolioData.skills.tools].map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                  </div>
              </div>
            </SidebarContent>
            <SidebarFooter className="p-6">
              <Button asChild size="lg" className="w-full">
                  <a href={portfolioData.resumeUrl} download>
                      <Download className="mr-2" />
                      Download Resume
                  </a>
              </Button>
            </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="md:hidden p-4 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b">
              <h1 className="text-xl font-bold font-headline text-primary">{portfolioData.name}</h1>
              <SidebarTrigger />
          </div>
          <main className="flex-grow p-6 md:p-8 lg:p-12 space-y-16">
            <About />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Publications />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
