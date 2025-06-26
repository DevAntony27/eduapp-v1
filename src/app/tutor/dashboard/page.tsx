import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Bell, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TutorDashboardPage() {
    return (
        <div className="container py-12">
            <div className="mb-10">
                <h1 className="text-4xl font-bold font-headline">Bienvenido, Tutor</h1>
                <p className="text-muted-foreground">Gestiona tu perfil, horarios y clases.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><Clock className="text-primary"/> Configurar Horarios</CardTitle>
                        <CardDescription>Define y actualiza tu disponibilidad para las clases.</CardDescription>
                    </CardHeader>
                     <CardContent className="flex-grow">
                        <p>Mantén tu calendario al día para que los estudiantes puedan reservar clases en tus horas libres.</p>
                    </CardContent>
                    <CardContent>
                        <Button asChild>
                            <Link href="#">Gestionar horarios <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><Bell className="text-primary"/> Gestionar Solicitudes</CardTitle>
                        <CardDescription>Revisa y responde a las nuevas solicitudes de tutoría.</CardDescription>
                    </CardHeader>
                     <CardContent className="flex-grow">
                        <p>Tienes 3 nuevas solicitudes pendientes. Acepta o rechaza las peticiones de los estudiantes.</p>
                    </CardContent>
                    <CardContent>
                        <Button asChild variant="outline">
                            <Link href="#">Ver solicitudes</Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><Calendar className="text-primary"/> Ver Agendamiento</CardTitle>
                        <CardDescription>Consulta tu calendario de clases confirmadas.</CardDescription>
                    </CardHeader>
                     <CardContent className="flex-grow">
                        <p>Visualiza todas tus clases programadas para esta semana y prepárate para enseñar.</p>
                    </CardContent>
                    <CardContent>
                        <Button asChild variant="outline">
                            <Link href="#">Ir a mi calendario</Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 font-headline"><Star className="text-primary"/> Consultar Calificaciones</CardTitle>
                        <CardDescription>Revisa las calificaciones y comentarios de tus estudiantes.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p>Tu calificación promedio es 4.9. Lee los comentarios para seguir mejorando tu servicio.</p>
                    </CardContent>
                    <CardContent>
                        <Button asChild variant="outline">
                            <Link href="#">Ver mis calificaciones</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
