# 🌙 Lung Linh Decor — Website Affiliate Đèn Ngủ 3D

Website affiliate bán đèn ngủ 3D, tối ưu chuyển đổi cho Shopee Affiliate & TikTok Shop.

---

## 🚀 Chạy project nhanh

```bash
# 1. Cài dependencies
npm install

# 2. Chạy dev server
npm run dev

# 3. Mở trình duyệt
# → http://localhost:3000
```

---

## 📁 Cấu trúc thư mục

```
lung-linh-decor/
├── app/
│   ├── globals.css              # Fonts, animations, glow effects
│   ├── layout.tsx               # Root layout + SEO metadata
│   ├── page.tsx                 # Trang chủ
│   ├── not-found.tsx            # Trang 404
│   └── product/[id]/
│       └── page.tsx             # Trang chi tiết sản phẩm
│
├── components/
│   ├── Navbar.tsx               # Thanh điều hướng (responsive)
│   ├── Footer.tsx               # Footer với links affiliate
│   ├── ProductCard.tsx          # Thẻ sản phẩm (hover effects)
│   ├── BuyButtons.tsx           # 🔥 Nút Shopee + TikTok (QUAN TRỌNG)
│   ├── CountdownTimer.tsx       # Đồng hồ đếm ngược flash sale
│   ├── Reviews.tsx              # Đánh giá khách hàng
│   ├── Rating.tsx               # Hiển thị sao đánh giá
│   ├── Badge.tsx                # Badge hot/sale/best/new
│   └── ScrollAnimator.tsx       # Hiệu ứng fade-in khi scroll
│
├── data/
│   └── products.ts              # 8 sản phẩm + helper functions
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 💰 Cách kiếm tiền affiliate

### Bước 1: Đăng ký tài khoản affiliate
- **Shopee Affiliate**: https://affiliate.shopee.vn
- **TikTok Shop Affiliate**: https://affiliate.tiktok.com

### Bước 2: Lấy link affiliate
1. Tìm sản phẩm đèn 3D trên Shopee/TikTok Shop
2. Tạo link affiliate có gắn tracking ID của bạn
3. Copy link đó

### Bước 3: Thay link vào file `data/products.ts`
```typescript
// Tìm sản phẩm cần thay và cập nhật:
shopeeLink: 'https://s.shopee.vn/YOUR_AFFILIATE_LINK_HERE',
tiktokLink: 'https://www.tiktok.com/t/YOUR_AFFILIATE_LINK_HERE',
```

### Bước 4: Deploy và chia sẻ
- Deploy lên Vercel (miễn phí)
- Chia sẻ link website lên Facebook, Zalo, TikTok
- Mỗi khi người dùng click và mua hàng → bạn nhận hoa hồng!

---

## 🌐 Deploy lên Vercel (miễn phí)

### Cách 1: Qua CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Cách 2: Qua GitHub
1. Push code lên GitHub
2. Vào https://vercel.com → New Project
3. Import repo từ GitHub
4. Click Deploy → Done!

---

## ✏️ Tùy chỉnh nội dung

### Đổi tên/logo shop
Sửa trong `components/Navbar.tsx` và `components/Footer.tsx`:
```tsx
// Tìm dòng này và đổi tên:
<span>Lung Linh Decor</span>
```

### Thêm sản phẩm mới
Thêm object vào mảng trong `data/products.ts`:
```typescript
{
  id: '9',
  name: 'Tên sản phẩm mới',
  price: 199000,
  oldPrice: 350000,
  image: 'https://...',
  images: ['https://...', 'https://...'],
  description: 'Mô tả ngắn',
  fullDescription: 'Mô tả chi tiết...',
  rating: 4.8,
  reviewCount: 500,
  sold: '800 đã bán',
  badge: 'hot',  // 'hot' | 'sale' | 'best' | 'new'
  shopeeLink: 'https://s.shopee.vn/...',
  tiktokLink: 'https://...',
  stock: 10,
  category: 'Loại đèn',
}
```

### Đổi màu sắc theme
Sửa trong `tailwind.config.ts` — section `colors.lavender` và `app/globals.css`.

---

## ⚡ Tính năng tối ưu chuyển đổi

| Tính năng | Mô tả |
|-----------|-------|
| 🔥 Badge bán chạy | Hiển thị trên card sản phẩm |
| ⚡ Stock thấp | "Chỉ còn X sản phẩm" khi stock ≤ 5 |
| 👥 Đang xem | Số người đang xem realtime (giả lập) |
| ⏰ Đồng hồ đếm ngược | Flash sale countdown timer |
| 📌 Sticky buttons | Nút mua cố định dưới màn hình mobile |
| ⭐ Social proof | Reviews, rating, số đã bán |
| 💰 Giá gạch | Hiển thị giá cũ bị gạch + % giảm |

---

## 📱 Responsive Design

- **Mobile**: Tối ưu 1 cột, sticky buy buttons
- **Tablet**: 2 cột sản phẩm
- **Desktop**: 3-4 cột sản phẩm, layout đầy đủ

---

## 🛠️ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Playfair Display + Nunito)
- **next/image** (tối ưu ảnh tự động)

---

## 📞 Lưu ý quan trọng

> ⚠️ **Ghi chú affiliate**: Website này sử dụng link affiliate. Khi khách hàng mua qua link, bạn nhận được hoa hồng từ Shopee/TikTok Shop mà **không tốn thêm chi phí** của khách hàng.

> 💡 **Ảnh sản phẩm**: Hiện tại dùng ảnh từ Unsplash làm placeholder. Khi thật sự kinh doanh, hãy thay bằng ảnh sản phẩm thực tế để tăng uy tín.
