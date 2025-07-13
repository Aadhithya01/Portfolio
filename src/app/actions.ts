'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
    };
  }

  try {
    // In a real application, you would send this data to a service
    // (e.g., send an email, save to a database).
    console.log('Form submitted successfully:');
    console.log(validatedFields.data);

    return { message: 'Thank you for your message! I will get back to you soon.', success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { message: 'An unexpected error occurred. Please try again.', success: false };
  }
}
