import Container from '../ui/Container'
import Link from 'next/link'

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-16 border-t bg-background">
      <Container className="py-10 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-xl font-semibold">Iglesia Filadelfia</p>
          <p className="text-sm text-foreground/70">
            Recursos para edificar la iglesia y reportes de nuestras misiones.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm">
          <div className="space-y-2">
            <p className="font-medium">Sitio</p>
            <ul className="space-y-1">
              <li><Link href="/misioneros" className="text-foreground/70 hover:text-foreground">Misioneros</Link></li>
              <li><Link href="/eventos" className="text-foreground/70 hover:text-foreground">Eventos</Link></li>
              <li><Link href="/recursos" className="text-foreground/70 hover:text-foreground">Recursos</Link></li>
              <li><Link href="/donaciones" className="text-foreground/70 hover:text-foreground">Dar</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Contacto</p>
            <ul className="space-y-1">
              <li><a href="mailto:info@iglesia-filadelfia.org" className="text-foreground/70 hover:text-foreground">info@iglesia-filadelfia.org</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground">Facebook</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-foreground">YouTube</a></li>
            </ul>
          </div>
        </nav>

        <form className="space-y-3">
          <p className="font-medium">Boletín</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md border px-3 py-2 text-sm bg-background"
            />
            <button type="button" className="rounded-md bg-foreground text-background px-3 py-2 text-sm">
              Suscribirse
            </button>
          </div>
          <p className="text-xs text-foreground/60">Prometemos no enviar spam.</p>
        </form>
      </Container>
      <Container className="pb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-foreground/60">
          <p>© {year} Iglesia Filadelfia. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground">Privacidad</Link>
            <Link href="#" className="hover:text-foreground">Términos</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}


