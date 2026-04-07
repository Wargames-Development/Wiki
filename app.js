(function () {
  const data = window.WARGAMES_WIKI;
  const pageBody = document.getElementById('pageBody');
  const pageTitle = document.getElementById('pageTitle');
  const pageMeta = document.getElementById('pageMeta');
  const pageBanner = document.getElementById('pageBanner');
  const navList = document.getElementById('navList');
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

  function buildNav() {
    navList.innerHTML = '';
    data.navigation.forEach((group) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'nav-group';
      wrapper.innerHTML = `<div class="nav-group-title">${group.title}</div>`;

      group.items.filter((item) => item.visible).forEach((item) => {
        const button = document.createElement('button');
        button.className = 'nav-link';
        button.dataset.pageId = item.id;
        button.innerHTML = `<span>${item.label}</span><small>${labelForStatus(item.status)}</small>`;
        button.addEventListener('click', () => {
          location.hash = item.id;
          if (window.innerWidth <= 1080) sidebar.classList.remove('open');
        });
        wrapper.appendChild(button);
      });

      navList.appendChild(wrapper);
    });
  }

  function labelForStatus(status) {
    if (status === 'updating') return 'Updating';
    if (status === 'hidden') return 'Hidden';
    return 'Live';
  }

  function renderPage(pageId) {
    const page = data.pages[pageId] || data.pages.home;
    pageTitle.textContent = page.title;
    pageBody.innerHTML = page.body;

    pageMeta.innerHTML = '';
    [
      ['Version', page.version],
      ['State', page.releaseState],
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
      pageBanner.innerHTML = `<div class="banner info"><strong>Stable page.</strong> ${page.summary}</div>`;
    }

    renderResources(page.resources || []);
    renderVideos(page.videos || []);
    renderHistory(page.history || []);
    renderDiscord();
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
        : `<p class="empty-state">Add your Discord server ID and invite link in <code>data/site-data.js</code> to enable the embedded widget here.</p>`}
    `;
  }

  function setActiveNav(pageId) {
    document.querySelectorAll('.nav-link').forEach((node) => {
      node.classList.toggle('active', node.dataset.pageId === pageId);
    });
  }

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function currentPageId() {
    const hash = location.hash.replace('#', '').trim();
    return data.pages[hash] ? hash : 'home';
  }

  sidebarToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
  window.addEventListener('hashchange', () => renderPage(currentPageId()));

  buildNav();
  renderPage(currentPageId());
})();
