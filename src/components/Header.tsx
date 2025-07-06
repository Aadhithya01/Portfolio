'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolio-data';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : 'bg-background'
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Code2 className="h-6 w-6 text-accent" />
          <span className="text-lg font-headline">{portfolioData.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {portfolioData.navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                  <Code2 className="h-6 w-6 text-accent" />
                  <span className="text-lg font-headline">{portfolioData.name}</span>
                </Link>
                <nav className="grid gap-4">
                  {portfolioData.navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
