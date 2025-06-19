'use client'

import WaitlistModal from './WaitlistModal'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const { theme, mounted, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-bg-dark/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20 border-b border-bg-tertiary dark:border-bg-secondary">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="AgentsGang Logo" 
              width={32} 
              height={32} 
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-text-primary dark:text-white">AgentsGang</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-white transition-colors">
              How it Works
            </Link>            
            <Link href="#pricing" className="text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-white transition-colors">
              FAQ
            </Link>            
            <button
              className="btn-primary"
              onClick={() => setWaitlistOpen(true)}
            >
              Join Waitlist
            </button>            
            {/* Dark mode toggle */}            
            <button
              className="ml-4 p-2 rounded-full bg-bg-tertiary dark:bg-bg-dark hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              suppressHydrationWarning={true}
            >
              {mounted && theme ? (theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />) : <Moon size={20} className="text-blue-600" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (          
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-bg-dark shadow-lg border-t border-bg-tertiary dark:border-bg-secondary">
            <div className="py-4 space-y-3">
              <Link 
                href="#features" 
                className="block px-4 py-2 text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-white hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="block px-4 py-2 text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-white hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>              
              <Link 
                href="#pricing" 
                className="block px-4 py-2 text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-white hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#faq" 
                className="block px-4 py-2 text-text-secondary dark:text-text-tertiary hover:text-text-primary dark:hover:text-white hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ              
              </Link>              
              <div className="px-4 py-3">
                <button 
                  className="btn-primary block text-center w-full"
                  onClick={() => { setWaitlistOpen(true); setIsMenuOpen(false) }}
                >
                  Join Waitlist
                </button>
              </div>

              {/* Dark mode toggle for mobile */}
              <div className="px-4 pb-2 flex justify-end"><button
                  className="p-2 rounded-full bg-bg-tertiary dark:bg-bg-dark hover:bg-bg-secondary dark:hover:bg-bg-secondary transition-colors"
                  aria-label="Toggle dark mode"
                  onClick={toggleTheme}
                  suppressHydrationWarning={true}
                >
                  {mounted && theme ? (theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-blue-600" />) : <Moon size={20} className="text-blue-600" />}
                </button>
              </div>
            </div>
          </div>        
        )}
        {/* Waitlist Modal */}
        <WaitlistModal open={waitlistOpen} onClose={() => setWaitlistOpen(false)} />
      </nav>
    </header>
  )
}
