window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-api"] = {
  "title": "WGCore integration API",
  "summary": "Developer-focused documentation for the WGCore rule-query and protection integration layer used by external mods.",
  "version": "WGCore Step 138 source review",
  "releaseState": "Live",
  "lastUpdated": "2026-04-08",
  "needsUpdate": false,
  "updateMessage": "",
  "body": "<p>WGCore exposes an integration layer so other mods can ask whether specific actions are allowed before they damage land, affect entities, or place restricted content. This is one of the most important technical features in the codebase because the Wargames stack uses multiple custom or forked mods that still need to respect one central territory authority.</p>\n\n<h3>What the integration layer is for</h3>\n<ul>\n  <li>Explosion permission checks</li>\n  <li>Radiation or contamination permission checks in the broader project context</li>\n  <li>Targeting and hostile-action checks</li>\n  <li>Restricted placement checks for claim-sensitive blocks or systems</li>\n</ul>\n\n<h3>Design characteristics visible in the source and project context</h3>\n<ul>\n  <li>Context-based decision making instead of raw yes or no toggles detached from world state</li>\n  <li>Attribution support so decisions can depend on who caused the action</li>\n  <li>Default-deny behaviour when the integration layer cannot safely confirm permission</li>\n  <li>A clear expectation that external mods should consult WGCore rather than bypass it</li>\n</ul>\n\n<div class=\"callout\">\n  <strong>Why this matters for the Wargames stack</strong>\n  <p>Without a central integration API, every weapons mod, vehicle fork, explosive system, or environmental effect would need to reinvent its own protection logic. WGCore instead acts as the authority and other mods query it.</p>\n</div>\n\n<h3>Who should read this page</h3>\n<ul>\n  <li>Developers documenting how custom forks integrate with WGCore</li>\n  <li>Admins who need to understand why some modded actions are blocked in claims or zones</li>\n  <li>Contributors working on new protection-aware integrations</li>\n</ul>",
  "resources": [
    {
      "title": "Protection rules",
      "text": "The gameplay-facing side of the rules external mods are expected to respect.",
      "url": "#wgcore-protection",
      "label": "Open protection page"
    },
    {
      "title": "WGCore overview",
      "text": "High-level context for where the API sits in the overall architecture.",
      "url": "#wgcore",
      "label": "Open WGCore overview"
    }
  ],
  "videos": [],
  "history": [
    {
      "date": "2026-04-08",
      "text": "Added a developer-focused WGCore API page describing the rule-query and protection integration layer."
    }
  ]
};
