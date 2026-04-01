import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { contactSchema } from '@/lib/validations'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate dữ liệu từ client
    const validatedData = contactSchema.parse(body)
    
    // TODO: Thực tế sẽ gửi email, lưu vào database ở đây
    console.log('📬 Contact form submission received:', validatedData)
    
    // Mô phỏng delay server
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    return NextResponse.json({ 
      success: true, 
      message: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.' 
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Trả về lỗi chi tiết của Zod nếu validation thất bại trên server
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { success: false, message: 'Đã có lỗi xảy ra trong quá trình xử lý.' },
      { status: 500 }
    )
  }
}
