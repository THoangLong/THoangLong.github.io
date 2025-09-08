// Menu mobile
const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('#menuBtn');
if (menuBtn) menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

// Highlight trang hiện tại
const here = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav a[data-link]').forEach(a => {
  if (a.getAttribute('href') === here) {
    a.classList.add('active');
    a.setAttribute('aria-current','page');
  }
});
