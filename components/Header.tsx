'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
          ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-bold text-text-primary">ProtoHive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-text-secondary hover:text-text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-text-secondary hover:text-text-primary transition-colors">
              How it Works
            </Link>
            <Link href="#pricing" className="text-text-secondary hover:text-text-primary transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-text-secondary hover:text-text-primary transition-colors">
              FAQ
            </Link>
            <Link href="/login" className="text-text-secondary hover:text-text-primary transition-colors">
              Sign In
            </Link>
            <Link href="/signup" className="btn-primary">
              Start Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="py-4 space-y-4">
              <Link 
                href="#features" 
                className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#how-it-works" 
                className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </Link>
              <Link 
                href="#pricing" 
                className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#faq" 
                className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="/login" 
                className="block px-4 py-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <div className="px-4">
                <Link 
                  href="/signup" 
                  className="btn-primary block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Start Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
