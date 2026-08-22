// =====================================================
// MAIN.JS — điểm vào duy nhất, được nạp bằng
// <script type="module" src="js/main.js"> trong index.html
// Import các module khác và khởi động theo đúng thứ tự
// =====================================================

import { initAudioPlayer } from './audio-player.js';
import { initScrollEffects } from './scroll-effects.js';
import { initInteractions } from './interactions.js';

document.addEventListener('DOMContentLoaded', () => {
  initAudioPlayer();
  initScrollEffects();
  initInteractions();

  console.log('Thiệp tốt nghiệp Cerene - sẵn sàng 🌊');
});