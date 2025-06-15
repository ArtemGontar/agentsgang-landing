'use client'

import { useState } from 'react'
import { Check, Star, Crown } from 'lucide-react'
import ComingSoonModal from './ComingSoonModal'
import WaitlistModal from './WaitlistModal'

export default function PricingSection() {
  const [comingSoonOpen, setComingSoonOpen] = useState(false)
  const [waitlistOpen, setWaitlistOpen] = useState(false)
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "",
      description: "Perfect for exploring AI automation",
      features: [
        "1 Organization",
        "2 AI Agents",
        "50 Tasks/month",
        "Basic chat interface",
        "Community support"
      ],
      cta: "Join Waitlist",
      ctaStyle: "btn-secondary",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For serious AI-powered businesses",
      features: [
        "3 Organizations",
        "10 AI Agents",
        "500 Tasks/month",
        "Advanced tools & integrations",
        "Priority support",
        "Custom agent roles"
      ],
      cta: "Join Waitlist",
      ctaStyle: "btn-primary",
      popular: true,
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For teams and large organizations",
      features: [
        "Unlimited Organizations",
        "Unlimited AI Agents",
        "Unlimited Tasks",
        "API access",
        "Custom integrations",
        "Dedicated support",
        "Advanced analytics"
      ],
      cta: "Contact Sales",
      ctaStyle: "btn-secondary",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-spacing bg-bg-secondary dark:bg-bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-semibold text-text-primary dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-body-large text-text-secondary dark:text-text-tertiary max-w-3xl mx-auto mb-8">
            Start building your AI company for free. Scale up as your business grows. 
            No hidden fees, no vendor lock-in.
          </p>          <div className="inline-flex items-center gap-2 text-sm text-text-secondary dark:text-text-tertiary">
            <Check size={16} className="text-accent-green" />
            <span>No credit card required for free plan</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (            <div 
              key={index}
              className={`relative bg-white dark:bg-bg-dark-secondary border-2 border-bg-tertiary dark:border-bg-dark-tertiary rounded-2xl p-10 flex flex-col items-center shadow-md transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary-blue dark:border-primary-blue shadow-lg scale-105 z-10' 
                  : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary-blue dark:bg-secondary-purple text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                  {plan.badge}
                </span>
              )}
              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-card-title font-semibold text-text-primary dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-primary-blue dark:text-secondary-purple">{plan.price}</span>
                  <span className="text-lg text-text-secondary dark:text-text-tertiary ml-1">{plan.period}</span>
                </div>
                <p className="text-body-regular text-text-secondary dark:text-text-tertiary mb-6 text-center">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8 w-full">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-text-primary dark:text-white">
                      <Check className="text-accent-green dark:text-accent-green-light" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>              {/* CTA Button */}
              <button 
                className={`${plan.ctaStyle} w-full`}
                onClick={() => setComingSoonOpen(true)}
              >
                {plan.cta}
              </button>

              {/* Trial Info */}
              {plan.name === "Professional" && (                <p className="text-center text-xs text-text-tertiary dark:text-text-tertiary mt-3">
                  14-day free trial included
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Trust Elements */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-accent-green/10 rounded-full flex items-center justify-center mb-3">
                <Check size={24} className="text-accent-green" />
              </div>              <h4 className="font-semibold text-text-primary dark:text-white mb-2">Money-Back Guarantee</h4>
              <p className="text-text-secondary dark:text-text-tertiary text-sm">30-day refund policy for paid plans</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mb-3">
                <Star size={24} className="text-primary-blue" />
              </div>
              <h4 className="font-semibold text-text-primary dark:text-white mb-2">Trusted by 2,000+</h4>
              <p className="text-text-secondary dark:text-text-tertiary text-sm">Entrepreneurs building AI companies</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary-purple/10 rounded-full flex items-center justify-center mb-3">
                <Crown size={24} className="text-secondary-purple" />
              </div>
              <h4 className="font-semibold text-text-primary dark:text-white mb-2">Enterprise Ready</h4>
              <p className="text-text-secondary dark:text-text-tertiary text-sm">SOC 2 compliant, GDPR ready</p>
            </div>
          </div>
        </div>        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary dark:text-text-tertiary mb-4">
            Have questions about pricing or features?
          </p>
          <div className="flex flex-col gap-4 justify-center items-center">
            <a href="#faq" className="btn-secondary">
              View FAQ
            </a>
            <a href="/contact" className="text-primary-blue dark:text-secondary-purple hover:text-primary-blue-dark dark:hover:text-secondary-purple-light transition-colors">
              Contact Sales →
            </a>
          </div>        </div>
      </div>

      {/* Modals */}
      <ComingSoonModal 
        open={comingSoonOpen} 
        onClose={() => setComingSoonOpen(false)}
        onJoinWaitlist={() => setWaitlistOpen(true)}
      />
      <WaitlistModal 
        open={waitlistOpen} 
        onClose={() => setWaitlistOpen(false)} 
      />
    </section>
  )
}
