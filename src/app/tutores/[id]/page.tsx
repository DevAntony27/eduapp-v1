import { tutors } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Star, BookOpen, Briefcase, BadgeDollarSign, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function TutorProfilePage({ params }: { params: { id: string } }) {
  const tutor = tutors.find((t) => t.id === params.id);

  if (!tutor) {
    notFound();
  }

  const daysOfWeek = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

  return (
    <div className="container max-w-5xl mx-auto py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex flex-col items-center">
          <Card className="w-full">
            <CardContent className="p-6 text-center">
              <Image
                src={tutor.image}
                alt={`Foto de ${tutor.name}`}
                width={200}
                height={200}
                data-ai-hint={tutor.aiHint}
                className="rounded-full mx-auto mb-4 object-cover aspect-square"
              />
              <h1 className="text-2xl font-bold font-headline">{tutor.name}</h1>
              <div className="flex items-center justify-center text-sm text-muted-foreground mt-1">
                <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
                <span>{tutor.rating.toFixed(1)} ({tutor.reviews} reseñas)</span>
              </div>
              <Separator className="my-4" />
              <div className="text-left space-y-3">
                <div className="flex items-center">
                  <BadgeDollarSign className="w-5 h-5 mr-3 text-primary" />
                  <span><span className="font-semibold">${tutor.price_per_hour}</span> / hora</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="w-5 h-5 mr-3 text-primary" />
                  <span>{tutor.experience} años de experiencia</span>
                </div>
                <div className="flex items-start">
                  <BookOpen className="w-5 h-5 mr-3 text-primary mt-1 shrink-0" />
                  <div className="flex flex-wrap gap-1">
                    {tutor.subjects.map((subject) => (
                      <Badge key={subject} variant="outline">{subject}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full mt-6">Reservar Tutoría</Button>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Acerca de mí</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{tutor.description}</p>
                </CardContent>
            </Card>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="font-headline flex items-center"><CalendarDays className="mr-2 h-6 w-6"/>Mi Disponibilidad</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Estos son mis horarios generales. Haz clic en 'Reservar Tutoría' para ver fechas específicas.</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {daysOfWeek.map(day => (
                            <div key={day}>
                                <h4 className="font-semibold mb-2">{day}</h4>
                                <div className="space-y-1">
                                    {tutor.availability[day] ? (
                                        tutor.availability[day].map(time => (
                                            <Badge key={time} variant="default" className="w-full justify-center bg-accent text-accent-foreground hover:bg-accent/80">
                                                {time}
                                            </Badge>
                                        ))
                                    ) : (
                                        <Badge variant="outline" className="w-full justify-center">No disponible</Badge>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
