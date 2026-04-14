// /data/products.ts
// Dữ liệu sản phẩm đèn ngủ 3D - Lung Linh Decor

export type BadgeType = 'hot' | 'sale' | 'best' | 'new'

export interface Product {
  id: string
  name: string
  price: number           // Giá hiện tại (VND)
  oldPrice: number        // Giá gốc (VND)
  image: string           // Ảnh chính
  images: string[]        // Danh sách ảnh gallery
  description: string     // Mô tả ngắn
  fullDescription: string // Mô tả chi tiết
  rating: number          // Đánh giá (1-5)
  reviewCount: number     // Số lượng đánh giá
  sold: string            // Số đã bán (hiển thị)
  badge: BadgeType        // Loại badge
  shopeeLink: string      // Link affiliate Shopee
  tiktokLink: string      // Link TikTok Shop
  stock: number           // Số lượng còn lại (tạo cảm giác khan hiếm)
  category: string        // Loại sản phẩm
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Đèn Mặt Trăng 3D Lung Linh',
    price: 189000,
    oldPrice: 350000,
    image: 'https://images.unsplash.com/photo-1608541737042-87a12275d313?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1608541737042-87a12275d313?w=600&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80',
    ],
    description: 'Đèn mặt trăng 3D in chi tiết siêu thực, ánh sáng ấm dịu tạo không gian thư giãn hoàn hảo.',
    fullDescription: `✨ Đèn Mặt Trăng 3D - món quà hoàn hảo cho không gian của bạn!

🌙 Được in 3D với công nghệ hiện đại, tái hiện bề mặt mặt trăng siêu thực với từng chi tiết hố thiên thạch độc đáo.

⭐ ĐẶC ĐIỂM NỔI BẬT:
• Công nghệ in 3D độ phân giải cao
• 16 màu sắc thay đổi linh hoạt qua remote
• Chất liệu PLA an toàn cho trẻ em
• Cảm ứng chạm tiện lợi
• Kèm đế gỗ sang trọng
• Thời gian dùng pin: 8-10 tiếng

🎁 Phù hợp làm quà tặng sinh nhật, Valentine, kỷ niệm`,
    rating: 4.9,
    reviewCount: 2847,
    sold: '3.2k đã bán',
    badge: 'best',
    shopeeLink: 'https://shopee.vn/search?keyword=den-mat-trang-3d',
    tiktokLink: 'https://www.tiktok.com/search?q=den-mat-trang-3d',
    stock: 7,
    category: 'Đèn thiên văn',
  },
  {
    id: '2',
    name: 'Đèn Galaxy Vũ Trụ 3D',
    price: 229000,
    oldPrice: 420000,
    image: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=600&q=80',
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&q=80',
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80',
    ],
    description: 'Vũ trụ thu nhỏ trong tay bạn! Đèn galaxy chiếu sáng lung linh hàng nghìn ngôi sao.',
    fullDescription: `🌌 Đèn Galaxy 3D - Mang cả vũ trụ về nhà bạn!

Tưởng tượng bạn đang nằm dưới bầu trời đêm đầy sao — giờ đây điều đó có thể xảy ra ngay trong phòng ngủ!

🚀 TÍNH NĂNG ĐỘC ĐÁO:
• Chiếu sáng 360° tạo hiệu ứng thiên hà thực tế
• 7 chế độ màu sắc: xanh, tím, đỏ, vàng, trắng, đổi màu...
• Điều khiển từ xa tiện lợi
• Chế độ hẹn giờ tắt tự động
• Âm lượng kết nối Bluetooth (phiên bản cao cấp)

💫 Hoàn hảo cho: phòng ngủ, phòng trẻ em, quán cà phê`,
    rating: 4.8,
    reviewCount: 1923,
    sold: '2.8k đã bán',
    badge: 'hot',
    shopeeLink: 'https://shopee.vn/search?keyword=den-galaxy-3d',
    tiktokLink: 'https://www.tiktok.com/search?q=den-galaxy',
    stock: 12,
    category: 'Đèn thiên văn',
  },
  {
    id: '3',
    name: 'Đèn Trái Tim 3D Romantic',
    price: 159000,
    oldPrice: 280000,
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&q=80',
      'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80',
      'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&q=80',
    ],
    description: 'Biểu tượng tình yêu lung linh ánh sáng hồng. Món quà Valentine ý nghĩa nhất!',
    fullDescription: `❤️ Đèn Trái Tim 3D - Ngọn lửa tình yêu không bao giờ tắt!

Tặng người thương một ánh sáng ấm áp mỗi đêm — đèn trái tim 3D là lời tỏ tình hoàn hảo không cần nói.

💕 ĐẶC ĐIỂM:
• Hình trái tim 3D cân đối, sắc nét
• Ánh sáng hồng ấm lãng mạn
• Có thể khắc tên theo yêu cầu (+30k)
• 3 chế độ sáng: mờ - vừa - sáng
• Cắm USB tiện lợi, không cần pin

🎀 Đóng gói hộp quà sang trọng
🎁 Tặng kèm thiệp viết tay (khi đặt hàng ghi yêu cầu)`,
    rating: 4.9,
    reviewCount: 3241,
    sold: '4.1k đã bán',
    badge: 'best',
    shopeeLink: 'https://shopee.vn/search?keyword=den-trai-tim-3d',
    tiktokLink: 'https://www.tiktok.com/search?q=den-trai-tim-3d',
    stock: 4,
    category: 'Đèn tình yêu',
  },
  {
    id: '4',
    name: 'Đèn In Ảnh Cá Nhân 3D',
    price: 299000,
    oldPrice: 550000,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
      'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    ],
    description: 'In ảnh của bạn lên đèn 3D! Món quà siêu độc đáo, không đâu có. Giao hàng 3-5 ngày.',
    fullDescription: `📸 Đèn In Ảnh Cá Nhân 3D - Kỷ niệm sáng mãi theo năm tháng!

Bạn chỉ cần gửi ảnh — chúng tôi sẽ biến kỷ niệm đẹp của bạn thành ánh sáng lung linh suốt đêm.

🖨️ QUY TRÌNH ĐẶT HÀNG:
1. Chọn mua & thanh toán
2. Gửi ảnh qua Zalo/Messenger (sau khi đặt)
3. Xác nhận thiết kế trong 24h
4. In & giao hàng trong 3-5 ngày

✨ PHÙ HỢP VỚI:
• Ảnh đôi - Ảnh gia đình - Ảnh thú cưng
• Kỷ niệm ngày cưới, sinh nhật
• Tốt nghiệp, quà tặng sếp/đồng nghiệp

📐 Kích thước: 15cm / 20cm / 25cm (chọn khi đặt hàng)`,
    rating: 4.7,
    reviewCount: 892,
    sold: '1.2k đã bán',
    badge: 'hot',
    shopeeLink: 'https://shopee.vn/search?keyword=den-in-anh-3d-ca-nhan',
    tiktokLink: 'https://www.tiktok.com/search?q=den-in-anh-3d',
    stock: 20,
    category: 'Đèn cá nhân hóa',
  },
  {
    id: '5',
    name: 'Đèn Decor Bàn Học Aesthetic',
    price: 145000,
    oldPrice: 260000,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80',
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    ],
    description: 'Đèn bàn học aesthetic sang xịn, ánh sáng dịu mắt, chill vibe hoàn hảo cho góc học tập.',
    fullDescription: `📚 Đèn Decor Bàn Học - Chill vibe cho góc học tập của bạn!

Góc học tập đẹp giúp bạn tập trung hơn và chill hơn. Đèn này sẽ là điểm nhấn hoàn hảo!

🎨 THIẾT KẾ:
• Phong cách minimalist aesthetic
• 3 tone màu: ấm (3000K) / trung (4000K) / lạnh (6500K)
• Điều chỉnh độ sáng 5 cấp độ
• Cổng USB-A để sạc điện thoại
• Xoay 360° linh hoạt

💡 BẢO VỆ MẮT:
• Không nhấp nháy (Flicker-free)
• Chống chói, ánh sáng đều
• Chứng nhận CE, RoHS an toàn`,
    rating: 4.8,
    reviewCount: 1567,
    sold: '2.3k đã bán',
    badge: 'sale',
    shopeeLink: 'https://shopee.vn/search?keyword=den-ban-hoc-aesthetic',
    tiktokLink: 'https://www.tiktok.com/search?q=den-ban-hoc-aesthetic',
    stock: 15,
    category: 'Đèn bàn học',
  },
  {
    id: '6',
    name: 'Đèn Ngủ Đổi Màu RGB 16 Triệu Màu',
    price: 179000,
    oldPrice: 320000,
    image: 'https://images.unsplash.com/photo-1558618047-f4e70e3c56b3?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618047-f4e70e3c56b3?w=600&q=80',
      'https://images.unsplash.com/photo-1583394293214-df65c8fbb67e?w=600&q=80',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80',
    ],
    description: 'Đổi màu theo nhạc, 16 triệu màu sắc, remote + app điều khiển. Biến phòng bạn thành vũ trường!',
    fullDescription: `🌈 Đèn Ngủ RGB 16 Triệu Màu - Party trong phòng ngủ của bạn!

Không gian sống thay đổi theo tâm trạng của bạn — đèn RGB thông minh giúp bạn tùy chỉnh không giới hạn.

🎮 ĐIỀU KHIỂN THÔNG MINH:
• App điện thoại (iOS & Android)
• Remote hồng ngoại 44 nút
• Cảm ứng chạm trực tiếp
• Hẹn giờ tắt/bật tự động
• Đồng bộ âm nhạc (mic tích hợp)

🌟 16 TRIỆU MÀU:
• Chọn màu tùy ý qua color picker
• 20+ hiệu ứng chuyển màu
• Chế độ flash/strobe/fade/smooth
• Nhớ cài đặt màu yêu thích`,
    rating: 4.7,
    reviewCount: 2134,
    sold: '3.5k đã bán',
    badge: 'hot',
    shopeeLink: 'https://shopee.vn/search?keyword=den-ngu-rgb-doi-mau',
    tiktokLink: 'https://www.tiktok.com/search?q=den-rgb-doi-mau',
    stock: 8,
    category: 'Đèn RGB',
  },
  {
    id: '7',
    name: 'Đèn LED Strip RGB Dán Tường',
    price: 139000,
    oldPrice: 250000,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
      'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=600&q=80',
    ],
    description: 'LED dây dán tường siêu dễ, cắt được theo kích thước, biến mọi góc phòng thành aesthetic.',
    fullDescription: `💡 Đèn LED Strip RGB - Dán đâu đẹp đó, cắt được tùy kích thước!

Chỉ cần bóc dán — không cần thợ, không cần khoan tường. Ai cũng có thể tự decor được!

📏 THÔNG SỐ:
• Dài: 5m / 10m (chọn khi đặt)
• Mật độ LED: 60 bóng/mét
• IP20 - dùng trong nhà
• Keo 3M siêu dính
• Cắt được theo từng 10cm

🏠 VỊ TRÍ PHÙ HỢP:
• Viền trần nhà - Gầm giường
• Sau TV - Sau gương - Kệ sách
• Cầu thang - Ban công
• Bàn makeup - Góc gaming`,
    rating: 4.6,
    reviewCount: 4521,
    sold: '6.8k đã bán',
    badge: 'best',
    shopeeLink: 'https://shopee.vn/search?keyword=led-strip-rgb-dan-tuong',
    tiktokLink: 'https://www.tiktok.com/search?q=led-strip-rgb',
    stock: 30,
    category: 'Đèn LED dây',
  },
  {
    id: '8',
    name: 'Đèn Hình Thú Dễ Thương 3D',
    price: 129000,
    oldPrice: 230000,
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80',
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&q=80',
      'https://images.unsplash.com/photo-1615789591457-74a63395c990?w=600&q=80',
    ],
    description: 'Đèn hình thú cưng siêu cute: mèo con, gấu bông, thỏ... Quà tặng bé yêu hoàn hảo!',
    fullDescription: `🐱 Đèn Hình Thú 3D - Cute overload, bé nào cũng mê!

Không chỉ là đèn ngủ — đây còn là người bạn đêm khuya siêu dễ thương của bé!

🐻 CÁC NHÂN VẬT:
• 🐱 Mèo con ngủ gật
• 🐻 Gấu bông ôm tim
• 🐰 Thỏ tai dài
• 🦊 Cáo nhỏ xinh
• 🐧 Chim cánh cụt
• 🦄 Kỳ lân (hàng mới về!)

⭐ AN TOÀN CHO TRẺ EM:
• Nhựa PLA không độc hại
• Nhiệt độ thấp, không nóng
• Ánh sáng dịu, bảo vệ mắt bé
• Không có góc cạnh sắc bén
• Chứng nhận an toàn CE

🎁 Đóng hộp quà + thiệp chúc miễn phí`,
    rating: 4.9,
    reviewCount: 5672,
    sold: '7.2k đã bán',
    badge: 'best',
    shopeeLink: 'https://shopee.vn/search?keyword=den-hinh-thu-cute-3d',
    tiktokLink: 'https://www.tiktok.com/search?q=den-hinh-thu-de-thuong-3d',
    stock: 5,
    category: 'Đèn trẻ em',
  },
]

// Lấy sản phẩm bán chạy
export const getBestSellers = (): Product[] =>
  products.filter(p => p.badge === 'best')

// Lấy sản phẩm theo category
export const getByCategory = (category: string): Product[] =>
  products.filter(p => p.category === category)

// Tìm kiếm sản phẩm
export const searchProducts = (query: string): Product[] =>
  products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  )

// Format giá tiền VND
export const formatPrice = (price: number): string =>
  price.toLocaleString('vi-VN') + 'đ'

// Tính % giảm giá
export const getDiscountPercent = (price: number, oldPrice: number): number =>
  Math.round(((oldPrice - price) / oldPrice) * 100)

// Danh sách categories
export const categories = ['Tất cả', ...Array.from(new Set(products.map(p => p.category)))]
