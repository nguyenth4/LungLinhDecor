// components/Footer.tsx
// Footer với thông tin shop và links

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-950 to-indigo-950 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CỘT 1: Thông tin shop */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🌙</span>
              <div>
                <h3 className="font-display font-bold text-xl text-purple-200">Lung Linh Decor</h3>
                <p className="text-xs text-purple-400 tracking-widest uppercase">Đèn Ngủ 3D Cao Cấp</p>
              </div>
            </div>
            <p className="text-purple-300 text-sm leading-relaxed">
              Biến không gian sống của bạn thành thiên đường lung linh với những chiếc đèn 3D độc đáo. 
              Mỗi sản phẩm là một tác phẩm nghệ thuật ánh sáng.
            </p>
            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a href="https://shopee.vn" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center hover:bg-orange-500/40 transition-colors text-sm">
                🛒
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors text-sm">
                🎵
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/40 transition-colors text-sm">
                📘
              </a>
            </div>
          </div>

          {/* CỘT 2: Danh mục */}
          <div className="space-y-4">
            <h4 className="font-bold text-purple-200 text-sm uppercase tracking-wider">Sản phẩm</h4>
            <ul className="space-y-2">
              {[
                { label: '🌙 Đèn Mặt Trăng 3D', href: '/product/1' },
                { label: '🌌 Đèn Galaxy', href: '/product/2' },
                { label: '❤️ Đèn Trái Tim', href: '/product/3' },
                { label: '📸 Đèn In Ảnh', href: '/product/4' },
                { label: '🎨 Đèn Bàn Học', href: '/product/5' },
                { label: '🌈 Đèn RGB', href: '/product/6' },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href}
                    className="text-purple-300 text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CỘT 3: Hỗ trợ */}
          <div className="space-y-4">
            <h4 className="font-bold text-purple-200 text-sm uppercase tracking-wider">Hỗ trợ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-purple-300 text-sm">
                <span>📦</span>
                <span>Giao hàng toàn quốc 2-5 ngày</span>
              </li>
              <li className="flex items-center gap-2 text-purple-300 text-sm">
                <span>🔄</span>
                <span>Đổi trả trong 7 ngày</span>
              </li>
              <li className="flex items-center gap-2 text-purple-300 text-sm">
                <span>💳</span>
                <span>Thanh toán COD an toàn</span>
              </li>
              <li className="flex items-center gap-2 text-purple-300 text-sm">
                <span>🎁</span>
                <span>Đóng gói quà tặng miễn phí</span>
              </li>
              <li className="flex items-center gap-2 text-purple-300 text-sm">
                <span>📞</span>
                <span>Hotline: 1800-xxxx (miễn phí)</span>
              </li>
            </ul>

            {/* Mua ngay buttons */}
            <div className="pt-2 space-y-2">
              <a href="https://shopee.vn" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-500/30 transition-colors">
                🛒 Mua trên Shopee
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 border border-white/20 text-purple-200 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">
                🎵 Mua trên TikTok Shop
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-purple-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-purple-400 text-xs">
            © 2025 Lung Linh Decor. Made with 💜 in Việt Nam
          </p>
          <p className="text-purple-500 text-xs">
            Website chứa link affiliate Shopee & TikTok Shop
          </p>
        </div>
      </div>
    </footer>
  )
}
