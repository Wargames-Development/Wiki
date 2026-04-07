window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["fmur"] = {
  title: "Flan's Mod Ultimate-R Wargames Edition",
  summary: "The Wargames fork of Flan's Mod Ultimate Reforged, used for the pack's Flan-based combat content.",
  version: "FMUR source 1.58.x context",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: "\n        <p><strong>Flan's Mod Ultimate-R Wargames Edition</strong> is the Wargames fork of FMUR. The uploaded source is a large combat codebase covering guns, hitboxes, player combat events, networking, and broader Flan-style systems.</p>\n        <h3>What is visible in the uploaded source</h3>\n        <ul>\n          <li>Gun and combat events such as reloads, gun fire, bullet hits, soldier death, and revive-related flow</li>\n          <li>Hitbox and damage-related systems through classes such as <code>HitboxHelper</code></li>\n          <li>Packet-heavy multiplayer handling for weapon and vehicle behaviour</li>\n          <li>A Wargames fork identity in the packaged metadata, naming, and source branch structure</li>\n        </ul>\n        <h3>What this means on Wargames</h3>\n        <p>This fork is one of the main infantry-combat pillars of the server. It sits alongside the rest of the Wargames stack rather than acting as a standalone untouched public mod, so the page should be understood as a Wargames-specific fork page rather than a generic Flan's Mod guide.</p>\n        <div class=\"callout\">\n          <strong>Note</strong>\n          <p>The uploaded source shows version-context mismatch between generated build metadata and gradle properties, so this page deliberately uses a broader version label rather than hardcoding one exact public-facing build number.</p>\n        </div>\n      ",
  resources: [
    {
      title: "Custom mods index",
      text: "Return to the custom stack index page.",
      url: "#custom-mods",
      label: "Back to custom mods"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Added a separate FMUR page based on the uploaded Wargames fork source and packaged metadata."
    }
  ]
};
