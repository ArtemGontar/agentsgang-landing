import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function TermsPage() {
  const filePath = path.join(process.cwd(), 'legal', 'terms_and_conditions.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')

  return (
    <section className="container-custom py-8">
      <article className="prose max-w-none lg:prose-xl dark:prose-invert mx-auto">
        <MDXRemote source={fileContents} />
      </article>
    </section>
  )
}
