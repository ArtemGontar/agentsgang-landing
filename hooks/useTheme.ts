'use client'

import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark' | null

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Read theme from localStorage or system preference after component mounts
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (!mounted || !theme) return

    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    if (!theme) return
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return {
    theme,
    mounted,
    toggleTheme,
    setTheme
  }
}
