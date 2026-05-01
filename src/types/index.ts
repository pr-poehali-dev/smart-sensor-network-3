import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string | ReactNode
  showButton?: boolean
  buttonText?: string
  customContent?: ReactNode
}

export interface SectionProps extends Section {
  isActive: boolean
}
