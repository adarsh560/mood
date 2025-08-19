import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Video, Calendar } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Our Private Space 💕
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Your intimate journey together, one day at a time. Choose your adventure for today.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mb-4">
              <Video className="w-8 h-8 text-purple-400" />
            </div>
            <CardTitle className="text-2xl text-purple-400">Virtual Days</CardTitle>
            <CardDescription className="text-gray-300">
              Intimate conversations, playful challenges, and virtual connection
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-400 mb-6">
              Discover today's virtual task - from deep conversations to playful video calls
            </p>
            <Link href="/virtual-days">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Scratch Today's Virtual Card
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-pink-900 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 text-pink-400" />
            </div>
            <CardTitle className="text-2xl text-pink-400">Real Days</CardTitle>
            <CardDescription className="text-gray-300">
              Physical intimacy, positions, and real-world adventures
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-400 mb-6">
              Reveal today's intimate position or real-world challenge
            </p>
            <Link href="/real-days">
              <Button className="w-full bg-pink-600 hover:bg-pink-700">
                Scratch Today's Real Card
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Link href="/history">
          <Button variant="outline" className="mr-4">
            <Calendar className="w-4 h-4 mr-2" />
            View History
          </Button>
        </Link>
      </div>
    </div>
  )
}