# Thiệp chúc mừng tốt nghiệp - Cerene 🎓🌊

Từ: Phạm Chí Vỹ
Cho: Phạm Cao Quỳnh Chi (Cerene) - VNU-IS, Management song bằng
Chủ đề: Đại dương / nàng tiên cá / cá voi

## Cấu trúc dự án

```
cerene-graduation-card/
├── index.html              # Toàn bộ 7 section + nút nhạc, link Google Fonts, đã có comment TODO
├── css/
│   ├── variables.css       # Bảng màu, font (đã chọn), spacing (design tokens)
│   ├── main.css            # Layout MỖI section: mobile-first, responsive
│   │                       # nằm co-located ngay dưới (@media min-width: 1024px)
│   └── animations.css      # Hiệu ứng scroll-reveal, sóng, bong bóng, sparkle
├── js/                      # ES Modules — chỉ index.html load main.js,
│   │                        # các file khác được import bên trong main.js
│   ├── main.js              # Điểm vào duy nhất, điều phối các module
│   ├── audio-player.js      # export initAudioPlayer() — bật/tắt nhạc, xử lý riêng iOS
│   ├── scroll-effects.js    # export initScrollEffects() — reveal + trigger confetti
│   └── interactions.js      # export initInteractions() — chạm cá voi -> bong bóng lời chúc
├── assets/
│   ├── images/
│   │   ├── photos/          # Ảnh 2 người (photo-01.jpg ... photo-10.jpg)
│   │   └── illustrations/   # SVG cá voi, nàng tiên cá, san hô, vỏ sò...
│   ├── audio/                # background-music.mp3
│   └── fonts/                 # (không cần nếu dùng Google Fonts CDN như hiện tại)
└── README.md
```

### Bộ font đã chọn (đều xác nhận hỗ trợ dấu tiếng Việt)

| Vai trò | Font | CSS variable |
|---|---|---|
| Tiêu đề / display | Playfair Display | `--font-display` |
| Nội dung chính | Be Vietnam Pro | `--font-body` |
| Chú thích ảnh | Quicksand | `--font-caption` |
| Thư viết tay (`#letter`) | Caveat | `--font-letter` |
| Chữ ký (`#signature`) | Dancing Script | `--font-signature` |

Nạp qua Google Fonts CDN (đã có sẵn trong `<head>` của `index.html`), không cần tải file font thủ công.

## Danh sách 7 section (theo thứ tự cuộn trang)

| id | Tên section | Trạng thái |
|----|-------------|------------|
| `#cover` | Trang bìa - tên Cerene, nút mở thiệp | Chưa có nội dung |
| `#intro` | Lời mở đầu | Chưa có nội dung |
| `#gallery` | Album kỷ niệm (7-10 ảnh) | Chờ bạn gửi ảnh |
| `#letter` | Lời chúc chính | Chờ nội dung thư |
| `#whale-interaction` | Tương tác #1: chạm cá voi | Chờ danh sách câu chúc ngắn |
| `#celebration` | Tương tác #2: hiệu ứng chúc mừng | Chưa có nội dung |
| `#signature` | Kết / chữ ký Phạm Chí Vỹ | Chưa có nội dung |

*(nút nhạc `#music-toggle` là phần tử cố định, không tính là 1 section cuộn)*

## Checklist tài nguyên cần bổ sung

- [ ] 7-10 ảnh, đặt vào `assets/images/photos/`, đặt tên `photo-01.jpg`, `photo-02.jpg`...
- [ ] File nhạc mp3, đặt vào `assets/audio/background-music.mp3`
- [ ] Nội dung lời chúc chính (section `#letter`)
- [ ] Danh sách 5-8 câu chúc ngắn cho hiệu ứng chạm cá voi
- [ ] Xác nhận: nhạc mở khi bấm nút, hay có nhạc chạy nền ngay khi vào trang (đã bàn: cần nút bấm trên iPhone do Safari chặn autoplay)

## Deploy lên GitHub Pages

1. Tạo repo mới, push toàn bộ thư mục này lên nhánh `main`
2. Vào **Settings > Pages** > chọn nhánh `main`, thư mục `/root`
3. Trang sẽ chạy tại `https://<username>.github.io/<ten-repo>/`

*(vì `index.html` nằm ở gốc thư mục nên không cần cấu hình gì thêm)*