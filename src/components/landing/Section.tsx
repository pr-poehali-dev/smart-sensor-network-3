import { motion } from "framer-motion"
import type { SectionProps } from "@/types"

export default function Section({ id, title, isActive, customContent }: SectionProps) {
  const hasCustomContent = !!customContent
  const isHero = id === 'hero'

  if (hasCustomContent && isHero) {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex items-center">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {customContent(isActive)}
        </motion.div>
      </section>
    )
  }

  if (hasCustomContent) {
    return (
      <section id={id} className="relative h-screen w-full snap-start flex flex-col overflow-hidden">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white px-8 md:px-16 pt-8 pb-3 shrink-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="flex-1 overflow-hidden px-8 md:px-16 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {customContent(isActive)}
        </motion.div>
      </section>
    )
  }

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24">
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
    </section>
  )
}
