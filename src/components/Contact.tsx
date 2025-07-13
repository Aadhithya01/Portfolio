'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import { Label } from '@/components/ui/label';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-accent/50">
      <Send className="mr-2 h-4 w-4" />
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export function Contact() {
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(submitContactForm, {
    message: '',
    errors: undefined,
    success: false,
  });

  React.useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Uh oh!',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

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
             <form ref={formRef} action={formAction} className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your Name" />
                    {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                    {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell me a little bit about what you're looking for..." className="resize-none" />
                    {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
