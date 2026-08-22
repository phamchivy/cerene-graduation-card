// =====================================================
// INTERACTIONS.JS
// Chạm vào cá voi (#whale) -> hiện bong bóng lời chúc ngắn
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

export function initInteractions() {
  const whale = document.getElementById('whale');
  const bubbleLayer = document.getElementById('bubble-layer');
  if (!whale || !bubbleLayer) return;

  whale.addEventListener('click', () => {
    const msg = WISH_MESSAGES[Math.floor(Math.random() * WISH_MESSAGES.length)];
    spawnBubble(bubbleLayer, msg);
  });
}

function spawnBubble(layer, text) {
  const bubble = document.createElement('div');
  bubble.className = 'wish-bubble';
  bubble.textContent = text;
  bubble.style.left = `${40 + Math.random() * 20}%`; // hơi lệch ngẫu nhiên quanh giữa
  bubble.style.bottom = '0';
  layer.appendChild(bubble);

  // tự xoá sau khi animation (bubble-float, 3s trong animations.css) kết thúc
  setTimeout(() => bubble.remove(), 3000);
}