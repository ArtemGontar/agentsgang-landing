'use client'

import { X, Clock, Bell } from 'lucide-react'

interface ComingSoonModalProps {
  open: boolean
  onClose: () => void
  onJoinWaitlist?: () => void
}

export default function ComingSoonModal({ open, onClose, onJoinWaitlist }: ComingSoonModalProps) {
  const handleJoinWaitlist = () => {
    onClose()
    if (onJoinWaitlist) {
      onJoinWaitlist()
    }
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-bg-dark rounded-2xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto transform scale-100 transition-transform duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-text-tertiary hover:text-text-primary dark:text-text-tertiary dark:hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="text-white" size={32} />
          </div>
          <h2 className="text-2xl font-bold text-text-primary dark:text-white mb-2">
            Coming Soon
          </h2>
          <p className="text-text-secondary dark:text-text-tertiary mb-6">
            We're putting the finishing touches on our pricing plans. Join our waitlist to be notified when pricing becomes available.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={handleJoinWaitlist}
              className="w-full btn-primary"
            >
              <Bell size={20} className="mr-2" />
              Join Waitlist for Updates
            </button>
            <button
              onClick={onClose}
              className="w-full btn-secondary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
