// Recommend a tutor based on the skills and topics requested by the student.

'use server';

/**
 * @fileOverview Recommends a suitable tutor based on the student's needs.
 *
 * - recommendTutor - A function that recommends a tutor.
 * - RecommendTutorInput - The input type for the recommendTutor function.
 * - RecommendTutorOutput - The return type for the recommendTutor function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendTutorInputSchema = z.object({
  skills: z.string().describe('The skills the student wants to learn.'),
  topics: z.string().describe('The topics the student needs help with.'),
});
export type RecommendTutorInput = z.infer<typeof RecommendTutorInputSchema>;

const RecommendTutorOutputSchema = z.object({
  recommendation: z.string().describe('A short recommendation for a suitable tutor.'),
});
export type RecommendTutorOutput = z.infer<typeof RecommendTutorOutputSchema>;

export async function recommendTutor(input: RecommendTutorInput): Promise<RecommendTutorOutput> {
  return recommendTutorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendTutorPrompt',
  input: {schema: RecommendTutorInputSchema},
  output: {schema: RecommendTutorOutputSchema},
  prompt: `You are a helpful AI assistant that recommends tutors to students.

  Given the skills the student wants to learn and the topics they need help with, generate a short recommendation for a suitable tutor.

  Skills: {{{skills}}}
  Topics: {{{topics}}}
  Recommendation:`,
});

const recommendTutorFlow = ai.defineFlow(
  {
    name: 'recommendTutorFlow',
    inputSchema: RecommendTutorInputSchema,
    outputSchema: RecommendTutorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
