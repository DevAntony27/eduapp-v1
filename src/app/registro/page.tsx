import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegistroPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-14rem)] py-12 px-4">
        <div className="w-full max-w-4xl">
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Únete a EduAPP</h1>
                <p className="text-lg text-muted-foreground">Elige tu rol y comienza tu viaje en el aprendizaje.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="items-center text-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <User className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-headline">Soy Estudiante</CardTitle>
                        <CardDescription className="px-4">Quiero encontrar tutores, reservar clases y mejorar mis habilidades.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <Button asChild className="w-full">
                            <Link href="/registro/estudiante">Registrarme como Estudiante <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                    </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader className="items-center text-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <GraduationCap className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-2xl font-headline">Soy Tutor</CardTitle>
                        <CardDescription className="px-4">Quiero ofrecer mis servicios, gestionar mi horario y conectar con estudiantes.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                        <Button asChild className="w-full">
                            <Link href="/registro/tutor">Registrarme como Tutor <ArrowRight className="ml-2 h-4 w-4"/></Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
             <div className="mt-8 text-center text-sm">
                ¿Ya tienes una cuenta?{" "}
                <Link href="/login" className="underline hover:text-primary">
                Inicia Sesión
                </Link>
            </div>
        </div>
    </div>
  );
}
