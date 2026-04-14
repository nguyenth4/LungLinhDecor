'use client'
// app/page.tsx
// Trang chủ - Lung Linh Decor

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { products, getBestSellers, searchProducts, categories, formatPrice } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import Reviews from '@/components/Reviews'
import CountdownTimer from '@/components/CountdownTimer'
import ScrollAnimator from '@/components/ScrollAnimator'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Tất cả')
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  
  const productsRef = useRef<HTMLDivElement>(null)
  const whyUsRef = useRef<HTMLDivElement>(null)

  // Lọc sản phẩm theo search và category
  const filteredProducts = (() => {
    let result = searchQuery ? searchProducts(searchQuery) : products
    if (activeCategory !== 'Tất cả') {
      result = result.filter(p => p.category === activeCategory)
    }
    return result
  })()

  const bestSellers = getBestSellers()

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      {/* Kích hoạt scroll animations */}
      <ScrollAnimator />

      {/* ================================================
          BANNER HERO
          ================================================ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Nền gradient lung linh */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-900 to-purple-900" />
        
        {/* Các hình tròn ánh sáng nền */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Các ngôi sao lấp lánh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-white/30 animate-pulse text-xs"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        {/* Nội dung Hero */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Label */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-purple-200 text-sm font-semibold px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="animate-bounce">✨</span>
            <span>Đèn ngủ 3D thương hiệu Việt</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
          </div>

          {/* Tiêu đề chính */}
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-white leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Biến không gian{' '}
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-amber-300 bg-clip-text text-transparent">
              của bạn
            </span>
            <br />
            trở nên{' '}
            <span className="relative inline-block">
              <span className="glow-text bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
                lung linh ✨
              </span>
            </span>
          </h1>

          {/* Mô tả */}
          <p className="text-purple-200 text-lg sm:text-xl mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Đèn ngủ 3D cao cấp — từ đèn mặt trăng, galaxy đến in ảnh cá nhân. 
            Mỗi chiếc đèn là một tác phẩm nghệ thuật ánh sáng cho không gian của bạn.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="#products"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-extrabold text-lg px-8 py-4 rounded-2xl shadow-2xl shadow-purple-500/40 hover:shadow-purple-400/60 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-xl">🌙</span>
              Khám phá ngay
            </Link>
            <a
              href="https://shopee.vn/search?keyword=den-ngu-3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <span>🛒</span>
              Mua trên Shopee
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[
              { number: '50k+', label: 'Khách hàng' },
              { number: '4.9★', label: 'Đánh giá' },
              { number: '100%', label: 'Chính hãng' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-black text-2xl text-white">{stat.number}</div>
                <div className="text-purple-300 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION BÁN CHẠY
          ================================================ */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold px-4 py-2 rounded-full mb-4">
              <span className="animate-bounce">🔥</span>
              Top sản phẩm bán chạy nhất tuần
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-800 mb-3">
              Được yêu thích nhất 💜
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Hàng nghìn khách hàng đã tin tưởng lựa chọn
            </p>
          </div>

          {/* Grid sản phẩm bán chạy */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bestSellers.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION TẤT CẢ SẢN PHẨM
          ================================================ */}
      <section id="products" className="py-16 px-4" ref={productsRef}>
        <div className="max-w-7xl mx-auto">
          
          {/* Header section */}
          <div className="text-center mb-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-800 mb-3">
              Khám phá bộ sưu tập 🌟
            </h2>
            <p className="text-gray-500">Tìm chiếc đèn hoàn hảo cho không gian của bạn</p>
          </div>

          {/* THANH TÌM KIẾM */}
          <div className="max-w-lg mx-auto mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="🔍 Tìm kiếm đèn ngủ 3D..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-5 pr-12 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-400 focus:outline-none bg-white shadow-sm text-gray-700 font-medium placeholder-gray-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* FILTER THEO LOẠI */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-200'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-purple-300 hover:text-purple-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Kết quả tìm kiếm */}
          {searchQuery && (
            <p className="text-center text-gray-500 mb-6 text-sm">
              Tìm thấy <span className="font-bold text-purple-600">{filteredProducts.length}</span> sản phẩm cho &ldquo;{searchQuery}&rdquo;
            </p>
          )}

          {/* GRID SẢN PHẨM */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-lg font-medium">Không tìm thấy sản phẩm phù hợp</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('Tất cả') }}
                className="mt-4 text-purple-600 font-semibold hover:underline">
                Xem tất cả sản phẩm
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================================================
          SECTION TẠI SAO CHỌN CHÚNG TÔI
          ================================================ */}
      <section id="why-us" className="py-20 px-4 bg-gradient-to-br from-purple-950 via-indigo-900 to-purple-900 relative overflow-hidden" ref={whyUsRef}>
        {/* Nền glow */}
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Tại sao chọn{' '}
              <span className="gradient-text-purple">Lung Linh Decor?</span>
            </h2>
            <p className="text-purple-300 max-w-md mx-auto">
              Chúng tôi không chỉ bán đèn — chúng tôi mang lại không gian sống đẹp hơn cho bạn
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🎨',
                title: 'Thiết kế độc đáo',
                desc: 'Mỗi chiếc đèn được thiết kế tỉ mỉ với công nghệ in 3D hiện đại, tạo ra những chi tiết siêu thực không nơi nào có.',
              },
              {
                icon: '⭐',
                title: 'Đánh giá 4.9/5',
                desc: 'Hơn 50,000 khách hàng đã tin tưởng và hài lòng. Đánh giá trung bình 4.9/5 sao trên Shopee và TikTok Shop.',
              },
              {
                icon: '🚀',
                title: 'Giao hàng nhanh',
                desc: 'Đóng gói cẩn thận, giao hàng toàn quốc trong 2-5 ngày làm việc. Hỗ trợ COD — không cần thanh toán trước.',
              },
              {
                icon: '🔄',
                title: 'Đổi trả dễ dàng',
                desc: 'Không hài lòng? Đổi trả miễn phí trong 7 ngày. Hỗ trợ 24/7 qua Zalo, Facebook và hotline.',
              },
              {
                icon: '💎',
                title: 'Chất lượng cao cấp',
                desc: 'Sử dụng nhựa PLA cao cấp, an toàn cho trẻ em. LED tuổi thọ 50,000 giờ, tiết kiệm điện tối đa.',
              },
              {
                icon: '🎁',
                title: 'Đóng gói quà tặng',
                desc: 'Hộp quà sang trọng, kèm thiệp viết tay miễn phí. Hoàn hảo để tặng người thân trong các dịp đặc biệt.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="glass-card rounded-2xl p-6 hover:shadow-glow-md transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ĐÁNH GIÁ KHÁCH HÀNG */}
      <Reviews />

      {/* CTA CUỐI */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-800 mb-4">
            Sẵn sàng thắp sáng{' '}
            <span className="gradient-text">không gian của bạn?</span>
          </h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Đừng để phòng ngủ của bạn nhàm chán thêm một đêm nào nữa. 
            Chọn đèn 3D lung linh — giao hàng ngay hôm nay!
          </p>
          <div className="max-w-sm mx-auto mb-8">
            <CountdownTimer label="⚡ Flash Sale kết thúc sau" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://shopee.vn/search?keyword=den-ngu-3d-lung-linh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 btn-shopee text-white font-extrabold text-lg px-8 py-4 rounded-2xl"
            >
              🛒 Mua ngay trên Shopee
            </a>
            <a
              href="https://www.tiktok.com/search?q=den-ngu-3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 btn-tiktok text-white font-bold text-lg px-8 py-4 rounded-2xl"
            >
              🎵 TikTok Shop
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-gray-400 text-sm">
            <span>🔒 Thanh toán an toàn</span>
            <span>🚚 Miễn phí vận chuyển</span>
            <span>🔄 Đổi trả 7 ngày</span>
            <span>💬 Hỗ trợ 24/7</span>
          </div>
        </div>
      </section>
    </div>
  )
}
