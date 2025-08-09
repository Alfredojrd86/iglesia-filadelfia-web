"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Container from '../ui/Container'

export default function AcercaTabs() {
  const pathname = usePathname()
  const [hash, setHash] = useState<string>('')

  useEffect(() => {
    const sync = () => setHash(window.location.hash)
    sync()
    window.addEventListener('hashchange', sync)
    window.addEventListener('popstate', sync)
    return () => {
      window.removeEventListener('hashchange', sync)
      window.removeEventListener('popstate', sync)
    }
  }, [])

  const tabs = [
    { key: 'overview', label: 'Acerca de nosotros', href: '/acerca#overview' },
    { key: 'faith', label: 'Declaración de Fe', href: '/acerca#faith' },
  ]

  const isActive = (href: string) => {
    if (href === '/acerca#overview') return pathname === '/acerca' && (hash === '' || hash === '#overview')
    if (href === '/acerca#faith' && pathname === '/declaracion-de-fe') return true
    if (href.startsWith('/acerca#')) return pathname === '/acerca' && hash === href.replace('/acerca', '')
    return pathname.startsWith(href)
  }

  return (
    <div className="sticky top-16 z-30 border-b bg-[#f7f7f7]">
      <Container className="max-w-5xl">
        <nav className="flex justify-center gap-12 text-sm">
          {tabs.map((t) => (
            <Link
              key={t.key}
              href={t.href}
              className={`group relative pb-3 whitespace-nowrap transition-colors ${
                isActive(t.href) ? 'text-[#111827] font-medium' : 'text-[#3a3c3f] hover:text-[#111827]'
              }`}
            >
              {t.label}
              <span
                className={`pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full transition-opacity ${
                  isActive(t.href) ? 'bg-red-600 opacity-100' : 'bg-red-600 opacity-0 group-hover:opacity-100'
                }`}
              />
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  )
}


