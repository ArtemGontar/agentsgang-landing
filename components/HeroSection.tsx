'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Play, CheckCircle } from 'lucide-react'
import WaitlistModal from './WaitlistModal'

export default function HeroSection() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  return (
    <section className="min-h-screen flex items-center bg-gradient-radial dark:bg-bg-dark pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:pr-8">
            <h1 className="text-hero font-bold text-gradient dark:text-gradient-dark mb-6 leading-tight">
              Build Your AI-Powered Company in Minutes
            </h1>
            <p className="text-body-large text-text-secondary dark:text-text-tertiary mb-8 leading-relaxed">
              Create specialized AI agents that work together as your virtual team — handling marketing, 
              development, analysis, and more while you focus on strategy.
            </p>
              {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary" onClick={() => setWaitlistOpen(true)}>
                Join Waitlist
              </button>
              <Link href="#demo" className="btn-secondary flex items-center justify-center gap-2">
                <Play size={20} />
                Watch Demo
              </Link>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-3 text-text-secondary dark:text-text-tertiary">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-blue to-secondary-purple border-2 border-white dark:border-bg-dark flex items-center justify-center text-white text-xs font-semibold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-sm">Join 2,000+ entrepreneurs already building with AI</span>
            </div>
          </div>

          {/* Right Column - Hero Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Illustration Container */}
              <div className="bg-gradient-card dark:bg-bg-tertiary rounded-2xl p-8 shadow-2xl">
                {/* AI Agents Workspace Illustration */}
                <div className="space-y-6">
                  {/* Central Dashboard */}
                  <div className="bg-white dark:bg-bg-secondary rounded-xl p-4 shadow-sm border dark:border-bg-tertiary">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    </div>
                    <div className="text-xs font-semibold text-text-primary dark:text-white mb-2">ProtoHive Dashboard</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-2 bg-primary-blue/20 rounded"></div>
                      <div className="h-2 bg-secondary-purple/20 rounded"></div>
                      <div className="h-2 bg-accent-green/20 rounded"></div>
                      <div className="h-2 bg-primary-blue/20 rounded"></div>
                    </div>
                  </div>

                  {/* AI Agent Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Marketing Agent */}
                    <div className="bg-white rounded-lg p-3 shadow-sm border animate-float">
                      <div className="w-6 h-6 bg-secondary-purple rounded-full mb-2 flex items-center justify-center">
                        <span className="text-xs text-white font-bold">M</span>
                      </div>
                      <div className="text-xs font-semibold text-text-primary">Marketing Agent</div>
                      <div className="text-xs text-text-secondary">Analyzing campaigns...</div>
                      <div className="w-full h-1 bg-gray-200 rounded mt-2">
                        <div className="w-3/4 h-1 bg-secondary-purple rounded"></div>
                      </div>
                    </div>

                    {/* Developer Agent */}
                    <div className="bg-white rounded-lg p-3 shadow-sm border animate-float animation-delay-200">
                      <div className="w-6 h-6 bg-primary-blue rounded-full mb-2 flex items-center justify-center">
                        <span className="text-xs text-white font-bold">D</span>
                      </div>
                      <div className="text-xs font-semibold text-text-primary">Developer Agent</div>
                      <div className="text-xs text-text-secondary">Writing code...</div>
                      <div className="w-full h-1 bg-gray-200 rounded mt-2">
                        <div className="w-1/2 h-1 bg-primary-blue rounded"></div>
                      </div>
                    </div>

                    {/* Analyst Agent */}
                    <div className="bg-white rounded-lg p-3 shadow-sm border animate-float animation-delay-400">
                      <div className="w-6 h-6 bg-accent-green rounded-full mb-2 flex items-center justify-center">
                        <span className="text-xs text-white font-bold">A</span>
                      </div>
                      <div className="text-xs font-semibold text-text-primary">Analyst Agent</div>
                      <div className="text-xs text-text-secondary">Processing data...</div>
                      <div className="w-full h-1 bg-gray-200 rounded mt-2">
                        <div className="w-5/6 h-1 bg-accent-green rounded"></div>
                      </div>
                    </div>

                    {/* Designer Agent */}
                    <div className="bg-white rounded-lg p-3 shadow-sm border animate-float animation-delay-600">
                      <div className="w-6 h-6 bg-orange-500 rounded-full mb-2 flex items-center justify-center">
                        <span className="text-xs text-white font-bold">UI</span>
                      </div>
                      <div className="text-xs font-semibold text-text-primary">Designer Agent</div>
                      <div className="text-xs text-text-secondary">Creating mockups...</div>
                      <div className="w-full h-1 bg-gray-200 rounded mt-2">
                        <div className="w-2/3 h-1 bg-orange-500 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-1">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((dot) => (
                          <div key={dot} className="w-1 h-1 bg-primary-blue/30 rounded-full"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent-green text-white px-3 py-1 rounded-full text-xs font-semibold animate-float">
                <CheckCircle size={12} className="inline mr-1" />
                Task Complete
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white shadow-lg rounded-lg p-2 text-xs animate-float animation-delay-400">
                <div className="font-semibold text-text-primary">Real-time Updates</div>
                <div className="text-text-secondary">Agents collaborating...</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-secondary-purple/5 rounded-2xl -rotate-3 -z-10"></div>
          </div>        </div>
      </div>
      
      {/* Waitlist Modal */}
      <WaitlistModal 
        open={waitlistOpen} 
        onClose={() => setWaitlistOpen(false)} 
      />
    </section>
  )
}
