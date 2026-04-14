'use client'
// components/Navbar.tsx
// Thanh điều hướng cố định - responsive mobile/desktop

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Thay đổi background khi scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-purple-100/50 border-b border-purple-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              {/* Icon đèn lung linh */}
              <span className="text-2xl animate-float inline-block">🌙</span>
              <span className="absolute -top-1 -right-1 text-xs animate-pulse">✨</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-purple-700 leading-tight tracking-tight">
                Lung Linh
              </span>
              <span className="text-xs text-purple-400 font-body leading-tight tracking-widest uppercase">
                Decor
              </span>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors">
              Trang chủ
            </Link>
            <Link href="/#products" className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors">
              Sản phẩm
            </Link>
            <Link href="/#why-us" className="text-sm font-semibold text-gray-600 hover:text-purple-600 transition-colors">
              Về chúng tôi
            </Link>
          </div>

          {/* CTA BUTTON DESKTOP */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://shopee.vn/search?keyword=den-ngu-3d"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>🛒</span>
              <span>Mua ngay</span>
            </a>
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-1">
              <span className={`block h-0.5 bg-purple-700 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 bg-purple-700 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-purple-700 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-purple-100 shadow-xl">
          <div className="px-4 py-6 flex flex-col gap-4">
            <Link href="/" onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-purple-600 py-2 border-b border-purple-50">
              🏠 Trang chủ
            </Link>
            <Link href="/#products" onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-purple-600 py-2 border-b border-purple-50">
              🛍️ Sản phẩm
            </Link>
            <Link href="/#why-us" onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-gray-700 hover:text-purple-600 py-2 border-b border-purple-50">
              💜 Về chúng tôi
            </Link>
            <a
              href="https://shopee.vn/search?keyword=den-ngu-3d"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-center bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 rounded-xl"
            >
              🛒 Mua ngay trên Shopee
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
