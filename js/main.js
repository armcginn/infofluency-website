/* ============================================
   infoFluency — Main JavaScript
   ============================================ */

(function () {
  'use strict';

  // --- Mobile Navigation Toggle ---
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  const mobileCtaEl = document.querySelector('.nav-cta-mobile');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  // Show mobile CTA on small screens
  function handleMobileCta() {
    if (mobileCtaEl) {
      mobileCtaEl.style.display = window.innerWidth <= 768 ? 'inline-flex' : 'none';
    }
  }
  handleMobileCta();
  window.addEventListener('resize', handleMobileCta);

  // --- Scroll-triggered Fade-in Animations ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything if IntersectionObserver not supported
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Nav background on scroll ---
  const nav = document.querySelector('.nav');

  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 20) {
      nav.style.background = 'rgba(26, 29, 46, 0.98)';
    } else {
      nav.style.background = '';
    }
  }
  handleNavScroll();
  window.addEventListener('scroll', handleNavScroll, { passive: true });

})();
