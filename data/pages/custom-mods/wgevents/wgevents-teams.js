window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgevents-teams"] = {
  title: "WGEvents team systems",
  summary: "Persistent team registry, team aliases, scoreboard integration, and balancing behaviour in WGEvents.",
  version: "WGEvents 1.0.0 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>WGEvents separates team identity, team assignment, and scoreboard representation into different layers so round logic stays clean.</p>

        <h3>Registry vs assignment</h3>
        <ul>
          <li><strong>TeamRegistryStore</strong> holds the persistent list of registered teams for a world</li>
          <li><strong>TeamStore</strong> stores which internal team a player UUID currently belongs to</li>
          <li><strong>TeamService</strong> applies balancing, scoreboard placement, and cleanup</li>
        </ul>

        <h3>Internal IDs and aliases</h3>
        <p>The current source uses stable internal team IDs and separate player-facing aliases:</p>
        <ul>
          <li>Registry IDs are generated and persisted per world</li>
          <li>Aliases are the human-readable names used in commands and documentation</li>
          <li>Default aliases come from config and fall back to <code>red</code> and <code>blue</code></li>
          <li>Spawn zones for team modes are keyed by alias, not by the hidden registry ID</li>
        </ul>

        <h3>Balancing behaviour</h3>
        <p><code>assignPlayerWithBalancing</code> currently performs a two-team balancing pass:</p>
        <ul>
          <li>If the player had a previous team and counts are even, WGEvents prefers to keep them there</li>
          <li>If one team is lacking players, WGEvents prefers the smaller side</li>
          <li>If counts are even and the player has no previous team, a team is chosen randomly</li>
        </ul>

        <h3>Scoreboard integration</h3>
        <p>WGEvents uses scoreboard teams with a <code>wge_</code> prefix. The service layer:</p>
        <ul>
          <li>Ensures WGEvents scoreboard teams exist</li>
          <li>Removes players from old WGEvents teams before reassignment</li>
          <li>Maps internal IDs to scoreboard team names</li>
          <li>Sets display names from aliases where possible</li>
          <li>Cleans up empty WGEvents scoreboard teams on match stop/reset</li>
        </ul>

        <h3>Team options exposed by commands</h3>
        <p>The admin command layer also exposes team option controls for the underlying scoreboard team:</p>
        <ul>
          <li><strong>friendlyfire</strong></li>
          <li><strong>seeFriendlyInvisibles</strong></li>
          <li><strong>color</strong></li>
        </ul>

        <h3>Lifecycle behaviour</h3>
        <ul>
          <li>Team assignments are created or refreshed when a match starts</li>
          <li>Late joiners are assigned through the same balancing path while a match is active</li>
          <li>Assignments and scoreboard state are fully cleared when the match stops</li>
        </ul>
  `.trim(),
  resources: [
    {
      title: "Spawns & idle lobby",
      text: "Team aliases also matter for team spawn configuration.",
      url: "#wgevents-spawns",
      label: "Open spawn systems page"
    },
    {
      title: "Gamemodes",
      text: "See how TDM uses the first two registered teams for scoring.",
      url: "#wgevents-gamemodes",
      label: "Open gamemodes page"
    },
    {
      title: "WGEvents overview",
      text: "Return to the WGEvents overview page.",
      url: "#wgevents",
      label: "Back to overview"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated page for registry teams, aliases, balancing, and scoreboard cleanup."
    }
  ]
};
