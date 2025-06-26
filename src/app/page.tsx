import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, GraduationCap, CalendarCheck, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TutorCard from '@/components/tutors/TutorCard';
import { tutors } from '@/lib/data';

export default function Home() {
  const featuredTutors = tutors.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  Encuentra tu tutor ideal con <span className="text-primary">EduAPP</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Tutorías personalizadas para todos los niveles. Conéctate con expertos y alcanza tu máximo potencial.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    type="search"
                    placeholder="Busca por materia, ej. Matemáticas"
                    className="max-w-lg flex-1"
                  />
                  <Button type="submit" asChild>
                    <Link href="/tutores"><Search className="h-4 w-4 mr-2" />Buscar</Link>
                  </Button>
                </form>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x400.png"
              width="600"
              height="400"
              alt="Hero"
              data-ai-hint="happy student learning"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">¿Cómo funciona?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aprender nunca fue tan fácil. Sigue estos simples pasos para comenzar tu viaje educativo con nosotros.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center mb-4">
                 <div className="flex items-center justify-center rounded-full bg-primary/10 p-4">
                  <Search className="h-10 w-10 text-primary" />
                 </div>
              </div>
              <h3 className="text-lg font-bold font-headline">1. Busca tu Tutor</h3>
              <p className="text-sm text-muted-foreground">Utiliza nuestros filtros para encontrar el tutor perfecto según la materia, nivel y tu disponibilidad.</p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="flex justify-center items-center mb-4">
                 <div className="flex items-center justify-center rounded-full bg-primary/10 p-4">
                    <CalendarCheck className="h-10 w-10 text-primary" />
                 </div>
              </div>
              <h3 className="text-lg font-bold font-headline">2. Reserva una Clase</h3>
              <p className="text-sm text-muted-foreground">Elige el horario que más te convenga y reserva una tutoría. El tutor recibirá tu solicitud al instante.</p>
            </div>
            <div className="grid gap-1 text-center">
               <div className="flex justify-center items-center mb-4">
                 <div className="flex items-center justify-center rounded-full bg-primary/10 p-4">
                    <GraduationCap className="h-10 w-10 text-primary" />
                 </div>
              </div>
              <h3 className="text-lg font-bold font-headline">3. Comienza a Aprender</h3>
              <p className="text-sm text-muted-foreground">Conéctate a tu clase en línea y empieza a mejorar tus habilidades. ¡Así de simple!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="tutores-destacados" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
           <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Tutores Destacados</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Conoce a algunos de nuestros tutores mejor calificados por la comunidad.
              </p>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {featuredTutors.map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
                <Link href="/tutores">Ver todos los tutores</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
