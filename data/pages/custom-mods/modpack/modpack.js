window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["modpack"] = {
  title: "Modpack overview",
  summary: "A curated overview page for the Wargames pack rather than a raw dump of every jar.",
  version: "Survival v2.0B",
  releaseState: "Updating",
  lastUpdated: "2026-04-07",
  needsUpdate: true,
  updateMessage: "This page currently covers the Wargames-specific custom stack, but it is not yet a complete full pack mod list.",
  body: `
<p>This page is meant to explain what kind of pack Wargames is, not to overwhelm new players with a giant unsorted list. For now, the most important thing is understanding the role of the custom Wargames forks.</p>
        <h3>Main pack identity</h3>
        <ul>
          <li>Custom faction, war, and territory backbone through WGCore</li>
          <li>Custom combat and vehicle stack through the Wargames FMUR and MCHeli forks</li>
          <li>Additional server flavour and gameplay support through smaller Wargames mods like Foliage+ and HitmarkerPlus</li>
          <li>Broader pack support from the rest of the installed mod list, which can be documented in more detail later</li>
        </ul>
        <h3>Why this page is still marked as updating</h3>
        <p>You asked to start by getting the wiki aligned with the codebases you uploaded. That means the custom Wargames pieces are documented first. A full player-facing mod catalogue can be added after you decide how detailed you want the public pack documentation to be.</p>
  `.trim(),
  resources: [
    {
      title: "Custom mods and forks",
      text: "This is currently the most useful modpack reference page because it documents the Wargames-specific code you uploaded.",
      url: "#custom-mods",
      label: "Open custom mods page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Modpack overview rewritten to focus on the custom Wargames stack first, with a later full pack list still planned."
    }
  ]
};
