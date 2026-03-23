/* =============================================
   SHARED HTML COMPONENTS (injected via JS)
   ============================================= */

const NAV_HTML = `
<div id="cursor"></div>
<div id="cursor-follower"></div>

<div id="page-loader">
  <div class="pl-logo">S</div>
  <div class="pl-bar"><div class="pl-fill"></div></div>
  <div class="pl-brand">Shadowgraphy Studio</div>
</div>

<nav id="main-nav">
  <a href="index.html" class="nav-logo">
    <img src="https://shadowgraphystudio.com/wp-content/uploads/2023/01/cropped-ss-logo-for-algomage-client-gallery-235x40.png"
         alt="Shadowgraphy Studio"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
    <span class="nav-logo-text" style="display:none">S SHADOWGRAPHY</span>
  </a>
  <div class="nav-center">
    <a href="index.html" class="nav-link" data-page="home">Home</a>
    <a href="about.html" class="nav-link" data-page="about">About</a>
    <div class="nav-dropdown">
      <span class="nav-link" data-page="portfolio" style="cursor:none">Portfolio ▾</span>
      <div class="nav-dropdown-menu">
        <a href="portfolio.html">All Work</a>
        <a href="wedding.html">Wedding</a>
        <a href="prewedding.html">Pre-Wedding</a>
        <a href="maternity.html">Maternity & Baby</a>
        <a href="birthday.html">Birthday & Events</a>
        <a href="fashion.html">Fashion & Models</a>
        <a href="commercial.html">Commercial</a>
        <a href="films.html">Films</a>
      </div>
    </div>
    <a href="packages.html" class="nav-link" data-page="packages">Packages</a>
    <a href="contact.html" class="nav-link" data-page="contact">Contact</a>
  </div>
  <div class="nav-right">
    <a href="contact.html" class="nav-book">Book Now</a>
    <button class="hamburger" id="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div id="mobile-menu">
  <a href="index.html" class="mm-item">Home</a>
  <a href="about.html" class="mm-item">About</a>
  <a href="portfolio.html" class="mm-item">Portfolio</a>
  <a href="wedding.html" class="mm-item">Wedding</a>
  <a href="prewedding.html" class="mm-item">Pre-Wedding</a>
  <a href="maternity.html" class="mm-item">Maternity & Baby</a>
  <a href="birthday.html" class="mm-item">Birthday & Events</a>
  <a href="fashion.html" class="mm-item">Fashion</a>
  <a href="films.html" class="mm-item">Films</a>
  <a href="packages.html" class="mm-item">Packages</a>
  <a href="contact.html" class="mm-item">Contact</a>
</div>
`;

const FOOTER_HTML = `
<footer id="main-footer">
  <div class="footer-grid">
    <div class="fg-brand">
      <div class="footer-logo">
        <img src="https://shadowgraphystudio.com/wp-content/uploads/2023/01/cropped-ss-logo-for-algomage-client-gallery-235x40.png"
             alt="Shadowgraphy Studio"
             onerror="this.style.display='none'">
      </div>
      <span class="f-tagline">Capturing emotions over creativity.</span>
      <p>A premium wedding photography & cinematography studio based in Indore, led by Mr. Vicky Panchal with 15+ years of experience.</p>
    </div>
    <div class="footer-col">
      <h5>Services</h5>
      <a href="wedding.html">Wedding Photography</a>
      <a href="films.html">Cinematography</a>
      <a href="prewedding.html">Pre-Wedding Shoots</a>
      <a href="maternity.html">Maternity & Baby</a>
      <a href="fashion.html">Fashion & Models</a>
      <a href="commercial.html">Commercial</a>
      <a href="birthday.html">Birthday & Events</a>
    </div>
    <div class="footer-col">
      <h5>Navigate</h5>
      <a href="index.html">Home</a>
      <a href="about.html">About Us</a>
      <a href="portfolio.html">Portfolio</a>
      <a href="packages.html">Packages & Pricing</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="footer-col footer-contact">
      <h5>Get In Touch</h5>
      <div class="f-phone">+91 98777 77695</div>
      <p>shadowgraphystudio1@gmail.com</p>
      <p>121, Shivom Kothi, M.G. Road,<br>Opp. TI Mall, Indore 452001</p>
      <p>09:00 AM – 10:00 PM Daily</p>
      <div class="footer-socials">
        <a href="https://www.instagram.com/shadowgraphystudio/" target="_blank">IG</a>
        <a href="https://www.facebook.com/shadowgraphystudio" target="_blank">FB</a>
        <a href="https://www.youtube.com/c/SHADOWGRAPHYSTUDIOIndore" target="_blank">YT</a>
        <a href="https://twitter.com/shadowgraphys" target="_blank">TW</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 Shadowgraphy Studio · All Rights Reserved · Indore, Madhya Pradesh</p>
    <p>Designed for Vicky Panchal & Team</p>
  </div>
</footer>

<a href="https://wa.me/919877777695" class="wa-float" target="_blank" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>
`;

// Inject
document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
});
