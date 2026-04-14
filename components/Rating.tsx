// components/Rating.tsx
// Hiển thị đánh giá sao

interface RatingProps {
  rating: number        // Điểm đánh giá (0-5)
  reviewCount?: number  // Số lượng đánh giá
  size?: 'sm' | 'md' | 'lg'
  showCount?: boolean
}

export default function Rating({ rating, reviewCount, size = 'sm', showCount = true }: RatingProps) {
  const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }

  // Tạo mảng 5 sao
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i < Math.floor(rating)
    const partial = !filled && i < rating
    return { filled, partial }
  })

  return (
    <div className={`flex items-center gap-1 ${sizeMap[size]}`}>
      {/* Các ngôi sao */}
      <div className="flex gap-0.5">
        {stars.map((star, i) => (
          <span key={i} className={star.filled || star.partial ? 'text-amber-400' : 'text-gray-200'}>
            ★
          </span>
        ))}
      </div>

      {/* Điểm số */}
      <span className="font-bold text-amber-600">{rating.toFixed(1)}</span>
      
      {/* Số đánh giá */}
      {showCount && reviewCount && (
        <span className="text-gray-400 text-xs">
          ({reviewCount.toLocaleString('vi-VN')} đánh giá)
        </span>
      )}
    </div>
  )
}
