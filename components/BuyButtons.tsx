'use client'
// components/BuyButtons.tsx
// Component nút mua hàng - TỐI ƯU CHUYỂN ĐỔI
// Đây là component quan trọng nhất để kiếm tiền affiliate!

import { useState, useEffect } from 'react'

interface BuyButtonsProps {
  shopeeLink: string
  tiktokLink: string
  productName: string
  isSticky?: boolean  // Hiển thị sticky ở mobile
}

export default function BuyButtons({ shopeeLink, tiktokLink, productName, isSticky = false }: BuyButtonsProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Animation fade-in khi component load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Xử lý click Shopee với tracking
  const handleShopeClick = () => {
    // Mở link affiliate Shopee
    window.open(shopeeLink, '_blank', 'noopener,noreferrer')
  }

  // Xử lý click TikTok với tracking
  const handleTikTokClick = () => {
    window.open(tiktokLink, '_blank', 'noopener,noreferrer')
  }

  if (isSticky) {
    // PHIÊN BẢN STICKY CHO MOBILE - luôn nằm dưới màn hình
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-purple-100 shadow-2xl shadow-purple-200/50 md:hidden">
        <div className="max-w-md mx-auto flex gap-2">
          {/* Nút Shopee */}
          <button
            onClick={handleShopeClick}
            className="flex-1 btn-shopee text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <ShopeeIcon />
            <div className="text-left">
              <div className="text-sm font-bold leading-tight">Mua Shopee</div>
              <div className="text-xs opacity-80 leading-tight">Giá tốt nhất</div>
            </div>
          </button>

          {/* Nút TikTok */}
          <button
            onClick={handleTikTokClick}
            className="flex-1 btn-tiktok text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <TikTokIcon />
            <div className="text-left">
              <div className="text-sm font-bold leading-tight">TikTok Shop</div>
              <div className="text-xs opacity-70 leading-tight">Đang hot 🔥</div>
            </div>
          </button>
        </div>
      </div>
    )
  }

  // PHIÊN BẢN THƯỜNG - hiển thị trong trang
  return (
    <div className={`space-y-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      
      {/* Thông báo khuyến mãi */}
      <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
        <span className="text-base animate-bounce">⚡</span>
        <p className="text-amber-700 text-sm font-semibold">
          Flash sale hôm nay — Giảm thêm <span className="text-red-600 font-bold">10%</span> khi mua qua app!
        </p>
      </div>

      {/* NÚT SHOPEE - Màu cam nổi bật */}
      <button
        onClick={handleShopeClick}
        className="w-full btn-shopee text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-between group"
        aria-label={`Mua ${productName} trên Shopee`}
      >
        <div className="flex items-center gap-3">
          {/* Icon Shopee */}
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <ShopeeIcon size={22} />
          </div>
          <div className="text-left">
            <div className="text-base font-extrabold leading-tight">Mua trên Shopee</div>
            <div className="text-xs text-orange-100 font-normal">Giá tốt · Nhiều ưu đãi · Ship COD</div>
          </div>
        </div>
        {/* Arrow */}
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* NÚT TIKTOK - Màu tối với glow */}
      <button
        onClick={handleTikTokClick}
        className="w-full btn-tiktok text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-between group relative overflow-hidden"
        aria-label={`Mua ${productName} trên TikTok Shop`}
      >
        {/* Hiệu ứng glow nền */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex items-center gap-3 relative">
          {/* Icon TikTok */}
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
            <TikTokIcon size={20} />
          </div>
          <div className="text-left">
            <div className="text-base font-extrabold leading-tight">Mua trên TikTok Shop</div>
            <div className="text-xs text-gray-400 font-normal">Đang hot trên TikTok 🎵 · Voucher độc quyền</div>
          </div>
        </div>
        {/* Arrow */}
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-2 pt-1">
        {[
          { icon: '🚚', text: 'Miễn ship' },
          { icon: '🔄', text: 'Đổi trả 7 ngày' },
          { icon: '🛡️', text: 'Chính hãng 100%' },
        ].map(item => (
          <div key={item.text} className="flex flex-col items-center gap-1 bg-purple-50 rounded-lg py-2 px-1">
            <span className="text-lg">{item.icon}</span>
            <span className="text-xs text-purple-600 font-semibold text-center leading-tight">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ============================
// SVG ICONS
// ============================

function ShopeeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C9.79 2 8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-2c0-2.21-1.79-4-4-4zm0 2c1.1 0 2 .9 2 2H10c0-1.1.9-2 2-2zm-1 8a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z"/>
    </svg>
  )
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.15a8.17 8.17 0 004.78 1.54V7.25a4.85 4.85 0 01-1.01-.56z"/>
    </svg>
  )
}
