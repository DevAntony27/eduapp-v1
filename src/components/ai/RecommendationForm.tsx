"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { recommendTutor } from '@/ai/flows/recommend-tutor';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, Sparkles } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

const formSchema = z.object({
  skills: z.string().min(10, { message: "Por favor, describe las habilidades con un poco más de detalle." }),
  topics: z.string().min(10, { message: "Por favor, describe los temas con un poco más de detalle." }),
});

export function RecommendationForm() {
  const [recommendation, setRecommendation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      skills: '',
      topics: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError('');
    setRecommendation('');
    try {
      const result = await recommendTutor(values);
      setRecommendation(result.recommendation);
    } catch (e) {
      setError('Hubo un error al obtener la recomendación. Por favor, inténtalo de nuevo.');
      console.error(e);
    }
    setIsLoading(false);
  }

  return (
    <Card className="w-full">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                    <CardTitle className="font-headline">Describe tus necesidades</CardTitle>
                    <CardDescription>Cuanta más información nos des, mejor será la recomendación.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <FormField
                        control={form.control}
                        name="skills"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Habilidades a desarrollar</FormLabel>
                            <FormControl>
                                <Input placeholder="Ej: Mejorar mi escritura de ensayos, entender álgebra lineal..." {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="topics"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Temas o materias de interés</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Ej: Necesito ayuda con cálculo diferencial para mi examen de la próxima semana y los conceptos de la termodinámica."
                                className="resize-none"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
                <CardFooter>
                    <Button type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? (
                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generando...</>
                        ) : (
                            'Obtener Recomendación'
                        )}
                    </Button>
                </CardFooter>
            </form>
        </Form>
        
        {recommendation && !isLoading && (
            <div className="p-6 pt-0">
                <Alert>
                    <Sparkles className="h-4 w-4" />
                    <AlertTitle className="font-headline">¡Recomendación Lista!</AlertTitle>
                    <AlertDescription>
                        {recommendation}
                    </AlertDescription>
                </Alert>
            </div>
        )}

        {error && !isLoading && (
            <div className="p-6 pt-0">
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                        {error}
                    </AlertDescription>
                </Alert>
            </div>
        )}
    </Card>
  );
}
