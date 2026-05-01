import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  activeSection: number
  totalSections: number
}

export default function Layout({ children, activeSection, totalSections }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #0d0d1a 30%, #0a0a0a 60%, #120800 100%)'
    }}>
      {/* градиентный акцент */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(249,115,22,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(59,130,246,0.06) 0%, transparent 60%)'
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
            opacity: 0.025,
            lineHeight: 1,
            letterSpacing: '-0.05em',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {String(activeSection + 1).padStart(2, '0')}
        </span>
      </div>

      {/* тонкая сетка */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          zIndex: 2,
        }}
      />

      <div className="relative h-full" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  )
}
