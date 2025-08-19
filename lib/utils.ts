import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCurrentDayOffset(): number {
  const startDate = new Date('2024-01-01')
  const today = new Date()
  const diffTime = Math.abs(today.getTime() - startDate.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  return diffDays % 90
}

export function getTodaysTaskId(type: 'virtual' | 'real'): number {
  const dayOffset = getCurrentDayOffset()
  const seed = type === 'virtual' ? 1000 : 2000
  return (dayOffset + seed) % 90
}