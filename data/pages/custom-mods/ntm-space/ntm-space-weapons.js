window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["ntm-space-weapons"] = {
  title: "Weapon & missile changes",
  summary: "Gameplay-facing missile, projectile, and turret behaviour changes in HBM Space WDG Edition.",
  version: "HBM Space WDG Edition docs",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: "\n        <p>The WDG Edition changes how several weapon systems behave in practice, especially where ownership and long-range impact handling are important.</p>\n        <h3>Projectile and turret behaviour</h3>\n        <ul>\n          <li>Missiles, rockets, and shells now carry ownership data</li>\n          <li>Long-range weapons respect territory rules at the point of impact</li>\n          <li>Turrets use faction-aware targeting logic</li>\n          <li>Turret projectiles inherit ownership context</li>\n        </ul>\n        <h3>Missile system improvements</h3>\n        <ul>\n          <li><strong>Bunker-buster logic</strong> for penetration-focused strikes</li>\n          <li><strong>Airburst detonation</strong> for above-ground detonation behaviour</li>\n          <li><strong>Improved cluster or burst handling</strong> for multi-stage payloads</li>\n          <li><strong>Improved drill or penetration handling</strong> for deeper impact behaviour</li>\n        </ul>\n        <h3>Launch system behaviour</h3>\n        <ul>\n          <li>Designators store owner data</li>\n          <li>Launch systems validate target legality before firing</li>\n          <li>Launch systems integrate with protection-aware checks</li>\n        </ul>\n      ",
  resources: [
    {
      title: "Protection & ownership system",
      text: "See how these weapon changes interact with protection and ownership rules.",
      url: "#ntm-space-protection",
      label: "Open protection page"
    },
    {
      title: "Server impact & use cases",
      text: "See why these changes matter for multiplayer servers.",
      url: "#ntm-space-server-impact",
      label: "Open server impact page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Added the HBM Space WDG Edition weapon and missile changes page."
    }
  ]
};
