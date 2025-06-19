import { Star, Quote, Users, TrendingUp, Shield, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "AgentsGang transformed how I run my consulting business. My AI marketing agent handles campaign creation while the analyst agent tracks performance. I've saved 15 hours per week and increased client satisfaction.",
      author: "Sarah Chen",
      title: "Founder",
      company: "GrowthLab Consulting",
      rating: 5,
      avatar: "SC"
    },
    {
      quote: "The collaboration between agents is incredible. I assign a project and watch the developer, designer, and marketer work together automatically. It's like having a full team that never sleeps.",
      author: "Marcus Rodriguez",
      title: "CEO",
      company: "TechStart Solutions",
      rating: 5,
      avatar: "MR"
    },
    {
      quote: "As a solo entrepreneur, AgentsGang gave me superpowers. My AI agents handle everything from market research to content creation, allowing me to focus on strategy and client relationships.",
      author: "Emily Thompson",
      title: "Independent Consultant",
      company: "Thompson Digital",
      rating: 5,
      avatar: "ET"
    }
  ]

  const stats = [
    { 
      number: "2,000+", 
      label: "AI Companies Created",
      icon: Users,
      color: "text-primary-blue dark:text-secondary-purple"
    },
    { 
      number: "50,000+", 
      label: "Tasks Automated",
      icon: TrendingUp,
      color: "text-accent-green dark:text-accent-green-light"
    },
    { 
      number: "99.9%", 
      label: "Uptime",
      icon: Shield,
      color: "text-secondary-purple dark:text-primary-blue"
    },
    { 
      number: "4.9/5", 
      label: "Customer Rating",
      icon: Star,
      color: "text-accent-green dark:text-accent-green-light"
    }
  ]

  const companyLogos = [
    { name: "TechCorp", width: "w-28", color: "from-blue-500 to-blue-600" },
    { name: "InnovateLab", width: "w-32", color: "from-purple-500 to-purple-600" },
    { name: "FutureWorks", width: "w-30", color: "from-green-500 to-green-600" },
    { name: "DigitalEdge", width: "w-36", color: "from-indigo-500 to-indigo-600" },
    { name: "SmartSys", width: "w-28", color: "from-pink-500 to-pink-600" },
    { name: "NextGen", width: "w-30", color: "from-teal-500 to-teal-600" }
  ]
  return (
    <section className="section-spacing bg-gradient-section dark:bg-gradient-section-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-blue rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-purple rounded-full blur-xl"></div>
      </div>
      
      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-20">          <div className="inline-flex items-center gap-2 bg-white dark:bg-bg-dark-secondary px-4 py-2 rounded-full border border-gray-200 dark:border-bg-dark-tertiary mb-6">
            <CheckCircle className="text-accent-green" size={16} />
            <span className="text-body-small font-medium text-text-secondary dark:text-text-tertiary">
              Trusted by Growing Businesses
            </span>
          </div>
          <h2 className="text-section font-semibold text-text-primary dark:text-white mb-4">
            Join Thousands of Successful Entrepreneurs
          </h2>
          <p className="text-body-large text-text-secondary dark:text-text-tertiary max-w-3xl mx-auto">
            Entrepreneurs worldwide are building AI-powered companies that scale faster, work smarter, and achieve more with AgentsGang.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >              <div className="w-16 h-16 mx-auto mb-4 bg-white dark:bg-bg-dark-secondary rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300 border dark:border-bg-dark-tertiary">
                <stat.icon className={`${stat.color}`} size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-text-primary dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-body-regular text-text-secondary dark:text-text-tertiary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Company Logos */}
        <div className="mb-20">
          <p className="text-center text-body-small text-text-tertiary dark:text-text-tertiary mb-8 font-medium">
            TRUSTED BY INNOVATIVE COMPANIES
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {companyLogos.map((logo, idx) => (
              <div 
                key={logo.name} 
                className={`bg-white dark:bg-bg-dark-secondary rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center ${logo.width} hover:scale-105 border dark:border-bg-dark-tertiary`} 
                style={{ minHeight: 64 }}
              >
                <div className="text-center">
                  <div className={`w-8 h-8 bg-gradient-to-r ${logo.color} rounded-lg mx-auto mb-2`}></div>
                  <span className="text-sm font-semibold text-text-primary dark:text-white">{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, idx) => (            
            <div 
              key={idx} 
              className="bg-white dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col h-full group"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="text-primary-blue dark:text-secondary-purple group-hover:scale-110 transition-transform duration-300" size={32} />
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-accent-green fill-current" size={16} />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg text-text-primary dark:text-white mb-6 flex-1 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <Image 
                  src={`/feedback/feedback${idx + 1}.png`}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-contain shadow-md border-2 border-white dark:border-bg-dark flex-shrink-0"
                  style={{ imageRendering: 'auto', minWidth: '48px', minHeight: '48px' }}
                />
                <div>
                  <div className="font-semibold text-text-primary dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-body-small text-text-secondary dark:text-text-tertiary">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-xl px-6 py-4 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Shield className="text-accent-green" size={20} />
            <div>
              <span className="text-accent-green font-bold">SOC 2</span>
              <span className="text-body-small text-text-secondary dark:text-text-tertiary ml-1">Compliant</span>
            </div>
          </div>
          <div className="bg-white dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-xl px-6 py-4 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow duration-300">
            <TrendingUp className="text-primary-blue dark:text-secondary-purple" size={20} />
            <span className="text-primary-blue dark:text-secondary-purple font-bold">99.9% Uptime</span>
          </div>
          <div className="bg-white dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-xl px-6 py-4 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CheckCircle className="text-accent-green" size={20} />
            <span className="text-accent-green font-bold">Enterprise Ready</span>
          </div>
          <div className="bg-white dark:bg-bg-dark-secondary border border-gray-200 dark:border-bg-dark-tertiary rounded-xl px-6 py-4 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow duration-300">
            <Shield className="text-accent-green" size={20} />
            <div>
              <span className="text-accent-green font-bold">100% Data Privacy</span>
              <span className="text-text-tertiary ml-2">&quot;Your data is never shared&quot;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}