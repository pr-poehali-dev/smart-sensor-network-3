import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Section from './Section'
import Layout from './Layout'
import { sections } from './sections'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.round(scrollPosition / windowHeight)
        setActiveSection(Math.min(newActiveSection, sections.length - 1))
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Layout activeSection={activeSection} totalSections={sections.length}>
      {/* боковая навигация — точки */}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-4 gap-1">
        {sections.map((section, index) => (
          <button
            key={section.id}
            title={section.title || 'Главная'}
            className={`rounded-full transition-all duration-300 ${
              index === activeSection
                ? 'bg-orange-500 w-2 h-5 scale-110'
                : 'bg-white/20 hover:bg-white/40 w-2 h-2'
            }`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </nav>

      {/* прогресс-бар сверху */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-orange-500 origin-left z-30"
        style={{ scaleX }}
      />

      {/* номер слайда снизу слева */}
      <div className="fixed bottom-6 left-8 z-30 flex items-center gap-3">
        <span className="text-orange-400 font-mono font-bold text-sm tabular-nums">
          {String(activeSection + 1).padStart(2, '0')}
        </span>
        <div className="w-12 h-px bg-white/20" />
        <span className="text-white/30 font-mono text-sm tabular-nums">
          {String(sections.length).padStart(2, '0')}
        </span>
      </div>

      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
          />
        ))}
      </div>
    </Layout>
  )
}
