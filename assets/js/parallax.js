(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 820px)');
  const parallaxSections = Array.from(document.querySelectorAll('.hero, .section'));

  function addMediaListener(mediaQuery, handler) {
    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handler);
      return;
    }
    if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handler);
    }
  }

  function revealTargets() {
    return Array.from(document.querySelectorAll(
      '.hero__media, .hero__text > *, .section h2, .section__intro, .section p, .panel, .portfolio__card, .contact-form, .contact-card'
    ));
  }

  function revealType(index) {
    if (index % 3 === 0) return 'reveal-left';
    if (index % 3 === 1) return 'reveal-right';
    return 'reveal-up';
  }

  function prepareElements(elements) {
    elements.forEach((element, index) => {
      if (element.dataset.revealReady === 'true') return;
      element.classList.add('reveal-item', revealType(index));
      element.dataset.revealReady = 'true';
    });
  }

  if (reduceMotion.matches) {
    prepareElements(revealTargets());
    document.querySelectorAll('.reveal-item').forEach((element) => {
      element.classList.add('is-visible');
    });
    parallaxSections.forEach((section) => {
      section.style.setProperty('--parallax-y-back', '0px');
      section.style.setProperty('--parallax-y-front', '0px');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  function observeCurrentTargets() {
    const elements = revealTargets();
    prepareElements(elements);
    elements.forEach((element) => observer.observe(element));
  }

  observeCurrentTargets();

  const portfolioList = document.getElementById('portfolioList');
  if (portfolioList) {
    const mutationObserver = new MutationObserver(() => {
      observeCurrentTargets();
    });
    mutationObserver.observe(portfolioList, { childList: true, subtree: true });
  }

  let ticking = false;

  function updateParallaxLayers() {
    const viewportHeight = window.innerHeight || 1;

    parallaxSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const offsetFromCenter = sectionCenter - viewportHeight / 2;

      const backShift = Math.max(-55, Math.min(55, offsetFromCenter * -0.08));
      const frontShift = Math.max(-36, Math.min(36, offsetFromCenter * 0.05));

      section.style.setProperty('--parallax-y-back', `${backShift.toFixed(2)}px`);
      section.style.setProperty('--parallax-y-front', `${frontShift.toFixed(2)}px`);
    });

    ticking = false;
  }

  function requestParallaxUpdate() {
    if (reduceMotion.matches || mobile.matches) {
      parallaxSections.forEach((section) => {
        section.style.setProperty('--parallax-y-back', '0px');
        section.style.setProperty('--parallax-y-front', '0px');
      });
      return;
    }

    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateParallaxLayers);
    }
  }

  window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
  window.addEventListener('resize', requestParallaxUpdate, { passive: true });
  addMediaListener(mobile, requestParallaxUpdate);
  addMediaListener(reduceMotion, requestParallaxUpdate);

  requestParallaxUpdate();
})();
