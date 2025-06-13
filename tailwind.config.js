/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#007AFF',
          'blue-light': '#4DA3FF',
          'blue-dark': '#0051CC',
        },
        secondary: {
          purple: '#7C3AED',
          'purple-light': '#A855F7',
          'purple-dark': '#5B21B6',
        },
        accent: {
          green: '#10B981',
          'green-light': '#34D399',
          'green-dark': '#059669',
        },
        text: {
          primary: '#1F2937',
          secondary: '#6B7280',
          tertiary: '#9CA3AF',
        },
        bg: {
          primary: '#FFFFFF',
          secondary: '#F9FAFB',
          tertiary: '#F3F4F6',
          dark: '#111827',
        },
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['64px', { lineHeight: '72px', letterSpacing: '-0.02em' }],
        'section': ['48px', { lineHeight: '56px', letterSpacing: '-0.01em' }],
        'subsection': ['32px', { lineHeight: '40px', letterSpacing: '-0.005em' }],
        'card-title': ['24px', { lineHeight: '32px' }],
        'feature-title': ['20px', { lineHeight: '28px' }],
        'body-large': ['18px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '24px' }],
        'body-small': ['14px', { lineHeight: '20px', letterSpacing: '0.01em' }],
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '120': '30rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #007AFF 0%, #7C3AED 100%)',
        'gradient-card': 'linear-gradient(145deg, #FFFFFF 0%, #F9FAFB 100%)',
        'gradient-cta': 'linear-gradient(135deg, #007AFF 0%, #0051CC 100%)',
        'gradient-section': 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
        'gradient-radial': 'radial-gradient(circle at 30% 20%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
      },
      boxShadow: {
        'button': '0 4px 16px rgba(0, 122, 255, 0.3)',
        'button-hover': '0 8px 24px rgba(0, 122, 255, 0.4)',
        'card': '0 4px 16px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.08)',
        'pricing': '0 8px 32px rgba(0, 122, 255, 0.15)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
