(function () {
  const MOBILE_MEDIA_QUERY = '(max-width: 768px)';

  function initializeMenu() {
    const toggleButton = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('navLinks');

    if (!toggleButton || !navLinks) return;

    const mobileMatcher = window.matchMedia(MOBILE_MEDIA_QUERY);

    const closeMenu = () => {
      navLinks.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    };

    toggleButton.addEventListener('click', () => {
      if (!mobileMatcher.matches) return;
      const isOpen = navLinks.classList.toggle('is-open');
      toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (!mobileMatcher.matches || !navLinks.classList.contains('is-open')) return;
      const clickInsideMenu = navLinks.contains(event.target);
      const clickOnToggle = toggleButton.contains(event.target);
      if (!clickInsideMenu && !clickOnToggle) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    });

    mobileMatcher.addEventListener('change', (event) => {
      if (!event.matches) {
        closeMenu();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMenu);
  } else {
    initializeMenu();
  }
})();
