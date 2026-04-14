// app/not-found.tsx
// Trang 404 - Không tìm thấy

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6 animate-float inline-block">🌙</div>
        <h1 className="font-display font-black text-4xl text-purple-700 mb-4">
          Oops! Trang này không tồn tại
        </h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Có vẻ như trang bạn đang tìm kiếm đã bị di chuyển hoặc không tồn tại. 
          Hãy quay lại trang chủ để khám phá đèn lung linh nhé!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-8 py-4 rounded-2xl hover:shadow-lg hover:shadow-purple-200 hover:-translate-y-0.5 transition-all"
        >
          ✨ Về trang chủ
        </Link>
      </div>
    </div>
  )
}
