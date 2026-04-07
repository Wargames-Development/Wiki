(function () {
  const scripts = [
    'data/site.js',
    'data/navigation.js',
    'data/page-manifest.js'
  ];

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = function () {
        reject(new Error('Failed to load ' + src));
      };
      document.body.appendChild(script);
    });
  }

  function loadAll(list) {
    return list.reduce(function (promise, src) {
      return promise.then(function () {
        return loadScript(src);
      });
    }, Promise.resolve());
  }

  loadAll(scripts)
    .then(function () {
      return loadAll(window.WIKI_PAGE_SCRIPTS || []);
    })
    .then(function () {
      return loadAll(['data/site-data.js', 'app.js']);
    })
    .catch(function (error) {
      console.error(error);
      const content = document.getElementById('content');
      if (content) {
        content.innerHTML = '<section class="page-card"><h2>Wiki loading error</h2><p>The split data files did not load correctly. Check the browser console for the failing script path.</p></section>';
      }
    });
})();
