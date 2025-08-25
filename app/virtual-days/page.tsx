"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ScratchCardComponent from '@/components/scratch-card'
import { ArrowLeft, RotateCcw, Video, Sparkles, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'

interface Task {
  id: number
  title: string
  description: string
  imageUrl?: string
}

export default function VirtualDaysPage() {
  const [task, setTask] = useState<Task | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTodaysTask()
  }, [])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // Page became visible, refresh the task
        setIsCompleted(false)
        fetchTodaysTask()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  const fetchTodaysTask = async () => {
    try {
      const response = await fetch(`/api/tasks?type=virtual`)
      const data = await response.json()
      setTask(data)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching task:', error)
      setLoading(false)
    }
  }

  const handleTaskComplete = async () => {
    if (task) {
      try {
        await fetch('/api/tasks/complete', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ taskId: task.id })
        })
        setIsCompleted(true)
      } catch (error) {
        console.error('Error completing task:', error)
      }
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[500px]">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-purple-600/30 border-t-purple-600 rounded-full animate-spin mx-auto mb-6"></div>
              <Video className="w-6 h-6 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Preparing Your Virtual Adventure</h3>
            <p className="text-gray-300">Creating something special just for you...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <Link href="/">
          <Button variant="outline" className="glass-card border-white/20 hover:border-white/40 text-white hover:text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back Home
          </Button>
        </Link>
        
        <div className="text-center">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
              <Video className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Virtual Days
            </h1>
          </div>
          <p className="text-gray-400 text-sm">Digital intimacy & connection</p>
        </div>
        
        <Button variant="outline" onClick={() => window.location.reload()} className="glass-card border-white/20 hover:border-white/40 text-white hover:text-white hover:bg-white/10">
          <RotateCcw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Status Message */}
      <div className="text-center mb-12">
        {isCompleted ? (
          <Card className="glass-card border-green-500/30 max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-400 mb-2">Adventure Complete!</h3>
              <p className="text-gray-300">
                Amazing work! Come back tomorrow for a new virtual challenge 💜
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card className="glass-card border-purple-500/30 max-w-md mx-auto">
            <CardContent className="p-6 text-center">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse-slow" />
              <h3 className="text-xl font-semibold text-purple-400 mb-2">Today's Virtual Challenge</h3>
              <p className="text-gray-300">
                Scratch the card below to reveal your intimate digital adventure
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Scratch Card */}
      {task && !isCompleted && (
        <ScratchCardComponent 
          task={task} 
          onComplete={handleTaskComplete}
        />
      )}

      {/* Completed Task Display */}
      {isCompleted && task && (
        <div className="flex justify-center animate-float">
          <Card className="w-full max-w-md glass-card border-purple-500/30 glow-purple">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-purple-400 mb-4">{task.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{task.description}</p>
              <div className="flex items-center justify-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Completed Successfully!</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Next Task Hint */}
      {isCompleted && (
        <div className="text-center mt-12">
          <Card className="glass-card border-white/10 max-w-sm mx-auto">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-400 text-sm">
                Your next virtual adventure will be ready tomorrow
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}