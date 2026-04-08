window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["release-notes"] = {
  title: "Release notes",
  summary: "A player-facing page for site changes and visible documentation milestones.",
  version: "Wiki build",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
<p>This page tracks visible changes to the wiki itself and can also be used later for pack-facing notes if you want one public summary page.</p>
        <h3>Current wiki milestones</h3>
        <ul>
          <li>GitHub Pages deployment prepared for <code>wiki.wargames.host</code></li>
          <li>Discord, Technic, and CurseForge links wired into the header</li>
          <li>WGCore overview and WGCore command index added</li>
          <li>First-pass custom mod stack reference added from the uploaded codebases</li>
        </ul>
  `.trim(),
  resources: [],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Wiki content updated from a generic shell into a first-pass Wargames documentation site aligned with the uploaded source code archives."
    },
    {
      date: "2026-04-07",
      text: "Initial GitHub Pages starter shell created for Wargames Survival."
    }
  ]
};
