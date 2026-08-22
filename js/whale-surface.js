// =====================================================
// WHALE-SURFACE.JS
// Hiệu ứng hiếm khi: cá voi to trồi lên chắn màn hình rồi phun nước
// Kiểm tra định kỳ, mỗi lần có xác suất nhỏ để kích hoạt
// -> không đoán trước được, tạo cảm giác bất ngờ thú vị
// =====================================================

const CHECK_INTERVAL_MS = 30000; // cứ 30s kiểm tra 1 lần
const TRIGGER_CHANCE = 0.2;      // 20% cơ hội mỗi lần kiểm tra -> trung bình ~1-2 phút/lần
const ANIMATION_DURATION_MS = 4500;

// LƯU Ý: giống nhạc nền, trình duyệt CHẶN phát âm thanh tự động nếu người dùng
// chưa từng bấm/chạm gì trên trang. Vì hiệu ứng này chạy theo hẹn giờ (không phải
// do click), âm thanh phun nước chỉ phát được sau khi người dùng đã tương tác
// ít nhất 1 lần (bấm nút nhạc, bấm cá voi nhỏ...) — đây là giới hạn trình duyệt,
// không phải lỗi code.
export function initWhaleSurface() {
  const el = document.getElementById('whale-surface');
  const splashAudio = document.getElementById('whale-splash-audio');
  if (!el) return;

  setInterval(() => {
    if (el.classList.contains('is-surfacing')) return; // đang chạy thì bỏ qua lượt này
    if (Math.random() < TRIGGER_CHANCE) {
      el.classList.add('is-surfacing');

      // Phát âm thanh nước phun đúng lúc particle bắn lên (~1.65s sau khi trồi lên)
      setTimeout(() => {
        if (splashAudio) {
          splashAudio.currentTime = 0;
          splashAudio.play().catch(() => {
            // Chưa có file assets/audio/whale-splash.mp3 -> bỏ qua tạm thời
          });
        }
      }, 1650);

      setTimeout(() => el.classList.remove('is-surfacing'), ANIMATION_DURATION_MS);
    }
  }, CHECK_INTERVAL_MS);
}