'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Mail } from 'lucide-react'
import { fireGTMEvent } from './GoogleTagManagerScripts'

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
  return (
    <div className="min-h-screen bg-gradient-section dark:bg-bg-dark">
      {/* Simple Header */}
      <header className="border-b border-gray-200 dark:border-bg-secondary">
        <div className="container-custom py-4">          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="AgentsGang Logo" 
              width={32} 
              height={32} 
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-text-primary dark:text-white">AgentsGang</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Clock className="text-white" size={40} />
          </div>
          {/* Fire GTM event for page view */}
          {typeof window !== 'undefined' && fireGTMEvent && fireGTMEvent('page_view', {
            event_category: 'engagement',
            event_label: title,
            location: 'coming_soon',
          })}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-white mb-4">
            {title}
          </h1>

          {/* Description */}
          <p className="text-body-large text-text-secondary dark:text-text-tertiary mb-6">
            {description}
          </p>

          {/* Coming Soon Message */}
          <div className="bg-white dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-text-primary dark:text-white mb-2">
              Coming Soon
            </h2>
            <p className="text-text-secondary dark:text-text-tertiary">
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
              href="mailto:hello@agentsgang.com"
              className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto"
            >
              <Mail size={20} className="mr-2" />
              Contact Us
            </a>
          </div>

          {/* Newsletter */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-bg-secondary">
            <p className="text-body-small text-text-tertiary dark:text-text-tertiary mb-4">
              Want to be notified when this page is ready?
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-text-primary dark:text-white"
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
