"use client"

import Link from "next/link"
import { GraduationCap, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
    { href: "/tutores", label: "Tutores" },
    { href: "/recomendacion", label: "Recomendación IA" },
    { href: "/contacto", label: "Contacto" },
]

export function Header() {
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <span className="hidden font-bold sm:inline-block font-headline">EduAPP</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        {navLinks.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn("transition-colors hover:text-primary", pathname === link.href ? "text-primary" : "text-foreground/60")}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left">
                                <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                    <span className="font-bold font-headline">EduAPP</span>
                                </Link>
                                <nav className="grid gap-2 py-6">
                                {navLinks.map(link => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={cn("flex w-full items-center py-2 text-lg font-semibold", pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground")}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <Button variant="ghost" asChild>
                            <Link href="/login">Iniciar Sesión</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/registro">Registrarse</Link>
                        </Button>
                    </div>

                    <Link href="/" className="flex items-center space-x-2 md:hidden">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <span className="font-bold font-headline">EduAPP</span>
                    </Link>

                    <div className="flex items-center gap-2 md:hidden">
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button size="sm" asChild>
                            <Link href="/registro">Registro</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
