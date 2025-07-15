import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { Label } from '@/components/ui/label';

export function Contact() {
  // In a static site, we can't have a server-side form submission.
  // This form can be wired up to a third-party service like Formspree or Netlify Forms.
  // For now, it's a presentational component.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("In a real application, this would submit the form!");
  }

  return (
    <section id="contact" className="py-12 bg-secondary group">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-border bg-background">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline text-primary transition-colors duration-300 group-hover:text-accent">
              Get in Touch
            </CardTitle>
            <p className="text-muted-foreground pt-2">
              Interested in working together or just want to say hi? Feel free
              to reach out.
            </p>
          </CardHeader>
          <CardContent>
             <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell me a little bit about what you're looking for..." className="resize-none" />
                </div>
                <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
