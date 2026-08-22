// =====================================================
// AUDIO-PLAYER.JS
// LƯU Ý: iOS Safari chặn autoplay có tiếng
// -> nhạc chỉ phát được sau khi người dùng bấm nút
// =====================================================

export function initAudioPlayer() {
  const toggleBtn = document.getElementById('music-toggle');
  const audio = document.getElementById('bg-music');
  if (!toggleBtn || !audio) return;

  toggleBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(() => {
        // Chưa có file nhạc thật ở assets/audio/ -> sẽ lỗi ở đây, bỏ qua tạm thời
      });
      toggleBtn.textContent = '🔊';
    } else {
      audio.pause();
      toggleBtn.textContent = '🎵';
    }
  });
}