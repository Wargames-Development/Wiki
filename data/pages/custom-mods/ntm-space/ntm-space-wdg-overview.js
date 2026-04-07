window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["ntm-space-wdg-overview"] = {
  title: "HBM Space WDG Edition overview",
  summary: "A high-level overview of what the WDG fork changes and who it is for.",
  version: "HBM Space WDG Edition docs",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: "\n        <p><strong>HBM Space WDG Edition</strong> is a systems-focused fork of the HBM Space branch. It is primarily intended for multiplayer environments where high-impact weapons need to interact cleanly with ownership, faction, and territory rules.</p>\n        <p>This fork is not a content-focused rewrite. Its purpose is to improve system behaviour, attribution, and protection-aware interaction across destructive weapons and launch systems.</p>\n        <h3>What the fork changes</h3>\n        <ul>\n          <li>Persistent owner or faction tracking for bombs, explosives, missiles, shells, turrets, and launch systems</li>\n          <li>Detonation and effect handling that respects protected claims or territory</li>\n          <li>Faction-aware turret behaviour and projectile ownership propagation</li>\n          <li>Missile behaviour improvements such as bunker-buster, airburst, and improved penetration handling</li>\n          <li>Launch validation tied into target legality and protection checks</li>\n        </ul>\n        <h3>Who this fork is for</h3>\n        <ul>\n          <li>Server owners running claims, factions, or protected territory systems</li>\n          <li>Modpacks that want to keep HBM Space weapon systems without allowing uncontrolled griefing</li>\n          <li>Players who need consistent weapon behaviour in structured multiplayer combat</li>\n          <li>Developers reviewing what the WDG fork changes without re-documenting the whole base mod</li>\n        </ul>\n      ",
  resources: [
    {
      title: "Official HBM Space wiki",
      text: "Use this for standard progression and base-mod documentation.",
      url: "https://nucleartech.wiki/wiki/NTM:_Space",
      label: "Open official HBM Space wiki"
    },
    {
      title: "Protection & ownership system",
      text: "Detailed behaviour of attribution and protection-aware weapon handling.",
      url: "#ntm-space-protection",
      label: "Open protection page"
    },
    {
      title: "Weapon & missile changes",
      text: "Gameplay-facing changes to missile and weapon behaviour.",
      url: "#ntm-space-weapons",
      label: "Open weapon changes page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Added the dedicated HBM Space WDG Edition overview page."
    }
  ]
};
