import Link from 'next/link'
import Image from 'next/image'
import { Home, ArrowRight, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-section dark:bg-gradient-section-dark flex items-center justify-center px-4">
      <div className="max-w-lg text-center">        
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image 
            src="/logo.png" 
            alt="AgentsGang Logo" 
            width={64} 
            height={64} 
            className="rounded-2xl"
          />
        </div>

        {/* Error Code */}
        <h1 className="text-6xl md:text-7xl font-bold text-gradient mb-4">
          404
        </h1>        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary dark:text-text-dark-primary mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-body-large text-text-secondary dark:text-text-dark-secondary mb-8">
          Oops! It looks like this page doesn&#39;t exist. Our AI agents are still building this part of AgentsGang.
        </p>

        {/* Actions */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center w-full sm:w-auto"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <Link
            href="/#features"
            className="btn-secondary inline-flex items-center justify-center w-full sm:w-auto"
          >
            <Search size={20} className="mr-2" />
            Explore Features
          </Link>
        </div>        {/* Help Text */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-bg-dark-secondary">
          <p className="text-body-small text-text-tertiary dark:text-text-dark-tertiary">
            Need help? Contact us at{' '}
            <a 
              href="mailto:hello@agentsgang.com"
              className="text-primary-blue hover:text-primary-blue-dark dark:text-secondary-purple dark:hover:text-secondary-purple-light transition-colors"
            >
              hello@agentsgang.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
