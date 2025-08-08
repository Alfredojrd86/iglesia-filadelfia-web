import Link from 'next/link'
import Container from '../ui/Container'

const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/misioneros', label: 'Misioneros' },
  { href: '/eventos', label: 'Eventos' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/donaciones', label: 'Dar' },
]

export default function MainNav() {
  return (
    <header className="sticky top-0 z-40 bg-[#ffffff] shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-xl text-[#1f2937]">
          Iglesia Filadelfia
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-[#374151] hover:text-[#111827] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          {/* Placeholder mobile toggle; can add sheet/menu later */}
          <span className="inline-block h-6 w-6 rounded bg-foreground/80" />
        </div>
      </Container>
    </header>
  )
}


