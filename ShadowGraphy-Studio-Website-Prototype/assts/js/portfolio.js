/* =============================================
   PORTFOLIO PAGE JS
   ============================================= */
(function () {
  'use strict';

  // ---- MASONRY FILTER ----
  const btns = document.querySelectorAll('.pf-btn');
  const items = document.querySelectorAll('.port-item');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.getAttribute('data-filter');
      items.forEach(item => {
        const match = f === 'all' || item.getAttribute('data-cat') === f;
        if (match) {
          item.classList.remove('hidden');
          item.classList.add('visible');
        } else {
          item.classList.add('hidden');
          item.classList.remove('visible');
        }
      });
    });
  });

  // ---- LIGHTBOX ----
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbCap = document.getElementById('lb-cap');
  if (!lb) return;

  let current = 0;
  const allImgs = Array.from(document.querySelectorAll('.port-item img'));

  function openLb(idx) {
    current = idx;
    const src = allImgs[idx].src;
    const cap = allImgs[idx].getAttribute('data-label') || '';
    lbImg.src = src;
    if (lbCap) lbCap.textContent = cap;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  allImgs.forEach((img, i) => {
    img.parentElement.style.cursor = 'none';
    img.parentElement.addEventListener('click', () => openLb(i));
  });

  document.querySelector('.lb-close')?.addEventListener('click', closeLb);
  document.querySelector('.lb-prev')?.addEventListener('click', () => openLb((current - 1 + allImgs.length) % allImgs.length));
  document.querySelector('.lb-next')?.addEventListener('click', () => openLb((current + 1) % allImgs.length));

  lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') openLb((current - 1 + allImgs.length) % allImgs.length);
    if (e.key === 'ArrowRight') openLb((current + 1) % allImgs.length);
  });

  // Swipe support
  let tx = 0;
  lb.addEventListener('touchstart', e => tx = e.touches[0].clientX, { passive: true });
  lb.addEventListener('touchend', e => {
    const diff = tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) openLb(diff > 0 ? (current + 1) % allImgs.length : (current - 1 + allImgs.length) % allImgs.length);
  });

})();
