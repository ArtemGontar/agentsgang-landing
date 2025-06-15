import { Building, Users, MessageSquare, TrendingUp } from 'lucide-react'

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
    <section id="how-it-works" className="section-spacing bg-bg-secondary dark:bg-bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-semibold text-text-primary dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-body-large text-text-secondary dark:text-text-tertiary max-w-3xl mx-auto">
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
                {/* Step Card */}                <div className="card p-8 text-center h-full bg-white dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-white dark:bg-bg-dark-secondary border-4 border-gray-200 dark:border-bg-dark-tertiary rounded-full flex items-center justify-center text-sm font-bold text-text-primary dark:text-white group-hover:border-primary-blue transition-colors">
                      {index + 1}
                    </div>
                  </div>
                  <div className={`flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full ${step.color} text-white`}>
                    <step.icon size={28} />
                  </div>
                  <h4 className="text-h4 font-semibold text-text-primary dark:text-white mb-2 mt-6">
                    {step.title}
                  </h4>                  <p className="text-body-regular text-text-secondary dark:text-text-tertiary">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
