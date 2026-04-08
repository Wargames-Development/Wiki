window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["ntm-space-protection"] = {
  title: "Protection & ownership system",
  summary: "How HBM Space WDG Edition handles ownership tracking and protection-aware destructive effects.",
  version: "HBM Space WDG Edition docs",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>The WDG Edition adds persistent ownership tracking to major destructive systems and uses that context to decide whether effects are allowed in protected areas.</p>
        <h3>What carries ownership</h3>
        <ul>
          <li>Bombs and explosives</li>
          <li>Missiles and rockets</li>
          <li>Shells and similar long-range munitions</li>
          <li>Turrets and their projectiles</li>
          <li>Launch systems and target designators</li>
        </ul>
        <h3>What protection affects</h3>
        <ul>
          <li>Detonation checks in protected claims or territory</li>
          <li>Whether an explosion is allowed, limited, or blocked</li>
          <li>Whether block damage is skipped in protected chunks</li>
          <li>Whether radiation or contamination spread is blocked or limited</li>
          <li>Whether EMP effects are allowed in protected areas</li>
          <li>Whether player damage is filtered through protection rules</li>
        </ul>
        <h3>Examples</h3>
        <ul>
          <li>A nuke can still be attributed to its owner instead of becoming an anonymous explosion source</li>
          <li>A missile hitting protected territory can be blocked or modified at the impact point</li>
          <li>A turret projectile can carry the turret owner context instead of behaving like an unowned shot</li>
          <li>Protected chunks can prevent block destruction even if a weapon still detonates visually or partially</li>
        </ul>
  `.trim(),
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
