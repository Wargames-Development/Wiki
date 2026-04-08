window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-fobs"] = {
  "title": "WGCore FOB system",
  "summary": "Forward operating bases in WGCore and how they differ from the main faction core.",
  "version": "WGCore Step 138 source review",
  "releaseState": "Live",
  "lastUpdated": "2026-04-08",
  "needsUpdate": false,
  "updateMessage": "",
  "body": "<p><strong>FOBs</strong>, or forward operating bases, give factions a structured way to project presence away from their main core. They are not just renamed expansion claims. The current source and project context show that FOBs have their own lifecycle and are handled as a distinct territory system.</p>\n\n<h3>What FOBs are for</h3>\n<ul>\n  <li>Creating a forward foothold away from the main faction base</li>\n  <li>Supporting separate expansion behaviour from the main core</li>\n  <li>Allowing conflict and control systems to operate on an advanced base layer</li>\n</ul>\n\n<h3>Important behavioural differences</h3>\n<ul>\n  <li>FOBs are separate from the faction's main core</li>\n  <li>They support their own territory extension logic</li>\n  <li>They participate in control and decay systems differently from normal faction territory</li>\n  <li>They can collapse if their control state reaches the relevant failure point</li>\n</ul>\n\n<h3>Decay behaviour</h3>\n<p>In the project context surrounding the reviewed source, normal non-FOB territory can pause passive decay during war, but FOB-related territory continues decaying. That makes FOBs more exposed and more temporary than the main core system.</p>\n\n<div class=\"callout\">\n  <strong>Why this matters</strong>\n  <p>FOBs are meant to be useful, but not equal to the safety and permanence of the main faction core. Their value is forward projection, not permanent invulnerability.</p>\n</div>",
  "resources": [
    {
      "title": "Flags",
      "text": "FOB anchors and related flag-driven world behaviour.",
      "url": "#wgcore-flags",
      "label": "Open flags page"
    },
    {
      "title": "Control and decay",
      "text": "Why FOB territory is more fragile than main-core territory.",
      "url": "#wgcore-control",
      "label": "Open control page"
    },
    {
      "title": "War system",
      "text": "Where FOBs matter in broader faction conflict.",
      "url": "#wgcore-war",
      "label": "Open war page"
    }
  ],
  "videos": [],
  "history": [
    {
      "date": "2026-04-08",
      "text": "Added a dedicated FOB page documenting its distinct forward-base role and decay behaviour."
    }
  ]
};
