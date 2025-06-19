import React from 'react'
import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export default function BlogPage() {
  const allPostsData = getSortedPostsData()
  return (
    <section className="container-custom py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {allPostsData.map(({ id, title, excerpt, date, cover_image, author }) => (
          <Link key={id} href={`/blog/${id}`} className="block border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <img src={cover_image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-primary hover:text-primary-blue-light mb-2">{title}</h2>
              <div className="text-sm text-secondary mb-2">
                <span>{date}</span> &bull; <span>{author}</span>
              </div>
              <p className="text-gray-700 text-body mt-2">{excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
