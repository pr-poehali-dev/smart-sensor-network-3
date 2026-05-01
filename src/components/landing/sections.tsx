import { Badge } from "@/components/ui/badge"

const components = [
  {
    name: "AMD Ryzen 9 9950X3D",
    role: "Процессор",
    desc: "Самый мощный рабоче-игровой процессор в мире. 16 ядер, 3D V-Cache, непревзойдённая производительность в играх и в работе одновременно.",
    price: "52 740 ₽",
    tag: "CPU"
  },
  {
    name: "ASRock B850 Riptide WiFi",
    role: "Материнская плата",
    desc: "Лучшая ATX-плата за свои деньги. Мощная подсистема питания, 8 слоёв, WiFi, Bluetooth, куча M.2 слотов — выдержит любой процессор.",
    price: "17 499 ₽",
    tag: "MB"
  },
  {
    name: "Acer Predator Pallas II 64 GB DDR5",
    role: "Оперативная память",
    desc: "64 ГБ, 6000 МГц, тайминги 30-38-38-76, чипы SK Hynix A-Die. Гарантия 10 лет от DNS. Температура в играх около 50°C.",
    price: "59 990 ₽",
    tag: "RAM"
  },
  {
    name: "KFA2 RTX 5080 ROCK(X) OC 3FAN RGB",
    role: "Видеокарта",
    desc: "Одно из лучших и тихих исполнений RTX 5080 на рынке. Всего 66°C при полной нагрузке 350W. Гарантия DNS 3 года.",
    price: "144 999 ₽",
    tag: "GPU"
  },
  {
    name: "Fanxiang S910 MAX",
    role: "NVMe SSD PCIe 5.0",
    desc: "Контроллер SM2508, чипы Micron B58R TLC 232-слойные. Скорость до 14 000 МБ/с на чтение. Доступно 2 TB и 4 TB.",
    price: "от 21 698 ₽",
    tag: "SSD"
  },
  {
    name: "Thermalright Wonder Vision 360 UB ARGB",
    role: "СЖО 360 мм",
    desc: "AMOLED 2K дисплей на помпе, производительность выше конкурентов, цена ниже. Вентиляторы TL-UB36, 2150 RPM. Гарантия 6 лет.",
    price: "15 239 ₽",
    tag: "AIO"
  },
  {
    name: "1STPLAYER NGDP 1000W 80+ Platinum",
    role: "Блок питания",
    desc: "Full-Bridge LLC, Nippon Chemi-Con конденсаторы, ATX 3.1. Надёжный и тихий. Гарантия 10 лет.",
    price: "11 763 ₽",
    tag: "PSU"
  },
  {
    name: "Corsair AIR 5400",
    role: "Корпус",
    desc: "Премиальный корпус с отличной вентиляцией и боковым стеклом. Твой билд будет виден во всей красе.",
    price: "19 600 ₽",
    tag: "CASE"
  },
  {
    name: "Phanteks D30 (6 шт.)",
    role: "Вентиляторы",
    desc: "Два кита D30 Regular на радиатор СЖО + кит D30 Reverse на верх корпуса вместо штатных корсаров.",
    price: "16 748 ₽",
    tag: "FAN"
  }
]

const SpecBadge = ({ tag }: { tag: string }) => (
  <span className="inline-block px-2 py-0.5 rounded text-xs font-mono font-bold tracking-widest border border-orange-500/60 text-orange-400 bg-orange-500/10">
    {tag}
  </span>
)

const ComponentCard = ({ name, role, desc, price, tag }: typeof components[0]) => (
  <div className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-sm hover:border-orange-500/40 transition-colors">
    <div className="flex items-start justify-between gap-3 mb-2">
      <div>
        <SpecBadge tag={tag} />
        <p className="text-xs text-neutral-500 mt-1">{role}</p>
        <h3 className="text-white font-semibold text-base leading-tight mt-1">{name}</h3>
      </div>
      <span className="text-orange-400 font-bold text-sm whitespace-nowrap shrink-0">{price}</span>
    </div>
    <p className="text-neutral-400 text-sm leading-relaxed">{desc}</p>
  </div>
)

const ComponentsGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
    {components.map(c => <ComponentCard key={c.name} {...c} />)}
  </div>
)

const FinalBuild = () => (
  <div className="w-full max-w-2xl">
    <div className="border border-orange-500/30 rounded-2xl p-8 bg-orange-500/5">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        <span className="text-orange-400 text-sm font-mono tracking-widest uppercase">Готово к заказу</span>
      </div>
      <h3 className="text-white text-2xl font-bold mb-2">Ultimate Build 2025</h3>
      <p className="text-neutral-400 text-sm mb-6">Ryzen 9 9950X3D · RTX 5080 · 64 GB DDR5 · 6 TB NVMe PCIe 5.0</p>
      <div className="space-y-2 mb-8">
        {components.map(c => (
          <div key={c.name} className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
            <span className="text-neutral-300 flex items-center gap-2">
              <SpecBadge tag={c.tag} />
              {c.name}
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

export const sections = [
  {
    id: 'hero',
    title: '',
    customContent: <HeroContent />
  },
  {
    id: 'components',
    title: 'Каждый компонент — лучший в своём классе.',
    customContent: <ComponentsGrid />
  },
  {
    id: 'final',
    title: 'Итоговая сборка.',
    customContent: <FinalBuild />
  }
]