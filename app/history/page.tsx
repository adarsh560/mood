"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calendar, Heart, Video } from 'lucide-react'
import Link from 'next/link'

interface LogEntry {
  id: number
  date: string
  task: {
    title: string
    description: string
    type: string
    imageUrl?: string
  }
}

export default function HistoryPage() {
  const [logs, setLogs] = useState<LogEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For now, we'll show some sample data since we don't have auth yet
    const sampleLogs: LogEntry[] = [
      {
        id: 1,
        date: new Date().toISOString(),
        task: {
          title: "Intimate Conversation",
          description: "Share your deepest fantasy",
          type: "virtual"
        }
      }
    ]
    setLogs(sampleLogs)
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
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
        <h1 className="text-3xl font-bold text-gray-800">Our Journey</h1>
        <div></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {logs.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">No completed tasks yet</h3>
              <p className="text-gray-600">Start your journey by completing your first task!</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {logs.map((log) => (
              <Card key={log.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {log.task.type === 'virtual' ? (
                        <Video className="w-5 h-5 text-purple-600" />
                      ) : (
                        <Heart className="w-5 h-5 text-pink-600" />
                      )}
                      <CardTitle className="text-lg">{log.task.title}</CardTitle>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(log.date).toLocaleDateString()}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{log.task.description}</p>
                  <div className="mt-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      log.task.type === 'virtual' 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'bg-pink-100 text-pink-700'
                    }`}>
                      {log.task.type === 'virtual' ? 'Virtual Day' : 'Real Day'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}