"use client"

import { useEffect, useState } from 'react'
import { CheckCircle, Heart, Sparkles, Star } from 'lucide-react'
import { Card, CardContent } from './card'

interface CelebrationProps {
  show: boolean
  type?: 'virtual' | 'real'
  onComplete?: () => void
}

export default function Celebration({ show, type = 'virtual', onComplete }: CelebrationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      
      // Generate celebration particles
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      }))
      setParticles(newParticles)

      // Auto hide after animation
      const timer = setTimeout(() => {
        setIsVisible(false)
        onComplete?.()
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [show, onComplete])

  if (!isVisible) return null

  const colors = {
    virtual: {
      gradient: 'from-purple-500 to-indigo-600',
      particles: 'text-purple-400',
      glow: 'shadow-purple-500/50'
    },
    real: {
      gradient: 'from-pink-500 to-rose-600',
      particles: 'text-pink-400',
      glow: 'shadow-pink-500/50'
    }
  }

  const theme = colors[type]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Celebration Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute animate-bounce ${theme.particles}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '2s'
            }}
          >
            {Math.random() > 0.5 ? (
              <Sparkles className="w-6 h-6" />
            ) : (
              <Star className="w-4 h-4" />
            )}
          </div>
        ))}
      </div>

      {/* Main Celebration Card */}
      <Card className={`glass-card border-white/20 ${theme.glow} shadow-2xl animate-scale-102 max-w-md mx-4`}>
        <CardContent className="p-8 text-center">
          <div className={`w-20 h-20 bg-gradient-to-br ${theme.gradient} rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow`}>
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            🎉 Congratulations! 🎉
          </h2>
          
          <p className="text-lg text-gray-300 mb-6">
            You've completed today's {type} adventure! Your connection grows stronger with each shared moment.
          </p>
          
          <div className="flex items-center justify-center gap-2 text-green-400">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Adventure Complete</span>
            <Heart className="w-5 h-5" />
          </div>
          
          <div className="mt-6 text-sm text-gray-400">
            Come back tomorrow for your next journey together
          </div>
        </CardContent>
      </Card>
    </div>
  )
}