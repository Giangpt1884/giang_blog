import PostList from '@/components/blog/PostList'
import SearchBar from '@/components/blog/SearchBar'
import { getPosts } from '@/lib/api'
import { Suspense } from 'react'

export const metadata = {
  title: 'Blog | Giangpt Blog',
  description: 'Tất cả bài viết về lập trình Next.js, React và Web Development',
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams?.query || ''

  // Gọi "Fake API" từ server, tự động render lại nếu có query change
  const posts = await getPosts(query)

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 lg:max-w-5xl">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Tất cả bài viết</h1>
          <p className="text-lg text-gray-600">Khám phá các bài viết mới nhất từ cộng đồng.</p>
        </div>

        {/* Suspense bao bọc SearchBar vì nó có hook useSearchParams */}
        <Suspense fallback={<div className="h-12 w-full md:max-w-md bg-gray-100 rounded-full animate-pulse delay-75"></div>}>
          <SearchBar />
        </Suspense>
      </div>

      <PostList posts={posts} />
    </div>
  )
}
