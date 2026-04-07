window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["ntm-space-protection"] = {
  title: "Protection & ownership system",
  summary: "How HBM Space WDG Edition handles ownership tracking and protection-aware destructive effects.",
  version: "HBM Space WDG Edition docs",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: "\n        <p>The WDG Edition adds persistent ownership tracking to major destructive systems and uses that context to decide whether effects are allowed in protected areas.</p>\n        <h3>What carries ownership</h3>\n        <ul>\n          <li>Bombs and explosives</li>\n          <li>Missiles and rockets</li>\n          <li>Shells and similar long-range munitions</li>\n          <li>Turrets and their projectiles</li>\n          <li>Launch systems and target designators</li>\n        </ul>\n        <h3>What protection affects</h3>\n        <ul>\n          <li>Detonation checks in protected claims or territory</li>\n          <li>Whether an explosion is allowed, limited, or blocked</li>\n          <li>Whether block damage is skipped in protected chunks</li>\n          <li>Whether radiation or contamination spread is blocked or limited</li>\n          <li>Whether EMP effects are allowed in protected areas</li>\n          <li>Whether player damage is filtered through protection rules</li>\n        </ul>\n        <h3>Examples</h3>\n        <ul>\n          <li>A nuke can still be attributed to its owner instead of becoming an anonymous explosion source</li>\n          <li>A missile hitting protected territory can be blocked or modified at the impact point</li>\n          <li>A turret projectile can carry the turret owner context instead of behaving like an unowned shot</li>\n          <li>Protected chunks can prevent block destruction even if a weapon still detonates visually or partially</li>\n        </ul>\n      ",
  resources: [
    {
      title: "HBM Space WDG Edition overview",
      text: "Return to the high-level fork overview.",
      url: "#ntm-space-wdg-overview",
      label: "Back to WDG overview"
    },
    {
      title: "Weapon & missile changes",
      text: "See the gameplay-facing missile behaviour changes.",
      url: "#ntm-space-weapons",
      label: "Open weapon changes page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Added the HBM Space WDG Edition protection and ownership page."
    }
  ]
};
