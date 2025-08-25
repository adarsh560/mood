import { Loader2, Heart, Video, Calendar } from 'lucide-react'

interface LoadingProps {
  type?: 'default' | 'virtual' | 'real' | 'history'
  message?: string
  size?: 'sm' | 'md' | 'lg'
}

const loadingConfig = {
  default: {
    icon: Loader2,
    color: 'text-purple-400',
    borderColor: 'border-purple-600',
    message: 'Loading...'
  },
  virtual: {
    icon: Video,
    color: 'text-purple-400',
    borderColor: 'border-purple-600',
    message: 'Preparing your virtual adventure...'
  },
  real: {
    icon: Heart,
    color: 'text-pink-400',
    borderColor: 'border-pink-600',
    message: 'Creating your intimate experience...'
  },
  history: {
    icon: Calendar,
    color: 'text-purple-400',
    borderColor: 'border-purple-600',
    message: 'Loading your journey...'
  }
}

const sizeConfig = {
  sm: {
    spinner: 'w-8 h-8',
    icon: 'w-4 h-4',
    text: 'text-sm'
  },
  md: {
    spinner: 'w-12 h-12',
    icon: 'w-5 h-5',
    text: 'text-base'
  },
  lg: {
    spinner: 'w-16 h-16',
    icon: 'w-6 h-6',
    text: 'text-lg'
  }
}

export default function Loading({ type = 'default', message, size = 'md' }: LoadingProps) {
  const config = loadingConfig[type]
  const sizeStyles = sizeConfig[size]
  const IconComponent = config.icon
  
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="text-center">
        <div className="relative mb-4">
          <div className={`${sizeStyles.spinner} border-4 ${config.borderColor}/30 border-t-${config.borderColor.split('-')[1]}-600 rounded-full animate-spin mx-auto`}></div>
          <IconComponent className={`${sizeStyles.icon} ${config.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
        </div>
        <p className={`${sizeStyles.text} text-gray-300 font-medium`}>
          {message || config.message}
        </p>
      </div>
    </div>
  )
}