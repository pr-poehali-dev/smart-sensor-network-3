import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

// ─── данные компонентов в порядке сборки ───────────────────────────────────

const allComponents = [
  {
    name: "AMD Ryzen 9 9950X3D",
    role: "Процессор",
    tag: "CPU",
    price: "52 740 ₽",
    warranty: "1 год",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/992d81ec-f481-4090-96eb-4d81884a03a3.jpg",
    specs: ["16 ядер / 32 потока", "AM5 сокет", "до 5.7 GHz"],
    desc: "Самый мощный рабоче-игровой процессор в мире. Справляется с рендером, стримингом и любой рабочей нагрузкой одновременно.",
  },
  {
    name: "ASRock B850 Phantom Gaming Riptide WiFi",
    role: "Материнская плата",
    tag: "MB",
    price: "17 499 ₽",
    warranty: "3 года",
    image: "https://cdn.poehali.dev/files/1598c99f-9528-4063-863d-d53a1e2eeedc.png",
    specs: ["AM5 сокет", "4 слота M.2", "PCIe 5.0", "WiFi 6E", "2.5G LAN", "8 слоёв PCB"],
    desc: "Подсистема питания: 2x7+2+1 с Vishay SiC661 (80A) для VCore, SoC и Misc питания, и возможно SiC659, в зависимости от региона. 8 слоёв и разъёмы для подключения всего, от 5x16 до кучи М.2 накопителей: 1*5x4; 2*4x4; 1*3x4 (M2_1 (5x4) и M2_2 (4x4) берутся с CPU), да ещё с разъёмами для питания подсветки. А на задней панели: 4 x USB 3.2 Gen1 Type-A, 1 x USB 3.2 Gen2 Type-C, 2 x USB 2.0, 4 x USB 3.2 Gen1, 4 x USB 2.0. Потянет что угодно и когда угодно. Лучший выбор на платформе AM5 за свои деньги.",
  },
  {
    name: "KFA2 RTX 5080 ROCK(X) OC",
    role: "Видеокарта",
    tag: "GPU",
    price: "134 999 ₽",
    warranty: "3 года DNS",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/55908787-a7f4-4c5d-8ecc-c7cad3d5ec91.jpg",
    specs: ["RTX 5080", "3 вентилятора", "350W TDP", "66°C под нагрузкой", "RGB подсветка"],
    desc: "Одно из лучших и тихих исполнений RTX 5080 на рынке. Всего 66°C и по GPU, и по памяти при жоре 350W на 1900 об/мин в ДУШНОМ корпусе. Гарантия DNS 3 года.",
  },
  {
    name: "Acer Predator Pallas II 64 GB DDR5",
    role: "Оперативная память",
    tag: "RAM",
    price: "59 990 ₽",
    warranty: "10 лет DNS (Авито)",
    image: "https://cdn.poehali.dev/files/792a0399-4de1-40f8-8557-105def2de9a8.png",
    specs: ["64 GB", "DDR5", "6000 MHz", "CL30"],
    desc: "64 гигабайта высокоскоростной памяти DDR5 — без компромиссов для любых задач. Берём с Авито, гарантия 10 лет от DNS. Чёрный стелс-дизайн с элегантной белой линией идеально впишется в любую сборку.",
  },
  {
    name: "Fanxiang S910 MAX 2TB + 4TB",
    role: "SSD накопитель",
    tag: "SSD",
    price: "54 358 ₽",
    warranty: "5 лет WB",
    image: "https://cdn.poehali.dev/files/5789b97a-e4cd-4f18-baab-ce8eddbc6e67.png",
    specs: ["PCIe Gen5", "NVMe M.2", "2TB + 4TB", "до 14 000 MB/s", "SM2508 контроллер"],
    desc: "Начинка, как у топового Adata Mars 980: контроллер Silicon Motion SM2508 в связке с чипами памяти Micron B58R TLC 232-слойными. 1/2/4 ГБ DRAM-буфера (в зависимости от объёма). Скорости на чтение и запись у 1 ТБ — 14000/8500 МБ/с, а у 2/4 ТБ — 14000/10000 МБ/с.",
  },
  {
    name: "Thermalright Wonder Vision 360",
    role: "Система жидкостного охлаждения",
    tag: "AIO",
    price: "15 239 ₽",
    warranty: "6 лет ОнлайнТрейд",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/db804bfe-b3bd-454e-bf00-9b5640b6d8a9.jpg",
    specs: ["AMOLED 2K дисплей", "6.67\" 60 Гц", "TL-UB36 2150 RPM", "27 dBA", "S-FDB V2"],
    desc: "Главный фокус — AMOLED-панель 2K (2400×1080, 6.67\") прямо на помпе. Производительность выше конкурентов, цена ниже. На Intel 243 Вт — всего 79.98°C. Ryzen 9 9950X — 91°C (280W). Вентиляторы TL-UB36: 69 CFM, 27 dBA.",
  },
  {
    name: "Phanteks D30 (6 шт.)",
    role: "Корпусные вентиляторы",
    tag: "FAN",
    price: "16 748 ₽",
    warranty: "—",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/a44d96c5-c82b-4958-9a80-7774e989a66e.jpg",
    specs: ["D30 Regular × 3", "D30 Reverse × 3", "ARGB подсветка", "120 мм", "PWM"],
    desc: "Два кита D30 Regular ставим на радиатор СЖО, один кит D30 Reverse — на верх корпуса вместо штатных. Красивая ARGB подсветка и продуманная аэродинамика.",
  },
  {
    name: "1STPLAYER NGDP 1000W",
    role: "Блок питания",
    tag: "PSU",
    price: "11 763 ₽",
    warranty: "10 лет ОнлайнТрейда",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/77f585df-bd9b-4209-af89-c915ef613de7.jpg",
    specs: ["80+ Platinum", "1000W", "ATX 3.1", "Full-Bridge LLC", "Nippon Chemi-Con"],
    desc: "Добрый друг, который всегда поддержит тебя в начинаниях. Full-Bridge LLC с синхронным выпрямлением, конденсаторы Nippon Chemi-Con. Тихий, мощный, надёжный. Гарантия 10 лет от ОнлайнТрейда.",
  },
]

const SpecBadge = ({ tag }: { tag: string }) => (
  <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold tracking-widest border border-red-500/60 text-red-400 bg-red-500/10">
    {tag}
  </span>
)

// ─── слайд одного компонента ────────────────────────────────────────────────

const ComponentSlide = ({ item, isActive }: { item: typeof allComponents[0]; isActive: boolean }) => (
  <div className="flex flex-col lg:flex-row gap-8 h-full items-center">
    <motion.div
      className="relative lg:w-1/2 flex items-center justify-center rounded-2xl overflow-hidden bg-white/5 border border-white/10 min-h-[220px] lg:h-[65vh]"
      initial={{ opacity: 0, x: -40 }}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-red-500/5" />
      <img
        src={item.image}
        alt={item.name}
        className="relative z-10 w-full h-full object-cover"
      />
    </motion.div>

    <motion.div
      className="lg:w-1/2 flex flex-col justify-center gap-4"
      initial={{ opacity: 0, x: 40 }}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div>
        <SpecBadge tag={item.tag} />
        <p className="text-neutral-500 text-xs mt-1">{item.role}</p>
        <h3 className="text-white text-2xl md:text-3xl font-bold mt-1 leading-tight">{item.name}</h3>
      </div>

      <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>

      <div className="flex flex-wrap gap-2">
        {item.specs.map(s => (
          <span key={s} className="text-xs border border-white/10 rounded-lg px-3 py-1.5 text-neutral-300 bg-white/5">
            {s}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
        <div>
          <p className="text-neutral-500 text-xs">Гарантия</p>
          <p className="text-white text-sm font-medium">{item.warranty}</p>
        </div>
        <div className="text-right">
          <p className="text-neutral-500 text-xs">Цена</p>
          <p className="text-red-400 text-2xl font-bold">{item.price}</p>
        </div>
      </div>
    </motion.div>
  </div>
)

// ─── итоговая сборка ───────────────────────────────────────────────────────

const summaryItems = [
  { tag: "CPU", name: "AMD Ryzen 9 9950X3D", price: "52 740 ₽" },
  { tag: "MB", name: "ASRock B850 Phantom Gaming Riptide WiFi", price: "17 499 ₽" },
  { tag: "GPU", name: "KFA2 RTX 5080 ROCK(X) OC", price: "134 999 ₽" },
  { tag: "RAM", name: "Acer Predator Pallas II 64 GB DDR5", price: "59 990 ₽" },
  { tag: "SSD", name: "Fanxiang S910 MAX 2TB + 4TB", price: "54 358 ₽" },
  { tag: "AIO", name: "Thermalright Wonder Vision 360", price: "15 239 ₽" },
  { tag: "FAN", name: "Phanteks D30 × 6 шт.", price: "16 748 ₽" },
  { tag: "PSU", name: "1STPLAYER NGDP 1000W Platinum", price: "11 763 ₽" },
  { tag: "CASE", name: "Corsair AIR 5400", price: "19 600 ₽" },
]

const FinalBuild = ({ isActive }: { isActive: boolean }) => (
  <div className="flex flex-col lg:flex-row gap-8 h-full items-center">
    <motion.div
      className="lg:w-1/2 flex flex-col justify-center"
      initial={{ opacity: 0, x: -40 }}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border border-red-500/30 rounded-2xl p-5 md:p-6 bg-red-500/5">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400 text-sm font-mono tracking-widest uppercase">Готово к заказу</span>
        </div>
        <h3 className="text-white text-xl font-bold mb-1">Ultimate Build 2025</h3>
        <p className="text-neutral-400 text-xs mb-4">Ryzen 9 9950X3D · RTX 5080 · 64 GB DDR5 · 6 TB NVMe PCIe 5.0</p>
        <div className="space-y-1.5 mb-5">
          {summaryItems.map(c => (
            <div key={c.name} className="flex justify-between items-center text-sm border-b border-white/5 pb-1.5 gap-2">
              <span className="text-neutral-300 flex items-center gap-2 min-w-0">
                <SpecBadge tag={c.tag} />
                <span className="hidden sm:inline truncate text-xs text-neutral-400">{c.name}</span>
              </span>
              <span className="text-white font-medium shrink-0">{c.price}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3">
            <span className="text-white font-bold text-base">Итого</span>
            <span className="text-red-400 font-bold text-xl">383 470 ₽</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">
            Оформить заказ
          </button>
          <button className="flex-1 border border-white/20 hover:border-white/40 text-white font-medium py-3 px-6 rounded-xl transition-colors text-sm">
            Вернуться к сборке
          </button>
        </div>
      </div>
    </motion.div>

    <motion.div
      className="relative lg:w-1/2 flex items-center justify-center rounded-2xl overflow-hidden bg-white/5 border border-white/10 min-h-[220px] lg:h-[65vh]"
      initial={{ opacity: 0, x: 40 }}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="absolute inset-0 bg-red-500/5" />
      <img
        src="https://cdn.poehali.dev/files/58003920-e9bb-43bb-8097-47a0acd23ee4.jpg"
        alt="Corsair AIR 5400"
        className="relative z-10 w-full h-full object-cover"
      />
    </motion.div>
  </div>
)

// ─── Hero ──────────────────────────────────────────────────────────────────

const HeroContent = () => (
  <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full px-8 md:px-16 lg:px-24 py-16 gap-8">
    <div className="flex flex-col justify-center max-w-xl shrink-0">
      <Badge variant="outline" className="text-red-400 border-red-500/60 bg-red-500/10 mb-6 self-start">
        Ultimate Gaming & Video Station
      </Badge>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-4">
        Мощь и красота<br />без компромиссов.
      </h1>
      <p className="text-lg text-neutral-400 mb-10 max-w-md">
        Ryzen 9 9950X3D + RTX 5080 в вашем индивидуально выбранном дизайне — идеальный баланс цены и мощности, где мы укладываемся в 400 тыс. рублей.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl transition-colors text-base"
          onClick={() => { document.getElementById('slide-1')?.scrollIntoView({ behavior: 'smooth' }) }}
        >
          Изучить сборку
        </button>
        <button
          className="border border-white/30 hover:border-white/60 text-white font-medium py-3 px-8 rounded-xl transition-colors text-base"
          onClick={() => { document.getElementById('final')?.scrollIntoView({ behavior: 'smooth' }) }}
        >
          Заказать сейчас
        </button>
      </div>
    </div>
    <div className="relative flex-1 flex items-center justify-center min-h-0 lg:max-w-lg xl:max-w-xl w-full">
      <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full" />
      <img
        src="https://cdn.poehali.dev/files/58003920-e9bb-43bb-8097-47a0acd23ee4.jpg"
        alt="Ultimate PC Build"
        className="relative z-10 w-full max-w-md lg:max-w-full object-contain rounded-2xl"
        style={{ maxHeight: '70vh' }}
      />
    </div>
  </div>
)

// ─── экспорт секций ────────────────────────────────────────────────────────

export const sections = [
  {
    id: 'hero',
    title: '',
    slideIndex: 0,
    customContent: (_isActive: boolean) => <HeroContent />,
  },
  ...allComponents.map((comp, i) => ({
    id: `slide-${i + 1}`,
    title: comp.role,
    slideIndex: i + 1,
    customContent: (isActive: boolean) => <ComponentSlide item={comp} isActive={isActive} />,
  })),
  {
    id: 'final',
    title: 'Итоговая сборка.',
    slideIndex: allComponents.length + 1,
    customContent: (isActive: boolean) => <FinalBuild isActive={isActive} />,
  },
]