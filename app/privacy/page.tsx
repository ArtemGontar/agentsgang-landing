import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function PrivacyPage() {
  const filePath = path.join(process.cwd(), 'legal', 'privacy_policy.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')

  return (
    <div className="prose lg:prose-xl mx-auto px-4 py-8">
      <MDXRemote source={fileContents} />
    </div>
  )
}
