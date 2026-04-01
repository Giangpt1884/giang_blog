export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">NextJS Blog</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Nền tảng học tập Next.js thực tế, giúp bạn làm chủ React và App Router từ cơ bản đến nâng cao.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Liên kết</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/blog" className="hover:text-primary-600 transition-colors">Blog</a></li>
              <li><a href="/about" className="hover:text-primary-600 transition-colors">Giới thiệu</a></li>
              <li><a href="/contact" className="hover:text-primary-600 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Social/Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Theo dõi</h3>
            <p className="text-sm text-gray-600">
              Đăng ký nhận tin để không bỏ lỡ các bài viết mới nhất.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email của bạn" 
                className="flex-1 px-3 py-2 border rounded-md text-sm outline-none focus:ring-1 focus:ring-primary-600"
              />
              <button className="btn btn-primary px-4 text-sm">Gửi</button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-500">
          <p>© {currentYear} NextJS Blog Learning Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
