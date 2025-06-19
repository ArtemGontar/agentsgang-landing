import { Bot, MessageCircle, Brain, FileText, Wrench, Building2 } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "Specialized AI Agents",
      description: "Each agent has unique skills and tools for their role",
      details: "Marketer, Developer, Analyst, Designer roles available",
      color: "bg-secondary-purple"
    },
    {
      icon: MessageCircle,
      title: "Real-time Collaboration",
      description: "Chat interface for natural task assignment",
      details: "Agents communicate with each other automatically",
      color: "bg-primary-blue"
    },
    {
      icon: Brain,
      title: "Context-Aware Memory",
      description: "Long-term memory for consistent work quality",
      details: "Agents remember your preferences and past projects",
      color: "bg-accent-green"
    },
    {
      icon: FileText,
      title: "Automated Documentation",
      description: "Every action is logged and documented",
      details: "Generate reports and insights automatically",
      color: "bg-orange-500"
    },
    {
      icon: Wrench,
      title: "Integrated Tools",
      description: "Code execution, web search, image generation",
      details: "API integrations for seamless workflows",
      color: "bg-red-500"
    },
    {
      icon: Building2,
      title: "Multi-Organization Support",
      description: "Manage multiple AI companies from one dashboard",
      details: "Role-based access control for team collaboration",
      color: "bg-indigo-500"
    }
  ]

  return (
    <section id="features" className="section-spacing bg-white dark:bg-bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-semibold text-text-primary dark:text-white mb-4">
            Powerful Features for AI-Driven Business
          </h2>
          <p className="text-body-large text-text-secondary dark:text-text-tertiary max-w-3xl mx-auto">
            Everything you need to build, manage, and scale your AI-powered company. 
            From specialized agents to automated workflows, we&#39;ve got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`card p-8 group ${index % 2 === 0 ? 'lg:translate-y-4' : ''}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} className="text-white" />
              </div>

              {/* Content */}              <h3 className="text-feature-title font-semibold text-text-primary dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary dark:text-text-tertiary mb-3 leading-relaxed">
                {feature.description}
              </p>              <p className="text-body-small text-text-tertiary dark:text-text-tertiary">
                {feature.details}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-secondary-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20">          <div className="bg-gradient-to-r from-primary-blue/10 to-secondary-purple/10 dark:from-primary-blue/20 dark:to-secondary-purple/20 rounded-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-subsection font-semibold text-text-primary dark:text-white mb-4">
                  See Your AI Team in Action
                </h3>
                <p className="text-body-large text-text-secondary dark:text-text-tertiary mb-6">
                  Watch as your AI agents collaborate in real-time, sharing context and 
                  building on each other&#39;s work to deliver comprehensive solutions.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span className="text-text-secondary dark:text-text-tertiary">Agents share context automatically</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span className="text-text-secondary dark:text-text-tertiary">Real-time progress tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                    <span className="text-text-secondary dark:text-text-tertiary">Transparent decision-making process</span>
                  </div>
                </div>
              </div>
                <div className="relative">
                {/* Mock Chat Interface */}
                <div className="bg-white dark:bg-bg-dark-secondary rounded-xl shadow-lg border dark:border-bg-dark-tertiary overflow-hidden">
                  {/* Chat Header */}
                  <div className="bg-bg-tertiary dark:bg-bg-dark-tertiary px-4 py-3 border-b dark:border-bg-dark-tertiary">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                      <span className="text-sm font-semibold text-text-primary dark:text-white">Team Chat</span>
                      <span className="text-xs text-text-secondary dark:text-text-tertiary ml-auto">3 agents active</span>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="p-4 space-y-3 h-64 overflow-hidden">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary-purple rounded-full flex items-center justify-center text-white text-xs font-bold">M</div>
                      <div className="flex-1">
                        <div className="text-xs text-text-secondary dark:text-text-tertiary mb-1">Marketing Agent</div>
                        <div className="bg-bg-secondary dark:bg-bg-dark rounded-lg p-2 text-sm text-text-primary dark:text-white">I&#39;ve analyzed the target audience and created campaign briefs.</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary-blue rounded-full flex items-center justify-center text-white text-xs font-bold">D</div>
                      <div className="flex-1">
                        <div className="text-xs text-text-secondary dark:text-text-tertiary mb-1">Developer Agent</div>
                        <div className="bg-bg-secondary dark:bg-bg-dark rounded-lg p-2 text-sm text-text-primary dark:text-white">Building the landing page based on those specs...</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>
                      <div className="flex-1">
                        <div className="text-xs text-text-secondary dark:text-text-tertiary mb-1">Analyst Agent</div>
                        <div className="bg-bg-secondary dark:bg-bg-dark rounded-lg p-2 text-sm text-text-primary dark:text-white">I&#39;ll set up conversion tracking for the new page.</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating indicator */}
                <div className="absolute -top-2 -right-2 bg-accent-green text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">
                  Live
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
