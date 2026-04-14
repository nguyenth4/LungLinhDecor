// app/layout.tsx
// Layout gốc - áp dụng cho toàn bộ website

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// SEO Metadata - Rất quan trọng để Google index
export const metadata: Metadata = {
  title: {
    default: 'Đèn Ngủ 3D Lung Linh Decor - Biến Phòng Bạn Thành Thiên Đường',
    template: '%s | Lung Linh Decor'
  },
  description: 'Mua đèn ngủ 3D lung linh cao cấp: đèn mặt trăng, galaxy, trái tim, in ảnh cá nhân. Giá tốt nhất, giao hàng toàn quốc. Mua ngay trên Shopee & TikTok Shop!',
  keywords: ['đèn ngủ 3D', 'đèn mặt trăng 3D', 'đèn galaxy', 'đèn trái tim', 'lung linh decor', 'đèn decor phòng ngủ'],
  authors: [{ name: 'Lung Linh Decor' }],
  creator: 'Lung Linh Decor',
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    siteName: 'Lung Linh Decor',
    title: 'Đèn Ngủ 3D Lung Linh Decor',
    description: 'Biến không gian của bạn trở nên lung linh với đèn 3D cao cấp',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Đèn Ngủ 3D Lung Linh Decor',
    description: 'Biến không gian của bạn trở nên lung linh với đèn 3D cao cấp',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-glow">
        {/* Navbar cố định trên đầu */}
        <Navbar />
        
        {/* Nội dung chính */}
        <main className="pt-16">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}
