'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import Container from '../ui/Container';

const nav = [
  {href: '/', label: 'Inicio'},
  {href: '/misioneros', label: 'Misioneros'},
  {href: '/eventos', label: 'Eventos'},
  {href: '/acerca', label: 'Acerca'},
  {href: '/donaciones', label: 'Dar'},
];

export default function MainNav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-[#ffffff] shadow-sm">
      <Container className="px-0 sm:px-0 lg:px-0 grid grid-cols-3 h-16 items-center">
        <Link
          href="/"
          className="justify-self-start font-semibold tracking-tight text-xl text-[#1f2937]"
        >
          Iglesia Filadelfia
        </Link>
        <nav className="hidden md:flex items-center gap-8 justify-self-center">
          {nav.map((n) => {
            const isAcerca = n.href === '/acerca';
            const activeForAcerca =
              pathname.startsWith('/acerca') ||
              pathname.startsWith('/declaracion-de-fe');
            const isActive =
              n.href === '/'
                ? pathname === '/'
                : isAcerca
                ? activeForAcerca
                : pathname.startsWith(n.href);

            if (isAcerca) {
              return (
                <div key={n.href} className="relative group pb-3">
                  <Link
                    href={n.href}
                    className={`group relative pb-3 text-sm whitespace-nowrap font-medium transition-colors ${
                      isActive
                        ? 'text-[#111827]'
                        : 'text-[#3a3c3f] hover:text-[#111827]'
                    }`}
                  >
                    {n.label}
                    <span
                      className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full transition-opacity ${
                        isActive
                          ? 'bg-red-600 opacity-100'
                          : 'bg-red-600 opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </Link>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-56 rounded-md border bg-white shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition">
                    <ul className="py-2 text-sm">
                      <li>
                        <Link
                          href="/acerca"
                          className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap"
                        >
                          Acerca de nosotros
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/acerca#faith"
                          className="block px-4 py-2 hover:bg-gray-50 whitespace-nowrap"
                        >
                          Declaración de Fe
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={n.href}
                href={n.href}
                className={`group relative pb-3 text-sm whitespace-nowrap font-medium transition-colors ${
                  isActive
                    ? 'text-[#111827]'
                    : 'text-[#3a3c3f] hover:text-[#111827]'
                }`}
              >
                {n.label}
                <span
                  className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full transition-opacity ${
                    isActive
                      ? 'bg-red-600 opacity-100'
                      : 'bg-red-600 opacity-0 group-hover:opacity-100'
                  }`}
                />
              </Link>
            );
          })}
        </nav>
        <div className="justify-self-end md:hidden">
          {/* Placeholder mobile toggle; can add sheet/menu later */}
          <span className="inline-block h-6 w-6 rounded bg-foreground/80" />
        </div>
      </Container>
    </header>
  );
}
