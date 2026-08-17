import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Car,
  Crosshair,
  Drama,
  Eye,
  Scale,
  Shield,
} from "lucide-react";
import city from "@/assets/city-hero.jpg";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "قوانين المدينة — Austin Town CFW RP" },
      {
        name: "description",
        content:
          "قوانين مدينة أوستن تاون CFW RP في FiveM: قوانين عامة، لعب الأدوار، القتال، العصابات والوظائف الرسمية.",
      },
      { property: "og:title", content: "قوانين Austin Town CFW RP" },
      { property: "og:description", content: "كل قوانين المدينة قبل الدخول للسيرفر." },
    ],
  }),
  component: RulesPage,
});

const sections = [
  {
    n: "01",
    en: "GENERAL",
    icon: Scale,
    title: "القوانين العامة",
    rules: [
      "الاحترام المتبادل بين جميع اللاعبين داخل وخارج اللعبة.",
      "يمنع السب والإساءة للأديان أو الأعراق أو العائلات منعاً تاماً.",
      "يمنع استخدام أي برامج غش أو ثغرات، والعقوبة حظر دائم.",
      "يمنع بيع أو شراء ممتلكات المدينة بأموال حقيقية.",
      "قرار الإدارة نهائي، والنقاش يكون في التكت فقط.",
    ],
  },
  {
    n: "02",
    en: "ROLEPLAY",
    icon: Drama,
    title: "قوانين لعب الأدوار",
    rules: [
      "يجب البقاء في الشخصية دائماً (No Break Character).",
      "يمنع نقل معلومات من خارج اللعبة إلى داخلها (Meta Gaming).",
      "يمنع استخدام معلومات شخصيتك بعد الموت (New Life Rule).",
      "يجب أن يكون لكل تصرف سبب منطقي داخل القصة.",
      "الخطف والسرقة تحتاج سيناريو واضح وموافقة الطرف الآخر بالتفاعل.",
    ],
  },
  {
    n: "03",
    en: "COMBAT",
    icon: Crosshair,
    title: "قوانين القتال",
    rules: [
      "يمنع القتل بدون سبب (RDM) والدهس بدون سبب (VDM).",
      "الحد الأقصى للمشاركين في أي مشاجرة ٦ لاعبين لكل طرف.",
      "يمنع العودة لمكان الحدث قبل مرور ١٥ دقيقة.",
      "يمنع القتال داخل المناطق الآمنة (المستشفى، المطار، مركز الشرطة).",
      "عند رفع اليدين يجب الالتزام بأوامر الطرف الآخر.",
    ],
  },
  {
    n: "04",
    en: "JOBS",
    icon: Shield,
    title: "الوظائف الرسمية",
    rules: [
      "الشرطة والإسعاف يمثلون الدولة ويجب احترام قراراتهم.",
      "يمنع استغلال الوظيفة الرسمية لمصالح شخصية.",
      "لكل وظيفة زي رسمي ومركبة خاصة، ويمنع استخدامها خارج الدوام.",
      "التقديم على الوظائف الرسمية يكون عبر الديسكورد فقط.",
    ],
  },
  {
    n: "05",
    en: "GANGS",
    icon: Eye,
    title: "العصابات والمافيا",
    rules: [
      "تسجيل العصابة إلزامي عند الإدارة مع تحديد المنطقة والقائد.",
      "الحد الأقصى لأعضاء العصابة ٢٠ عضواً.",
      "حرب العصابات تحتاج موافقة إدارية مسبقة.",
      "يمنع سحب أسلحة ثقيلة داخل المناطق العامة بدون سيناريو.",
    ],
  },
  {
    n: "06",
    en: "VEHICLES",
    icon: Car,
    title: "قوانين المركبات",
    rules: [
      "الالتزام بالسرعة القانونية داخل المدينة ١٢٠ كم/س.",
      "يمنع القيادة بشكل غير واقعي (طيران بالسيارة، تسلق الجبال).",
      "المخالفات المرورية تسجل ويجب دفعها في الوقت المحدد.",
    ],
  },
] as const;

function RulesPage() {
  const [active, setActive] = useState(0);
  const current = sections[active] ?? sections[0];
  const CurrentIcon = current.icon;

  return (
    <div className="w-full px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl glass neon-ring">
        <img
          src={city}
          alt="مدينة أوستن تاون ليلاً بأضواء نيون"
          width={1920}
          height={1088}
          loading="lazy"
          className="h-56 w-full object-cover opacity-40 sm:h-72"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-background via-background/50 to-transparent text-center">
          <span className="grid size-16 place-items-center rounded-2xl bg-primary/20 neon-ring">
            <Scale className="size-8 text-accent" strokeWidth={1.6} />
          </span>
          <h1 className="mt-4 font-display text-3xl tracking-[0.2em] gradient-text neon-text sm:text-5xl">
            CITY CODE
          </h1>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            دستور مدينة أوستن تاون — الالتزام به شرط للبقاء
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 px-4 py-3 text-center text-sm text-gold">
        عدم معرفتك بالقانون لا يعفيك من العقوبة — للاستفسار افتح تكت في الديسكورد
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="flex flex-col gap-2 lg:sticky lg:top-28 lg:self-start">
          {sections.map((s, i) => {
            const Icon = s.icon;
            const selected = active === i;
            return (
              <button
                key={s.n}
                type="button"
                onClick={() => setActive(i)}
                className={`group flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-right transition-all duration-300 ${
                  selected
                    ? "glass neon-ring"
                    : "glass text-muted-foreground hover:-translate-x-1 hover:text-foreground"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`grid size-11 place-items-center rounded-xl ${
                      selected ? "bg-primary/25" : "bg-secondary/50"
                    }`}
                  >
                    <Icon className="size-5 text-accent" strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block font-display text-[10px] tracking-[0.35em] text-accent">
                      {s.n} {s.en}
                    </span>
                    <span className="mt-0.5 block text-sm">{s.title}</span>
                  </span>
                </span>
                <span className="font-display text-xs text-accent/70">{s.rules.length}</span>
              </button>
            );
          })}
        </aside>

        <section className="relative overflow-hidden rounded-3xl glass neon-ring">
          <div className="absolute -left-16 -top-16 size-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative border-b border-border/60 p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-display text-xs tracking-[0.45em] text-accent">
                  CHAPTER {current.n}
                </p>
                <h2 className="mt-2 font-display text-2xl tracking-wide sm:text-4xl">{current.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{current.en}</p>
              </div>
              <span className="grid size-16 place-items-center rounded-2xl bg-primary/20 neon-ring">
                <CurrentIcon className="size-8 text-accent" strokeWidth={1.5} />
              </span>
            </div>
          </div>

          <ol className="relative space-y-3 p-5 sm:p-8">
            {current.rules.map((rule, i) => (
              <li
                key={rule}
                style={{ animationDelay: `${i * 70}ms` }}
                className="animate-rise flex gap-4 rounded-2xl bg-secondary/35 p-4 sm:p-5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/20 font-display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1.5 text-sm leading-7 text-foreground/90 sm:text-base">{rule}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="mt-8 rounded-3xl glass p-8 text-center neon-ring">
        <h2 className="font-display text-xl tracking-widest">اقرأ قبل الدخول</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          بعد القوانين، انضم للديسكورد وابدأ رحلتك داخل المدينة.
        </p>
        <a
          href="https://discord.gg/austintown"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-xl bg-primary px-8 py-3 font-display text-sm tracking-widest text-primary-foreground transition-transform duration-300 hover:-translate-y-1 neon-ring"
        >
          فتح تكت في الديسكورد
        </a>
      </div>
    </div>
  );
}
