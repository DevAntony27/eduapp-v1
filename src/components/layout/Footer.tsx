import Link from "next/link"
import { GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <GraduationCap className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} EduAPP. Todos los derechos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/contacto" className="hover:text-primary">Contacto</Link>
            <Link href="#" className="hover:text-primary">Términos</Link>
            <Link href="#" className="hover:text-primary">Privacidad</Link>
        </div>
      </div>
    </footer>
  )
}
