import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import {
  categories,
  formatUSD,
  storeItems,
  type Category,
  type StoreItem,
} from "@/data/store-items";

export const Route = createFileRoute("/store")({
  head: () => ({
    meta: [
      { title: "المتجر — Austin Town CFW RP" },
      {
        name: "description",
        content:
          "متجر مدينة أوستن تاون CFW RP: سيارات رياضية، مشاريع استثمارية وكازيات مع كل التفاصيل والأسعار.",
      },
      { property: "og:title", content: "متجر Austin Town CFW RP" },
      { property: "og:description", content: "سيارات، مشاريع وكازيات بأسعار المدينة." },
    ],
  }),
  component: StorePage,
});

function StorePage() {
  const [active, setActive] = useState<Category>("cars");
  const [selected, setSelected] = useState<StoreItem | null>(null);

  const items = useMemo(
    () => storeItems.filter((i) => i.category === active),
    [active],
  );

  return (
    <div className="w-full px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-display text-3xl tracking-[0.2em] gradient-text neon-text sm:text-5xl">
          STORE
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          جميع الأسعار بالدولار الأمريكي (USD) — اضغط على أي كرت لعرض التفاصيل
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <FilterChip
            key={c.id}
            label={c.label}
            icon={c.icon}
            active={active === c.id}
            onClick={() => setActive(c.id)}
          />
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            style={{ animationDelay: `${i * 70}ms` }}
            className="tilt-card animate-flip group relative overflow-hidden rounded-2xl glass text-right"
          >
            <CardGallery item={item} />
            <div className="p-4">
              <h2 className="font-display text-base tracking-wide">{item.name}</h2>
              <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{item.short}</p>
              <div className="mt-3 flex items-center justify-between">
                <span dir="ltr" className="font-display text-sm text-accent neon-text">
                  {formatUSD(item.price)}
                </span>
                <span className="text-xs text-muted-foreground group-hover:text-accent">
                  التفاصيل ←
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selected ? <ItemModal item={selected} onClose={() => setSelected(null)} /> : null}
    </div>
  );
}

function FilterChip({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-sm transition-all duration-300 ${
        active
          ? "bg-primary/25 text-foreground neon-ring"
          : "glass text-muted-foreground hover:-translate-y-0.5 hover:text-foreground"
      }`}
    >
      <span className="ml-1">{icon}</span>
      {label}
    </button>
  );
}

function CardGallery({ item }: { item: StoreItem }) {
  const [index, setIndex] = useState(0);
  const hoverRef = useRef<HTMLDivElement>(null);
  const cover = item.images[0];
  const current = item.images[index] ?? cover;

  useEffect(() => {
    const el = hoverRef.current;
    if (!el || item.images.length < 2) return;
    let timer: number | undefined;
    const start = () => {
      timer = window.setInterval(() => {
        setIndex((i) => (i + 1) % item.images.length);
      }, 1300);
    };
    const stop = () => {
      if (timer !== undefined) window.clearInterval(timer);
    };
    const reset = () => {
      stop();
      setIndex(0);
    };
    el.addEventListener("mouseenter", start);
    el.addEventListener("mouseleave", reset);
    return () => {
      stop();
      el.removeEventListener("mouseenter", start);
      el.removeEventListener("mouseleave", reset);
    };
  }, [item.images.length]);

  return (
    <div ref={hoverRef} className="relative h-44 overflow-hidden">
      <img
        key={current}
        src={current}
        alt={item.name}
        width={1024}
        height={768}
        loading="lazy"
        className="animate-fade-swap h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      {item.tag ? (
        <span className="absolute right-3 top-3 rounded-full bg-primary/80 px-3 py-1 text-[11px] text-primary-foreground neon-ring">
          {item.tag}
        </span>
      ) : null}
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[11px] text-accent">
        <Images className="size-3" />
        {item.images.length} صور
      </span>
      <div className="absolute bottom-3 left-3 flex -space-x-2 space-x-reverse">
        {item.images.slice(0, 3).map((src, i) => (
          <span
            key={`${src}-${i}`}
            className={`overflow-hidden rounded-md ring-1 ring-border ${
              i === index ? "neon-ring z-10" : "opacity-80"
            }`}
          >
            <img src={src} alt="" width={48} height={36} className="h-8 w-11 object-cover" />
          </span>
        ))}
      </div>
    </div>
  );
}

function ItemModal({ item, onClose }: { item: StoreItem; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const count = item.images.length;
  const current = item.images[index] ?? item.images[0];

  useEffect(() => {
    setIndex(0);
  }, [item.id]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setIndex((i) => (i + 1) % count);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setIndex((i) => (i - 1 + count) % count);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, count]);

  if (typeof document === "undefined") return null;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return createPortal(
    <div
      className="animate-overlay fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={item.name}
        onClick={(e) => e.stopPropagation()}
        className="animate-modal max-h-[90vh] w-[min(920px,96vw)] overflow-y-auto rounded-3xl glass neon-ring"
      >
        <div className="relative h-64 overflow-hidden rounded-t-3xl sm:h-80">
          <img
            key={current}
            src={current}
            alt={`${item.name} — صورة ${index + 1}`}
            width={1280}
            height={720}
            className="animate-fade-swap h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق"
            className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-sm hover:text-accent"
          >
            ✕
          </button>
          <span
            dir="ltr"
            className="absolute right-4 top-4 rounded-full glass px-3 py-1 font-display text-xs text-accent"
          >
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="الصورة التالية"
                className="absolute left-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full glass hover:text-accent"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="الصورة السابقة"
                className="absolute right-3 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-full glass hover:text-accent"
              >
                <ChevronRight className="size-5" />
              </button>
            </>
          ) : null}

          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
            <div className="flex gap-2">
              {item.images.map((src, i) => (
                <button
                  key={`${src}-${i}`}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`عرض الصورة ${i + 1}`}
                  className={`overflow-hidden rounded-lg transition-all duration-300 ${
                    i === index
                      ? "neon-ring scale-105 ring-2 ring-accent"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={src} alt="" width={88} height={56} className="h-12 w-16 object-cover sm:h-14 sm:w-[4.5rem]" />
                </button>
              ))}
            </div>
            <h2 className="font-display text-xl tracking-wide neon-text sm:text-2xl">{item.name}</h2>
          </div>
        </div>

        <div className="p-6 text-right">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">{item.short}</p>
            <span
              dir="ltr"
              className="rounded-xl bg-primary/25 px-4 py-2 font-display text-base text-foreground neon-ring"
            >
              {formatUSD(item.price)}
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {item.specs.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between rounded-xl bg-secondary/40 px-4 py-3 text-sm"
              >
                <span className="text-muted-foreground">{s.label}</span>
                <span dir="ltr" className="font-display text-accent">
                  {s.value}
                </span>
              </div>
            ))}
          </div>

          <h3 className="mt-6 font-display text-sm tracking-widest text-accent">التفاصيل</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {item.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="text-accent">◆</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://discord.gg/aust"
            target="_blank"
            rel="noreferrer"
            className="mt-6 block rounded-xl bg-primary py-3 text-center font-display text-sm tracking-widest text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 neon-ring"
          >
            الشراء عبر الديسكورد
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}
