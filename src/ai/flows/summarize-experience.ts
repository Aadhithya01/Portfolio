'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing experience snippets into a concise professional summary.
 *
 * - summarizeExperience - A function that takes an array of experience descriptions and returns a summarized professional summary.
 * - SummarizeExperienceInput - The input type for the summarizeExperience function.
 * - SummarizeExperienceOutput - The return type for the summarizeExperience function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeExperienceInputSchema = z.object({
  experienceSnippets: z
    .array(z.string())
    .describe('An array of strings, where each string is a description of a work experience.'),
});
export type SummarizeExperienceInput = z.infer<typeof SummarizeExperienceInputSchema>;

const SummarizeExperienceOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise, professional summary generated from the input experience snippets.'),
});
export type SummarizeExperienceOutput = z.infer<typeof SummarizeExperienceOutputSchema>;

export async function summarizeExperience(input: SummarizeExperienceInput): Promise<SummarizeExperienceOutput> {
  return summarizeExperienceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeExperiencePrompt',
  input: {schema: SummarizeExperienceInputSchema},
  output: {schema: SummarizeExperienceOutputSchema},
  prompt: `You are a professional resume writer. You will be provided with a list of experience snippets. Your goal is to combine these snippets into a single, concise professional summary suitable for use in the "About Me" section of a resume or online profile.

Experience Snippets:
{{#each experienceSnippets}}- {{{this}}}
{{/each}}

Concise Professional Summary:`, // Handlebars each helper
});

const summarizeExperienceFlow = ai.defineFlow(
  {
    name: 'summarizeExperienceFlow',
    inputSchema: SummarizeExperienceInputSchema,
    outputSchema: SummarizeExperienceOutputSchema,
  },
  async (input) => {
    if (
      !process.env.GEMINI_API_KEY ||
      process.env.GEMINI_API_KEY === 'YOUR_API_KEY_HERE'
    ) {
      return {
        summary:
          'This is a placeholder summary. Please provide a valid Gemini API key to generate a real summary.',
      };
    }
    const {output} = await prompt(input);
    return output!;
  }
);
