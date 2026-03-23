/* =============================================
   HOME PAGE JS
   ============================================= */
(function () {
  'use strict';

  // ---- HERO REEL SLIDER ----
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.reel-dot');
  if (slides.length) {
    let current = 0;
    function goTo(n) {
      slides[current].classList.remove('active');
      dots[current]?.classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current]?.classList.add('active');
    }
    slides[0].classList.add('active');
    dots[0]?.classList.add('active');
    setInterval(() => goTo(current + 1), 5500);
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  }

  // ---- PARALLAX HERO ----
  const heroBg = document.querySelector('.hero-reel');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight) {
        heroBg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    }, { passive: true });
  }

  // ---- SERVICES CARD STAGGER ----
  const soCards = document.querySelectorAll('.so-card');
  if (soCards.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = Array.from(soCards).indexOf(e.target);
          setTimeout(() => e.target.style.opacity = '1', idx * 80);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    soCards.forEach(c => { c.style.opacity = '0'; c.style.transition = 'opacity .6s ease, background .4s'; io.observe(c); });
  }

  // ---- HERO PARALLAX SCROLL TEXT ----
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroTitle.style.transform = `translateY(${y * 0.18}px)`;
        heroTitle.style.opacity = 1 - (y / (window.innerHeight * 0.65));
      }
    }, { passive: true });
  }

})();
