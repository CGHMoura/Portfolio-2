import { useEffect, useState } from "react";
import { menuCategories } from "@/data/menu";

export function CategoryNav() {
  const [active, setActive] = useState(menuCategories[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    menuCategories.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl gap-6 overflow-x-auto px-5 py-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {menuCategories.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={`whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.18em] transition-colors ${
              active === c.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
