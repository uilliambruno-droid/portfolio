(function(){
  const username = 'uilliambruno-droid';
  const listEl = document.getElementById('portfolioList');

  const projectHighlights = {
    'fastapi-bankchallenge': [
      'REST API with authentication and transactions',
      'FastAPI, PostgreSQL'
    ]
  };

  if (!listEl) return;

  function el(tag, attrs = {}, children = []){
    const e = document.createElement(tag);
    Object.keys(attrs).forEach(k => {
      if (k === 'class') e.className = attrs[k];
      else if (k === 'innerHTML') e.innerHTML = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    (Array.isArray(children) ? children : [children]).forEach(c => c && e.appendChild(c));
    return e;
  }

  function repoCard(repo){
    const title = el('h3', { class: 'repo-title' }, [document.createTextNode(repo.name)]);
    const repoMeta = el('div',{class: 'repo-meta'}, [title]);

    const customHighlights = projectHighlights[repo.name.toLowerCase()];
    const highlights = customHighlights && customHighlights.length
      ? customHighlights
      : [
          repo.description || 'Project available on GitHub',
          repo.language ? repo.language + ' stack' : 'Open-source repository'
        ];

    const highlightsList = el('ul', { class: 'repo-highlights' });
    highlights.forEach((line) => {
      const item = el('li', {}, [document.createTextNode('→ ' + line)]);
      highlightsList.appendChild(item);
    });
    repoMeta.appendChild(highlightsList);

    const githubIcon = el('i',{class: 'bi bi-github portfolio__github', 'aria-hidden': 'true'});

    const card = el('a',{
      class: 'portfolio__card',
      href: repo.html_url,
      target: '_blank',
      rel: 'noopener noreferrer',
      'aria-label': `Open ${repo.name} on GitHub`
    }, [repoMeta, githubIcon]);
    return card;
  }

  function showError(msg){
    listEl.innerHTML = '';
    listEl.appendChild(el('p',{class:'portfolio__loading', innerHTML: msg}));
  }

  fetch('https://api.github.com/users/' + username + '/repos?per_page=100')
    .then(res => {
      if (!res.ok) throw new Error('Error fetching repositories');
      return res.json();
    })
    .then(repos => {
      listEl.innerHTML = '';
      if (!repos || repos.length === 0){
        showError('No public repositories found.');
        return;
      }

      const filteredRepos = repos.filter((repo) => repo.name.toLowerCase() !== 'uilliambruno-droid');
      const reposToRender = filteredRepos.length > 0 ? filteredRepos : repos;

      // sort by updated date desc
      reposToRender.sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at));

      reposToRender.slice(0, 4).forEach(r => {
        // skip forks optionally; include all for now
        const card = repoCard(r);
        listEl.appendChild(card);
      });

    })
    .catch(err => {
      showError('Could not load GitHub projects.');
    });
})();
