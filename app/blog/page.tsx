import { getSortedPostsData } from '@/lib/posts'
import Link from 'next/link'

export default function BlogPage() {
  const allPostsData = getSortedPostsData()
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="space-y-8">
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <li key={id} className="border-b pb-4">
            <Link href={`/blog/${id}`}>
              <h2 className="text-2xl font-semibold hover:text-blue-500">{title}</h2>
            </Link>
            <small className="text-gray-500">
              <p>{date}</p>
            </small>
            <p className="text-gray-700 mt-2">{excerpt}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
