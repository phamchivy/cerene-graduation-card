// =====================================================
// INTERACTIONS.JS
// Chạm vào cá voi (#whale) -> hiện bong bóng lời chúc ngắn
// Bấm liên tục nhiều lần -> các bong bóng tự tách vị trí ra,
// không chồng đè lên nhau
// =====================================================

// PLACEHOLDER: sửa lại danh sách câu chúc thật của bạn
const WISH_MESSAGES = [
  'Tự hào về em quá trời! 🎓',
  'Cử nhân xinh gái nhất vịnh Bắc Bộ 😌✨',
  '4 năm cày cuốc không uổng công đâu nha!',
  'Chúc mừng em nhiều nhiều nha 🐋',
  'Đại dương lớn đợi em kìa, bơi thôi!',
  'Yêu em xỉu lên xỉu xuống luôn á 💙',
];

// Các vị trí ngang (% left) xoay vòng quanh khu vực giữa — không dàn quá rộng
const SPREAD_POSITIONS = [50, 38, 62, 44, 56];
let spreadIndex = 0;

export function initInteractions() {
  const whale = document.getElementById('whale');
  const bubbleLayer = document.getElementById('bubble-layer');
  const popAudio = document.getElementById('wish-bubble-audio');
  if (!whale || !bubbleLayer) return;

  whale.addEventListener('click', () => {
    const msg = WISH_MESSAGES[Math.floor(Math.random() * WISH_MESSAGES.length)];
    spawnBubble(bubbleLayer, msg);
    // cá voi hơi "giật mình" mỗi lần bấm cho vui tay
    whale.classList.add('whale--tapped');
    setTimeout(() => whale.classList.remove('whale--tapped'), 200);

    // Phát âm thanh bong bóng — vì đây là do click trực tiếp (có tương tác người dùng)
    // nên KHÔNG bị trình duyệt chặn autoplay như hiệu ứng cá voi to random trước đó
    if (popAudio) {
      popAudio.currentTime = 0;
      popAudio.play().catch(() => {
        // Chưa có file assets/audio/wish-bubble-pop.mp3 -> bỏ qua tạm thời
      });
    }
  });
}

function spawnBubble(layer, text) {
  const bubble = document.createElement('div');
  bubble.className = 'wish-bubble';
  bubble.textContent = text;

  // lấy vị trí tiếp theo trong danh sách xoay vòng, cộng thêm lệch ngẫu nhiên nhỏ
  const basePos = SPREAD_POSITIONS[spreadIndex % SPREAD_POSITIONS.length];
  spreadIndex++;
  const jitter = (Math.random() - 0.5) * 8; // +-4%
  bubble.style.left = `${Math.min(92, Math.max(8, basePos + jitter))}%`;
  bubble.style.bottom = '0';
  bubble.style.animationDuration = `${2.6 + Math.random() * 0.8}s`; // tốc độ bay hơi khác nhau

  layer.appendChild(bubble);
  setTimeout(() => bubble.remove(), 3600);
}