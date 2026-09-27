import type { MenuCategory } from "@/data/menu";
import harGow from "@/assets/har-gow.jpg";
import patoLaqueado from "@/assets/pato-laqueado.jpg";
import mapoTofu from "@/assets/mapo-tofu.jpg";
import baoChocolate from "@/assets/bao-chocolate.jpg";

const images: Record<string, string> = {
  "har-gow": harGow,
  "pato-laqueado": patoLaqueado,
  "mapo-tofu": mapoTofu,
  "bao-chocolate": baoChocolate,
};

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className="scroll-mt-16 py-10">
      <div className="mb-8 flex items-baseline gap-4">
        <h2 className="font-serif text-3xl font-medium tracking-wide text-foreground">
          {category.label}
        </h2>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="flex flex-col">
        {category.items.map((item) => (
          <article
            key={item.name}
            className="group border-b border-border py-5 last:border-b-0"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-serif text-xl font-medium text-foreground transition-colors group-hover:text-gold">
                {item.name}
              </h3>
              <span className="shrink-0 text-sm font-medium tracking-wide text-foreground">
                {item.price}
              </span>
            </div>
            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
            {item.image && images[item.image] && (
              <img
                src={images[item.image]}
                alt={item.name}
                loading="lazy"
                width={1024}
                height={768}
                className="mt-4 aspect-[4/3] w-full rounded-sm object-cover sm:aspect-[21/9]"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
