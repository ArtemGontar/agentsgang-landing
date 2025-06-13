import { Star, Quote } from 'lucide-react'

export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "ProtoHive transformed how I run my consulting business. My AI marketing agent handles campaign creation while the analyst agent tracks performance. I've saved 15 hours per week and increased client satisfaction.",
      author: "Sarah Chen",
      title: "Founder",
      company: "GrowthLab Consulting",
      rating: 5
    },
    {
      quote: "The collaboration between agents is incredible. I assign a project and watch the developer, designer, and marketer work together automatically. It's like having a full team that never sleeps.",
      author: "Marcus Rodriguez",
      title: "CEO",
      company: "TechStart Solutions",
      rating: 5
    },
    {
      quote: "As a solo entrepreneur, ProtoHive gave me superpowers. My AI agents handle everything from market research to content creation, allowing me to focus on strategy and client relationships.",
      author: "Emily Thompson",
      title: "Independent Consultant",
      company: "Thompson Digital",
      rating: 5
    }
  ]

  const stats = [
    { number: "2,000+", label: "AI Companies Created" },
    { number: "50,000+", label: "Tasks Automated" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9/5", label: "Customer Rating" }
  ]

  const companyLogos = [
    { name: "TechCorp", width: "w-24" },
    { name: "InnovateLab", width: "w-32" },
    { name: "FutureWorks", width: "w-28" },
    { name: "DigitalEdge", width: "w-36" },
    { name: "SmartSys", width: "w-24" },
    { name: "NextGen", width: "w-30" }
  ]

  return (
    <section className="section-spacing bg-bg-secondary">
      <div className="container-custom">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className="text-section font-semibold text-text-primary mb-4">
            Trusted by Growing Businesses
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto mb-12">
            Join thousands of entrepreneurs who are already building successful AI-powered companies with ProtoHive.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-subsection font-semibold text-text-primary mb-4">
              What Our Users Say
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-card relative">
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6">
                  <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center">
                    <Quote size={14} className="text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-text-secondary mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-secondary-purple rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-text-secondary mb-8">
            Trusted by startups and enterprises
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {companyLogos.map((logo, index) => (
              <div 
                key={index} 
                className={`${logo.width} h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded flex items-center justify-center`}
              >
                <span className="text-xs font-semibold text-white">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-6">
            Enterprise-grade security and compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">✓</span>
              </div>
              <span className="text-sm font-semibold text-text-primary">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="w-6 h-6 bg-primary-blue rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">🔒</span>
              </div>
              <span className="text-sm font-semibold text-text-primary">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="w-6 h-6 bg-secondary-purple rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">📋</span>
              </div>
              <span className="text-sm font-semibold text-text-primary">GDPR Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
