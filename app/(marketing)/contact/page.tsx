import ContactForm from '@/components/forms/ContactForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Liên hệ | NextJS Blog',
  description: 'Gửi tin nhắn hoặc góp ý cho chúng tôi.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Điểm nhấn & Thông tin liên hệ */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">
              Kết nối với chúng tôi
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Hãy để lại lời nhắn!
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Chúng tôi luôn mong muốn lắng nghe ý kiến từ cộng đồng. Bất kỳ câu hỏi, góp ý hay đề xuất hợp tác nào, đừng ngần ngại cho chúng tôi biết.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
                <p className="text-gray-600">hello@nextjs-blog.edu.vn</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Điện thoại</h3>
                <p className="text-gray-600">+84 123 456 789</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Gửi phản hồi trực tiếp
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
