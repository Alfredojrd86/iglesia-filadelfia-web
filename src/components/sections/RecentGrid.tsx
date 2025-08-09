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
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1f2937]">
            {title}
          </h2>
          {moreHref && (
            <a
              className="text-sm text-[#4b5563] hover:text-[#111827]"
              href={moreHref}
            >
              Más →
            </a>
          )}
        </div>
        {/* Masonry layout using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((i) => (
            <div key={i.id} className="break-inside-avoid mb-6">
              <ResourceCard {...i} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


