import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Hàm cn (class name) dùng để kết hợp các Tailwind classes 
 * và xử lý các xung đột (conflict) thông qua tailwind-merge.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
