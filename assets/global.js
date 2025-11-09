/** JS Scripts **/

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
const menuBackdrop = document.getElementById('menuBackdrop');
const menuClose = document.getElementById('menuClose');

function openMenu() {
  navbar.classList.add('open');
  menuBackdrop.classList.add('active');
  menuToggle.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navbar.classList.remove('open');
  menuBackdrop.classList.remove('active');
  menuToggle.classList.remove('active');
  document.body.style.overflow = '';
}

// Toggle menu on button click
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  if (navbar.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Close menu when clicking close button
menuClose.addEventListener('click', () => {
  closeMenu();
});

// Close menu when clicking on backdrop
menuBackdrop.addEventListener('click', () => {
  closeMenu();
});

// Close menu when clicking on a link
navbar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  speed: 1200,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
