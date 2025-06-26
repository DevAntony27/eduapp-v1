import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Calendar, User, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StudentDashboardPage() {
    return (
        <div className="container py-12">
            <div className="mb-10">
                <h1 className="text-4xl font-bold font-headline">Bienvenido, Estudiante</h1>
                <p className="text-muted-foreground">Gestiona tus clases y continúa tu aprendizaje.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><Search className="text-primary"/> Buscar Tutores</CardTitle>
                        <CardDescription>Encuentra nuevos tutores y explora materias.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p>Utiliza nuestro buscador avanzado para encontrar el tutor perfecto que se adapte a tus necesidades y horarios.</p>
                    </CardContent>
                    <CardContent>
                         <Button asChild>
                            <Link href="/tutores">Buscar ahora <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><Calendar className="text-primary"/> Mi Calendario</CardTitle>
                        <CardDescription>Revisa tus próximas clases y tutorías agendadas.</CardDescription>
                    </CardHeader>
                     <CardContent className="flex-grow">
                        <p>Organiza tu semana y no te pierdas ninguna sesión de aprendizaje. Sincroniza con tu calendario personal.</p>
                    </CardContent>
                    <CardContent>
                         <Button asChild variant="outline">
                            <Link href="#">Ver mi calendario</Link>
                        </Button>
                    </CardContent>
                </Card>
                
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><Star className="text-primary"/> Calificar Tutores</CardTitle>
                        <CardDescription>Deja tu opinión sobre tus clases pasadas.</CardDescription>
                    </CardHeader>
                     <CardContent className="flex-grow">
                        <p>Tu feedback es importante para la comunidad. Califica a tus tutores después de cada sesión completada.</p>
                    </CardContent>
                    <CardContent>
                         <Button asChild variant="outline">
                            <Link href="#">Ver mis clases pasadas</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
