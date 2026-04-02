'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { Search } from 'lucide-react'

export default function SearchBar() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  
  // Lấy giá trị initial từ URL nếu có
  const initialQuery = searchParams.get('query')?.toString() || ''
  const [searchTerm, setSearchTerm] = useState(initialQuery)
  
  // Áp dụng hook debounce với độ trễ 500ms
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  // Theo dõi sự thay đổi của đoạn text đã debounced và đẩy url lên param
  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    
    // Nếu có giá trị tìm kiếm thì set và reset lại query param
    if (debouncedSearchTerm) {
      params.set('query', debouncedSearchTerm)
    } else {
      params.delete('query')
    }
    
    // Cập nhật lại URL mà không cần load lại trang nhờ useRouter
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, [debouncedSearchTerm, pathname, replace, searchParams])

  return (
    <div className="relative flex flex-1 flex-shrink-0 w-full md:max-w-md">
      <label htmlFor="search" className="sr-only">
        Tìm kiếm bài viết
      </label>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
        <Search className="h-5 w-5" aria-hidden="true" />
      </div>
      <input
        type="search"
        id="search"
        className="block w-full rounded-full border-0 py-3 pl-10 pr-4 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 transition-all"
        placeholder="Tìm kiếm nội dung..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  )
}
