import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Couple Days - Private Intimate App',
  description: 'A private app for couples to explore together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
          {children}
        </div>
      </body>
    </html>
  )
}