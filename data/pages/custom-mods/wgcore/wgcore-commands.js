window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-commands"] = {
  "title": "WGCore command reference",
  "summary": "A source-backed command index for the current /wg and /wgc branches visible in the WGCore Step 138 codebase.",
  "version": "WGCore Step 138 source review",
  "releaseState": "Live",
  "lastUpdated": "2026-04-08",
  "needsUpdate": false,
  "updateMessage": "",
  "body": "<p>The current WGCore source exposes two main command roots:</p>\n<ul>\n  <li><code>/wg</code> for player-facing faction and territory interaction</li>\n  <li><code>/wgc</code> for administration, force actions, configuration, and maintenance</li>\n</ul>\n\n<h3>Major player branches visible under <code>/wg</code></h3>\n<ul>\n  <li><code>help</code> and <code>version</code></li>\n  <li><code>create</code>, <code>leave</code>, <code>disband</code>, <code>rename</code>, <code>tag</code></li>\n  <li><code>apply</code>, <code>applicants</code>, <code>invite</code>, <code>invites</code></li>\n  <li><code>promote</code>, <code>demote</code>, <code>kick</code>, <code>transfer</code>, <code>move</code></li>\n  <li><code>sethome</code>, <code>home</code>, <code>warp</code></li>\n  <li><code>list</code>, <code>info</code>, <code>zone</code>, <code>border</code></li>\n  <li><code>war</code>, <code>chat</code>, <code>permission</code>, <code>team</code>, <code>unclaim</code>, <code>fob</code></li>\n</ul>\n\n<h3>Administrative coverage visible under <code>/wgc</code></h3>\n<ul>\n  <li>War controls and force declare or end tools</li>\n  <li>Config editing and related live admin controls</li>\n  <li>Zone tools and claim tools</li>\n  <li>Force membership and faction-state actions</li>\n  <li>Override and maintenance tooling for running the server ruleset</li>\n</ul>\n\n<div class=\"callout\">\n  <strong>Reference scope</strong>\n  <p>This page is an index of command branches that are visible in the source. It is useful for wiki structure and feature documentation. Exact argument-level syntax should still be validated against the live build you plan to publish if you want player-facing examples.</p>\n</div>",
  "resources": [
    {
      "title": "Factions",
      "text": "Most common player-facing faction lifecycle commands.",
      "url": "#wgcore-factions",
      "label": "Open factions page"
    },
    {
      "title": "War system",
      "text": "Where /wg war and related admin controls fit into gameplay.",
      "url": "#wgcore-war",
      "label": "Open war page"
    },
    {
      "title": "Configuration",
      "text": "How live config editing fits into admin tooling.",
      "url": "#wgcore-configuration",
      "label": "Open configuration page"
    }
  ],
  "videos": [],
  "history": [
    {
      "date": "2026-04-08",
      "text": "Expanded the old WGCore command page into a cleaner source-backed command index aligned with the new WGCore documentation section."
    }
  ]
};
