window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgevents-gamemodes"] = {
  title: "WGEvents gamemodes",
  summary: "Source-backed gamemode coverage in WGEvents, including Team Deathmatch and Free-For-All.",
  version: "WGEvents 1.0.0 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
        <p>WGEvents uses an <code>IGameMode</code> interface and a small manager layer to delegate live-match behaviour to the active mode. The current source clearly contains two concrete modes: <strong>TDM</strong> and <strong>FFA</strong>.</p>

        <h3>Team Deathmatch</h3>
        <p><code>ModeTDM</code> is the team-based scoring mode currently visible in the source. It includes:</p>
        <ul>
          <li>Config-backed score limit, time limit, points-per-kill, and end delay</li>
          <li>Per-team score tracking</li>
          <li>Friendly-fire penalty support</li>
          <li>Time-expiry behaviour with optional accelerated ending</li>
          <li>Lead change, tie, match point, and winner broadcasts</li>
          <li>Debug/admin hooks for forced score changes and forced endings</li>
        </ul>

        <h3>Free-For-All</h3>
        <p><code>ModeFFA</code> tracks individual player kills rather than team score. The source shows:</p>
        <ul>
          <li>Config-backed kill limit, optional time limit, and end delay</li>
          <li>Per-player kill tracking by UUID</li>
          <li>Top-killer and viewer-specific status output</li>
          <li>Winner resolution on kill limit or time expiry</li>
          <li>Tie handling on time expiry</li>
          <li>Optional FFA-specific keepInventory handling</li>
          <li>Optional configured start-kit command support</li>
        </ul>

        <h3>Mode selection and persistence</h3>
        <p>The current mode is managed through <code>GameModeManager</code>. The admin command layer allows:</p>
        <ul>
          <li>Listing supported modes</li>
          <li>Changing the active mode</li>
          <li>Persisting per-world mode selection</li>
        </ul>

        <h3>Status output</h3>
        <p><code>MatchStatusFormatter</code> formats status differently based on the active mode:</p>
        <ul>
          <li><strong>FFA</strong> — time remaining, top killer, and the viewer’s current kills</li>
          <li><strong>TDM</strong> — time remaining plus a team score summary and current leader</li>
        </ul>

        <div class="callout">
          <strong>Current implementation note</strong>
          <p>The team registry can store more than two teams, but the active team-match logic documented in the source is still fundamentally a two-team flow. The current balancing and validation path uses the first two registered teams for match play.</p>
        </div>
      `,
  resources: [
    {
      title: "Match flow",
      text: "See how gamemodes slot into the live running phase.",
      url: "#wgevents-match-flow",
      label: "Open match flow page"
    },
    {
      title: "Teams & scoreboard control",
      text: "See how team-mode matches get their team data.",
      url: "#wgevents-teams",
      label: "Open team systems page"
    },
    {
      title: "WGEvents overview",
      text: "Return to the main WGEvents page.",
      url: "#wgevents",
      label: "Back to overview"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Split out TDM and FFA documentation into a dedicated gamemode page."
    }
  ]
};
