
import { getPostData } from '@/lib/posts'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)
  return (
    <article>
      <h1>{postData.title}</h1>
      <div>
        <MDXRemote source={postData.content} />
      </div>
    </article>
  )
}
