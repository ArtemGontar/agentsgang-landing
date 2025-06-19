import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script';
import { CookieConsentScripts } from '../components/CookieConsentScripts';
import { GoogleTagManagerScripts } from '../components/GoogleTagManagerScripts';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://agentsgang.com'),
  title: 'AgentsGang - Build Your AI-Powered Company in Minutes',
  description: 'Create specialized AI agents that work together as your virtual team — handling marketing, development, analysis, and more while you focus on strategy.',
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  keywords: 'AI agents, virtual team, AI automation, business AI, AI company, AI tools, artificial intelligence',
  authors: [{ name: 'AgentsGang' }],
  openGraph: {
    title: 'AgentsGang - Build Your AI-Powered Company in Minutes',
    description: 'Create specialized AI agents that work together as your virtual team — handling marketing, development, analysis, and more while you focus on strategy.',
    url: 'https://agentsgang.com',
    siteName: 'AgentsGang',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AgentsGang - AI-Powered Virtual Companies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentsGang - Build Your AI-Powered Company in Minutes',
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
  manifest: '/site.webmanifest'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning={true}>
      <head>
        <CookieConsentScripts />
        <GoogleTagManagerScripts />
        {/* Structured Data */}
        <Script
          type="application/ld+json"
          id="org-ldjson"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'AgentsGang',
              'url': 'https://agentsgang.com',
              'logo': 'https://agentsgang.com/logo.png',
              'sameAs': [
                'https://twitter.com/agentsgang',
                'https://www.linkedin.com/company/agentsgang',
              ]
            })
          }}
        />
        <Script
          type="application/ld+json"
          id="website-ldjson"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              'name': 'AgentsGang',
              'url': 'https://agentsgang.com',
              'potentialAction': {
                '@type': 'SearchAction',
                'target': 'https://agentsgang.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} bg-white dark:bg-bg-dark font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
