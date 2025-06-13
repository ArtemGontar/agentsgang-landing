# ProtoHive Landing Page

A modern, responsive landing page for ProtoHive - an AI-powered virtual company platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with seamless tablet and desktop experiences
- **Performance Optimized**: Fast loading times with Core Web Vitals optimization
- **SEO Ready**: Comprehensive meta tags, Open Graph, and structured data
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support
- **Modern UI**: Clean, professional design with smooth animations and micro-interactions

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript 5.0+
- **Styling**: Tailwind CSS 3.4+
- **Icons**: Lucide React
- **Animation**: CSS transitions and keyframes
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
protohive-ui/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main landing page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Hero section with CTAs
│   ├── HowItWorksSection.tsx  # Process explanation
│   ├── FeaturesSection.tsx    # Feature highlights
│   ├── SocialProofSection.tsx # Testimonials and stats
│   ├── PricingSection.tsx     # Pricing plans
│   ├── FAQSection.tsx         # Frequently asked questions
│   └── Footer.tsx             # Site footer
├── public/                # Static assets
└── tailwind.config.js     # Tailwind configuration
```

## Original Project Description

Create and manage mini AI-powered companies with specialized agents that collaborate, use tools, remember context, and generate documentation — all in a SaaS platform.

This SaaS application enables users to build and manage their own mini companies staffed by AI agents with defined roles such as marketer, developer, analyst, and more. Each agent operates through a chat interface, equipped with specific tools and memory to handle assigned tasks autonomously.
