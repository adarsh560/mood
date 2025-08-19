"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import ScratchCardComponent from '@/components/scratch-card'
import { ArrowLeft, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { getCurrentDayOffset } from '@/lib/utils'

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
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-300">Loading today's virtual adventure...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back Home
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-purple-400">Virtual Days</h1>
        <Button variant="outline" onClick={() => window.location.reload()}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="text-center mb-8">
        <p className="text-lg text-gray-300">
          {isCompleted 
            ? "Task completed! Come back tomorrow for a new adventure 💜" 
            : "Scratch the card below to reveal today's virtual challenge"}
        </p>
      </div>

      {task && !isCompleted && (
        <ScratchCardComponent 
          task={task} 
          onComplete={handleTaskComplete}
        />
      )}

      {isCompleted && task && (
        <div className="flex justify-center">
          <div className="w-80 p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg text-center">
            <h2 className="text-xl font-bold mb-3">{task.title}</h2>
            <p className="text-white/90">{task.description}</p>
            <div className="mt-4 text-green-200">✓ Completed!</div>
          </div>
        </div>
      )}
    </div>
  )
}