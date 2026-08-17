import { createFileRoute } from "@tanstack/react-router";
import { useState, type ComponentType } from "react";
import { BookOpen, Gavel, Scale, UtensilsCrossed } from "lucide-react";
import city from "@/assets/city-hero.jpg";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "قوانين المدينة — Austin Town CFW RP" },
      {
        name: "description",
        content:
          "قوانين مدينة أوستن تاون CFW RP: التعريفات، القوانين العامة، المطاعم والورش، وآلية التحذيرات والباندات.",
      },
      { property: "og:title", content: "قوانين Austin Town CFW RP" },
      { property: "og:description", content: "كل قوانين المدينة قبل الدخول للسيرفر." },
    ],
  }),
  component: RulesPage,
});

type RuleSection = {
  n: string;
  en: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  intros?: { title: string; text: string }[];
  rules: string[];
  notes?: string[];
};

const sections: RuleSection[] = [
  {
    n: "01",
    en: "DEFINITIONS",
    icon: BookOpen,
    title: "التعريفات",
    intros: [
      {
        title: "تعريف الحياة الواقعية",
        text: "يجب عليك تقمص الشخصية داخل الرول بلاي سواء كانت شخصيتك مسعف، محامي، عسكري، عصابة، مواطن سواء شاب أو رجل مسن.",
      },
      {
        title: "تعريف تقدير الحياة",
        text: "يجب عليك تقدير موقفك في أي حالة كنت متواجد فيها.",
      },
    ],
    rules: [],
  },
  {
    n: "02",
    en: "GENERAL",
    icon: Scale,
    title: "القوانين العامة",
    rules: [
      'يمنع التواصل الغير شرعي "Meta Gaming".',
      'ممنوع استخدام المركبة كسلاح "VDM".',
      'ممنوع القتل العشوائي "RDM".',
      "يجب بناء كاركتر خاص فيك وتقمصه بشكل ممتاز بالأقوال والأفعال.",
      "يمنع إهانة الشخص المسقط بأي حال من الأحوال.",
      "يمنع تقليد ملابس الشرطة والإسعاف.",
      "يمنع الخروج عن الرول بلاي داخل السيرفر لأي سبب من الأسباب.",
      "أمر /ooc يستخدم للمشاكل الخارجة عن الأر بي.",
      "في حال أسقطت يحق لك التحدث عن الألم فقط ويمنع التحدث طبيعي.",
      "يمنع استخدام القلتشات أو الثغرات البرمجية والهاك وعقوبتها باند نهائي.",
      "لا يحق لك تحريك الجثة إلا بغرض المساعدة.",
      "يمنع أي اتفاق خارج الرول بلاي.",
      "يجب تشغيل برنامج التصوير مع الصوت أثناء اللعب (20د).",
      "يمنع التدخل في سيناريو قائم.",
      "يمنع على المسعفين التواجد في مكان طلق نار إلا بعد التأكد أن المكان خالي.",
      "ترابط الشخصية الأولى مع الثانية ممنوع.",
      "الشخصنة ممنوعة منعاً باتاً بجميع أنواعها.",
      "يمنع نقل المسقطين أو تعبئة بياناتهم في وجود المسعفين.",
      "يمنع منعاً باتاً لبس عدة الغوص خارج البحر.",
      "يمنع منعاً باتاً أن يطلق السائق النار.",
      "يجب احترام الجميع والتعامل معهم على ما يقتضيه الواقع، ويمنع إهانتهم أو استفزازهم بطرق غير أخلاقية، ويمنع الكلام الجنسي.",
      "يمنع القفز بالمركبة قفزات انتحارية.",
      "في حال تحللت يجب عليك نسيان المتسبب بموتك.",
      "في حال تم إسقاطك في حالة يمنع منعاً باتاً الرجوع إلى موقع الحالة.",
      "التعرف على الشخص يكون عن طريق الشكل ويمنع التعرف عليه من صوته.",
      "يجب عليك أن تضع سلامتك وسلامة زميلك في المقام الأول عند التعرّض لأي تهديد، وخاصة في الحالات التي لا تملك فيها القدرة على المقاومة.",
      "يمنع استخدام أي ملف يضر بيئة اللعب.",
      "يمنع خطف أو تعرّض كل من: المسعفين، المحامين، العقاري، FBI، الإعلاميين.",
      "يمنع سرقة أغراض الشرطة أو المسعفين.",
      "يمنع التربص للموظفين الحكوميين وانتظار الشخص عند مقر الوظيفة أو نقاط التوقف.",
      "يمنع إزعاج موظفين المطاعم والورش والعساكر والمسعفين في أماكن العمل أو التلفظ عليهم.",
      "يمنع الاحتماء والاستفزاز بالمناطق الآمنة، وفي حال الاحتماء يحق لك استكمال السيناريو في حالة الخطف فقط، ويستثنى بهذا المناطق الآمنة التالية: مركز الشرطة والمستشفى وشقق المواطنين.",
      "يمنع حمل اللاعب أثناء ركوب المركبة وأيضاً أثناء وجود إطلاق نار (فايت).",
      "في حال فقدان أربع إطارات من المركبة يمنع استكمال قيادتها.",
      "يمنع التعرف على الأشخاص من خلال إعطاء أيتم أو الآيدي منعاً باتاً (الكذب على الشخص باسمك وعند إعطاءه أيتم يتم التعرف على الاسم).",
      "يجب عليك أخذ جميع المواقف الجدية بشكل جدي مثل: مواجهة عسكري أو محامي أو مسعف.",
      "جميع الوظائف الحكومية تعتبر مناطقها آمنة.",
      "يمنع استخدام أمر /ME للتحدث في حال الإسقاط.",
      "يمنع سرقة أو استعمال الطائرات.",
      "يمنع بيع الممنوعات أو التلميح لها في المناطق الآمنة أو نشرها على مواقع التواصل الاجتماعي.",
    ],
  },
  {
    n: "03",
    en: "BUSINESS",
    icon: UtensilsCrossed,
    title: "المطاعم والورش",
    rules: [
      "احترام الموظفين أثناء عملهم.",
      "يُمنع خطف أو سرقة موظفين المطاعم والورش (داخل منطقة العمل فقط).",
      "البيع فقط داخل المطاعم فقط.",
      "يُمنع لبس ملابس الموظفين والإجرام.",
      "يُمنع استغفال الموظف وتغيير الملابس والرجوع للمطعم في خلال مدة قصيرة.",
    ],
  },
  {
    n: "04",
    en: "WARNS",
    icon: Gavel,
    title: "التحذيرات والباندات",
    rules: [
      "@warn 1 — باند من ساعة إلى ساعتين",
      "@warn 2 — باند يوم واحد",
      "@warn 3 — باند 3 أيام",
      "@warn 4 — باند 7 أيام + إعادة تفعيل",
      "@BANNED — باند نهائي، ولك أحقية طلب فرصة عند مرور شهر من تاريخ الباند",
    ],
    notes: [
      "في حال مرور 30 يوم يُشال تحذير 1 @warn 1",
      "في حال مرور 30 يوم يتحول التحذير 2 إلى تحذير 1 @warn 2",
      "في حال مرور 30 يوم يتحول التحذير 3 إلى تحذير 2 @warn 3",
      "سيتم إزالة التحذير تلقائياً.",
      "هناك حالات تقديرية لكل مخالفة، بمعنى قد تصل المخالفات للباند النهائي دون الرجوع لتسلسل التحذيرات.",
    ],
  },
];

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
            const items = s.rules.length + (s.intros?.length ?? 0);
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
                <span className="font-display text-xs text-accent/70">{items}</span>
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

          <div className="relative space-y-3 p-5 sm:p-8">
            {current.intros?.map((intro, i) => (
              <article
                key={intro.title}
                style={{ animationDelay: `${i * 70}ms` }}
                className="animate-rise rounded-2xl bg-secondary/35 p-5 sm:p-6"
              >
                <h3 className="font-display text-base tracking-wide text-accent sm:text-lg">
                  {intro.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-foreground/90 sm:text-base">{intro.text}</p>
              </article>
            ))}

            {current.rules.map((rule, i) => (
              <div
                key={rule}
                style={{ animationDelay: `${(current.intros?.length ?? 0) * 70 + i * 40}ms` }}
                className="animate-rise flex gap-4 rounded-2xl bg-secondary/35 p-4 sm:p-5"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/20 font-display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1.5 text-sm leading-7 text-foreground/90 sm:text-base">{rule}</p>
              </div>
            ))}

            {current.notes?.length ? (
              <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-5 sm:p-6">
                <h3 className="font-display text-sm tracking-widest text-gold">مدة التحذير وطريقة إزالته</h3>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-foreground/90">
                  {current.notes.map((note) => (
                    <li key={note} className="flex gap-2">
                      <span className="text-gold">◆</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      </div>

      <div className="mt-8 rounded-3xl glass p-8 text-center neon-ring">
        <h2 className="font-display text-xl tracking-widest">اقرأ قبل الدخول</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          بعد القوانين، انضم للديسكورد وابدأ رحلتك داخل المدينة.
        </p>
        <a
          href="https://discord.gg/aust"
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
