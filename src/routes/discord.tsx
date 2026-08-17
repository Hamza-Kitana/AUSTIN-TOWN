import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Megaphone, Ticket, Trophy } from "lucide-react";
import logo from "@/assets/at-logo.png";
import city from "@/assets/city-hero.jpg";

export const Route = createFileRoute("/discord")({
  head: () => ({
    meta: [
      { title: "الديسكورد — Austin Town CFW RP" },
      {
        name: "description",
        content:
          "انضم إلى سيرفر ديسكورد مدينة أوستن تاون CFW RP في FiveM: الدعم، التقديم على الوظائف، والتحديثات.",
      },
      { property: "og:title", content: "ديسكورد Austin Town CFW RP" },
      { property: "og:description", content: "انضم لمجتمع المدينة وابدأ رحلتك." },
    ],
  }),
  component: DiscordPage,
});

const perks = [
  {
    n: "01",
    en: "TICKETS",
    icon: Ticket,
    title: "نظام التكتات",
    desc: "دعم فني ومتابعة الشكاوى على مدار الساعة.",
  },
  {
    n: "02",
    en: "UPDATES",
    icon: Megaphone,
    title: "التحديثات",
    desc: "كل جديد في المدينة يعلن أولاً في الديسكورد.",
  },
  {
    n: "03",
    en: "JOBS",
    icon: Briefcase,
    title: "التقديم للوظائف",
    desc: "شرطة، إسعاف، ميكانيكي وأكثر.",
  },
  {
    n: "04",
    en: "EVENTS",
    icon: Trophy,
    title: "فعاليات وجوائز",
    desc: "سباقات وفعاليات أسبوعية بجوائز داخل اللعبة.",
  },
] as const;

function DiscordPage() {
  return (
    <div className="w-full px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl glass neon-ring">
        <img
          src={city}
          alt="أضواء مدينة أوستن تاون"
          width={1920}
          height={1088}
          loading="lazy"
          className="h-56 w-full object-cover opacity-40 sm:h-72"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-background via-background/40 to-transparent text-center">
          <img
            src={logo}
            alt="شعار المدينة"
            width={80}
            height={80}
            className="h-20 w-20 animate-float rounded-2xl neon-ring"
          />
          <h1 className="mt-4 font-display text-3xl tracking-[0.2em] gradient-text neon-text sm:text-5xl">
            DISCORD
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">مكان الاتفاق، الدعم، والمجتمع</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p, i) => {
          const Icon = p.icon;
          return (
            <article
              key={p.title}
              style={{ animationDelay: `${i * 90}ms` }}
              className="group relative isolate min-h-[230px] overflow-hidden rounded-3xl glass p-6 text-right neon-ring animate-flip"
            >
              <div className="absolute -left-10 -top-10 size-36 rounded-full bg-primary/25 blur-3xl transition-opacity duration-500 opacity-70 group-hover:opacity-100" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_120%,color-mix(in_oklab,var(--neon)_22%,transparent),transparent_55%)]" />
              <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:animate-sweep group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <span className="font-display text-xs tracking-[0.35em] text-accent/80">{p.n}</span>
                  <span className="grid size-14 place-items-center rounded-2xl bg-primary/20 neon-ring">
                    <Icon className="size-7 text-accent" strokeWidth={1.6} />
                  </span>
                </div>

                <p className="mt-8 font-display text-[10px] tracking-[0.45em] text-accent">{p.en}</p>
                <h2 className="mt-1 font-display text-xl tracking-wide sm:text-2xl">{p.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>

              <span className="absolute inset-x-6 bottom-0 h-0.5 origin-right scale-x-50 bg-gradient-to-l from-accent to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl glass p-8 text-center neon-ring">
        <h2 className="font-display text-xl tracking-widest">انضم الآن لمدينة أوستن تاون</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          اقرأ القوانين، خذ رولك، وابدأ قصتك داخل المدينة.
        </p>
        <a
          href="https://discord.gg/aust"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-xl bg-primary px-8 py-3 font-display text-sm tracking-widest text-primary-foreground transition-transform duration-300 hover:-translate-y-1 neon-ring"
        >
          دخول السيرفر
        </a>
        <p className="mt-4 text-xs text-muted-foreground">discord.gg/aust</p>
      </div>
    </div>
  );
}
