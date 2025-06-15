'use client'

import { useState } from 'react'
import { X, Mail, CheckCircle } from 'lucide-react'

interface WaitlistModalProps {
  open: boolean
  onClose: () => void
}

export default function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }
  const handleClose = () => {
    setIsSubmitted(false)
    setEmail('')
    setName('')
    setCompany('')
    onClose()
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 min-h-screen">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-bg-dark rounded-2xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-200 m-auto">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-text-tertiary hover:text-text-primary dark:text-text-tertiary dark:hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-2">
                Join the Waitlist
              </h2>
              <p className="text-text-secondary dark:text-text-tertiary">
                Be the first to know when ProtoHive launches and get early access to build your AI company.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary dark:text-white mb-2">
                  Full Name *
                </label>                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-bg-secondary dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-text-primary dark:text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-primary dark:text-white mb-2">
                  Email Address *
                </label>                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-bg-secondary dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-text-primary dark:text-white"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary dark:text-white mb-2">
                  Company (Optional)
                </label>                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 bg-bg-secondary dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-text-primary dark:text-white"
                  placeholder="Your Company"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>

            <p className="text-xs text-text-tertiary text-center mt-4">
              We'll never spam you. Unsubscribe at any time.
            </p>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-2">
              You're on the list!
            </h2>
            <p className="text-text-secondary dark:text-text-tertiary mb-6">
              Thanks for joining our waitlist. We'll send you updates on ProtoHive's progress and notify you as soon as we launch.
            </p>
            <button
              onClick={handleClose}
              className="btn-primary"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
