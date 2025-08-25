import Link from 'next/link'
import { Button } from './button'
import { ArrowLeft, Home, History, Heart, Video } from 'lucide-react'

interface NavigationProps {
  currentPage?: 'home' | 'virtual' | 'real' | 'history'
  showBackButton?: boolean
  backHref?: string
  title?: string
  subtitle?: string
}

const pageConfig = {
  home: {
    icon: Home,
    title: 'Couple Days',
    subtitle: 'Your intimate journey'
  },
  virtual: {
    icon: Video,
    title: 'Virtual Days',
    subtitle: 'Digital intimacy & connection'
  },
  real: {
    icon: Heart,
    title: 'Real Days',
    subtitle: 'Physical intimacy & connection'
  },
  history: {
    icon: History,
    title: 'Our Journey',
    subtitle: 'Your adventure timeline'
  }
}

export default function Navigation({ 
  currentPage = 'home', 
  showBackButton = true, 
  backHref = '/',
  title,
  subtitle 
}: NavigationProps) {
  const config = pageConfig[currentPage]
  const IconComponent = config.icon
  
  return (
    <div className="flex items-center justify-between mb-12">
      {showBackButton ? (
        <Link href={backHref}>
          <Button variant="outline" className="glass-card border-white/20 hover:border-white/40 text-white hover:text-white hover:bg-white/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </Link>
      ) : (
        <div className="w-20"></div>
      )}
      
      <div className="text-center">
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 bg-gradient-to-br ${
            currentPage === 'virtual' ? 'from-purple-500 to-purple-700' :
            currentPage === 'real' ? 'from-pink-500 to-pink-700' :
            'from-purple-500 to-pink-500'
          } rounded-xl flex items-center justify-center`}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <h1 className={`text-4xl font-bold bg-gradient-to-r ${
            currentPage === 'virtual' ? 'from-purple-400 to-purple-600' :
            currentPage === 'real' ? 'from-pink-400 to-pink-600' :
            'from-purple-400 to-pink-400'
          } bg-clip-text text-transparent`}>
            {title || config.title}
          </h1>
        </div>
        <p className="text-gray-400 text-sm">{subtitle || config.subtitle}</p>
      </div>
      
      <div className="w-20"></div>
    </div>
  )
}