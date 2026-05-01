import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  activeSection: number
  totalSections: number
}

export default function Layout({ children, activeSection, totalSections }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{
      background: 'linear-gradient(135deg, #0a0000 0%, #13000a 30%, #0d0012 65%, #060010 100%)'
    }}>
      {/* радиальные цветовые акценты */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 75% 15%, rgba(220,38,38,0.13) 0%, transparent 55%), radial-gradient(ellipse at 25% 85%, rgba(109,40,217,0.10) 0%, transparent 55%)'
        }}
      />

      {/* нумерация слайдов — большой фоновый текст */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 1 }}
      >
        <span
          className="font-black text-white transition-all duration-700"
          style={{
            fontSize: 'clamp(200px, 35vw, 500px)',
            opacity: 0.03,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {String(activeSection + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="relative h-full" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  )
}