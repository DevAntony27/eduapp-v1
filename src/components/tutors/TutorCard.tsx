import Link from "next/link";
import Image from "next/image";
import { Star, BookOpen } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Tutor } from "@/lib/data";

type TutorCardProps = {
  tutor: Tutor;
};

export default function TutorCard({ tutor }: TutorCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <Image
          src={tutor.image}
          alt={`Foto de ${tutor.name}`}
          width={400}
          height={400}
          data-ai-hint={tutor.aiHint}
          className="rounded-t-lg object-cover aspect-square"
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-headline mb-2">{tutor.name}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
          <span>{tutor.rating.toFixed(1)} ({tutor.reviews} reseñas)</span>
        </div>
        <div className="flex items-start text-sm text-muted-foreground">
          <BookOpen className="w-4 h-4 mr-2 mt-1 shrink-0" />
          <div className="flex flex-wrap gap-1">
            {tutor.subjects.map((subject) => (
              <Badge key={subject} variant="secondary">{subject}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/tutores/${tutor.id}`}>Ver Perfil</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
