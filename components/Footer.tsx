'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Mail } from 'lucide-react'
import ComingSoonModal from './ComingSoonModal'
import WaitlistModal from './WaitlistModal'
import { useState } from 'react'

export default function Footer() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false)
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  return (
    <footer className="bg-bg-dark text-white dark:bg-bg-dark dark:text-white">
      <div className="container-custom">
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setComingSoonOpen(true)}
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors underline"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/help"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tutorials"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gdpr"
                    className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                  >
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 dark:border-bg-secondary pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">
                  Get AI company building tips
                </h3>
                <p className="text-gray-300 dark:text-text-tertiary">
                  Stay updated with the latest AI automation strategies and product
                  updates.
                </p>
              </div>
              <div className="flex w-full md:w-auto">                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 bg-gray-800 dark:bg-bg-dark-secondary border border-gray-600 dark:border-bg-dark-tertiary rounded-l-lg focus:outline-none focus:border-primary-blue text-white"
                />
                <button className="px-6 py-3 bg-primary-blue hover:bg-primary-blue-dark text-white rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 dark:border-bg-secondary pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Logo and Copyright */}
              <div className="flex items-center space-x-4 mb-4 md:mb-0">                <div className="flex items-center space-x-2">
                  <Image 
                    src="/logo.png" 
                    alt="ProtoHive Logo" 
                    width={32} 
                    height={32} 
                    className="rounded-lg"
                  />
                  <span className="text-xl font-bold">ProtoHive</span>
                </div>
                <span className="text-gray-300 dark:text-text-tertiary">
                  © 2025 ProtoHive. All rights reserved.
                </span>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <Link
                  href="mailto:hello@protohive.com"
                  className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 dark:text-text-tertiary hover:text-white dark:hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>      <ComingSoonModal
        open={comingSoonOpen}
        onClose={() => setComingSoonOpen(false)}
        onJoinWaitlist={() => setWaitlistOpen(true)}
      />
      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </footer>
  )
}
