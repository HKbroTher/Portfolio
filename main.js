// Language toggle: sets data-lang on <html>; CSS hides the other languages.
const HTML_LANG = { zh: 'zh-CN', en: 'en', ja: 'ja' };
document.querySelectorAll('.lang-toggle .opt').forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.for;
    const root = document.documentElement;
    root.dataset.lang = lang;
    root.lang = HTML_LANG[lang];
    try { localStorage.setItem('lang', lang); } catch (e) {}
  });
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
