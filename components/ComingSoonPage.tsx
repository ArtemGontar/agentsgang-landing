'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, Mail } from 'lucide-react'
import { fireGTMEvent } from './GoogleTagManagerScripts'
import { useEffect } from 'react'
import Header from './Header'

interface ComingSoonPageProps {
  title: string
  description: string
  comingSoonText?: string
}

export default function ComingSoonPage({ 
  title, 
  description, 
  comingSoonText = "We're working hard to bring you this feature. Stay tuned!"
}: ComingSoonPageProps) {
  useEffect(() => {
    if (typeof window !== 'undefined' && fireGTMEvent) {
      fireGTMEvent('page_view', {
        event_category: 'engagement',
        event_label: title,
        location: 'coming_soon',
      });
    }
  }, [title]);  return (    
    <div className="min-h-screen bg-gradient-section dark:bg-gradient-section-dark">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex items-center justify-center px-4 py-20 pt-28">
        <div className="max-w-2xl text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Clock className="text-white" size={40} />
          </div>          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-dark-primary mb-4">
            {title}
          </h1>

          {/* Description */}
          <p className="text-body-large text-text-secondary dark:text-text-dark-secondary mb-6">
            {description}
          </p>          {/* Coming Soon Message */}
          <div className="bg-gradient-card dark:bg-gradient-card-dark border border-gray-200 dark:border-bg-dark-tertiary rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-text-primary dark:text-text-dark-primary mb-2">
              Coming Soon
            </h2>            <p className="text-text-secondary dark:text-text-dark-secondary">
              {comingSoonText}
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/"
              className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            
            <a
              href="mailto:hello@agentsgang.xyz"
              className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto"
            >
              <Mail size={20} className="mr-2" />
              Contact Us
            </a>
          </div>          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-bg-dark-tertiary">
            <p className="text-body-small text-text-tertiary dark:text-text-dark-tertiary mb-4">
              Want to be notified when this page is ready?
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-text-primary dark:text-text-dark-primary placeholder:text-text-tertiary dark:placeholder:text-text-dark-tertiary"
              />
              <button className="px-6 py-2 bg-primary-blue hover:bg-primary-blue-dark text-white rounded-r-lg transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
