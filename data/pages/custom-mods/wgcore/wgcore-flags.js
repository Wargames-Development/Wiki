window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-flags"] = {
  "title": "WGCore flags",
  "summary": "The flag-based systems used by WGCore for cores, expansion, capture, FOB creation, and relocation.",
  "version": "WGCore Step 138 source review",
  "releaseState": "Live",
  "lastUpdated": "2026-04-08",
  "needsUpdate": false,
  "updateMessage": "",
  "body": "<p>WGCore uses flags as concrete gameplay objects for several of its most important territory actions. The source shows dedicated handling for multiple flag types rather than a single generic claim item.</p>\n\n<h3>Flag types currently documented from the source and project context</h3>\n\n<h4>Core Flag</h4>\n<ul>\n  <li>Defines the faction's main core territory</li>\n  <li>Acts as the central anchor for related faction land systems</li>\n  <li>Is tied to faction survival and broader territory identity</li>\n</ul>\n\n<h4>Expansion Flag</h4>\n<ul>\n  <li>Extends territory outward from an allowed anchor</li>\n  <li>Respects count and distance limits rather than allowing infinite growth</li>\n  <li>Is part of controlled land growth rather than freeform claiming</li>\n</ul>\n\n<h4>Capture Flag</h4>\n<ul>\n  <li>Used during the appropriate war capture stage</li>\n  <li>Transfers ownership of a single chunk rather than performing a broad mass capture</li>\n  <li>Fits into the war phase and control-driven capture flow</li>\n</ul>\n\n<h4>FOB Flag</h4>\n<ul>\n  <li>Creates or anchors a forward operating base</li>\n  <li>Supports separate FOB growth and collapse behaviour</li>\n  <li>Lets factions project forward presence beyond their main core</li>\n</ul>\n\n<h4>Core Relocation Flag</h4>\n<ul>\n  <li>Moves a faction core instead of creating a new faction</li>\n  <li>Uses a more controlled workflow with confirmation and restrictions</li>\n  <li>Exists to support structured core moves rather than instant free relocation</li>\n</ul>\n\n<h3>What flag handling implies in the current source</h3>\n<ul>\n  <li>Placement validation is important and specific to the flag type</li>\n  <li>Flags are tied to protected areas and cleanup logic</li>\n  <li>Not every flag has the same gameplay purpose or permissions</li>\n  <li>Flags are part of the long-term saved state, not only short-lived particles or markers</li>\n</ul>\n\n<div class=\"callout\">\n  <strong>Documentation note</strong>\n  <p>WGCore uses flag systems to make territory actions visible and rule-driven. That is a major design choice. Core establishment, expansion, forward deployment, capture, and relocation are all represented as structured in-world systems instead of loose admin-only commands.</p>\n</div>",
  "resources": [
    {
      "title": "FOB system",
      "text": "How FOB-related flags support separate forward operating base behaviour.",
      "url": "#wgcore-fobs",
      "label": "Open FOB page"
    },
    {
      "title": "War system",
      "text": "Where capture flags fit into phase-based war behaviour.",
      "url": "#wgcore-war",
      "label": "Open war page"
    },
    {
      "title": "Territory and claims",
      "text": "How flag actions change the state of land over time.",
      "url": "#wgcore-territory",
      "label": "Open territory page"
    }
  ],
  "videos": [],
  "history": [
    {
      "date": "2026-04-08",
      "text": "Added a dedicated flags page covering the distinct roles of core, expansion, capture, FOB, and relocation flags."
    }
  ]
};
