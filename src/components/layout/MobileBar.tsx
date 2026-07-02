import { portfolioData } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import resumePdf from '@/assets/Aadhithya_Resume.pdf';

/** Slim sticky top bar — only shown below lg where the sidebar nav is hidden. */
export function MobileBar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl lg:hidden">
      <div className="container flex h-14 items-center justify-between px-6">
        <a href="#about" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-accent to-[hsl(var(--accent-2))] font-headline text-sm font-bold text-accent-foreground">
            A
          </span>
          <span className="font-headline font-semibold text-foreground">{portfolioData.name}</span>
        </a>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-1 pt-8">
                {portfolioData.navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="rounded-md px-3 py-2.5 text-lg font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-accent"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={resumePdf}
                  download
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-accent px-3 py-2.5 font-medium text-accent-foreground"
                >
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
