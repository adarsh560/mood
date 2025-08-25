import { LucideIcon } from 'lucide-react'
import { Card, CardContent } from './card'

interface StatsCardProps {
  icon: LucideIcon
  value: number | string
  label: string
  color?: 'purple' | 'pink' | 'green' | 'blue' | 'yellow'
  trend?: {
    value: number
    isPositive: boolean
  }
}

const colorConfig = {
  purple: {
    icon: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'from-purple-500/10 to-purple-600/5'
  },
  pink: {
    icon: 'text-pink-400',
    border: 'border-pink-500/20',
    bg: 'from-pink-500/10 to-pink-600/5'
  },
  green: {
    icon: 'text-green-400',
    border: 'border-green-500/20',
    bg: 'from-green-500/10 to-green-600/5'
  },
  blue: {
    icon: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'from-blue-500/10 to-blue-600/5'
  },
  yellow: {
    icon: 'text-yellow-400',
    border: 'border-yellow-500/20',
    bg: 'from-yellow-500/10 to-yellow-600/5'
  }
}

export default function StatsCard({ 
  icon: Icon, 
  value, 
  label, 
  color = 'purple',
  trend 
}: StatsCardProps) {
  const colors = colorConfig[color]
  
  return (
    <Card className={`glass-card ${colors.border} hover:scale-105 transition-all duration-300 group`}>
      <CardContent className="p-6 text-center">
        <div className={`w-12 h-12 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-6 h-6 ${colors.icon}`} />
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-400 font-medium">{label}</div>
        {trend && (
          <div className={`text-xs mt-2 ${trend.isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {trend.isPositive ? '↗' : '↘'} {Math.abs(trend.value)}%
          </div>
        )}
      </CardContent>
    </Card>
  )
}