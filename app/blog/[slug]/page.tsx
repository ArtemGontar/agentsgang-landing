import { getPostData } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)
  return (
    <article className="prose lg:prose-xl dark:prose-invert container mx-auto px-4 py-8">
      <img
        src={postData.cover_image!}
        alt={postData.title!}
        className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div className="text-sm text-secondary mb-6">
        <span>{postData.date}</span> &bull;{' '}
        <span>
          {postData.author}, {postData.author_title}
        </span>
      </div>
      <MDXRemote source={postData.content} />
    </article>
  )
}
