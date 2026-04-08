window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-war"] = {
  "title": "WGCore war system",
  "summary": "A source-backed overview of declaration rules, timed phases, control-driven capture, and war outcomes in WGCore.",
  "version": "WGCore Step 138 source review",
  "releaseState": "Live",
  "lastUpdated": "2026-04-08",
  "needsUpdate": false,
  "updateMessage": "",
  "body": "<p>WGCore wars are structured conflicts, not just permanent open hostility. The current source and project context show a phase-based war model with declaration checks, timed progression, capture behaviour, war points, and post-war outcomes.</p>\n\n<h3>War phases</h3>\n<ol>\n  <li><strong>Preparation</strong> — the conflict exists, but the war is not yet at full capture state</li>\n  <li><strong>Raiding</strong> — the war has moved into its active destructive stage</li>\n  <li><strong>Capture</strong> — capture-based territory takeover becomes available</li>\n</ol>\n\n<h3>Declaration requirements visible in the current project context</h3>\n<ul>\n  <li>The attacker must already own territory</li>\n  <li>Online-player presence checks are part of the declaration flow</li>\n  <li>Cooldowns and grace systems are used to stop nonstop chain wars</li>\n</ul>\n\n<h3>Capture logic</h3>\n<p>WGCore ties war capture to the control system. Territory pressure reduces defender control, and chunks can flip when their control reaches the required threshold. This means land change is not handled as a purely binary one-click operation.</p>\n\n<h3>Outcomes</h3>\n<ul>\n  <li><strong>Win</strong></li>\n  <li><strong>Loss</strong></li>\n  <li><strong>Truce</strong></li>\n  <li><strong>Core capture</strong>, which is treated as a decisive result tied to full faction removal behaviour in the wider project context</li>\n</ul>\n\n<h3>War points and leaderboard behaviour</h3>\n<ul>\n  <li>Wars feed into a point system used for ranking</li>\n  <li>The documented project behaviour uses positive-only scoring</li>\n  <li>Rewards are configurable rather than hardcoded into the page content</li>\n</ul>\n\n<h3>What this means for documentation</h3>\n<p>WGCore war pages should present war as a staged rules system: declaration, preparation, raiding, capture, resolution, cooldown, and reward consequences. That is more accurate than describing it as simple free PvP between factions.</p>",
  "resources": [
    {
      "title": "Control and decay",
      "text": "How the control system drives capture and territory flipping.",
      "url": "#wgcore-control",
      "label": "Open control page"
    },
    {
      "title": "Commands",
      "text": "War-related /wg and /wgc command branches visible in the source.",
      "url": "#wgcore-commands",
      "label": "Open command reference"
    },
    {
      "title": "Protection rules",
      "text": "How different territories behave while conflict systems are active.",
      "url": "#wgcore-protection",
      "label": "Open protection page"
    }
  ],
  "videos": [],
  "history": [
    {
      "date": "2026-04-08",
      "text": "Added a dedicated war page covering phased conflict, declaration checks, capture, and outcomes."
    }
  ]
};
