import { m } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { Reveal, RevealGroup, staggerItem } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, Github, Linkedin, Phone, Code2, BookOpen, Copy } from 'lucide-react';

const channels = [
  { key: 'phone', label: 'Phone', value: portfolioData.phone, href: `tel:${portfolioData.phone.replace(/\s/g, '')}`, icon: Phone },
  { key: 'github', label: 'GitHub', value: 'Aadhithya01', href: portfolioData.contact.github, icon: Github },
  { key: 'linkedin', label: 'LinkedIn', value: 'aadhithyar', href: portfolioData.contact.linkedin, icon: Linkedin },
  { key: 'leetcode', label: 'LeetCode', value: 'Aadhi01', href: portfolioData.contact.leetcode, icon: Code2 },
  { key: 'medium', label: 'Medium', value: 'Articles', href: portfolioData.contact.medium, icon: BookOpen },
];

export function Contact() {
  const { toast } = useToast();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.contact.email);
      toast({ title: 'Email copied', description: portfolioData.contact.email });
    } catch {
      window.location.href = `mailto:${portfolioData.contact.email}`;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
    toast({ title: 'Opening your email client…', description: 'Your message is pre-filled and ready to send.' });
  };

  return (
    <section id="contact" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Say hello"
        title="Get in Touch"
        subtitle="Interested in working together, or just want to say hi? Let's talk."
      />

      {/* Channels */}
      <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <m.button
          variants={staggerItem}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.97 }}
          onClick={copyEmail}
          className="gradient-border group flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3.5 text-left backdrop-blur transition-shadow hover:shadow-lg hover:shadow-accent/10"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
            <Mail className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-grow">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">Email</p>
            <p className="truncate text-xs font-medium text-foreground sm:text-sm">
              {portfolioData.contact.email}
            </p>
          </div>
          <Copy className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
        </m.button>

        {channels.map((c) => (
          <m.a
            key={c.key}
            href={c.href}
            target={c.key === 'phone' ? undefined : '_blank'}
            rel="noopener noreferrer"
            variants={staggerItem}
            whileHover={{ y: -4 }}
            className="gradient-border group flex items-center gap-3 rounded-xl border border-border bg-card/60 p-3.5 backdrop-blur transition-shadow hover:shadow-lg hover:shadow-accent/10"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
              <c.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{c.label}</p>
              <p className="truncate text-xs font-medium text-foreground sm:text-sm">{c.value}</p>
            </div>
          </m.a>
        ))}
      </RevealGroup>

      {/* Form */}
      <Reveal className="mt-6">
        <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              placeholder="Tell me a little about what you're looking for..."
              className="resize-none"
              rows={4}
            />
          </div>
          <Button type="submit" className="group w-full shadow-lg shadow-accent/20">
            <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            Send Message
          </Button>
        </form>
      </Reveal>
    </section>
  );
}
