import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Video, Calendar, Sparkles, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-float">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Your Private Journey</span>
          </div>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Welcome to Our
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
            Private Space
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Your intimate journey together, one day at a time. 
          <br className="hidden sm:block" />
          Choose your adventure and create beautiful memories.
        </p>
      </div>

      {/* Main Cards */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        <Card className="group hover:scale-105 transition-all duration-500 glass-card border-purple-500/20 hover:border-purple-400/40 glow-purple hover:glow-purple overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="text-center relative z-10 pb-4">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Video className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">
              Virtual Days
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              Intimate conversations, playful challenges, and virtual connection
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center relative z-10">
            <p className="text-gray-400 mb-8 text-base leading-relaxed">
              Discover today's virtual task - from deep conversations to playful video calls that bring you closer together
            </p>
            <Link href="/virtual-days">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
                <Sparkles className="w-5 h-5 mr-2" />
                Scratch Today's Virtual Card
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="group hover:scale-105 transition-all duration-500 glass-card border-pink-500/20 hover:border-pink-400/40 glow-pink hover:glow-pink overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="text-center relative z-10 pb-4">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl text-pink-400 mb-3 group-hover:text-pink-300 transition-colors">
              Real Days
            </CardTitle>
            <CardDescription className="text-gray-300 text-lg">
              Physical intimacy, positions, and real-world adventures
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center relative z-10">
            <p className="text-gray-400 mb-8 text-base leading-relaxed">
              Reveal today's intimate position or real-world challenge that deepens your physical connection
            </p>
            <Link href="/real-days">
              <Button className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 group-hover:scale-105">
                <Heart className="w-5 h-5 mr-2" />
                Scratch Today's Real Card
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Actions */}
      <div className="text-center">
        <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
          <Link href="/history">
            <Button variant="outline" className="glass-card border-white/20 hover:border-white/40 text-white hover:text-white hover:bg-white/10 px-6 py-3 rounded-xl transition-all duration-300">
              <Calendar className="w-5 h-5 mr-2" />
              View Your Journey
            </Button>
          </Link>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>700 days of adventures await</span>
          </div>
        </div>
      </div>
    </div>
  )
}