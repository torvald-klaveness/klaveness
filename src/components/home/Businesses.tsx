import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaCard } from "@/components/ui/MediaCard";
import { home } from "@/content/home";

export function Businesses() {
  const { businesses } = home;

  return (
    <section aria-labelledby="businesses-title" className="py-24 md:py-32">
      <div className="container-site">
        <div className="reveal">
          <Eyebrow>{businesses.eyebrow}</Eyebrow>
          <h2
            id="businesses-title"
            className="heading-display mt-8 max-w-[min(100%,62rem)] text-section text-pretty text-copy"
          >
            {businesses.title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-14 md:mt-16 md:grid-cols-2 md:gap-x-6 md:gap-y-14 lg:grid-cols-4 lg:gap-x-8">
          {businesses.items.map((item, index) => (
            <li
              key={item.name}
              className={`reveal row-span-4 grid grid-rows-subgrid gap-y-0 ${index ? `reveal-delay-${Math.min(index, 2)}` : ""}`}
            >
              <MediaCard
                href={item.href}
                image={item.image}
                imageAlt={item.imageAlt}
                title={item.name}
                body={item.body}
                cta={item.external ? "Visit website" : "Learn more"}
                external={item.external}
                sizes="(min-width: 1024px) 23vw, (min-width: 768px) 46vw, 100vw"
                aligned
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
