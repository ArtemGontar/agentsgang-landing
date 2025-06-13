import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ProtoHive - Build Your AI-Powered Company in Minutes',
  description: 'Create specialized AI agents that work together as your virtual team — handling marketing, development, analysis, and more while you focus on strategy.',
  keywords: 'AI agents, virtual team, AI automation, business AI, AI company, AI tools, artificial intelligence',
  authors: [{ name: 'ProtoHive' }],
  openGraph: {
    title: 'ProtoHive - Build Your AI-Powered Company in Minutes',
    description: 'Create specialized AI agents that work together as your virtual team — handling marketing, development, analysis, and more while you focus on strategy.',
    url: 'https://protohive.com',
    siteName: 'ProtoHive',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ProtoHive - AI-Powered Virtual Companies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ProtoHive - Build Your AI-Powered Company in Minutes',
    description: 'Create specialized AI agents that work together as your virtual team — handling marketing, development, analysis, and more while you focus on strategy.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
