import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'
import { getPostBySlug } from '@/lib/api'

// Generate Metadata for SEO (Server-side)
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug)

  if (!post) return {}

  return {
    title: `${post.title} | NextJS Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="pb-24 pt-12">
      {/* Article Header */}
      <header className="container mx-auto px-4 max-w-4xl text-center mb-12">
        <div className="mb-6 flex justify-center">
          <span className="bg-primary-50 text-primary-700 text-sm font-bold px-4 py-1.5 rounded-full ring-1 ring-inset ring-primary-600/20">
            {post.category.name}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-center gap-6 text-gray-600">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
              <Image 
                src={post.author.avatar} 
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-gray-900">{post.author.name}</span>
          </div>
          <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
          <time className="hidden sm:flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            {format(new Date(post.publishedAt), 'd MMMM, yyyy', { locale: vi })}
          </time>
          <div className="h-4 w-px bg-gray-300 hidden sm:block"></div>
          <span className="hidden sm:flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {post.readingTime} phút đọc
          </span>
        </div>
      </header>

      {/* Cover Image */}
      <div className="container mx-auto px-4 max-w-5xl mb-16">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg prose-primary prose-a:text-primary-600">
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/# (.+)/g, '<h2>$1</h2>').replace(/\n\n/g, '<br/><br/>') }}></div>
      </div>
    </article>
  )
}
