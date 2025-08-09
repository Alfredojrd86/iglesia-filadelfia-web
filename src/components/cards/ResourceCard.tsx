import Link from 'next/link';

type ResourceCardProps = {
  href: string;
  title: string;
  excerpt?: string;
  meta?: string;
  imageSrc?: string;
  authorName?: string;
  authorAvatarUrl?: string;
};

export default function ResourceCard({
  href,
  title,
  excerpt,
  meta,
  imageSrc,
  authorName,
  authorAvatarUrl,
}: ResourceCardProps) {
  const isExternal = /^https?:\/\//i.test(href);
  const CardContent = (
    <div
      className="group block overflow-hidden bg-white border border-gray-200 rounded-none transition-all duration-300 ease-out cursor-pointer
                 shadow-[0_2px_3px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.06)]
                 hover:shadow-[0_10px_10px_-1px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] hover:-translate-y-0.5
                 grid grid-rows-[2fr_2fr] h-[420px] sm:h-[460px]"
    >
      {/* Top image */}
      <div className="relative bg-gray-100 overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="p-5 space-y-2 flex flex-col">
        {meta && (
          <p className="text-xs uppercase tracking-wide text-[#6b7280]">
            {meta}
          </p>
        )}
        <h3 className="text-lg font-semibold leading-tight text-[#1f2937] group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        {excerpt && (
          <p className="text-sm text-[#374151] line-clamp-3 mb-4">{excerpt}</p>
        )}

        {authorName && (
          <div className="mt-auto flex items-center gap-3 pt-3 border-t border-gray-200">
            {authorAvatarUrl ? (
              <img
                src={authorAvatarUrl}
                alt={authorName}
                className="h-8 w-8 rounded-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="h-8 w-8 rounded-full bg-gray-200" />
            )}
            <span className="text-sm text-[#374151]">{authorName}</span>
          </div>
        )}
      </div>
    </div>
  );
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {CardContent}
    </a>
  ) : (
    <Link href={href} className="block">
      {CardContent}
    </Link>
  );
}
