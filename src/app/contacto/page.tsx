import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Contáctanos</h1>
        <p className="text-lg text-muted-foreground">Estamos aquí para ayudarte. Envíanos tu consulta.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold font-headline mb-4">Información de Contacto</h2>
          <p className="text-muted-foreground mb-6">
            Si prefieres, puedes contactarnos directamente a través de los siguientes canales. Nuestro equipo de soporte responderá lo antes posible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <a href="mailto:soporte@eduapp.com" className="hover:text-primary">soporte@eduapp.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-primary" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-primary" />
              <span>Calle Ficticia 123, Ciudad, País</span>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Enviar un mensaje</CardTitle>
            <CardDescription>Completa el formulario y nos pondremos en contacto contigo.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input id="name" placeholder="Tu nombre completo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="Asunto de tu consulta" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">Enviar Mensaje</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
