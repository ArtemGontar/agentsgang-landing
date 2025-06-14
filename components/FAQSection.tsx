'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How is this different from ChatGPT or other AI tools?",
      answer: "While ChatGPT is a single AI assistant, ProtoHive creates a team of specialized AI agents that work together. Each agent has specific roles, tools, and memory, allowing them to collaborate on complex projects just like a real company. They can share context, build on each other's work, and maintain long-term knowledge about your business."
    },
    {
      question: "Do I need technical knowledge to use ProtoHive?",
      answer: "Not at all! ProtoHive is designed for entrepreneurs and business owners, not developers. You interact with your AI agents through a simple chat interface, just like messaging a team member. The agents handle all the technical complexity behind the scenes."
    },
    {
      question: "How do AI agents communicate with each other?",
      answer: "Agents share a collaborative workspace where they can see each other's work, share files, and communicate directly. When you assign a task, the relevant agents automatically coordinate to complete it. For example, if you ask for a marketing campaign, the Marketing Agent might brief the Designer Agent, who then shares assets with the Developer Agent."
    },
    {
      question: "What happens to my data and conversations?",
      answer: "Your data is encrypted and stored securely in SOC 2 compliant infrastructure. Agents remember context within your organization to provide better service, but your data is never shared with other users or used to train AI models. You can export or delete your data at any time."
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Yes! ProtoHive agents can integrate with popular tools like Google Workspace, Slack, Trello, GitHub, and many others. We also provide API access for custom integrations. Agents can pull data from your existing tools and push results back to your workflows."
    },
    {
      question: "Is there a limit to what agents can do?",
      answer: "Agents are powerful but work within defined boundaries for safety and reliability. They can write code, create content, analyze data, search the web, and use various APIs. However, they cannot access external systems without permission, make real financial transactions, or perform actions outside their designated roles."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-spacing bg-bg-secondary dark:bg-bg-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-semibold text-text-primary dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-large text-text-secondary dark:text-text-tertiary max-w-3xl mx-auto">
            Get answers to common questions about ProtoHive, AI agents, and building your virtual company.
          </p>
        </div>        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-bg-tertiary border border-gray-200 dark:border-bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-body-large font-semibold text-text-primary dark:text-white">
                    {faq.question}
                  </span>
                  <span className="ml-4 text-primary-blue dark:text-secondary-purple transition-transform duration-300 group-aria-expanded:rotate-180">
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </button>
                <div
                  className={`px-6 pb-5 text-text-secondary dark:text-text-tertiary text-body-regular transition-all duration-300 ${openIndex === index ? 'block' : 'hidden'}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
