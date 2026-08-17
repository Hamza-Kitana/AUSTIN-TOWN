import cars from "@/assets/cars.jpg";
import gas from "@/assets/gas.jpg";
import projects from "@/assets/projects.jpg";
import city from "@/assets/city-hero.jpg";
import restaurant from "@/assets/restaurant-night.jpg";
import grillExterior from "@/assets/grill-exterior.jpg";
import grillKitchen from "@/assets/grill-kitchen.jpg";
import workshop from "@/assets/workshop-night.jpg";
import workshopExterior from "@/assets/workshop-exterior.jpg";
import workshopBay from "@/assets/workshop-bay.jpg";
import nightclub from "@/assets/nightclub.jpg";
import clubExterior from "@/assets/club-exterior.jpg";
import clubVip from "@/assets/club-vip.jpg";
import gasDowntown from "@/assets/gas-downtown.jpg";
import gasHighway from "@/assets/gas-highway.jpg";
import bugattiFront from "@/assets/bugatti-front.jpg";
import bugattiRear from "@/assets/bugatti-rear.jpg";
import bugattiCabin from "@/assets/bugatti-cabin.jpg";
import gtrFront from "@/assets/gtr-front.jpg";
import gtrRear from "@/assets/gtr-rear.jpg";
import gtrCabin from "@/assets/gtr-cabin.jpg";
import g63Front from "@/assets/g63-night.jpg";
import g63Rear from "@/assets/g63-rear.jpg";
import g63Cabin from "@/assets/g63-cabin.jpg";
import m4Front from "@/assets/m4-front.jpg";
import m4Rear from "@/assets/m4-rear.jpg";
import m4Cabin from "@/assets/m4-cabin.jpg";

export type Category = "cars" | "projects" | "gas";

export type StoreItem = {
  id: string;
  name: string;
  category: Category;
  price: number;
  images: string[];
  tag?: string;
  short: string;
  specs: { label: string; value: string }[];
  details: string[];
};

export function formatUSD(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const categories: { id: Category; label: string; icon: string; image: string }[] = [
  { id: "cars", label: "السيارات", icon: "🏎️", image: cars },
  { id: "projects", label: "المشاريع", icon: "🏢", image: projects },
  { id: "gas", label: "الكازيات", icon: "⛽", image: gas },
];

export const storeItems: StoreItem[] = [
  {
    id: "car-1",
    name: "Bugatti Chiron",
    category: "cars",
    price: 750000,
    images: [bugattiFront, bugattiRear, bugattiCabin],
    tag: "الأسرع",
    short: "وحش الشوارع، سرعة خرافية وثبات عالي في المطاردات.",
    specs: [
      { label: "السرعة القصوى", value: "٤٢٠ كم/س" },
      { label: "التسارع", value: "٢.٤ ثانية" },
      { label: "الدفع", value: "رباعي" },
      { label: "الفئة", value: "Hyper" },
    ],
    details: [
      "تسليم فوري داخل اللعبة بعد إتمام الدفع.",
      "تشمل لوحة مميزة وتخصيص لون واحد مجاناً.",
      "ضمان استرجاع في حال فقدان السيارة بخطأ من السيرفر.",
    ],
  },
  {
    id: "car-2",
    name: "Nissan GT-R R35",
    category: "cars",
    price: 220000,
    images: [gtrFront, gtrRear, gtrCabin],
    tag: "الأكثر طلباً",
    short: "خيار المحترفين للسباقات والدرفت في شوارع أوستن.",
    specs: [
      { label: "السرعة القصوى", value: "٣١٥ كم/س" },
      { label: "التسارع", value: "٢.٩ ثانية" },
      { label: "الدفع", value: "رباعي" },
      { label: "الفئة", value: "Sport" },
    ],
    details: [
      "قابلة للتطوير في ورشة المدينة (تيربو، فرامل، تعليق).",
      "تشمل تظليل وإضاءة نيون مجانية.",
    ],
  },
  {
    id: "car-3",
    name: "Mercedes G63 AMG",
    category: "cars",
    price: 300000,
    images: [g63Front, g63Rear, g63Cabin],
    short: "فخامة وقوة، مناسبة لعصابات المدينة ورجال الأعمال.",
    specs: [
      { label: "السرعة القصوى", value: "٢٤٠ كم/س" },
      { label: "المقاعد", value: "٥" },
      { label: "الدفع", value: "رباعي" },
      { label: "الفئة", value: "SUV" },
    ],
    details: ["مقاومة عالية للتصادم.", "مساحة تخزين كبيرة داخل الصندوق."],
  },
  {
    id: "car-4",
    name: "BMW M4 Competition",
    category: "cars",
    price: 185000,
    images: [m4Front, m4Rear, m4Cabin],
    short: "توازن مثالي بين السرعة والتحكم بسعر منطقي.",
    specs: [
      { label: "السرعة القصوى", value: "٢٩٠ كم/س" },
      { label: "التسارع", value: "٣.٤ ثانية" },
      { label: "الدفع", value: "خلفي" },
      { label: "الفئة", value: "Sport" },
    ],
    details: ["مثالية للدرفت.", "تشمل صيانة مجانية لمدة أسبوع."],
  },
  {
    id: "proj-1",
    name: "مطعم Austin Grill",
    category: "projects",
    price: 1200000,
    images: [grillExterior, restaurant, grillKitchen],
    tag: "دخل ثابت",
    short: "مشروع مطعم كامل في وسط المدينة مع طاقم وسكربتات جاهزة.",
    specs: [
      { label: "الدخل اليومي", value: formatUSD(80000) },
      { label: "عدد الوظائف", value: "٦ موظفين" },
      { label: "الموقع", value: "وسط المدينة" },
      { label: "الترخيص", value: "دائم" },
    ],
    details: [
      "تحكم كامل بالقائمة والأسعار من لوحة الإدارة.",
      "يشمل مخزن ومركبة توصيل خاصة.",
      "إمكانية تعيين وطرد الموظفين وتحديد الرواتب.",
    ],
  },
  {
    id: "proj-2",
    name: "ورشة تعديل سيارات",
    category: "projects",
    price: 950000,
    images: [workshopExterior, workshop, workshopBay],
    short: "ورشة تيونينج مع كل أدوات التعديل والصيانة.",
    specs: [
      { label: "الدخل اليومي", value: formatUSD(65000) },
      { label: "عدد الوظائف", value: "٤ موظفين" },
      { label: "الموقع", value: "المنطقة الصناعية" },
      { label: "الترخيص", value: "دائم" },
    ],
    details: ["تعديل المحركات والهياكل والألوان.", "أسعار الخدمات يحددها المالك."],
  },
  {
    id: "proj-3",
    name: "نادي ليلي Neon Club",
    category: "projects",
    price: 1800000,
    images: [clubExterior, nightclub, clubVip],
    tag: "VIP",
    short: "أشهر نادي في أوستن تاون، دخل ضخم وحضور دائم.",
    specs: [
      { label: "الدخل اليومي", value: formatUSD(120000) },
      { label: "عدد الوظائف", value: "١٠ موظفين" },
      { label: "الموقع", value: "الواجهة البحرية" },
      { label: "الترخيص", value: "دائم" },
    ],
    details: ["نظام حجز طاولات VIP.", "غرفة DJ ونظام إضاءة تفاعلي.", "أمن خاص للنادي."],
  },
  {
    id: "gas-1",
    name: "كازية Downtown",
    category: "gas",
    price: 750000,
    images: [gasDowntown, gas, city],
    tag: "موقع ذهبي",
    short: "كازية في أكثر منطقة حركة داخل المدينة.",
    specs: [
      { label: "الدخل اليومي", value: formatUSD(55000) },
      { label: "عدد المضخات", value: "٦" },
      { label: "متجر مرفق", value: "نعم" },
      { label: "الموقع", value: "Downtown" },
    ],
    details: [
      "تحديد سعر اللتر من لوحة المالك.",
      "يشمل متجر صغير لبيع المشروبات والأدوات.",
      "إمكانية توظيف عامل محطة.",
    ],
  },
  {
    id: "gas-2",
    name: "كازية Highway 12",
    category: "gas",
    price: 520000,
    images: [gasHighway, gas, city],
    short: "على الطريق السريع، مثالية لمن يفضل الحركة السريعة.",
    specs: [
      { label: "الدخل اليومي", value: formatUSD(40000) },
      { label: "عدد المضخات", value: "٤" },
      { label: "متجر مرفق", value: "نعم" },
      { label: "الموقع", value: "الطريق السريع" },
    ],
    details: ["مخزون وقود قابل للترقية.", "دخل إضافي من غسيل السيارات."],
  },
  {
    id: "gas-3",
    name: "كازية Sandy Shore",
    category: "gas",
    price: 390000,
    images: [gas, gasHighway, city],
    short: "بداية مناسبة للاعبين الجدد في عالم الأعمال.",
    specs: [
      { label: "الدخل اليومي", value: formatUSD(28000) },
      { label: "عدد المضخات", value: "٣" },
      { label: "متجر مرفق", value: "لا" },
      { label: "الموقع", value: "ساندي شور" },
    ],
    details: ["أرخص كازية في المدينة.", "قابلة للبيع لاحقاً بنفس السعر."],
  },
];
