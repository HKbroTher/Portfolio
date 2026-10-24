// Language toggle: swaps data-lang on <html>; CSS hides the other language.
document.querySelector('.lang-toggle').addEventListener('click', () => {
  const root = document.documentElement;
  const lang = root.dataset.lang === 'zh' ? 'en' : 'zh';
  root.dataset.lang = lang;
  root.lang = lang === 'zh' ? 'zh-CN' : 'en';
  try { localStorage.setItem('lang', lang); } catch (e) {}
});

// Fade sections in as they scroll into view.
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('in'));
}
