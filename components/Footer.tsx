'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Mail } from 'lucide-react'
import WaitlistModal from './WaitlistModal'
import { useState } from 'react'

export default function Footer() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  return (
    <footer className="border-t border-bg-tertiary dark:border-[#23272f] bg-bg-dark text-white dark:bg-bg-dark dark:text-white">
      <div className="container-custom">
        <div className="py-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Product */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#features"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#how-it-works"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setWaitlistOpen(true)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Join Waitlist
                  </button>
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
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white transition-colors"
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
                    href="/blog"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/community"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Help Center
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
                    href="/terms"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          {/* <div className="border-t border-bg-tertiary dark:border-[#23272f] pt-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold">Stay Updated</h4>
                <p className="text-gray-400">
                  Join our newsletter for AI insights.
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-3 bg-gray-800 dark:bg-bg-dark-secondary border border-gray-600 dark:border-bg-dark-tertiary rounded-l-lg focus:outline-none focus:border-primary-blue text-white"
                />
                <button className="px-6 py-3 bg-primary-blue hover:bg-primary-blue-dark rounded-r-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div> */}

          {/* Bottom Footer */}
          <div className="border-t border-bg-tertiary dark:border-[#23272f] pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <Image
                  src="/logo.png"
                  alt="AgentsGang Logo"
                  width={32}
                  height={32}
                />
                <span className="font-bold text-xl">AgentsGang</span>
              </div>

              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} AgentsGang. All rights reserved.
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:hello@agentsgang.xyz"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </footer>
  )
}
