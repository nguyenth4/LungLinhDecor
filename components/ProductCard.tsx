// components/ProductCard.tsx
// Thẻ sản phẩm với hover effects và nút mua

import Link from 'next/link'
import Image from 'next/image'
import { Product, formatPrice, getDiscountPercent } from '@/data/products'
import Badge from './Badge'
import Rating from './Rating'

interface ProductCardProps {
  product: Product
  index?: number  // Để stagger animation
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = getDiscountPercent(product.price, product.oldPrice)
  const isLowStock = product.stock <= 5

  return (
    <div
      className="glass-card rounded-2xl overflow-hidden group transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
    >
      {/* PHẦN ẢNH SẢN PHẨM */}
      <Link href={`/product/${product.id}`} className="block relative overflow-hidden">
        <div className="relative h-52 w-full bg-gradient-to-br from-purple-50 to-pink-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          
          {/* Overlay khi hover */}
          <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/10 transition-colors duration-300" />
          
          {/* Badge góc trên trái */}
          <div className="absolute top-3 left-3">
            <Badge type={product.badge} />
          </div>
          
          {/* % Giảm giá góc trên phải */}
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-black px-2 py-1 rounded-lg shadow-md">
            -{discount}%
          </div>

          {/* Stock thấp - góc dưới */}
          {isLowStock && (
            <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-2 py-1.5 rounded-lg text-center">
              ⚡ Chỉ còn {product.stock} sản phẩm!
            </div>
          )}
        </div>
      </Link>

      {/* PHẦN NỘI DUNG */}
      <div className="p-4 space-y-3">
        
        {/* Tên sản phẩm */}
        <Link href={`/product/${product.id}`}>
          <h3 className="font-bold text-gray-800 text-sm leading-tight line-clamp-2 hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating + đã bán */}
        <div className="flex items-center justify-between">
          <Rating rating={product.rating} reviewCount={product.reviewCount} />
          <span className="text-xs text-gray-400 font-medium">{product.sold}</span>
        </div>

        {/* Giá */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-extrabold text-purple-700">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-gray-400 line-through font-medium">
            {formatPrice(product.oldPrice)}
          </span>
        </div>

        {/* NÚT BẤM */}
        <div className="flex gap-2 pt-1">
          {/* Nút Mua ngay - Shopee */}
          <a
            href={product.shopeeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-shopee text-white text-xs font-bold py-2.5 px-3 rounded-xl text-center transition-all active:scale-95"
            onClick={(e) => e.stopPropagation()}
          >
            🛒 Mua ngay
          </a>

          {/* Nút Xem chi tiết */}
          <Link
            href={`/product/${product.id}`}
            className="px-3 py-2.5 rounded-xl border-2 border-purple-200 text-purple-600 text-xs font-bold hover:bg-purple-50 hover:border-purple-400 transition-all text-center whitespace-nowrap"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  )
}
