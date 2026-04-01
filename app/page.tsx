import PostList from '@/components/blog/PostList'
import { getPosts } from '@/lib/api'
import Link from 'next/link'

export default async function Home() {
  // Demo lấy nhanh hiển thị top 3 bài trên home
  const posts = await getPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="flex flex-col min-h-[calc(100vh-160px)]">
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 lg:py-32 border-b border-primary-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Nền tảng Học tập <span className="text-primary-600">Next.js</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nâng cao kỹ năng React và làm chủ kiến trúc App Router tiên tiến nhất với các bài viết chuyên sâu từ cộng đồng.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/blog" className="btn btn-primary h-12 px-8 text-base shadow-md shadow-primary-600/20 w-full sm:w-auto">
              Đọc Blog
            </Link>
            <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="btn bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 h-12 px-8 text-base shadow-sm w-full sm:w-auto">
              Tài Liệu Next.js
            </a>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 lg:py-24 bg-white flex-1">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Bài viết mới nhất</h2>
              <p className="text-gray-500 mt-2">Cập nhật những kiến thức nóng hổi nhất tuần</p>
            </div>
            
            <Link href="/blog" className="hidden sm:flex text-primary-600 hover:text-primary-700 font-semibold items-center gap-1 group">
              Xem tất cả 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          
          <PostList posts={recentPosts} />

          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="btn bg-gray-50 text-primary-600 hover:bg-gray-100 w-full text-center">
              Xem tất cả bài viết
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
