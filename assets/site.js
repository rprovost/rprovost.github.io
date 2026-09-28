(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const year = document.querySelector('[data-year]');

  const setNavOpen = (isOpen) => {
    if (!toggle || !nav) return;

    toggle.setAttribute('aria-expanded', String(isOpen));
    nav.dataset.open = String(isOpen);
    document.body.classList.toggle('nav-open', isOpen);

    const label = toggle.querySelector('.sr-only');
    if (label) label.textContent = isOpen ? 'Close navigation' : 'Open navigation';
  };

  toggle?.addEventListener('click', () => {
    setNavOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setNavOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setNavOpen(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) setNavOpen(false);
  });

  const updateHeader = () => {
    header?.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (year) year.textContent = String(new Date().getFullYear());
})();
