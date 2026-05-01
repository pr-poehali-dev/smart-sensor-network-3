import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  slideIndex: number
  subtitle?: ReactNode
  content?: string | ReactNode
  showButton?: boolean
  buttonText?: string
  customContent?: (isActive: boolean) => ReactNode
}

export interface SectionProps extends Section {
  isActive: boolean
}