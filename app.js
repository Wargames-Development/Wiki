(function () {
  const data = window.WARGAMES_WIKI;
  const pageBody = document.getElementById('pageBody');
  const pageTitle = document.getElementById('pageTitle');
  const pageMeta = document.getElementById('pageMeta');
  const pageBanner = document.getElementById('pageBanner');
  const navList = document.getElementById('navList');
  const breadcrumbs = document.getElementById('breadcrumbs');
  const historySection = document.getElementById('historySection');
  const resourceSection = document.getElementById('resourceSection');
  const videoSection = document.getElementById('videoSection');
  const discordSection = document.getElementById('discordSection');
  const siteStatus = document.getElementById('siteStatus');
  const repoLink = document.getElementById('repoLink');
  const heroTitle = document.getElementById('heroTitle');
  const heroSummary = document.getElementById('heroSummary');
  const heroPrimary = document.getElementById('heroPrimary');
  const heroSecondary = document.getElementById('heroSecondary');
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');

  const discordLink = document.getElementById('discordLink');
  const technicLink = document.getElementById('technicLink');
  const curseforgeLink = document.getElementById('curseforgeLink');

  const navState = {};
  const pageTree = {};

  repoLink.href = data.site.repositoryUrl;
  discordLink.href = data.site.social.discord.url;
  technicLink.href = data.site.social.technic.url;
  curseforgeLink.href = data.site.social.curseforge.url;

  heroTitle.textContent = data.site.hero.title;
  heroSummary.textContent = data.site.hero.summary;
  heroPrimary.textContent = data.site.hero.primaryLabel;
  heroSecondary.textContent = data.site.hero.secondaryLabel;
  heroPrimary.href = `#${data.site.hero.primaryPage}`;
  heroSecondary.href = `#${data.site.hero.secondaryPage}`;

  data.site.status.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'status-item';
    div.innerHTML = `<strong>${item.title}</strong><span>${item.text}</span>`;
    siteStatus.appendChild(div);
  });

  function labelForStatus(status) {
    if (status === 'updating') return 'Needs work';
    if (status === 'hidden') return 'Hidden';
    return 'Ready';
  }

  function isActiveBranch(item, currentPageId) {
    if (!item) return false;
    if (item.id === currentPageId) return true;
    return Array.isArray(item.children) && item.children.some((child) => isActiveBranch(child, currentPageId));
  }

  function toggleState(key, fallback) {
    if (typeof navState[key] === 'boolean') return navState[key];
    navState[key] = fallback;
    return navState[key];
  }

  function buildPageTree() {
    data.navigation.forEach((group) => {
      group.items.forEach((item) => {
        registerPageNode(item, [group.title]);
      });
    });
  }

  function registerPageNode(item, trail) {
    if (!item || item.visible === false) return;

    if (item.id) {
      pageTree[item.id] = {
        label: item.label,
        trail: trail.slice()
      };
    }

    if (Array.isArray(item.children)) {
      item.children.forEach((child) => {
        registerPageNode(child, trail.concat(item.label));
      });
    }
  }

  function makeNavButton(item, currentPageId, depth) {
    const button = document.createElement('button');
    button.className = `nav-link depth-${depth}`;
    button.dataset.pageId = item.id || '';
    button.innerHTML = `<span>${item.label}</span><small>${labelForStatus(item.status)}</small>`;
    button.classList.toggle('active', item.id === currentPageId);

    button.addEventListener('click', () => {
      if (item.id) {
        location.hash = item.id;
        if (window.innerWidth <= 1080) sidebar.classList.remove('open');
      }
    });

    return button;
  }

  function buildBranch(items, currentPageId, depth) {
    const fragment = document.createDocumentFragment();

    items.filter((item) => item.visible !== false).forEach((item, index) => {
      const hasChildren = Array.isArray(item.children) && item.children.some((child) => child.visible !== false);
      const node = document.createElement('div');
      node.className = `nav-node depth-${depth}${hasChildren ? ' has-children' : ''}${isActiveBranch(item, currentPageId) ? ' active-branch' : ''}`;

      if (hasChildren) {
        const sectionKey = item.sectionId || item.id || `${depth}-${index}-${item.label}`;
        const expanded = toggleState(sectionKey, item.defaultExpanded !== false || isActiveBranch(item, currentPageId));

        const row = document.createElement('div');
        row.className = 'nav-section-row';

        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'nav-section-toggle';
        toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        toggle.innerHTML = `<span class="nav-chevron">${expanded ? '▾' : '▸'}</span><span class="nav-section-label">${item.label}</span>`;
        toggle.addEventListener('click', () => {
          navState[sectionKey] = !navState[sectionKey];
          buildNav(currentPageId);
        });
        row.appendChild(toggle);

        if (item.id) {
          const overview = document.createElement('button');
          overview.type = 'button';
          overview.className = `nav-overview-link depth-${depth}`;
          overview.textContent = 'Open';
          overview.addEventListener('click', () => {
            location.hash = item.id;
            if (window.innerWidth <= 1080) sidebar.classList.remove('open');
          });
          row.appendChild(overview);
        }

        node.appendChild(row);

        if (expanded) {
          const childWrap = document.createElement('div');
          childWrap.className = 'nav-children';
          childWrap.appendChild(buildBranch(item.children, currentPageId, depth + 1));
          node.appendChild(childWrap);
        }
      } else {
        node.appendChild(makeNavButton(item, currentPageId, depth));
      }

      fragment.appendChild(node);
    });

    return fragment;
  }

  function buildNav(currentPageId) {
    navList.innerHTML = '';
    data.navigation.forEach((group, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'nav-group';

      const groupKey = `group:${group.title}:${index}`;
      const groupExpanded = toggleState(groupKey, group.defaultExpanded !== false);

      const groupToggle = document.createElement('button');
      groupToggle.type = 'button';
      groupToggle.className = 'nav-group-toggle';
      groupToggle.setAttribute('aria-expanded', groupExpanded ? 'true' : 'false');
      groupToggle.innerHTML = `<span class="nav-chevron">${groupExpanded ? '▾' : '▸'}</span><span>${group.title}</span>`;
      groupToggle.addEventListener('click', () => {
        navState[groupKey] = !navState[groupKey];
        buildNav(currentPageId);
      });

      wrapper.appendChild(groupToggle);

      if (groupExpanded) {
        const container = document.createElement('div');
        container.className = 'nav-group-items';
        container.appendChild(buildBranch(group.items || [], currentPageId, 0));
        wrapper.appendChild(container);
      }

      navList.appendChild(wrapper);
    });
  }

  function renderBreadcrumbs(pageId) {
    const entry = pageTree[pageId] || { label: 'Home', trail: ['Start here'] };
    const crumbs = []
      .concat(entry.trail || [])
      .concat(entry.label || pageId)
      .filter(Boolean);

    breadcrumbs.innerHTML = crumbs.map((label, index) => {
      const isLast = index === crumbs.length - 1;
      return `<span class="breadcrumb-item${isLast ? ' current' : ''}">${label}</span>`;
    }).join('<span class="breadcrumb-separator">/</span>');
  }

  function renderPage(pageId) {
    const page = data.pages[pageId] || data.pages.home;
    pageTitle.textContent = page.title;
    pageBody.innerHTML = page.body;

    pageMeta.innerHTML = '';
    [
      ['Version', page.version || '—'],
      ['Last updated', formatDate(page.lastUpdated)],
      ['Page ID', pageId],
    ].forEach(([label, value]) => {
      const div = document.createElement('div');
      div.className = 'meta-item';
      div.innerHTML = `<strong>${label}</strong><span>${value}</span>`;
      pageMeta.appendChild(div);
    });

    pageBanner.innerHTML = '';
    if (page.needsUpdate) {
      pageBanner.innerHTML = `<div class="banner warning"><strong>Update notice.</strong> ${page.updateMessage}</div>`;
    } else {
      pageBanner.innerHTML = `<div class="banner info"><strong>Page summary.</strong> ${page.summary}</div>`;
    }

    renderBreadcrumbs(pageId);
    renderResources(page.resources || []);
    renderVideos(page.videos || []);
    renderHistory(page.history || []);
    renderDiscord();
    buildNav(pageId);
    setActiveNav(pageId);
  }

  function renderResources(resources) {
    if (!resources.length) {
      resourceSection.innerHTML = `<h3 class="section-title">Resources</h3><p class="empty-state">No linked resources have been added to this page yet.</p>`;
      return;
    }

    resourceSection.innerHTML = `<h3 class="section-title">Resources</h3><div class="card-list">${resources.map((item) => `
      <div class="mini-card">
        <h4>${item.title}</h4>
        <p>${item.text}</p>
        <p><a class="text-link" href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a></p>
      </div>`).join('')}</div>`;
  }

  function renderVideos(videos) {
    if (!videos.length) {
      videoSection.innerHTML = `<h3 class="section-title">Videos and tutorials</h3><p class="empty-state">Add a YouTube link to this page when you are ready to embed a guide.</p>`;
      return;
    }

    videoSection.innerHTML = `<h3 class="section-title">Videos and tutorials</h3><div class="card-list">${videos.map((video) => {
      const embed = video.youtubeId
        ? `<iframe src="https://www.youtube.com/embed/${video.youtubeId}" title="${video.title}" allowfullscreen></iframe>`
        : '';
      return `
      <div class="mini-card">
        <h4>${video.title}</h4>
        <p>${video.text || ''}</p>
        <p><a class="text-link" href="${video.url}" target="_blank" rel="noreferrer">Open video link</a></p>
        ${embed}
      </div>`;
    }).join('')}</div>`;
  }

  function renderHistory(history) {
    historySection.innerHTML = `<h3 class="section-title">Version history</h3>${history.length ? history.map((item) => `
      <div class="history-item">
        <div class="history-date">${formatDate(item.date)}</div>
        <div>${item.text}</div>
      </div>`).join('') : '<p class="empty-state">No history has been recorded yet.</p>'}`;
  }

  function renderDiscord() {
    const serverId = data.site.social.discord.serverId;
    const inviteUrl = data.site.social.discord.url;
    const isConfigured = serverId && serverId !== 'REPLACE_ME';

    discordSection.innerHTML = `<h3 class="section-title">Discord</h3>
      ${isConfigured
        ? `<iframe class="discord-frame" src="https://discord.com/widget?id=${serverId}&theme=dark" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
           <p><a class="text-link" href="${inviteUrl}" target="_blank" rel="noreferrer">Open Discord in a new tab</a></p>`
        : `<p class="empty-state">Add your Discord server ID and invite link in <code>data/site.js</code> to enable the embedded widget here.</p>`}
    `;
  }

  function setActiveNav(pageId) {
    document.querySelectorAll('.nav-link').forEach((node) => {
      node.classList.toggle('active', node.dataset.pageId === pageId);
    });
  }

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value || '—';
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function currentPageId() {
    const hash = location.hash.replace('#', '').trim();
    return data.pages[hash] ? hash : 'home';
  }

  sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  window.addEventListener('hashchange', () => renderPage(currentPageId()));

  buildPageTree();
  renderPage(currentPageId());
})();
