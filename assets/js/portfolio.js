(function () {
  const listEl = document.getElementById('portfolioList');
  if (!listEl) return;

  const projects = Array.isArray(window.PortfolioProjects) ? window.PortfolioProjects : [];
  const fallbackImage = './assets/img/project-placeholder.svg';

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    Object.keys(attrs).forEach((key) => {
      if (key === 'class') node.className = attrs[key];
      else node.setAttribute(key, attrs[key]);
    });
    (Array.isArray(children) ? children : [children]).forEach((child) => {
      if (child) node.appendChild(child);
    });
    return node;
  }

  function projectCard(project) {
    const img = el('img', {
      class: 'portfolio__card-image',
      src: project.image || fallbackImage,
      alt: project.title + ' preview',
      loading: 'lazy'
    });

    const tags = el('ul', { class: 'portfolio__tags' });
    (project.tags || []).forEach((tag) => {
      tags.appendChild(el('li', {}, [document.createTextNode(tag)]));
    });

    const body = el('div', { class: 'portfolio__card-body' }, [
      tags,
      el('h3', { class: 'portfolio__title' }, [document.createTextNode(project.title)]),
      el('p', { class: 'portfolio__subtitle' }, [document.createTextNode(project.subtitle)]),
      el('p', { class: 'portfolio__desc' }, [document.createTextNode(project.description)])
    ]);

    const card = el('button', {
      class: 'portfolio__card',
      type: 'button',
      'aria-label': 'Open project details for ' + project.title
    }, [img, body]);

    card.addEventListener('click', () => {
      if (window.PortfolioModals && typeof window.PortfolioModals.openProject === 'function') {
        window.PortfolioModals.openProject({
          type: 'Project',
          title: project.title,
          subtitle: project.subtitle,
          description: project.description,
          fullDescription: project.fullDescription,
          architecture: project.architecture,
          functionality: project.functionality,
          highlights: project.highlights,
          image: project.image || fallbackImage,
          link: project.link,
          linkLabel: 'View on GitHub',
          demoLink: project.demoLink
        });
      }
    });

    return card;
  }

  if (projects.length === 0) {
    listEl.innerHTML = '<p class="portfolio__loading">No projects configured yet.</p>';
    return;
  }

  listEl.innerHTML = '';
  projects.forEach((project) => {
    listEl.appendChild(projectCard(project));
  });
})();
