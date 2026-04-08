window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["ntm-space-weapons"] = {
  title: "Weapon & missile changes",
  summary: "Gameplay-facing missile, projectile, and turret behaviour changes in HBM Space WDG Edition.",
  version: "HBM Space WDG Edition docs",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>The WDG Edition changes how several weapon systems behave in practice, especially where ownership and long-range impact handling are important.</p>
        <h3>Projectile and turret behaviour</h3>
        <ul>
          <li>Missiles, rockets, and shells now carry ownership data</li>
          <li>Long-range weapons respect territory rules at the point of impact</li>
          <li>Turrets use faction-aware targeting logic</li>
          <li>Turret projectiles inherit ownership context</li>
        </ul>
        <h3>Missile system improvements</h3>
        <ul>
          <li><strong>Bunker-buster logic</strong> for penetration-focused strikes</li>
          <li><strong>Airburst detonation</strong> for above-ground detonation behaviour</li>
          <li><strong>Improved cluster or burst handling</strong> for multi-stage payloads</li>
          <li><strong>Improved drill or penetration handling</strong> for deeper impact behaviour</li>
        </ul>
        <h3>Launch system behaviour</h3>
        <ul>
          <li>Designators store owner data</li>
          <li>Launch systems validate target legality before firing</li>
          <li>Launch systems integrate with protection-aware checks</li>
        </ul>
  `.trim(),
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
