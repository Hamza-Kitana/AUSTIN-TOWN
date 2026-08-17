import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, Scale, ShoppingBag } from "lucide-react";
import logo from "@/assets/at-logo.png";
import city from "@/assets/city-hero.jpg";
import cars from "@/assets/cars.jpg";
import projects from "@/assets/projects.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Austin Town CFW RP — مدينة FiveM بتجربة خرافية" },
      {
        name: "description",
        content:
          "أوستن تاون CFW RP: مدينة FiveM للعب الأدوار. القوانين، المتجر (سيارات ومشاريع) والديسكورد في مكان واحد.",
      },
      { property: "og:title", content: "Austin Town CFW RP" },
      {
        property: "og:description",
        content: "مدينة FiveM للعب الأدوار — القوانين، المتجر والديسكورد.",
      },
    ],
  }),
  component: Home,
});

const tiles = [
  {
    to: "/rules",
    n: "01",
    en: "RULES",
    label: "القوانين",
    desc: "كل ما يجب معرفته قبل دخول المدينة",
    image: city,
    icon: Scale,
  },
  {
    to: "/store",
    n: "02",
    en: "STORE",
    label: "المتجر",
    desc: "سيارات • مشاريع",
    image: cars,
    icon: ShoppingBag,
  },
  {
    to: "/discord",
    n: "03",
    en: "DISCORD",
    label: "الديسكورد",
    desc: "الدعم، التقديم، ومجتمع المدينة",
    image: projects,
    icon: MessageCircle,
  },
] as const;

function Home() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="scene-3d flex w-full flex-col items-center text-center">
        <div className="relative animate-float">
          <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-[2.5rem] bg-primary/40 blur-3xl" />
          <img
            src={logo}
            alt="شعار مدينة أوستن تاون"
            width={168}
            height={168}
            className="h-24 w-24 rounded-[1.6rem] neon-ring sm:h-32 sm:w-32 lg:h-40 lg:w-40"
          />
          <span className="absolute -inset-6 -z-10 animate-spin-slow rounded-full border border-dashed border-primary/40" />
        </div>

        <h1 className="animate-rise mt-5 font-display text-4xl font-black tracking-[0.15em] gradient-text neon-text sm:mt-7 sm:text-6xl lg:text-7xl">
          AUSTIN TOWN
        </h1>
        <p className="animate-rise mt-2 font-display text-sm tracking-[0.6em] text-accent [animation-delay:120ms] sm:mt-3">
          C F W &nbsp; R P
        </p>
        <p className="animate-rise mt-3 max-w-xl text-sm text-muted-foreground [animation-delay:220ms] sm:mt-5 sm:text-base">
          أقوى تجربة لعب أدوار في FiveM — واقعية، احترافية، وبلا حدود. اختر طريقك في المدينة.
        </p>

        <div className="mt-7 grid w-full grid-cols-3 gap-3 sm:mt-10 sm:gap-5">
          {tiles.map((t, i) => {
            const Icon = t.icon;
            return (
              <Link
                key={t.to}
                to={t.to}
                style={{ animationDelay: `${320 + i * 120}ms` }}
                className="group relative isolate flex min-h-[150px] overflow-hidden rounded-2xl text-right neon-ring sm:min-h-[210px] sm:rounded-3xl lg:min-h-[250px]"
              >
                <img
                  src={t.image}
                  alt=""
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/15" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_80%_20%,color-mix(in_oklab,var(--neon)_28%,transparent),transparent_55%)]" />
                <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:animate-sweep group-hover:opacity-100" />

                <div className="relative z-10 flex w-full flex-col justify-between p-3 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-[10px] tracking-[0.35em] text-accent/80 sm:text-xs">
                      {t.n}
                    </span>
                    <span className="grid size-9 place-items-center rounded-xl glass sm:size-12 sm:rounded-2xl">
                      <Icon className="size-4 text-accent sm:size-5" strokeWidth={1.75} />
                    </span>
                  </div>

                  <div>
                    <p className="hidden font-display text-[10px] tracking-[0.45em] text-accent sm:block">
                      {t.en}
                    </p>
                    <h2 className="mt-0.5 font-display text-sm tracking-wide text-foreground sm:mt-1 sm:text-2xl lg:text-3xl">
                      {t.label}
                    </h2>
                    <p className="mt-1 hidden text-xs text-muted-foreground sm:block lg:text-sm">
                      {t.desc}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 text-[10px] text-accent transition-transform duration-300 group-hover:-translate-x-1 sm:mt-4 sm:gap-2 sm:rounded-full sm:glass sm:px-3 sm:py-1.5 sm:text-xs">
                      ادخل الآن
                      <ArrowLeft className="size-3 sm:size-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <p className="absolute bottom-3 text-[11px] tracking-widest text-muted-foreground/70 sm:bottom-4">
        Austin Town CFW RP © 2026
      </p>
    </section>
  );
}
