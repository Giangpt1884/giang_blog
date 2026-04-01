import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Giới thiệu | NextJS Blog',
  description: 'Về dự án Next.js Blog Learning Platform.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="bg-white rounded-3xl p-8 md:p-16 shadow-sm border border-gray-100">
        <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-4 block text-center">
          Về Chúng Tôi
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight tracking-tight text-center">
          Sứ mệnh xây dựng Next.js Platform
        </h1>

        <div className="prose prose-lg prose-primary max-w-none text-gray-600">
          <p className="lead text-xl text-gray-700 font-medium mb-12 text-center">
            Dự án này được thiết kế để trở thành nguồn tài nguyên tham khảo chuẩn mực cho các lập trình viên muốn làm chủ Next.js và App Router.
          </p>

          <div className="grid md:grid-cols-2 gap-12 my-16">
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm">1</span>
                Thực tiễn & Hiện đại
              </h3>
              <p>Sử dụng các công nghệ mới nhất: Next.js 16+, React 19, Tailwind CSS v4, và cấu trúc App Router.</p>
            </div>
            
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm">2</span>
                Theo chuẩn mực (Best Practices)
              </h3>
              <p>Thiết kế theo các nguyên tắc được khuyến nghị bởi Vercel: Phân chia Server Component, tối ưu UX/UI, và Form Validation.</p>
            </div>
          </div>

          <p>
            Với định hướng thiết kế UI tinh gọn, giao diện Responsive và trải nghiệm người dùng mượt mà, chúng tôi hy vọng NextJS Blog Learning Platform sẽ trở thành bộ khung lý tưởng để các bạn mở rộng thêm nhiều dự án thực tế.
          </p>
        </div>

        <div className="mt-16 pt-12 border-t border-gray-100 flex justify-center">
          <Link href="/blog" className="btn btn-primary px-8 h-12 text-base shadow-md">
            Khám phá Blog ngay
          </Link>
        </div>
      </div>
    </div>
  )
}
