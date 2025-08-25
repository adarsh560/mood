import { cn } from '@/lib/utils'

interface ProgressProps {
  value: number
  max?: number
  className?: string
  color?: 'purple' | 'pink' | 'blue' | 'green'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  label?: string
}

const colorConfig = {
  purple: 'from-purple-500 to-purple-600',
  pink: 'from-pink-500 to-pink-600',
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600'
}

const sizeConfig = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4'
}

export default function Progress({ 
  value, 
  max = 100, 
  className, 
  color = 'purple',
  size = 'md',
  showLabel = false,
  label
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)
  
  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-300">
            {label || 'Progress'}
          </span>
          <span className="text-sm text-gray-400">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      <div className={cn(
        'w-full bg-gray-700/50 rounded-full overflow-hidden',
        sizeConfig[size]
      )}>
        <div
          className={cn(
            'h-full bg-gradient-to-r transition-all duration-500 ease-out rounded-full',
            colorConfig[color]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}