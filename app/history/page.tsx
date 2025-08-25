"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calendar, Heart, Video, Sparkles, Star, Trophy, Clock } from 'lucide-react'
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
  const [stats, setStats] = useState({
    totalCompleted: 0,
    virtualCompleted: 0,
    realCompleted: 0,
    streak: 0
  })

  useEffect(() => {
    // Enhanced sample data to show the improved design
    const sampleLogs: LogEntry[] = [
      {
        id: 1,
        date: new Date().toISOString(),
        task: {
          title: "Intimate Video Call",
          description: "Share your deepest fantasy while looking into each other's eyes",
          type: "virtual"
        }
      },
      {
        id: 2,
        date: new Date(Date.now() - 86400000).toISOString(),
        task: {
          title: "Passionate Embrace",
          description: "Try the 'Lotus' position for deep connection and eye contact",
          type: "real"
        }
      },
      {
        id: 3,
        date: new Date(Date.now() - 172800000).toISOString(),
        task: {
          title: "Love Letter Exchange",
          description: "Write each other a heartfelt letter about your favorite memory together",
          type: "virtual"
        }
      }
    ]
    
    setLogs(sampleLogs)
    setStats({
      totalCompleted: sampleLogs.length,
      virtualCompleted: sampleLogs.filter(log => log.task.type === 'virtual').length,
      realCompleted: sampleLogs.filter(log => log.task.type === 'real').length,
      streak: 3
    })
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[500px]">
          <div className="text-center">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-purple-600/30 border-t-purple-600 rounded-full animate-spin mx-auto mb-6"></div>
              <Calendar className="w-6 h-6 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Loading Your Journey</h3>
            <p className="text-gray-300">Gathering your beautiful memories...</p>
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
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Journey
            </h1>
          </div>
          <p className="text-gray-400 text-sm">Your intimate adventure timeline</p>
        </div>
        
        <div className="w-24"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Card className="glass-card border-purple-500/20 text-center">
            <CardContent className="p-4">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stats.totalCompleted}</div>
              <div className="text-sm text-gray-400">Total Adventures</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-purple-500/20 text-center">
            <CardContent className="p-4">
              <Video className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stats.virtualCompleted}</div>
              <div className="text-sm text-gray-400">Virtual Days</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-pink-500/20 text-center">
            <CardContent className="p-4">
              <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stats.realCompleted}</div>
              <div className="text-sm text-gray-400">Real Days</div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-green-500/20 text-center">
            <CardContent className="p-4">
              <Star className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stats.streak}</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </CardContent>
          </Card>
        </div>

        {/* Journey Timeline */}
        {logs.length === 0 ? (
          <Card className="glass-card border-white/10">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Your Journey Awaits</h3>
              <p className="text-gray-300 mb-8 max-w-md mx-auto">
                Start your intimate adventure by completing your first task. Every moment you share becomes part of your beautiful story.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/virtual-days">
                  <Button variant="default">
                    <Video className="w-4 h-4 mr-2" />
                    Start Virtual Day
                  </Button>
                </Link>
                <Link href="/real-days">
                  <Button variant="gradient">
                    <Heart className="w-4 h-4 mr-2" />
                    Start Real Day
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-semibold text-white">Your Adventure Timeline</h2>
            </div>
            
            {logs.map((log, index) => (
              <Card key={log.id} className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-102 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        log.task.type === 'virtual' 
                          ? 'bg-gradient-to-br from-purple-500 to-purple-700' 
                          : 'bg-gradient-to-br from-pink-500 to-pink-700'
                      }`}>
                        {log.task.type === 'virtual' ? (
                          <Video className="w-6 h-6 text-white" />
                        ) : (
                          <Heart className="w-6 h-6 text-white" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white group-hover:text-purple-300 transition-colors">
                          {log.task.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">
                            {new Date(log.date).toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      log.task.type === 'virtual' 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                    }`}>
                      {log.task.type === 'virtual' ? 'Virtual Day' : 'Real Day'}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{log.task.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-green-400">
                    <Star className="w-4 h-4" />
                    <span className="text-sm font-medium">Completed Successfully</span>
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