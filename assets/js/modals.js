(function () {
  const modalEl = document.getElementById('detailsModal');
  const titleEl = document.getElementById('detailsModalTitle');
  const typeEl = document.getElementById('detailsModalType');
  const subtitleEl = document.getElementById('detailsModalSubtitle');
  const mediaEl = document.getElementById('detailsModalMedia');
  const imageEl = document.getElementById('detailsModalImage');
  const descriptionEl = document.getElementById('detailsModalDescription');
  const architectureEl = document.getElementById('detailsModalArchitecture');
  const functionalityEl = document.getElementById('detailsModalFunctionality');
  const archSectionEl = document.getElementById('detailsModalArchSection');
  const funcSectionEl = document.getElementById('detailsModalFuncSection');
  const linkEl = document.getElementById('detailsModalLink');
  const demoLinkEl = document.getElementById('detailsModalDemoLink');

  if (!modalEl || !titleEl || !typeEl || !subtitleEl || !mediaEl || !imageEl || !descriptionEl || !linkEl) {
    return;
  }

  function openDetails(data) {
    if (!data) return;

    typeEl.textContent = data.type || 'Details';
    titleEl.textContent = data.title || 'Item details';
    subtitleEl.textContent = data.subtitle || '';
    descriptionEl.textContent = data.fullDescription || data.description || 'More details will be added soon.';

    // Handle architecture section
    if (data.architecture && data.architecture.length > 0) {
      architectureEl.innerHTML = '';
      data.architecture.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.marginBottom = '0.5rem';
        li.style.lineHeight = '1.5';
        architectureEl.appendChild(li);
      });
      archSectionEl.style.display = 'block';
    } else {
      archSectionEl.style.display = 'none';
    }

    // Handle functionality section
    if (data.functionality && data.functionality.length > 0) {
      functionalityEl.innerHTML = '';
      data.functionality.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.style.marginBottom = '0.5rem';
        li.style.lineHeight = '1.5';
        functionalityEl.appendChild(li);
      });
      funcSectionEl.style.display = 'block';
    } else {
      funcSectionEl.style.display = 'none';
    }

    if (data.link) {
      linkEl.href = data.link;
      linkEl.textContent = data.linkLabel || 'View on GitHub';
      linkEl.classList.remove('d-none');
    } else {
      linkEl.classList.add('d-none');
      linkEl.removeAttribute('href');
    }

    // Handle demo link
    if (data.demoLink) {
      demoLinkEl.href = data.demoLink;
      demoLinkEl.style.display = 'inline-block';
    } else {
      demoLinkEl.style.display = 'none';
    }

    if (data.image) {
      imageEl.src = data.image;
      imageEl.alt = data.title ? data.title + ' preview' : 'Project preview';
      mediaEl.classList.remove('d-none');
    } else {
      mediaEl.classList.add('d-none');
      imageEl.removeAttribute('src');
    }

    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }

  window.PortfolioModals = {
    openProject(projectData) {
      openDetails(projectData);
    }
  };
})();
