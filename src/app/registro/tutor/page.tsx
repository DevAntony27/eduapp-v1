import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GraduationCap, Upload } from "lucide-react";
import Link from "next/link";

export default function TutorRegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-14rem)] py-12 px-4">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="mb-4">
            <GraduationCap className="mx-auto h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Registro de Tutor</CardTitle>
          <CardDescription>Completa tu perfil para empezar a enseñar.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" required />
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subjects">Materias que Enseñas</Label>
              <Input id="subjects" placeholder="Ej: Matemáticas, Inglés, Programación" required />
              <p className="text-xs text-muted-foreground">Separa las materias por comas.</p>
            </div>
            <div className="space-y-2">
                <Label htmlFor="experience">Experiencia Profesional</Label>
                <Textarea id="experience" placeholder="Describe brevemente tu experiencia como tutor o profesional en tu área..." className="min-h-[100px]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cv">CV o Evidencia Profesional (PDF, Imagen)</Label>
               <div className="flex items-center justify-center w-full">
                    <label htmlFor="cv" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                            <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Haz clic para subir</span> o arrastra y suelta</p>
                            <p className="text-xs text-muted-foreground">PDF, PNG, JPG (MAX. 5MB)</p>
                        </div>
                        <Input id="cv" type="file" className="hidden" />
                    </label>
                </div> 
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" required />
                </div>
                 <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                <Input id="confirm-password" type="password" required />
                </div>
            </div>
            <Button type="submit" className="w-full">
              Completar Registro de Tutor
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            ¿Ya tienes una cuenta?{" "}
            <Link href="/login" className="underline hover:text-primary">
              Inicia Sesión
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
