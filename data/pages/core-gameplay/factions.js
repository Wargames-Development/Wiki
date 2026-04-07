window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["factions"] = {
  title: "Factions and war",
  summary: "A player-facing explanation of the territory and war model built around WGCore.",
  version: "WGCore build X138 context",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: "\n        <p>Wargames uses a custom faction and territory system built around <strong>WGCore</strong>. It is not just a stock factions plugin with a few tweaks on top. Territory, control, protection, war, and integration with other mods all sit on the same backbone.</p>\n        <h3>Core ideas</h3>\n        <ul>\n          <li><strong>Territory is chunk-based.</strong> Claims, control, and protection are resolved per chunk.</li>\n          <li><strong>Zones matter.</strong> Areas such as Safezones and Warzones can override normal faction-territory behaviour.</li>\n          <li><strong>Control and ownership are not always the same thing.</strong> During conflict, a chunk may be owned by one side while temporarily controlled by another.</li>\n          <li><strong>War uses phases.</strong> The current WGCore implementation revolves around preparation, raiding, capture, and cooldown handling.</li>\n        </ul>\n        <h3>What players should expect</h3>\n        <ul>\n          <li>Faction creation, membership, invites, applications, and role-based command access</li>\n          <li>Claim growth based around core and expansion systems rather than only a simple radius</li>\n          <li>Admin-defined zones that can change what is allowed in an area</li>\n          <li>War progression that is meant to be structured rather than chaotic freeform raiding at all times</li>\n        </ul>\n        <div class=\"callout\">\n          <strong>Important</strong>\n          <p>If you are trying to understand how Wargames conflict works, read this page together with the WGCore overview and the WGCore command reference. The commands tell you how to interact with the system, but the overview explains why the system behaves the way it does.</p>\n        </div>\n      ",
  resources: [
    {
      title: "WGCore overview",
      text: "Read this for the deeper explanation of claims, zones, war, permissions, and integrations.",
      url: "#wgcore",
      label: "Open WGCore overview"
    },
    {
      title: "WGCore command reference",
      text: "Read this if you want a quick player-facing summary of the major /wg branches.",
      url: "#wgcore-commands",
      label: "Open command reference"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Added a proper player-facing factions and war overview based on the current WGCore architecture."
    }
  ]
};
