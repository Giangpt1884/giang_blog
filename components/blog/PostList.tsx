import { Post } from '@/types'
import PostCard from './PostCard'

interface PostListProps {
  posts: Post[]
}

export default async function PostList({ posts }: PostListProps) {
  if (!posts || posts.length === 0) {
    return (
      <div className="col-span-full py-16 text-center bg-gray-50 rounded-xl border border-gray-100">
        <h3 className="text-xl font-medium text-gray-900 mb-2">Chưa có bài viết nào</h3>
        <p className="text-gray-500">Chúng tôi đang cập nhật nội dung. Vui lòng quay lại sau!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
