import { useState, useEffect } from 'react'

/**
 * Custom hook giúp delay (debounce) việc cập nhật giá trị state.
 * Rất hữu ích cho các ô tìm kiếm để tránh gọi API liên tục khi người dùng đang gõ.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    // Đặt hẹn giờ để cập nhật giá trị sau khoảng thời gian delay
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // Xóa hẹn giờ cũ nếu value thay đổi trước khi delay kết thúc
    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
