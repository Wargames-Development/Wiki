window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore"] = {
  title: "WGCore overview",
  summary: "WGCore is the foundational territory, faction, and rules-enforcement mod behind the Wargames server experience for Minecraft 1.7.10.",
  version: "1.0.0_X138-release",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: "\n        <p><strong>WGCore</strong> is the backbone mod behind the Wargames server ruleset. It handles faction territory, claim control, administrative zones, permissions, war flow, protection checks, and compatibility surfaces for the rest of the custom stack.</p>\n        <div class=\"callout\">\n          <strong>In plain language</strong>\n          <p>If you want to understand why the server behaves a certain way in claimed land, safezones, warzones, or faction conflict, WGCore is usually the answer.</p>\n        </div>\n        <h3>What WGCore is responsible for</h3>\n        <ul>\n          <li>Chunk-based faction territory claiming</li>\n          <li>Zone systems such as Safezones, Warzones, Monuments, Resource Nodes, and Wilderness</li>\n          <li>Relation-aware permission resolution</li>\n          <li>Persistent ownership and control tracking for claims</li>\n          <li>War declaration, raiding, capture, and war-resolution behaviour</li>\n          <li>Protection hooks for block actions, interaction, explosions, and PvP-related checks</li>\n          <li>Integration paths for other mods used by Wargames, including HBM and MCHeli</li>\n        </ul>\n        <h3>How the system is structured</h3>\n        <p>The current codebase is built around services and persistent saved data rather than burying core logic inside random commands or event handlers. That matters because the server needs territory state, faction state, and war state to stay consistent even when players are offline.</p>\n        <h3>Major systems currently visible in the codebase</h3>\n        <ul>\n          <li><strong>Faction services</strong> for creation, lifecycle, invites, applications, homes, warps, role changes, and permissions</li>\n          <li><strong>Territory services</strong> for claims, permissions, relocation, expansion cleanup, and re-expansion cooldown handling</li>\n          <li><strong>War services</strong> for declaration, presence checks, resolution, rewards, points, cooldowns, and global grace handling</li>\n          <li><strong>Control services</strong> for territory control state and passive decay</li>\n          <li><strong>Team services</strong> for team settings such as friendly fire and related visibility behaviour</li>\n          <li><strong>Notification services</strong> for countdowns, broadcasts, and offline catch-up delivery</li>\n        </ul>\n        <h3>Player-facing takeaway</h3>\n        <p>WGCore exists so the Wargames server can behave like one coherent game rather than like a loose stack of unrelated mods. Territory, conflict, rules, and integrations are meant to resolve through one consistent system.</p>\n      ",
  resources: [
    {
      title: "WGCore source overview",
      text: "The current uploaded source is step 138 and already exposes the core architecture clearly through services for factions, territory, war, control, teams, notifications, and integrations.",
      url: "#wgcore-commands",
      label: "Open command reference"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Added the first real WGCore wiki page using the uploaded step 138 source and project README as the basis."
    }
  ]
};
