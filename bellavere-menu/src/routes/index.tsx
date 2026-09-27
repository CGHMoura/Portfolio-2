import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUp, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { menuCategories, restaurant } from "@/data/menu";
import { CategoryNav } from "@/components/CategoryNav";
import { MenuSection } from "@/components/MenuSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bellavere — Culinária Chinesa | Cardápio" },
      {
        name: "description",
        content:
          "Cardápio digital do Bellavere: uma interpretação contemporânea da tradição chinesa. Entradas, dim sum, pratos principais, carnes, frutos do mar, sobremesas e bebidas.",
      },
      { property: "og:title", content: "Bellavere — Culinária Chinesa" },
      {
        property: "og:description",
        content:
          "Uma interpretação contemporânea da tradição chinesa. Consulte nosso cardápio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-colors hover:text-foreground"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border px-5 pb-8 pt-12 text-center">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
          {restaurant.tagline}
        </p>
        <h1 className="font-serif text-5xl font-medium uppercase tracking-[0.12em] text-foreground sm:text-6xl">
          Bellavere
        </h1>
        <div className="mx-auto mt-5 h-px w-12 bg-gold/60" />
      </header>

      <CategoryNav />

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-5 py-14 text-center">
        <p className="fade-in-up font-serif text-2xl font-medium leading-snug text-foreground sm:text-3xl">
          {restaurant.intro}
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Receitas tradicionais preparadas com ingredientes selecionados e
          técnica apurada, servidas em um ambiente de elegância discreta.
        </p>
      </section>

      {/* Menu */}
      <main className="mx-auto max-w-3xl px-5 pb-8">
        {menuCategories.map((category) => (
          <MenuSection key={category.id} category={category} />
        ))}
      </main>

      {/* WhatsApp */}
      <div className="mx-auto max-w-3xl px-5 pb-16 pt-4 text-center">
        <a
          href={`https://wa.me/${restaurant.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-sm border border-border px-8 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-gold hover:text-gold"
        >
          Falar com o restaurante
        </a>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-2xl font-medium uppercase tracking-[0.12em] text-foreground">
            Bellavere
          </p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.35em] text-gold">
            {restaurant.tagline}
          </p>
          <div className="mx-auto mt-8 grid max-w-md gap-6 text-sm text-muted-foreground sm:grid-cols-2">
            <div className="flex flex-col items-center gap-1.5">
              <MapPin className="h-4 w-4 text-gold" />
              <span>{restaurant.address}</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold" />
              <span>{restaurant.hours}</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Phone className="h-4 w-4 text-gold" />
              <span>{restaurant.phone}</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <Instagram className="h-4 w-4 text-gold" />
              <span>{restaurant.instagram}</span>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}
