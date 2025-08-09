"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react';
import { useEffect, useState } from 'react'
import Container from '../ui/Container'

export default function AcercaTabs() {
  const pathname = usePathname()
  const [hash, setHash] = useState<string>('')
  const [isHiddenOnScroll, setIsHiddenOnScroll] = useState(false);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);

    const lastScrollY = {
      current: typeof window !== 'undefined' ? window.scrollY : 0,
    } as {current: number};
    const ticking = {current: false} as {current: boolean};
    const lastToggleAt = {current: 0} as {current: number};

    const update = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const now = Date.now();
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
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHiddenOnScroll]);

  const tabs = [
    {key: 'overview', label: 'Acerca de nosotros', href: '/acerca#overview'},
    {key: 'faith', label: 'Declaración de Fe', href: '/acerca#faith'},
  ];

  const isActive = (href: string) => {
    if (href === '/acerca#overview')
      return pathname === '/acerca' && (hash === '' || hash === '#overview');
    if (href === '/acerca#faith' && pathname === '/declaracion-de-fe')
      return true;
    if (href.startsWith('/acerca#'))
      return pathname === '/acerca' && hash === href.replace('/acerca', '');
    return pathname.startsWith(href);
  };

  const handleTabClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    // Si ya estamos en /acerca, forzamos la actualización del hash
    if (pathname === '/acerca') {
      event.preventDefault();
      const nextHash = href.replace('/acerca', '') || '#overview';
      if (window.location.hash !== nextHash) {
        window.location.hash = nextHash;
      } else {
        // Si es el mismo hash, disparamos manualmente para re-render opcional
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    }
  };

  return (
    <div
      className={
        isHiddenOnScroll
          ? 'hidden'
          : 'sticky top-16 z-30 border-b bg-[#f7f7f7] transition-transform duration-300 will-change-transform translate-y-0'
      }
    >
      <Container className="max-w-5xl">
        <nav className="flex justify-center gap-12 text-sm">
          {tabs.map((t) => (
            <Link
              key={t.key}
              href={t.href}
              onClick={(e) => handleTabClick(e, t.href)}
              className={`group relative pb-3 whitespace-nowrap transition-colors ${
                isActive(t.href)
                  ? 'text-[#111827] font-medium'
                  : 'text-[#3a3c3f] hover:text-[#111827]'
              }`}
            >
              {t.label}
              <span
                className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full transition-opacity ${
                  isActive(t.href)
                    ? 'bg-gray-600 opacity-100'
                    : 'bg-gray-600 opacity-0 group-hover:opacity-100'
                }`}
              />
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}


