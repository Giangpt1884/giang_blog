import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { vi } from 'date-fns/locale'
import { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white rounded-xl border border-gray-200 overflow-hidden group h-full flex flex-col hover:border-gray-300 transition-colors">
        {/* Cover Image */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-full border border-gray-200">
              {post.category.name}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-xl font-bold mb-3 line-clamp-2 text-gray-900 group-hover:text-gray-600 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
            {post.excerpt}
          </p>

          {/* Meta Info (Author & Date) */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-100">
                {post.author.avatar ? (
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-700 font-bold text-xs uppercase">
                    {post.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
            </div>
            
            <div className="flex flex-col items-end">
              <time className="text-xs text-gray-500 font-medium">
                {format(new Date(post.publishedAt), 'dd MMM, yyyy', {
                  locale: vi,
                })}
              </time>
              <span className="text-[10px] text-gray-400 mt-0.5">{post.readingTime} phút đọc</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
