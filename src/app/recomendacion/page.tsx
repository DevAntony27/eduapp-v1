import { Lightbulb } from "lucide-react";
import { RecommendationForm } from "@/components/ai/RecommendationForm";

export default function RecomendacionPage() {
  return (
    <div className="container max-w-2xl mx-auto py-12 md:py-20">
      <div className="text-center mb-10">
        <Lightbulb className="mx-auto h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Asistente de Recomendación</h1>
        <p className="text-lg text-muted-foreground">
          ¿No estás seguro de por dónde empezar? Describe lo que necesitas y nuestra IA te recomendará el tutor perfecto.
        </p>
      </div>
      
      <RecommendationForm />
    </div>
  );
}
