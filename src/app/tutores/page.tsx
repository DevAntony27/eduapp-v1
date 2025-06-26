import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import TutorCard from "@/components/tutors/TutorCard";
import { tutors } from "@/lib/data";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function TutoresPage() {
    const allSubjects = [...new Set(tutors.flatMap(t => t.subjects))];

    return (
        <div className="container py-8 md:py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Nuestros Tutores</h1>
                <p className="text-lg text-muted-foreground">Encuentra al experto que necesitas para alcanzar tus metas.</p>
            </div>

            <Card className="p-4 md:p-6 mb-8 bg-card/80 backdrop-blur-sm sticky top-16 z-40">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="md:col-span-2">
                        <Label htmlFor="search-keyword">Palabra Clave</Label>
                        <Input id="search-keyword" placeholder="Nombre del tutor, especialidad..." />
                    </div>
                    <div>
                        <Label htmlFor="search-subject">Materia</Label>
                        <Select>
                            <SelectTrigger id="search-subject">
                                <SelectValue placeholder="Todas las materias" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Todas las materias</SelectItem>
                                {allSubjects.map(subject => (
                                     <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    {/* The search button is commented out as filtering would happen dynamically in a real app */}
                    {/* <div className="md:col-span-1">
                        <Button className="w-full"><Search className="h-4 w-4 mr-2" />Buscar</Button>
                    </div> */}
                </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {tutors.map((tutor) => (
                    <TutorCard key={tutor.id} tutor={tutor} />
                ))}
            </div>
        </div>
    );
}

// These components are simple wrappers, but good practice for larger forms
import { Label as ShadcnLabel } from "@/components/ui/label"
const Label = ({ children, ...props }: React.ComponentProps<typeof ShadcnLabel>) => (
    <ShadcnLabel className="text-sm font-medium text-muted-foreground mb-2 block" {...props}>
        {children}
    </ShadcnLabel>
)

import { Card as ShadcnCard } from "@/components/ui/card"
const Card = ({ children, ...props }: React.ComponentProps<typeof ShadcnCard>) => (
    <ShadcnCard {...props}>{children}</ShadcnCard>
)
