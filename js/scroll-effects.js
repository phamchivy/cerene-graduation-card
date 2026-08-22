// =====================================================
// SCROLL-EFFECTS.JS
// - reveal nội dung khi section xuất hiện trong viewport
// - trigger sparkle effect khi vào #celebration
// =====================================================

export function initScrollEffects() {
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  revealEls.forEach(el => revealObserver.observe(el));

  const sparkleLayer = document.querySelector('.sparkle-layer');
  const celebration = document.getElementById('celebration');
  if (sparkleLayer && celebration) {
    const sparkleObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) spawnSparkles(sparkleLayer);
      });
    }, { threshold: 0.5 });
    sparkleObserver.observe(celebration);
  }
}

function spawnSparkles(layer) {
  if (layer.dataset.spawned) return; // chỉ spawn 1 lần
  layer.dataset.spawned = 'true';

  const symbols = ['✨', '🌟', '⭐️'];
  for (let i = 0; i < 12; i++) {
    const span = document.createElement('span');
    span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    span.style.left = `${Math.random() * 100}%`;
    span.style.top = `${Math.random() * 100}%`;
    span.style.animationDelay = `${Math.random() * 2}s`;
    layer.appendChild(span);
  }
}