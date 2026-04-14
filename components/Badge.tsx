// components/Badge.tsx
// Badge hiển thị nhãn sản phẩm (hot, sale, best, new)

import { BadgeType } from '@/data/products'

interface BadgeProps {
  type: BadgeType
  size?: 'sm' | 'md'
}

// Cấu hình màu sắc và nội dung cho từng loại badge
const badgeConfig: Record<BadgeType, { label: string; emoji: string; className: string }> = {
  best: {
    label: 'Bán chạy',
    emoji: '🔥',
    className: 'bg-gradient-to-r from-orange-500 to-red-500 text-white',
  },
  hot: {
    label: 'Hot',
    emoji: '💎',
    className: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white',
  },
  sale: {
    label: 'Giảm giá',
    emoji: '⚡',
    className: 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white',
  },
  new: {
    label: 'Mới',
    emoji: '✨',
    className: 'bg-gradient-to-r from-teal-400 to-cyan-500 text-white',
  },
}

export default function Badge({ type, size = 'sm' }: BadgeProps) {
  const config = badgeConfig[type]
  
  return (
    <span className={`
      inline-flex items-center gap-1 font-bold rounded-full animate-badge-bounce
      ${config.className}
      ${size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1'}
    `}>
      <span>{config.emoji}</span>
      <span>{config.label}</span>
    </span>
  )
}
