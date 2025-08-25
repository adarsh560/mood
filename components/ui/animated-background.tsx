"use client"

import { useEffect, useState } from 'react'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
  delay: number
}

export default function AnimatedBackground() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const generateElements = () => {
      const newElements: FloatingElement[] = []
      const colors = [
        'bg-purple-500/5',
        'bg-pink-500/5',
        'bg-blue-500/5',
        'bg-indigo-500/5',
        'bg-violet-500/5'
      ]

      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 200 + 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 20 + 15,
          delay: Math.random() * 5
        })
      }
      setElements(newElements)
    }

    generateElements()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute rounded-full blur-3xl ${element.color} animate-float`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
          }}
        />
      ))}
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-900/10 via-transparent to-indigo-900/10" />
    </div>
  )
}