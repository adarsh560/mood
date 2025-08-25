import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnimatedBackground from '@/components/ui/animated-background'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Couple Days - Private Intimate App',
  description: 'A private app for couples to explore together',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1a0b2e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen gradient-bg relative">
          {/* Animated Background */}
          <AnimatedBackground />
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}