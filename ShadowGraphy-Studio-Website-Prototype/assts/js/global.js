/* =============================================
   SHADOWGRAPHY STUDIO — GLOBAL JS
   ============================================= */

(function() {
  'use strict';

  // ---- CURSOR ----
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (cursor && follower) {
    let mx = 0, my = 0, fx = 0, fy = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });
    (function followAnim() {
      fx += (mx - fx) * .12;
      fy += (my - fy) * .12;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      requestAnimationFrame(followAnim);
    })();
    document.querySelectorAll('a, button, [data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // ---- PAGE LOADER ----
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('out'), 2600);
    });
    setTimeout(() => loader.classList.add('out'), 3200);
  }

  // ---- NAV SCROLL ----
  const nav = document.getElementById('main-nav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Active link
    const links = nav.querySelectorAll('.nav-link[data-page]');
    const page = document.body.getAttribute('data-page') || '';
    links.forEach(l => {
      if (l.getAttribute('data-page') === page) l.classList.add('active');
    });
  }

  // ---- HAMBURGER ----
  const ham = document.getElementById('hamburger');
  const mm = document.getElementById('mobile-menu');
  if (ham && mm) {
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mm.classList.toggle('open');
      document.body.style.overflow = mm.classList.contains('open') ? 'hidden' : '';
    });
    mm.querySelectorAll('.mm-item').forEach(l => {
      l.addEventListener('click', () => {
        ham.classList.remove('open');
        mm.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- SCROLL REVEAL ----
  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        const delay = entry.target.getAttribute('data-delay') || 0;
        setTimeout(() => entry.target.classList.add('revealed'), +delay);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));
  }

  // ---- FAQ ACCORDION ----
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });

  // ---- CONTACT FORM ----
  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const n = form.querySelector('#fn').value.trim();
      const p = form.querySelector('#fp').value.trim();
      const s = form.querySelector('#fs').value;
      const msg = form.querySelector('#fm').value.trim();
      const note = document.getElementById('form-msg');

      if (!n || !p) {
        note.style.color = '#e07070';
        note.textContent = 'Please fill in your name and phone number.';
        return;
      }
      const text = `Hi Shadowgraphy Studio!%0AI'd like to enquire about *${s || 'Photography'}*.%0A%0AName: ${n}%0APhone: ${p}%0AMessage: ${msg || '—'}`;
      window.open(`https://wa.me/919877777695?text=${text}`, '_blank');
      note.style.color = 'var(--gold)';
      note.textContent = '✦ Opening WhatsApp…';
      setTimeout(() => { form.reset(); note.textContent = ''; }, 4000);
    });
  }

  // ---- SMOOTH SCROLL ANCHORS ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ---- PAGE HERO PARALLAX ----
  const phBg = document.querySelector('.page-hero-bg');
  if (phBg) {
    document.querySelector('.page-hero').classList.add('loaded');
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight) {
        phBg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
      }
    }, { passive: true });
  }

  // ---- NUMBER COUNTER ----
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const start = Date.now();
    const step = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + (el.getAttribute('data-suffix') || '');
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const cio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { animateCounter(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => cio.observe(c));
  }

  // ---- LOCATION HIGHLIGHT ---- 
  document.querySelectorAll('.ls-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      document.querySelectorAll('.ls-item').forEach(i => i.classList.remove('hl'));
      el.classList.add('hl');
    });
  });

})();
