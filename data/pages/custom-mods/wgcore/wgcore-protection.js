window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-protection"] = {
  "title": "WGCore protection rules",
  "summary": "How WGCore enforces action limits for PvP, block actions, explosions, and zone-based territory behaviour.",
  "version": "WGCore Step 138 source review",
  "releaseState": "Live",
  "lastUpdated": "2026-04-08",
  "needsUpdate": false,
  "updateMessage": "",
  "body": "<p>WGCore is one of the main protection authorities in the Wargames stack. It decides when actions are blocked or allowed based on location, ownership, relation, zone type, and integration context.</p>\n\n<h3>What WGCore protection covers</h3>\n<ul>\n  <li>PvP and hostile interaction checks</li>\n  <li>Block breaking and placement checks</li>\n  <li>Interaction and container-related behaviour</li>\n  <li>Explosion permission checks</li>\n  <li>Modded environment checks such as radiation and contamination in the wider project context</li>\n</ul>\n\n<h3>Zone-level behaviour documented in the broader project context</h3>\n\n<h4>Safezone</h4>\n<ul>\n  <li>No PvP</li>\n  <li>No destructive block damage</li>\n  <li>No explosions</li>\n  <li>Used for strongly protected areas</li>\n</ul>\n\n<h4>Warzone</h4>\n<ul>\n  <li>PvP is allowed</li>\n  <li>Terrain protection still applies in the documented project ruleset</li>\n  <li>Acts as a combat-enabled but terrain-controlled area</li>\n</ul>\n\n<h4>Wilderness</h4>\n<ul>\n  <li>Open, unrestricted baseline gameplay area in comparison with protected zones</li>\n</ul>\n\n<h3>Why integration matters</h3>\n<p>WGCore does not only protect against vanilla-style actions. It also exposes permission checks so that custom or forked mods can ask whether something should be allowed before they damage blocks, affect entities, or place restricted content inside protected areas.</p>\n\n<div class=\"callout\">\n  <strong>Practical takeaway</strong>\n  <p>If the server needs to stop a missile, explosion, contamination effect, or claim-locked action from bypassing territory rules, WGCore is designed to be the decision layer that other mods consult.</p>\n</div>",
  "resources": [
    {
      "title": "Integration API",
      "text": "How external mods ask WGCore whether actions are allowed.",
      "url": "#wgcore-api",
      "label": "Open API page"
    },
    {
      "title": "Territory and claims",
      "text": "How ownership and controller state affect protection checks.",
      "url": "#wgcore-territory",
      "label": "Open territory page"
    },
    {
      "title": "War system",
      "text": "How active conflict interacts with what protection systems allow.",
      "url": "#wgcore-war",
      "label": "Open war page"
    }
  ],
  "videos": [],
  "history": [
    {
      "date": "2026-04-08",
      "text": "Added a dedicated protection page covering zones, action checks, and modded enforcement behaviour."
    }
  ]
};
