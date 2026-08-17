import { createFileRoute } from "@tanstack/react-router";
import { useState, type ComponentType } from "react";
import { BookOpen, Flag, Gavel, Scale, ShieldCheck, Skull, UtensilsCrossed } from "lucide-react";
import city from "@/assets/city-hero.jpg";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "قوانين المدينة — Austin Town CFW RP" },
      {
        name: "description",
        content:
          "قوانين مدينة أوستن تاون CFW RP: التعريفات، القوانين العامة، الإجرام، العصابات، المناطق الآمنة، والتحذيرات.",
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
  rulesTitle?: string;
  rules: string[];
  blocks?: { title: string; rules: string[] }[];
  notesTitle?: string;
  notes?: string[];
  groups?: { title: string; hint?: string; items: { label: string; value: string }[] }[];
  levels?: { code: string; duration: string; tone: "warn1" | "warn2" | "warn3" | "warn4" | "ban" }[];
  decay?: { from: string; to: string }[];
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
    en: "CRIME",
    icon: Skull,
    title: "قوانين الإجرام",
    intros: [
      {
        title: "تعريف الإجرام",
        text: "يجب عليك قياس وضعك بالحياة الواقعية عند الإجرام أو كنت مخطوف، بالقوة أو الخوف.",
      },
    ],
    rules: [
      "يمنع مقاومة السلاح الأبيض في حال عدم وجود أي سلاح باليد، أيضاً يمنع مقاومة السلاح الناري بسلاح أبيض.",
      "يجب على المواطن المخطوف تقمص شخصية الرهينة.",
      "في حال خطف الرهينة يجب على الخاطف التوجه إلى مكان التفاوض في أسرع وقت ممكن وعدم إطالة عملية الخطف.",
      "إذا خطفت مواطن وأصبح رهينة، لديك فقط 20 دقيقة لبداية تنفيذ السيناريو، وفي حال تم تخطي هذه المدة ولم تبدأ السيناريو يجب عليك إطلاق سراح الرهينة.",
      "يجب أن يكون التهديد بشكل مباشر حيث لا يمكنك التهديد وأنت بداخل المركبة.",
      "يمنع السرقة قبل الإعصار بـ 20 دقيقة.",
      "يمنع منعاً باتاً كلبشة أي شخص قبل استسلامه لك ورفع يديه.",
      "يحق للرهينة الهروب من المكان في حال وجود فرصة مثل عدم انتباه الخاطفين أو استغفالهم.",
      "في حال تم تهديد المواطن وانصاع لأوامرك لا يحق لك قتله تحت أي ظرف كان، وفي حال عدم الانصياع ومحاولة المقاومة يحق لك قتله.",
      "يمنع قتل أي شخص لسبب تافه أو لأجل أمر شخصي.",
      "الحد الأقصى لطلب فدية تحرير رهينة واحدة هي 800$ ويكون التسليم يداً بيد.",
      "يمنع الاحتماء بالمناطق الآمنة أو الاستفزاز أو بيع الممنوعات داخلها، كما يُمنع إطلاق النار في المناطق الآمنة تحت أي ظرف.",
      "يجب عليك قبل بداية أي سرقة التخطيط ووضع هدف للسرقة وتدخل خارجي إن وجد.",
      "يمنع منعاً باتاً الاعتداء على مفاوض الشرطة، كما يمنع التفاوض على رهينة ليست في موقع الجريمة.",
      "يمنع الاتفاق مع الرهينة.",
      "يجب على المجرم الحفاظ على الرهينة وعدم قتله لأسباب شخصية أو بسبب تافه، لابد أن يكون السبب مقنع ويستاهل القتل.",
      "يمنع استدراج الشرطي أو الميكانيكي أو التاكسي مثال: إرسال طلب لهم ثم خطفهم. كما يُمنع استدراج المواطنين عبر التطبيقات بأي وسيلة كانت بغرض خطفهم.",
      "يمنع تحالف العصابات ضد الشرطة أو ضد عصابة أخرى.",
      "يمنع في حالة الاستيقاف المروري خطف العسكري أو قتله.",
      "يمنع تقليد ملابس العصابات.",
      "يمنع الخطف والتهديد في حال وجود مواطن أو 2 من المدنيين أو أكثر.",
      "يمنع إهانة المخطوف ويجب التعامل معه بما يحدث، ولا يتم الضغط عليه أو إهانته أو استفزازه ويترتب على ذلك الباند.",
      "لا يسمح بإطلاق النار العشوائي أو بغرض جذب العساكر.",
      "يمنع الإجرام كالخطف والسرقات بمركبات المخصصة للوظائف كالتاكسي والسطحات وغيرها.",
      "يجب عليك ارتداء القناع في السرقات تجنب إدراجك في قائمة المطلوبين.",
      "يمنع استعمال الهوم والإيموتات وقت الفايت.",
      "يمنع عليك كلاعب في السيرفر المحاولة في تسبب أي عداوة بهدف الشخصنة أو التلويت والقتل واستخدام الأسلحة، راح يتم تبنيدك مباشرة. العداوة تأتي بعد عدة خلافات داخل الأر بي أقلها 3 مواقف مع تصوير.",
      "لا تعتبر الرهينة مخطوفة إلا في حال تم تقييدها، ويحق له الهروب في حال عدم انتباه الخاطفين.",
    ],
    groups: [
      {
        title: "عدد الأشخاص بالسرقات",
        items: [
          { label: "Store Robbery", value: "1-3" },
          { label: "ATM Robbery", value: "1-3" },
          { label: "House Robbery", value: "1-4" },
          { label: "Police Staff House", value: "2-5" },
        ],
      },
      {
        title: "سرقات تتطلب رهينة",
        hint: "يجب عليك جلب رهينة لهذه السرقات",
        items: [
          { label: "DigitalDen Robbery", value: "2-5" },
          { label: "Laundromat Robbery", value: "2-5" },
          { label: "Cash Exchange Robbery", value: "3-6" },
          { label: "Jewelry Robbery", value: "3-7" },
          { label: "Blane County Robbery", value: "4-7" },
          { label: "Maze Bank", value: "5-10" },
        ],
      },
      {
        title: "الحالات المفتوحة",
        items: [
          { label: "For Players", value: "7 MAX" },
          { label: "For Police", value: "11 MAX" },
        ],
      },
    ],
  },
  {
    n: "05",
    en: "GANGS",
    icon: Flag,
    title: "قوانين العصابات",
    rulesTitle: "القوانين العامة للعصابة",
    rules: [
      "يمنع التعاون بين العصابات في الحرب ضد العصابة أو الشرطة، ويُسمح الصلح بين العصابتين والاتفاقيات بينهم في الأعمال والسرقات فقط وليس للفايت.",
      "يجب احترام حارات العصابات والخوف على حياتك، وفي حال دخول شخص لمنطقة العصابات يجب عليك تقمص الأر بي والتفاهم معه والتصرف على حسب حالة الشخص. موظفو الوظائف العامة والوظائف الحكومية لا يحق لأي عصابة التدخل فيهم إلا في حالة الاستفزاز.",
      "كل عضو في العصابة يمثل العصابة بأكملها. (انتقي أفرادك بعناية ولا تكن سبباً في إقفال عصابتك)",
      "يمنع استخدام الأسلوب الجاف مع رجال الشرطة، ويمنع المصطلحات غير اللائقة بعد الانتصار.",
      "يمنع انتحال أو تقليد ملابس عصابة أخرى.",
      "يُسمح بالتعاون عصابة مع عصابة أخرى بالسرقات.",
      "يستطيع أي لاعب التواجد أو السكن في حارة العصابات في حال سمحت له العصابة ويكون تحت حمايتهم، بشرط ألا يتدخل في أمور العصابة أبداً وألا تسبب حمايته بمشاكل تؤدي إلى إطلاق النار.",
      "يحق للعصابات الدفاع عن ممتلكاتهم أو مقرهم في حال وجود مداهمة عسكرية.",
      "في حال معرفة أعضاء الشرطة عن مكان العصابة أو مكان مستودعات العصابة لها الحق في الاقتحام.",
      "التواجد بلبس العصابة واللون المخصص لعصابتك في الحالات الإجرامية وأي شيء يخص نظام العصابات من حرب الفلاقات والحوارات بين العصابات إلخ.",
      "تُمنع الشخصنة بجميع أنواعها أو الكلام اللي ماله داعي على المسقطين في الحرب بين العصابات. (خلوا الوضع حبي)",
      "يجب عليك تقمص رول بلاي العصابات بالشكل الصحيح مثل الحوار بينك وبين العصابة وصنع هيبة لك في المدينة.",
      "يمنع منعاً باتاً إهانة العصابات الأخرى بأي طريقة من الأشكال سواء بالرقص أو الإهانات أو الهياط أو الكلام اللي ماله داعي أو التصوير.",
      "يمنع في أي حرب عصابات سرقة مركبات نهائياً في كل حالات الحرب.",
      "يمنع تحريك الجثث، والتلويت يكون في مكان الجثة، ويمنع الرقص والإساءة للخصم.",
      "ممنوع الإساءة لعصابة أخرى سواء في بثك أو بثوث أخرى.",
      "يمنع التحالف منعاً باتاً، مقولة «لا تجيني ولا أجيك» تُمنع منعاً باتاً، وأي عصابتين تتحالف أو يكون فيها نوع من التحالف راح يتم إقفال العصابتين كلها. أر بي العصابة لازم إنك تكون أنت مسيطر.",
      "يجب عليك احترام المافيا وعدم تقليل الاحترام بدون سبب، وأيضاً الخوف على حياتك وعصابتك من أنك تكون سنتش أو خائن وتحمل عواقبها بالأر بي.",
      "يمنع التحدث عن أي مشكلة داخل السيرفر أو في بث، بإمكانك فتح تكت وطرح مشكلتك باستثناء مشاكل العصابات داخل الأر بي.",
      "في حال شخص دخل حارتك وما احترم أفراد العصابة بإمكانك إسقاطه وتلويته. (في حال السبب كان غير منطقي في تلويت الشخص راح يتم محاسبة العصابة)",
      "في حال سرقة مركبة لعصابة أخرى بإمكانك استعمالها، ويمنع منعاً باتاً سرقتها بهدف وضعها بالحارة.",
      "التلويت يحق لك تلويت كامل الأغراض ما عدا الأغراض الشخصية (جوال، هوية، رخصة، مفاتيح المنازل، راديو، لابتوب، إلخ).",
      "في حال محاولتك لاستخدام ثغرة بأي قانون راح يتم محاسبتك.",
    ],
    blocks: [
      {
        title: "قوانين الحروب والفلاقات",
        rules: [
          "بمجرد أنك وضعت علمك في منطقة معينة راح تتكون بقعة خاصة لعصابتك.",
          "يجب على جميع أفراد عصابتك أن يكونون مسجلين باللابتوب، وفي حال تم رصد شخص ليس لديه رول بالدسكورد أو مو مسجل باللابتوب راح يتم تحذير العصابة مباشرة.",
          "في حال هجومك على منطقة عصابة (Remove Flag) يجب أن يكون عدد المهاجمين على المنطقة 8 واللي يدافعون عن المنطقة 8، ويمنع التسبيق للعصابة اللي جاية تدافع.",
          "في حال هجومك على منطقة عصابة (Contest Flag) يجب أن يكون المهاجمين على المنطقة 6 واللي يدافعون عن المنطقة 6، ويمنع التسبيق للعصابة اللي جاية تدافع.",
          "في حال البيع بمنطقة عصابة (Sell Drugs) يجب أن يكون عدد المهاجمين على المنطقة 4 واللي يدافعون عن المنطقة 4، ويمنع التسبيق للعصابة اللي جاية تدافع، ويحق للطرف المدافع التلويت فقط.",
          "في حال حرب الفلاقات يحق التلويت للطرفين في حال كان العلم مترابط مع علمك.",
          "يُسمح بأنك تسوي Contest و Remove Flag لأي عصابة بعيدة عنك، والتلويت يكون من طرف المدافع فقط.",
          "يحق لك البيع بمنطقة عصابة بعيدة عنك.",
          "في حال كان الفايت مع علم مترابط مع علمك بإمكانك التلويت والفايت قائم، ويمنع الانسحاب من موقع الفايت إلا في حال انتهاء الفايت بشكل كامل.",
          "يمنع منعاً باتاً التوجه إلى موقع فايت أو الاقتراب منه أو مساعدة أفراد عصابتك بأي طريقة وأنت عدد زائد. (لا تقرب للمكان نهائياً)",
          "في حال سويت Contest و Remove Flag يمنع منعاً باتاً حجب رؤية العلم بأي مركبة أو أي وسيلة كانت.",
          "في حال البيع بمنطقة أي عصابة يمنع استدراج البوت بأي موقع مغلق أو الإقفال عليه.",
          "يمنع تواجد أكثر من 4 أشخاص في منطقة العصابة المراد البيع فيها.",
          "الكونتست يكون على آخر علم للعصابة أو أي علم مترابط مع علمك ما عدا العلم الأساسي للحارة.",
          "لا يحق لأي عصابة الهجوم على العلم الأساسي إلا بعد إزالة الأعلام التي داخل حدود الحارة.",
          "في حال بدأ الفايت ممنوع استخدام أي إيموت، ومن يخالف ذلك سيتم المحاسبة.",
          "في حال مشاركتك بأي فايت يخص العصابات لابد من وجود تصوير للفايت لمدة 24 ساعة، في حال لم يتم استدعاءك احذفه، وفي حال عدم وجوده سيتم محاسبة العصابة.",
          "في حال كان الفايت مع علم غير مترابط مع علمك بإمكانك التلويت بعد انتهاء الفايت ويكون التلويت للطرف المدافع فقط.",
        ],
      },
      {
        title: "شروط وضع الفلاق",
        rules: [
          "أولاً يجب عليك وضع الفلاق في مكان مناسب. (وضعك للفلاق يوضح أنك مسيطر على المنطقة)",
          "يمنع منعاً باتاً وضع الفلاق بأماكن مرتفعة (باستخدام شاحنات أو مركبات ووضعها بشكل طبيعي).",
          "يمنع أنك تحط الفلاق في أماكن تحت الأرض مثل الأنفاق وما إلى ذلك.",
          "يُسمح بأنك تحط الفلاق في أماكن عامة ولكن تحمل ما يجيك من قبل الشرطة.",
          "يجب عليك أنك تضع الفلاق حولك وتحمي منطقتك.",
          "أي فلاق ليس مناسب أو مكانه مو منطقي راح يتم حذفه بدون الرجوع إليك ودون تعويضك.",
          "يمنع وضع أي فلاق آخر دون وصول الفلاق السابق لفل ماكس (100).",
          "يمنع وضع أي أعلام أخرى في حال فلاق سابق نقص البوينت عن 100. (يجب عليك تلفيله ومن ثم وضع الفلاق)",
          "في حال تم كسر سلسلة الأعلام معاك مهلة 48 ساعة لربط السلسلة من جديد وإلا سيتم إزالة بقية الأعلام.",
        ],
      },
    ],
    groups: [
      {
        title: "أعداد الحروب والفلاقات",
        items: [
          { label: "Remove Flag", value: "8 vs 8" },
          { label: "Contest Flag", value: "6 vs 6" },
          { label: "Sell Drugs", value: "4 vs 4" },
        ],
      },
    ],
  },
  {
    n: "06",
    en: "SAFE ZONES",
    icon: ShieldCheck,
    title: "المناطق الآمنة",
    intros: [
      {
        title: "قانون المنطقة الآمنة",
        text: "يمنع إطلاق النار فيها أو عمل إجرام فيها تحت أي ظرف.",
      },
    ],
    rules: [
      "الشقق بكل أنواعها.",
      "المستشفى ومركز الشرطة.",
      "ورشات التصليح.",
      "جميع الوظائف وتشمل: الموارد، السطحة، التاكسي، السمك، وأي وظيفة مستقبلاً.",
      "المطاعم والمقاهي منطقة استبدال الموارد.",
      "جميع مواقف المناطق الآمنة يمنع فيها أي عمل إجرامي مثل: مواقف القسم، المستشفى، مواقف الشقق الخلفية، إلى آخره.",
    ],
    notesTitle: "تنويه",
    notes: ["جميع القوانين قابلة للتغيير في أي وقت."],
  },
  {
    n: "07",
    en: "WARNS",
    icon: Gavel,
    title: "التحذيرات والباندات",
    rules: [],
    levels: [
      { code: "@warn 1", duration: "باند من ساعة إلى ساعتين", tone: "warn1" },
      { code: "@warn 2", duration: "باند يوم واحد", tone: "warn2" },
      { code: "@warn 3", duration: "باند 3 أيام", tone: "warn3" },
      { code: "@warn 4", duration: "باند 7 أيام + إعادة تفعيل", tone: "warn4" },
      {
        code: "@BANNED",
        duration: "باند نهائي — يحق طلب فرصة بعد مرور شهر من تاريخ الباند",
        tone: "ban",
      },
    ],
    notesTitle: "مدة التحذير وطريقة إزالته",
    decay: [
      { from: "@warn 1", to: "يُشال بعد 30 يوم" },
      { from: "@warn 2", to: "يتحول إلى @warn 1 بعد 30 يوم" },
      { from: "@warn 3", to: "يتحول إلى @warn 2 بعد 30 يوم" },
    ],
    notes: [
      "سيتم إزالة التحذير تلقائياً.",
      "هناك حالات تقديرية لكل مخالفة، بمعنى قد تصل المخالفات للباند النهائي دون الرجوع لتسلسل التحذيرات.",
    ],
  },
];

function RulesPage() {
  const [active, setActive] = useState(0);
  const current = sections[active] ?? sections[0];
  if (!current) return null;
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
        عدم معرفتك بالقانون لا يعفيك من العقوبة — جميع القوانين قابلة للتغيير في أي وقت
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
        <aside className="flex flex-col gap-2 lg:sticky lg:top-28 lg:self-start">
          {sections.map((s, i) => {
            const Icon = s.icon;
            const selected = active === i;
            const items =
              s.rules.length +
              (s.intros?.length ?? 0) +
              (s.levels?.length ?? 0) +
              (s.blocks?.reduce((total, block) => total + block.rules.length, 0) ?? 0);
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

            {current.rulesTitle ? (
              <h3 className="pt-2 font-display text-sm tracking-widest text-accent">{current.rulesTitle}</h3>
            ) : null}

            {current.levels?.length ? (
              <div className="space-y-3">
                {current.levels.map((level, i) => {
                  const tones = {
                    warn1: {
                      wrap: "border-accent/30 bg-accent/10",
                      badge: "bg-accent/20 text-accent",
                      bar: "from-accent to-transparent",
                    },
                    warn2: {
                      wrap: "border-gold/35 bg-gold/10",
                      badge: "bg-gold/20 text-gold",
                      bar: "from-gold to-transparent",
                    },
                    warn3: {
                      wrap: "border-orange-400/35 bg-orange-500/10",
                      badge: "bg-orange-500/20 text-orange-300",
                      bar: "from-orange-400 to-transparent",
                    },
                    warn4: {
                      wrap: "border-red-400/40 bg-red-500/10",
                      badge: "bg-red-500/20 text-red-300",
                      bar: "from-red-400 to-transparent",
                    },
                    ban: {
                      wrap: "border-red-500/60 bg-red-600/20 neon-ring",
                      badge: "bg-red-600 text-white",
                      bar: "from-red-500 to-transparent",
                    },
                  } as const;
                  const tone = tones[level.tone];
                  return (
                    <div
                      key={level.code}
                      style={{ animationDelay: `${i * 80}ms` }}
                      className={`animate-rise relative overflow-hidden rounded-2xl border p-4 sm:p-5 ${tone.wrap}`}
                    >
                      <span className={`absolute inset-y-0 right-0 w-1.5 bg-gradient-to-b ${tone.bar}`} />
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span
                            className={`grid size-11 place-items-center rounded-xl font-display text-sm ${tone.badge}`}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <p dir="ltr" className="font-display text-lg tracking-wide sm:text-xl">
                              {level.code}
                            </p>
                            <p className="mt-1 text-sm text-foreground/85">{level.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : null}

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

            {current.blocks?.map((block) => (
              <div key={block.title} className="space-y-3 pt-4">
                <h3 className="font-display text-sm tracking-widest text-accent">{block.title}</h3>
                {block.rules.map((rule, i) => (
                  <div
                    key={rule}
                    className="animate-rise flex gap-4 rounded-2xl bg-secondary/35 p-4 sm:p-5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/20 font-display text-sm text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1.5 text-sm leading-7 text-foreground/90 sm:text-base">{rule}</p>
                  </div>
                ))}
              </div>
            ))}

            {current.groups?.map((group) => (
              <div key={group.title} className="rounded-2xl border border-border/70 bg-secondary/25 p-5 sm:p-6">
                <h3 className="font-display text-sm tracking-widest text-accent">{group.title}</h3>
                {group.hint ? (
                  <p className="mt-1 text-xs text-muted-foreground">{group.hint}</p>
                ) : null}
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl bg-background/40 px-4 py-3 text-sm"
                    >
                      <span dir="ltr" className="font-display text-foreground">
                        {item.label}
                      </span>
                      <span dir="ltr" className="font-display text-accent">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {current.decay?.length ? (
              <div className="rounded-2xl border border-gold/30 bg-gold/10 p-5 sm:p-6">
                <h3 className="font-display text-sm tracking-widest text-gold">
                  {current.notesTitle ?? "مدة التحذير"}
                </h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {current.decay.map((step) => (
                    <div
                      key={step.from}
                      className="rounded-xl bg-background/40 px-4 py-4 text-center"
                    >
                      <p dir="ltr" className="font-display text-base text-gold">
                        {step.from}
                      </p>
                      <p className="mt-2 text-xs leading-6 text-foreground/85">{step.to}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {current.notes?.length ? (
              <div className="mt-4 rounded-2xl border border-gold/30 bg-gold/10 p-5 sm:p-6">
                <h3 className="font-display text-sm tracking-widest text-gold">
                  {current.decay?.length ? "تنويه" : (current.notesTitle ?? "ملاحظات")}
                </h3>
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
