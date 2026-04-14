'use client'
// app/product/[id]/page.tsx
// Trang chi tiết sản phẩm - Tối ưu chuyển đổi tối đa

import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products, formatPrice, getDiscountPercent } from '@/data/products'
import BuyButtons from '@/components/BuyButtons'
import CountdownTimer from '@/components/CountdownTimer'
import Rating from '@/components/Rating'
import Badge from '@/components/Badge'
import ProductCard from '@/components/ProductCard'

interface Props {
  params: { id: string }
}

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.id === params.id)
  
  if (!product) notFound()

  const [selectedImage, setSelectedImage] = useState(0)
  const [viewed, setViewed] = useState(Math.floor(Math.random() * 30) + 15) // Giả lập "đang xem"
  const discount = getDiscountPercent(product.price, product.oldPrice)
  const isLowStock = product.stock <= 5

  // Giả lập số người đang xem
  useEffect(() => {
    const interval = setInterval(() => {
      setViewed(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(10, Math.min(50, prev + change))
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Sản phẩm liên quan (cùng category hoặc ngẫu nhiên)
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 4)
    .concat(products.filter(p => p.id !== product.id).slice(0, 4 - Math.min(4, products.filter(p => p.category === product.category).length)))
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/30 to-white">
      
      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-purple-600 transition-colors">Trang chủ</Link>
          <span>›</span>
          <Link href="/#products" className="hover:text-purple-600 transition-colors">Sản phẩm</Link>
          <span>›</span>
          <span className="text-gray-800 font-medium line-clamp-1">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24 md:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* ============================
              CỘT TRÁI: GALLERY ẢNH
              ============================ */}
          <div className="space-y-4">
            
            {/* Ảnh chính */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 aspect-square shadow-card">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-opacity duration-300"
                priority
              />
              
              {/* Badge overlay */}
              <div className="absolute top-4 left-4">
                <Badge type={product.badge} size="md" />
              </div>
              
              {/* Discount badge */}
              <div className="absolute top-4 right-4 bg-red-500 text-white font-black text-lg px-3 py-1.5 rounded-xl shadow-lg">
                -{discount}%
              </div>
            </div>

            {/* Thumbnail gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === i
                        ? 'border-purple-500 shadow-glow-sm scale-105'
                        : 'border-transparent hover:border-purple-200'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ============================
              CỘT PHẢI: THÔNG TIN & MUA
              ============================ */}
          <div className="space-y-5">
            
            {/* Tên sản phẩm */}
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-gray-800 leading-tight">
              {product.name}
            </h1>

            {/* Rating + Đã bán */}
            <div className="flex flex-wrap items-center gap-4">
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="md" />
              <div className="h-4 w-px bg-gray-200" />
              <span className="text-gray-600 font-semibold text-sm">
                📦 {product.sold}
              </span>
              <div className="h-4 w-px bg-gray-200" />
              <span className="text-gray-400 text-sm">
                {product.category}
              </span>
            </div>

            {/* Giá */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 border border-purple-100">
              <div className="flex items-baseline gap-3">
                <span className="font-display font-black text-4xl text-purple-700">
                  {formatPrice(product.price)}
                </span>
                <span className="text-gray-400 line-through text-xl font-medium">
                  {formatPrice(product.oldPrice)}
                </span>
              </div>
              <p className="text-green-600 font-bold text-sm mt-1">
                💰 Tiết kiệm {formatPrice(product.oldPrice - product.price)} ({discount}% OFF)
              </p>
            </div>

            {/* URGENCY ELEMENTS - Tạo cảm giác cấp bách */}
            <div className="space-y-2">
              
              {/* Số người đang xem */}
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="flex -space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border border-white" />
                  ))}
                </div>
                <span>
                  <span className="font-bold text-orange-600 animate-pulse">{viewed}</span> người đang xem sản phẩm này
                </span>
              </div>

              {/* Stock thấp */}
              {isLowStock && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <span className="text-red-500 text-lg animate-bounce">⚡</span>
                  <div>
                    <p className="text-red-700 font-bold text-sm">Chỉ còn {product.stock} sản phẩm!</p>
                    <p className="text-red-500 text-xs">Đặt ngay trước khi hết hàng</p>
                  </div>
                </div>
              )}

              {/* Flash sale */}
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <span className="text-amber-500 text-lg">🔥</span>
                <div>
                  <p className="text-amber-700 font-bold text-sm">Flash Sale — Đang giảm giá hôm nay!</p>
                  <p className="text-amber-500 text-xs">Giá này chỉ áp dụng trong hôm nay</p>
                </div>
              </div>
            </div>

            {/* Đồng hồ đếm ngược flash sale */}
            <CountdownTimer />

            {/* BUY BUTTONS - Component quan trọng nhất! */}
            <BuyButtons
              shopeeLink={product.shopeeLink}
              tiktokLink={product.tiktokLink}
              productName={product.name}
            />

            {/* Mô tả ngắn */}
            <div className="border-t border-purple-100 pt-5">
              <p className="text-gray-600 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* ============================
            MÔ TẢ CHI TIẾT
            ============================ */}
        <div className="mt-12 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-gray-800 mb-6">
            Mô tả chi tiết 📋
          </h2>
          <div className="bg-white rounded-3xl border border-purple-100 p-6 shadow-card">
            <div className="prose prose-purple max-w-none">
              {product.fullDescription.split('\n').map((line, i) => {
                if (line.startsWith('##') || line.match(/^[🌙🚀⭐💕📸🎨💡🌈🏠📏🐱🐻🎮✨]/)) {
                  return (
                    <p key={i} className="font-bold text-gray-800 text-base mt-4 mb-1">
                      {line}
                    </p>
                  )
                }
                if (line.startsWith('•')) {
                  return (
                    <p key={i} className="text-gray-600 text-sm pl-4 py-0.5">
                      {line}
                    </p>
                  )
                }
                if (line.trim() === '') return <br key={i} />
                return <p key={i} className="text-gray-600 text-sm leading-relaxed">{line}</p>
              })}
            </div>
          </div>
        </div>

        {/* ============================
            SẢN PHẨM LIÊN QUAN
            ============================ */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display font-bold text-2xl text-gray-800 mb-6">
              Có thể bạn cũng thích 💜
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedProducts.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* STICKY BUY BUTTONS cho mobile */}
      <BuyButtons
        shopeeLink={product.shopeeLink}
        tiktokLink={product.tiktokLink}
        productName={product.name}
        isSticky={true}
      />
    </div>
  )
}
