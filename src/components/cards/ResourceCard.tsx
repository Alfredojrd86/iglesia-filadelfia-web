import Link from 'next/link'
import Image from 'next/image'

type ResourceCardProps = {
  href: string
  title: string
  excerpt?: string
  meta?: string
  imageSrc?: string
}

export default function ResourceCard({ href, title, excerpt, meta, imageSrc }: ResourceCardProps) {
  return (
    <Link href={href} className="group block overflow-hidden border border-gray-200 rounded-none bg-white transition-all shadow-[0_1px_0_0_rgba(0,0,0,0.05)] hover:shadow-lg hover:-translate-y-0.5">
      <div className="aspect-[16/9] relative bg-gray-100">
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-300 "
          />
        )}
      </div>
      <div className="p-5 space-y-2">
        {meta && <p className="text-xs uppercase tracking-wide text-[#6b7280]">{meta}</p>}
        <h3 className="text-lg font-semibold leading-tight text-[#1f2937]">{title}</h3>
        {excerpt && <p className="text-sm text-[#374151] line-clamp-3">{excerpt}</p>}
      </div>
    </Link>
  )
}


