window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["faq"] = {
  title: "FAQ",
  summary: "Quick answers for common questions while the rest of the wiki is still being expanded.",
  version: "Survival v2.0B",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
<h3>Is this a finished wiki?</h3>
        <p>No. It is now a real documentation base, but several pages are still intentionally marked as updating.</p>
        <h3>What is the most important custom mod in the pack?</h3>
        <p>WGCore, because it underpins territory, factions, permissions, protection, war flow, and several integration paths for the rest of the Wargames stack.</p>
        <h3>Why are some pages marked as updating?</h3>
        <p>Because the site supports visible page health. This lets you publish useful documentation now without pretending every section is complete.</p>
        <h3>Can pages stay hidden until release?</h3>
        <p>Yes. In the navigation config, set <code>visible: false</code> for the relevant navigation item and keep the page data ready in the file until you want it exposed.</p>
        <h3>Can each page show when it was last revised?</h3>
        <p>Yes. Every page already supports <code>lastUpdated</code>, a version field, a release-state field, a page banner, and a visible history list.</p>
  `.trim(),
  resources: [],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "FAQ updated to match the new code-aligned wiki structure."
    }
  ]
};
