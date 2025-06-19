import { getPostData } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)
  return (
    <article className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8 prose max-w-none lg:prose-xl dark:prose-invert py-8">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <img
        src={postData.cover_image!}
        alt={postData.title!}
        className="w-full aspect-video object-cover rounded-lg mb-6"
      />
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
