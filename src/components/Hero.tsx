import { portfolioData } from '@/data/portfolio-data'
import { Mail, Github, Linkedin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import profileImage from '@/assets/DSC_0384.jpg'
import resumePdf from '@/assets/Aadhithya_resume.pdf'

export function Hero() {
  const socialIcons: { [key: string]: React.ReactNode } = {
    email: <Mail />,
    github: <Github />,
    linkedin: <Linkedin />,
  }

  return (
    <section
      id="home"
      className="flex items-center py-12 text-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-background via-accent/10 to-background bg-[size:200%_200%] animate-background-pan -z-10"></div>

      <div className="container mx-auto flex flex-col items-center px-4">
        {/* 👤 Profile Image */}
       <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg mb-6 relative">
      <img
        src={profileImage}
        alt={portfolioData.name}
        className="w-full h-full object-cover"
        data-ai-hint={portfolioData.avatarHint}
      />
    </div>

        {/* 🧑‍💼 Name */}
        <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline animate-text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-[200%_auto] text-transparent bg-clip-text">
          {portfolioData.name}
        </h1>

        {/* 💼 Role */}
        <p className="mb-6 text-lg text-muted-foreground sm:text-xl md:text-2xl font-headline transition-colors duration-300 group-hover:text-accent">
          {portfolioData.role}
        </p>

        {/* 📄 Resume Download */}
        <Button asChild size="lg" className="mb-8">
          <a href={resumePdf} download>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>

        {/* 🔗 Social Icons */}
        <div className="flex justify-center gap-4">
          {Object.entries(portfolioData.contact).map(([key, value]) => (
            <Button asChild variant="ghost" size="icon" key={key}>
              <a
                href={key === 'email' ? `mailto:${value}` : value}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialIcons[key]}
                <span className="sr-only">{key}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}