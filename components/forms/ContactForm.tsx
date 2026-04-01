'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validations'
import { toast } from 'react-hot-toast'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  // Gọi lên Server API logic
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success(result.message || 'Gửi thành công!')
        reset()
      } else {
        toast.error(result.message || 'Có lỗi xảy ra, vui lòng thử lại sau.')
        // In trường hợp API trả về mảng errors chi tiết:
        if (result.errors) {
          console.error("Validation failed at API:", result.errors)
        }
      }
    } catch (error) {
      toast.error('Lỗi kết nối máy chủ!')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      {/* Name & Email Group */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Họ tên <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            {...register('name')}
            className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
              errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200'
            }`}
            placeholder="Nguyễn Văn A"
          />
          {errors.name && (
            <p className="text-sm font-medium text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
              errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200'
            }`}
            placeholder="example@gmail.com"
          />
          {errors.email && (
             <p className="text-sm font-medium text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
          Tiêu đề <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          {...register('subject')}
          className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
            errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200'
          }`}
          placeholder="Chủ đề bạn quan tâm"
        />
        {errors.subject && (
          <p className="text-sm font-medium text-red-500 mt-1">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Nội dung <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className={`w-full px-4 py-3 border rounded-xl bg-gray-50 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
            errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200'
          }`}
          placeholder="Nội dung lời nhắn của bạn..."
        />
        {errors.message && (
          <p className="text-sm font-medium text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full h-12 text-base rounded-xl font-bold shadow-lg shadow-primary-600/30 disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0 transition-transform flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Đang xử lý...
          </>
        ) : (
          'Gửi Tin Nhắn'
        )}
      </button>
    </form>
  )
}
