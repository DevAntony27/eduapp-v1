"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { studentUser, tutorUser } from "@/lib/seed";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const handleStudentLogin = () => {
    setEmail(studentUser.email);
    setPassword(studentUser.password);
  };

  const handleTutorLogin = () => {
    setEmail(tutorUser.email);
    setPassword(tutorUser.password);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === studentUser.email && password === studentUser.password) {
      router.push('/estudiante/dashboard');
    } else if (email === tutorUser.email && password === tutorUser.password) {
      router.push('/tutor/dashboard');
    } else {
      toast({
        variant: "destructive",
        title: "Error de inicio de sesión",
        description: "Las credenciales son incorrectas. Por favor, inténtalo de nuevo.",
      })
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-14rem)] py-12 px-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mb-4">
            <LogIn className="mx-auto h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-headline">Iniciar Sesión</CardTitle>
          <CardDescription>Ingresa a tu cuenta de EduAPP</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="tu@email.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input 
                id="password" 
                type="password"
                placeholder="Tu contraseña"
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Iniciar Sesión
            </Button>
          </form>
          <div className="my-4 relative">
              <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                      O prueba con
                  </span>
              </div>
          </div>
          <div className="space-y-2">
            <Button variant="outline" className="w-full" onClick={handleStudentLogin}>
                Autocompletar como Estudiante
            </Button>
            <Button variant="outline" className="w-full" onClick={handleTutorLogin}>
                Autocompletar como Tutor
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿No tienes una cuenta?{" "}
            <Link href="/registro" className="underline hover:text-primary">
              Regístrate
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
