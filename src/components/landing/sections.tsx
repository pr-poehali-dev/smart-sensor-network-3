import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── данные всех компонентов ───────────────────────────────────────────────

const allComponents = [
  {
    name: "1STPLAYER NGDP 1000W",
    role: "Блок питания",
    tag: "PSU",
    price: "11 763 ₽",
    warranty: "10 лет",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/77f585df-bd9b-4209-af89-c915ef613de7.jpg",
    specs: ["80+ Platinum", "1000W", "ATX 3.1", "Full-Bridge LLC", "Nippon Chemi-Con"],
    desc: "Добрый друг, который всегда поддержит тебя в начинаниях. Full-Bridge LLC с синхронным выпрямлением, топология DC-DC, конденсаторы Nippon Chemi-Con 680 мкФ на 400В. Вентилятор Hong Hua на FDB-подшипнике. Тихий, мощный, надёжный.",
  },
  {
    name: "Thermalright Wonder Vision 360",
    role: "СЖО 360 мм",
    tag: "AIO",
    price: "15 239 ₽",
    warranty: "6 лет",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/db804bfe-b3bd-454e-bf00-9b5640b6d8a9.jpg",
    specs: ["AMOLED 2K дисплей", "6.67\" 60 Гц", "TL-UB36 2150 RPM", "27 dBA", "S-FDB V2"],
    desc: "Главный фокус — AMOLED-панель 2K (2400×1080, 6.67\") прямо на помпе. Производительность выше конкурентов, цена ниже. На Intel 243 Вт — всего 79.98°C. Вентиляторы TL-UB36: 69 CFM, 27 dBA.",
  },
  {
    name: "AMD Ryzen 9 9950X3D",
    role: "Процессор",
    tag: "CPU",
    price: "52 740 ₽",
    warranty: "3 года",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/992d81ec-f481-4090-96eb-4d81884a03a3.jpg",
    specs: ["16 ядер / 32 потока", "3D V-Cache", "AM5 сокет", "до 5.7 GHz", "170W TDP"],
    desc: "Самый мощный рабоче-игровой процессор в мире. 3D V-Cache делает его непобедимым в играх, а 16 ядер справляются с рендером, стримингом и любой рабочей нагрузкой одновременно.",
  },
  {
    name: "KFA2 RTX 5080 ROCK(X) OC",
    role: "Видеокарта",
    tag: "GPU",
    price: "144 999 ₽",
    warranty: "3 года DNS",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/55908787-a7f4-4c5d-8ecc-c7cad3d5ec91.jpg",
    specs: ["RTX 5080", "3 вентилятора", "350W TDP", "66°C под нагрузкой", "RGB подсветка"],
    desc: "Одно из лучших и тихих исполнений RTX 5080 на рынке. Всего 66°C и по GPU, и по памяти при жоре 350W на 1900 об/мин в ДУШНОМ корпусе. Гарантия DNS 3 года.",
  },
  {
    name: "Phanteks D30 (6 шт.)",
    role: "Вентиляторы",
    tag: "FAN",
    price: "16 748 ₽",
    warranty: "—",
    image: "https://cdn.poehali.dev/projects/1c130b2a-705a-4ccb-9adf-188d4984560c/bucket/a44d96c5-c82b-4958-9a80-7774e989a66e.jpg",
    specs: ["D30 Regular × 3", "D30 Reverse × 3", "ARGB подсветка", "120 мм", "PWM"],
    desc: "Два кита D30 Regular ставим на радиатор СЖО, один кит D30 Reverse — на верх корпуса вместо штатных корсаров. Красивая ARGB подсветка и продуманная аэродинамика.",
  },
]

const SpecBadge = ({ tag }: { tag: string }) => (
  <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold tracking-widest border border-orange-500/60 text-orange-400 bg-orange-500/10">
    {tag}
  </span>
)

// ─── слайдер комплектующих ─────────────────────────────────────────────────

const ComponentsSlider = () => {
  const [current, setCurrent] = useState(0)
  const item = allComponents[current]

  return (
    <div className="flex flex-col h-full">
      {/* навигация по компонентам */}
      <div className="flex gap-2 flex-wrap px-8 md:px-12 pt-3 pb-2 shrink-0">
        {allComponents.map((c, i) => (
          <button
            key={c.tag}
            onClick={() => setCurrent(i)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold tracking-widest border transition-all ${
              i === current
                ? "border-orange-500 bg-orange-500/20 text-orange-400"
                : "border-white/15 text-neutral-500 hover:border-white/30 hover:text-neutral-300"
            }`}
          >
            {c.tag}
          </button>
        ))}
      </div>

      {/* карточка */}
      <div className="flex-1 overflow-hidden px-8 md:px-12 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex flex-col lg:flex-row gap-6 h-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
          >
            {/* фото */}
            <div className="relative lg:w-1/2 flex items-center justify-center rounded-2xl overflow-hidden bg-white/5 border border-white/10 min-h-[180px]">
              <div className="absolute inset-0 bg-orange-500/5" />
              <img
                src={item.image}
                alt={item.name}
                className="relative z-10 w-full h-full object-cover"
              />
            </div>

            {/* инфо */}
            <div className="lg:w-1/2 flex flex-col justify-center gap-4">
              <div>
                <SpecBadge tag={item.tag} />
                <p className="text-neutral-500 text-xs mt-1">{item.role}</p>
                <h3 className="text-white text-xl md:text-2xl font-bold mt-1 leading-tight">{item.name}</h3>
              </div>

              <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>

              <div className="flex flex-wrap gap-2">
                {item.specs.map(s => (
                  <span key={s} className="text-xs border border-white/10 rounded-lg px-3 py-1 text-neutral-300 bg-white/5">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                <div>
                  <p className="text-neutral-500 text-xs">Гарантия</p>
                  <p className="text-white text-sm font-medium">{item.warranty}</p>
                </div>
                <div className="text-right">
                  <p className="text-neutral-500 text-xs">Цена</p>
                  <p className="text-orange-400 text-xl font-bold">{item.price}</p>
                </div>
              </div>

              {/* стрелки */}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setCurrent(i => Math.max(0, i - 1))}
                  disabled={current === 0}
                  className="flex-1 border border-white/15 rounded-xl py-2 text-sm text-neutral-400 hover:border-white/30 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Назад
                </button>
                <button
                  onClick={() => setCurrent(i => Math.min(allComponents.length - 1, i + 1))}
                  disabled={current === allComponents.length - 1}
                  className="flex-1 border border-orange-500/40 rounded-xl py-2 text-sm text-orange-400 hover:bg-orange-500/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Далее →
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

// ─── итоговая сборка ───────────────────────────────────────────────────────

const summaryItems = [
  { tag: "CPU", name: "AMD Ryzen 9 9950X3D", price: "52 740 ₽" },
  { tag: "MB", name: "ASRock B850 Riptide WiFi", price: "17 499 ₽" },
  { tag: "RAM", name: "Acer Predator Pallas II 64 GB DDR5", price: "59 990 ₽" },
  { tag: "GPU", name: "KFA2 RTX 5080 ROCK(X) OC", price: "144 999 ₽" },
  { tag: "SSD", name: "Fanxiang S910 MAX 2TB + 4TB", price: "54 358 ₽" },
  { tag: "AIO", name: "Thermalright Wonder Vision 360", price: "15 239 ₽" },
  { tag: "PSU", name: "1STPLAYER NGDP 1000W Platinum", price: "11 763 ₽" },
  { tag: "CASE", name: "Corsair AIR 5400", price: "19 600 ₽" },
  { tag: "FAN", name: "Phanteks D30 × 6 шт.", price: "16 748 ₽" },
]

const FinalBuild = () => (
  <div className="w-full max-w-2xl">
    <div className="border border-orange-500/30 rounded-2xl p-6 md:p-8 bg-orange-500/5">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-orange-400 text-sm font-mono tracking-widest uppercase">Готово к заказу</span>
      </div>
      <h3 className="text-white text-2xl font-bold mb-1">Ultimate Build 2025</h3>
      <p className="text-neutral-400 text-sm mb-5">Ryzen 9 9950X3D · RTX 5080 · 64 GB DDR5 · 6 TB NVMe PCIe 5.0</p>
      <div className="space-y-1.5 mb-6">
        {summaryItems.map(c => (
          <div key={c.name} className="flex justify-between items-center text-sm border-b border-white/5 pb-1.5">
            <span className="text-neutral-300 flex items-center gap-2">
              <SpecBadge tag={c.tag} />
              <span className="hidden sm:inline">{c.name}</span>
            </span>
            <span className="text-white font-medium">{c.price}</span>
          </div>
        ))}
        <div className="flex justify-between items-center pt-3">
          <span className="text-white font-bold text-lg">Итого</span>
          <span className="text-orange-400 font-bold text-xl">393 470 ₽</span>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-xl transition-colors">
          Оформить заказ
        </button>
        <button className="flex-1 border border-white/20 hover:border-white/40 text-white font-medium py-3 px-6 rounded-xl transition-colors">
          Вернуться в профиль
        </button>
      </div>
    </div>
  </div>
)

// ─── Hero ──────────────────────────────────────────────────────────────────

const HeroContent = () => (
  <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full px-8 md:px-16 lg:px-24 py-16 gap-8">
    <div className="flex flex-col justify-center max-w-xl shrink-0">
      <Badge variant="outline" className="text-orange-400 border-orange-500/60 bg-orange-500/10 mb-6 self-start">
        Ultimate Gaming & Work Station
      </Badge>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-4">
        Мощь без<br />компромиссов.
      </h1>
      <p className="text-lg text-neutral-400 mb-10 max-w-md">
        Ryzen 9 9950X3D + RTX 5080 — самая производительная рабоче-игровая станция из доступных на рынке.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 px-8 rounded-xl transition-colors text-base"
          onClick={() => { document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' }) }}
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
      <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full" />
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
    customContent: <HeroContent />
  },
  {
    id: 'components',
    title: 'Каждый компонент — лучший в своём классе.',
    customContent: <ComponentsSlider />
  },
  {
    id: 'final',
    title: 'Итоговая сборка.',
    customContent: <FinalBuild />
  }
]
