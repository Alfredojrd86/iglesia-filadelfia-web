import Container from '../ui/Container'
import ResourceCard from '../cards/ResourceCard'

type Item = {
  id: string
  href: string
  title: string
  excerpt?: string
  meta?: string
  imageSrc?: string
}

type RecentGridProps = {
  title?: string
  items: Item[]
  moreHref?: string
}

export default function RecentGrid({ title = 'Recientes', items, moreHref }: RecentGridProps) {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1f2937]">{title}</h2>
          {moreHref && (
            <a className="text-sm text-[#4b5563] hover:text-[#111827]" href={moreHref}>
              Más →
            </a>
          )}
        </div>
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <ResourceCard key={i.id} {...i} />
          ))}
        </div>
      </Container>
    </section>
  )
}


