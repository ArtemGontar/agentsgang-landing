'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BlogCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'primary' | 'secondary' | 'gradient';
  className?: string;
}

const BlogCTA: React.FC<BlogCTAProps> = ({
  title = "Ready to Transform Your Marketing?",
  description = "Join thousands of businesses already using AI agents to automate their marketing and drive growth.",
  buttonText = "Get Early Access",
  variant = 'gradient',
  className = '',
}) => {
  const handleCTAClick = () => {
    // This will trigger the waitlist modal
    const event = new CustomEvent('openWaitlistModal');
    window.dispatchEvent(event);
  };

  const baseClasses = "rounded-xl p-6 md:p-8 text-center border";
  
  const variantClasses = {
    primary: "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800",
    secondary: "bg-gray-50 border-gray-200 dark:bg-gray-800/50 dark:border-gray-700",
    gradient: "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-blue-200 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 dark:border-blue-800"
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`${baseClasses} ${variantClasses[variant]} ${className} my-8 not-prose`}
    >
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          {description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCTAClick}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
        >
          {buttonText}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default BlogCTA;
