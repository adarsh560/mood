"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface Task {
  id: number
  title: string
  description: string
  imageUrl?: string
}

interface ScratchCardComponentProps {
  task: Task
  onComplete: () => void
}

export default function ScratchCardComponent({ task, onComplete }: ScratchCardComponentProps) {
  const [isScratched, setIsScratched] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = 320
    canvas.height = 384

    // Create scratch overlay
    const gradient = ctx.createLinearGradient(0, 0, 320, 384)
    gradient.addColorStop(0, '#6b7280')
    gradient.addColorStop(1, '#374151')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 320, 384)

    // Add text
    ctx.fillStyle = 'white'
    ctx.font = 'bold 20px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('💎 Scratch to Reveal', 160, 180)
    ctx.font = '16px Arial'
    ctx.fillText("Today's Task", 160, 210)

    // Set up scratch effect
    ctx.globalCompositeOperation = 'destination-out'
  }, [])

  const scratch = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    let x, y

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left
      y = e.touches[0].clientY - rect.top
    } else {
      x = e.clientX - rect.left
      y = e.clientY - rect.top
    }

    ctx.beginPath()
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()

    // Check if enough is scratched
    const imageData = ctx.getImageData(0, 0, 320, 384)
    const pixels = imageData.data
    let transparent = 0
    
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparent++
    }
    
    if (transparent > pixels.length / 16 && !isScratched) {
      setIsScratched(true)
      onComplete()
    }
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    scratch(e)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing) scratch(e)
  }

  const handleMouseUp = () => {
    setIsDrawing(false)
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDrawing(true)
    scratch(e)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (isDrawing) scratch(e)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDrawing(false)
  }

  return (
    <div className="flex justify-center items-center min-h-[400px] px-4" style={{ touchAction: 'pan-y' }}>
      <Card className="w-full max-w-sm h-96 overflow-hidden relative bg-gray-800 border-gray-700" style={{ touchAction: 'none' }}>
        <CardContent className="p-4 sm:p-6 h-full flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 text-white">
          <h2 className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3">{task.title}</h2>
          <p className="text-xs sm:text-sm text-center text-white/90 leading-relaxed px-2">
            {task.description}
          </p>
        </CardContent>
        
        {!isScratched && (
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full cursor-pointer touch-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'none' }}
          />
        )}
      </Card>
    </div>
  )
}