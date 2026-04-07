window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgevents"] = {
  title: "WGEvents",
  summary: "A separate Wargames mod focused on event automation, match flow, spawns, voting, and gamemode control.",
  version: "WGEvents source build X26 context",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: "\n        <p><strong>WGEvents</strong> is a separate Wargames mod aimed at event-style gameplay rather than the main survival territory stack. The uploaded source shows a structure built around match flow, spawn handling, voting, and gamemode logic.</p>\n        <h3>What is visible in the uploaded source</h3>\n        <ul>\n          <li><strong>Gamemode support</strong> through implementations such as <code>ModeFFA</code> and <code>ModeTDM</code></li>\n          <li><strong>Match flow</strong> through services and models such as <code>MatchState</code>, <code>MatchScore</code>, and <code>MatchStatusFormatter</code></li>\n          <li><strong>Spawn systems</strong> through <code>SpawnService</code>, <code>SpawnStore</code>, and <code>SpawnZone</code></li>\n          <li><strong>Voting systems</strong> through <code>VotingService</code></li>\n          <li><strong>Player-state handlers</strong> for things like combat lock, freeze behaviour, build lock, idle logic, and lifecycle management</li>\n        </ul>\n        <h3>What this means in practice</h3>\n        <p>WGEvents is not just a generic utility mod. It is a dedicated event-server framework for running controlled match-based gameplay with spawn logic, team or free-for-all modes, and server-side restrictions that help event rounds run cleanly.</p>\n        <div class=\"callout\">\n          <strong>How it differs from WGCore</strong>\n          <p>WGCore is the persistent territory and war backbone for the survival environment. WGEvents is a separate event-oriented system built around rounds, spawns, match states, and minigame-style automation.</p>\n        </div>\n      ",
  resources: [
    {
      title: "Custom mods index",
      text: "Return to the custom stack index page.",
      url: "#custom-mods",
      label: "Back to custom mods"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Replaced the hidden WGEvents placeholder with a real page based on the uploaded WGEvents source structure."
    }
  ]
};
