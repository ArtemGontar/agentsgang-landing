import { Check, Star, Crown } from 'lucide-react'

export default function PricingSection() {
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
      cta: "Start Free",
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
      cta: "Start Trial",
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
    <section id="pricing" className="section-spacing bg-bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-semibold text-text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto mb-8">
            Start building your AI company for free. Scale up as your business grows. 
            No hidden fees, no vendor lock-in.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-text-secondary">
            <Check size={16} className="text-accent-green" />
            <span>No credit card required for free plan</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-lg ${
                plan.popular 
                  ? 'border-primary-blue shadow-pricing transform md:scale-105' 
                  : 'border-gray-200 hover:border-primary-blue/30'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-blue text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Crown size={14} />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-card-title font-semibold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-text-primary">{plan.price}</span>
                  <span className="text-text-secondary">{plan.period}</span>
                </div>
                <p className="text-text-secondary">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check size={16} className="text-accent-green mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className={`w-full ${plan.ctaStyle}`}>
                {plan.cta}
              </button>

              {/* Trial Info */}
              {plan.name === "Professional" && (
                <p className="text-center text-xs text-text-tertiary mt-3">
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
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Money-Back Guarantee</h4>
              <p className="text-text-secondary text-sm">30-day refund policy for paid plans</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mb-3">
                <Star size={24} className="text-primary-blue" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Trusted by 2,000+</h4>
              <p className="text-text-secondary text-sm">Entrepreneurs building AI companies</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary-purple/10 rounded-full flex items-center justify-center mb-3">
                <Crown size={24} className="text-secondary-purple" />
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Enterprise Ready</h4>
              <p className="text-text-secondary text-sm">SOC 2 compliant, GDPR ready</p>
            </div>
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-4">
            Have questions about pricing or features?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#faq" className="btn-secondary">
              View FAQ
            </a>
            <a href="/contact" className="text-primary-blue hover:text-primary-blue-dark transition-colors">
              Contact Sales →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
