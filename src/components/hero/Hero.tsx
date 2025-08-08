import Image from 'next/image'
import Container from '../ui/Container'

type HeroProps = {
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt?: string
}

export default function Hero({ title, subtitle, imageSrc, imageAlt }: HeroProps) {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#ffffff]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="aspect-[16/10] relative overflow-hidden bg-gray-200 rounded-none">
            <Image src={imageSrc} alt={imageAlt ?? ''} fill className="object-cover" priority />
          </div>
          <div className="space-y-4">
            <p className="uppercase text-xs tracking-wide text-foreground/60">Destacado</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{title}</h1>
            {subtitle && <p className="text-base sm:text-lg text-foreground/80">{subtitle}</p>}
          </div>
        </div>
      </Container>
    </section>
  )
}


