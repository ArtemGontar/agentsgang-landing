import React from 'react'
import LegalLayout from '@/app/legal/layout'

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <LegalLayout>{children}</LegalLayout>
}
