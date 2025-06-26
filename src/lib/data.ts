export type Tutor = {
  id: string;
  name: string;
  image: string;
  subjects: string[];
  experience: number;
  rating: number;
  reviews: number;
  description: string;
  price_per_hour: number;
  availability: Record<string, string[]>;
  aiHint: string;
};

export const tutors: Tutor[] = [
  {
    id: "1",
    name: "Ana Pérez",
    image: "https://placehold.co/400x400.png",
    aiHint: "female teacher",
    subjects: ["Matemáticas", "Física"],
    experience: 5,
    rating: 4.9,
    reviews: 85,
    description: "Profesora apasionada con más de 5 años de experiencia ayudando a estudiantes de secundaria y bachillerato a alcanzar sus metas académicas en ciencias exactas. Mi metodología se centra en la resolución de problemas y la comprensión conceptual.",
    price_per_hour: 25,
    availability: {
      Lunes: ["16:00", "17:00"],
      Miercoles: ["15:00", "16:00", "17:00"],
      Viernes: ["16:00"]
    }
  },
  {
    id: "2",
    name: "Carlos Gómez",
    image: "https://placehold.co/400x400.png",
    aiHint: "male teacher",
    subjects: ["Historia", "Literatura"],
    experience: 8,
    rating: 4.8,
    reviews: 120,
    description: "Historiador y literato con amplia experiencia en la preparación de estudiantes para exámenes de ingreso a la universidad. Fomento el pensamiento crítico y la capacidad de análisis a través de debates y lecturas guiadas.",
    price_per_hour: 22,
    availability: {
      Martes: ["18:00", "19:00"],
      Jueves: ["18:00", "19:00"],
    }
  },
  {
    id: "3",
    name: "Sofía Rodríguez",
    image: "https://placehold.co/400x400.png",
    aiHint: "woman smiling",
    subjects: ["Inglés", "Francés"],
    experience: 10,
    rating: 5.0,
    reviews: 210,
    description: "Traductora certificada y profesora de idiomas con una década de experiencia. Ofrezco clases dinámicas y conversacionales para todos los niveles, desde principiantes hasta avanzados. Preparación para exámenes internacionales (TOEFL, DELF).",
    price_per_hour: 30,
    availability: {
        Lunes: ["10:00", "11:00", "12:00"],
        Martes: ["10:00", "11:00"],
        Miercoles: ["10:00", "11:00", "12:00"],
        Jueves: ["10:00", "11:00"],
    }
  },
    {
    id: "4",
    name: "Javier Moreno",
    image: "https://placehold.co/400x400.png",
    aiHint: "man professional",
    subjects: ["Química", "Biología"],
    experience: 6,
    rating: 4.7,
    reviews: 95,
    description: "Biólogo con maestría en Química Orgánica. Me especializo en tutorías para estudiantes universitarios, simplificando conceptos complejos y preparando para exámenes parciales y finales. Mi enfoque es práctico y orientado a resultados.",
    price_per_hour: 28,
     availability: {
      Lunes: ["19:00", "20:00"],
      Martes: ["19:00", "20:00"],
      Jueves: ["19:00", "20:00"],
    }
  },
];
