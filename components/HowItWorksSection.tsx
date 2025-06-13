import { Building, Users, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Building,
      title: "Create Your Organization",
      description: "Set up your virtual company structure and define your business goals",
      color: "bg-primary-blue"
    },
    {
      icon: Users,
      title: "Hire AI Agents",
      description: "Choose from specialized roles: marketer, developer, analyst, designer, and more",
      color: "bg-secondary-purple"
    },
    {
      icon: MessageSquare,
      title: "Assign Tasks & Collaborate",
      description: "Chat with your agents, assign projects, and watch them work together autonomously",
      color: "bg-accent-green"
    },
    {
      icon: TrendingUp,
      title: "Scale & Automate",
      description: "Let your AI team handle routine work while generating documentation and insights",
      color: "bg-orange-500"
    }
  ]

  return (
    <section id="how-it-works" className="section-spacing bg-bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-semibold text-text-primary mb-4">
            How It Works
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            Get your AI-powered company up and running in four simple steps. 
            No technical knowledge required — just define your goals and let your agents handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue via-secondary-purple via-accent-green to-orange-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="card p-8 text-center h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-text-primary group-hover:border-primary-blue transition-colors">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <step.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-card-title font-semibold text-text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight 
                      size={24} 
                      className="text-gray-300 group-hover:text-primary-blue transition-colors" 
                    />
                  </div>
                )}

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Ready to build your AI company? Get started in less than 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Start Building Now
            </button>
            <button className="btn-secondary">
              View Example Company
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
