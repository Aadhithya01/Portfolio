import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio-data';
import { SectionHeading } from '@/components/anim/SectionHeading';
import { Reveal } from '@/components/anim/Reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail, Github, Linkedin, Phone, Code2, BookOpen } from 'lucide-react';

const channels = [
  { key: 'email', label: 'Email', value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}`, icon: Mail },
  { key: 'phone', label: 'Phone', value: portfolioData.phone, href: `tel:${portfolioData.phone.replace(/\s/g, '')}`, icon: Phone },
  { key: 'github', label: 'GitHub', value: 'Aadhithya01', href: portfolioData.contact.github, icon: Github },
  { key: 'linkedin', label: 'LinkedIn', value: 'aadhithyar', href: portfolioData.contact.linkedin, icon: Linkedin },
  { key: 'leetcode', label: 'LeetCode', value: 'Aadhi01', href: portfolioData.contact.leetcode, icon: Code2 },
  { key: 'medium', label: 'Medium', value: 'Articles', href: portfolioData.contact.medium, icon: BookOpen },
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Say hello"
          title="Get in Touch"
          subtitle="Interested in working together, or just want to say hi? Let's talk."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Contact channels */}
          <Reveal direction="right">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {channels.map((c) => (
                <motion.a
                  key={c.key}
                  href={c.href}
                  target={c.key === 'email' || c.key === 'phone' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="gradient-border group flex items-center gap-3 rounded-xl border border-border bg-card/60 p-4 backdrop-blur transition-shadow hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</p>
                    <p className="truncate text-sm font-medium text-foreground">{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="left">
            <form
              onSubmit={handleSubmit}
              className="glass space-y-5 rounded-2xl p-6"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
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
        </div>
      </div>
    </section>
  );
}
