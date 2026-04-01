import { Post } from '@/types'
import postsData from '@/data/posts.json'

// Mô phỏng độ trễ của network
const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export async function getPosts(query?: string, category?: string): Promise<Post[]> {
  await delay(800) // Fake API latency
  let posts = postsData as Post[]

  if (query) {
    const q = query.toLowerCase()
    posts = posts.filter(
      p => p.title.toLowerCase().includes(q) || 
           p.excerpt.toLowerCase().includes(q)
    )
  }

  if (category) {
    posts = posts.filter(p => p.category.slug === category)
  }

  // Sắp xếp mới nhất lên đầu
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  await delay(500)
  return (postsData as Post[]).find(p => p.slug === slug)
}

export async function getAllCategories() {
  await delay(300)
  const posts = postsData as Post[]
  const categoriesMap = new Map()

  posts.forEach(post => {
    if (!categoriesMap.has(post.category.slug)) {
      categoriesMap.set(post.category.slug, post.category)
    }
  })

  return Array.from(categoriesMap.values())
}
