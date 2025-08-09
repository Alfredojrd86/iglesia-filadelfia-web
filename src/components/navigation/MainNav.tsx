'use client';
import {useEffect, useRef, useState} from 'react';
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
  const [isHiddenOnScroll, setIsHiddenOnScroll] = useState(false);

  useEffect(() => {
    const lastScrollY = {
      current: typeof window !== 'undefined' ? window.scrollY : 0,
    } as {current: number};
    const ticking = {current: false} as {current: boolean};
    const lastToggleAt = {current: 0} as {current: number};

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const now = Date.now();
      // Ignora micro movimientos para evitar flicker
      if (Math.abs(delta) < 4) {
        ticking.current = false;
        return;
      }
      if (delta > 0 && currentY > 120) {
        if (!isHiddenOnScroll && now - lastToggleAt.current > 200) {
          setIsHiddenOnScroll(true);
          lastToggleAt.current = now;
        }
      } else if (delta < 0) {
        if (isHiddenOnScroll && now - lastToggleAt.current > 200) {
          setIsHiddenOnScroll(false);
          lastToggleAt.current = now;
        }
      }
      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHiddenOnScroll]);
  return (
    <header
      className={`sticky top-0 z-40 bg-[#ffffff] shadow-md transition-transform duration-300 will-change-transform ${
        isHiddenOnScroll ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
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
