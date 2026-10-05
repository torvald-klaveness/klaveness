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
          <h2 id="businesses-title" className="heading-display mt-8 text-section text-copy">
            {businesses.title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-14 md:mt-16 md:grid-cols-3 md:gap-6 lg:gap-8">
          {businesses.items.map((item, index) => (
            <li key={item.name} className={`reveal ${index ? `reveal-delay-${index}` : ""}`}>
              <MediaCard
                href={item.href}
                image={item.image}
                imageAlt={item.imageAlt}
                title={item.name}
                body={item.body}
                cta="Learn more"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
