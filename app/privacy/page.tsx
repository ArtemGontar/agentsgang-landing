"use client"
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function PrivacyPage() {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch('/legal/privacy_policy.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [])

  return (
    <div className="prose lg:prose-xl mx-auto px-4 py-8">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}
