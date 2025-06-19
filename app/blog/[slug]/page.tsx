import { getPostData } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import React from 'react'
import BlogCTA from '@/components/BlogCTA'

const components = {
  BlogCTA,
  img: (props: any) => (
    <div className="flex justify-center my-6">
      <Image
        {...props}
        width={props.width ? props.width / 2 : 600}
        height={props.height ? props.height / 2 : 400}
        className="max-w-1/2 h-auto rounded-lg"
      />
    </div>
  )
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)
  return (
    <article className="mx-auto w-4/5 px-4 sm:px-6 lg:px-8 prose max-w-none lg:prose-xl dark:prose-invert py-8">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>      <div className="flex justify-center mb-6">
        <Image
          src={postData.cover_image!}
          alt={postData.title!}
          width={600}
          height={315}
          className="w-1/2 aspect-video object-cover rounded-lg"
        />
      </div>
      <div className="text-sm text-secondary mb-6">
        <span>{postData.date}</span> &bull;{' '}
        <span>
          {postData.author}, {postData.author_title}
        </span>
      </div>
      <MDXRemote source={postData.content} components={components} />
    </article>
  )
}
