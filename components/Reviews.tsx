// components/Reviews.tsx
// Section hiển thị đánh giá thực từ khách hàng

import Rating from './Rating'

const reviews = [
  {
    id: 1,
    name: 'Nguyễn Thị Lan',
    avatar: '👩',
    rating: 5,
    product: 'Đèn Mặt Trăng 3D',
    date: '2 ngày trước',
    content: 'Đèn đẹp quá trời! Mình mua làm quà sinh nhật cho bạn thân, bạn mình thích lắm. Ánh sáng dịu nhẹ, chi tiết rất sắc nét. Giao hàng nhanh, đóng gói cẩn thận. Sẽ ủng hộ shop dài dài! 💜',
    verified: true,
  },
  {
    id: 2,
    name: 'Trần Văn Hùng',
    avatar: '👨',
    rating: 5,
    product: 'Đèn Galaxy Vũ Trụ 3D',
    date: '5 ngày trước',
    content: 'Mua về để decor phòng gaming, nhìn chill vãi. Chiếu sáng lên trần nhà tạo hiệu ứng vũ trụ rất ảo. Chất lượng xứng đáng với giá tiền, thậm chí còn hơn mong đợi nữa 🔥',
    verified: true,
  },
  {
    id: 3,
    name: 'Phạm Minh Châu',
    avatar: '👧',
    rating: 5,
    product: 'Đèn In Ảnh Cá Nhân',
    date: '1 tuần trước',
    content: 'Mình in ảnh cưới lên đèn, chồng mình xúc động lắm 😭 Shop tư vấn nhiệt tình, thiết kế trước khi in rất chỉn chu. Giờ cái đèn đặt đầu giường, nhìn vào là nhớ ngày đó. Cảm ơn shop!',
    verified: true,
  },
  {
    id: 4,
    name: 'Lê Hoàng Nam',
    avatar: '👦',
    rating: 5,
    product: 'Đèn Hình Thú 3D',
    date: '1 tuần trước',
    content: 'Mua cho con gái 5 tuổi, bé mê con mèo con lắm luôn. Tối nào cũng bật đèn mới chịu ngủ haha. Chất liệu an toàn, không nóng, ánh sáng vừa đủ không loá mắt. Mua thêm con thỏ nữa rồi 😂',
    verified: true,
  },
]

export default function Reviews() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-bold px-4 py-2 rounded-full mb-4">
            <span>⭐</span>
            Đánh giá từ khách hàng thực
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-gray-800 mb-2">
            Khách hàng nói gì về chúng tôi?
          </h2>
          <div className="flex items-center justify-center gap-3 mt-3">
            <Rating rating={4.9} reviewCount={12847} size="lg" />
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((review, i) => (
            <div
              key={review.id}
              className="glass-card rounded-2xl p-5 space-y-3 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-xl">
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-gray-800 text-sm">{review.name}</p>
                    {review.verified && (
                      <span className="text-green-500 text-xs" title="Đã xác minh mua hàng">✓</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs">{review.date}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-2">
                <Rating rating={review.rating} showCount={false} />
                <span className="text-xs text-purple-500 font-medium bg-purple-50 px-2 py-0.5 rounded-full">
                  {review.product}
                </span>
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {review.content}
              </p>
            </div>
          ))}
        </div>

        {/* Tổng kết số liệu */}
        <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { number: '12,847', label: 'Đánh giá 5 sao' },
            { number: '98%', label: 'Hài lòng' },
            { number: '50k+', label: 'Đơn hàng' },
          ].map(stat => (
            <div key={stat.label} className="text-center bg-white rounded-2xl py-4 border border-purple-100 shadow-sm">
              <div className="font-display font-black text-2xl text-purple-700">{stat.number}</div>
              <div className="text-gray-500 text-xs font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
