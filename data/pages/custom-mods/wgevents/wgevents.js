window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgevents"] = {
  title: "WGEvents",
  summary: "A Wargames-developed event framework for automated matches, controlled spawns, voting, rewards, and round-state enforcement.",
  version: "WGEvents 1.0.0 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p><strong>WGEvents</strong> is a Wargames-developed event-server mod built around structured, server-controlled match flow rather than persistent survival progression. The uploaded source shows a complete event framework with match states, late-join handling, controlled respawns, team balancing, FFA support, voting, rewards, and idle-lobby enforcement.</p>

        <h3>What WGEvents is for</h3>
        <ul>
          <li>Running repeatable event rounds with a clear start, countdown, live phase, and stop/reset flow</li>
          <li>Supporting both <strong>team-based</strong> and <strong>free-for-all</strong> match types in the same mod</li>
          <li>Controlling where players spawn, how respawns work, and how idle/lobby behaviour is enforced</li>
          <li>Providing public match status and public voting without exposing the admin command layer</li>
          <li>Supporting server automation through config-driven rules and YAML-based rewards</li>
        </ul>

        <h3>Core systems visible in the source</h3>
        <ul>
          <li><strong>Match lifecycle</strong> built around <code>IDLE</code>, <code>LOBBY</code>, <code>COUNTDOWN</code>, and <code>RUNNING</code></li>
          <li><strong>Gamemodes</strong> with concrete implementations for <code>TDM</code> and <code>FFA</code></li>
          <li><strong>Team handling</strong> with persistent registry data, aliases, balancing, scoreboard integration, and team options</li>
          <li><strong>Spawn systems</strong> for both team zones and FFA region sets, including safe-surface checks and spacing rules</li>
          <li><strong>Idle-lobby control</strong> with optional inventory wipes, protection snap-back, and worldspawn or custom idle-zone return</li>
          <li><strong>Rewards</strong> using <code>config/wgevents/rewards.yml</code> with commands, broadcasts, thresholds, and placeholders</li>
          <li><strong>Public voting</strong> for the next match mode while the server is idle</li>
          <li><strong>Command split</strong> between admin-only <code>/wge</code> and public <code>/wg</code></li>
        </ul>

        <div class="callout">
          <strong>How it differs from WGCore</strong>
          <p>WGCore is the persistent survival backbone for factions, land, protection, war, and integrations. WGEvents is a separate round-based event framework focused on temporary matches, controlled spawns, score rules, and event-server administration.</p>
        </div>

        <h3>What the current source shows clearly</h3>
        <p>This is not just a placeholder admin utility. The reviewed source already includes the full shape of an event platform: countdown freeze control, protected pre-match states, active-match scoring, post-match return to idle, public voting, config-backed rule tuning, and persistent per-world stores for teams, spawn data, and event settings.</p>
  `.trim(),
  resources: [
    {
      title: "Match flow & round states",
      text: "How WGEvents moves from idle to lobby, countdown, running, and back again.",
      url: "#wgevents-match-flow",
      label: "Open match flow page"
    },
    {
      title: "Gamemodes",
      text: "Current source-backed gamemode coverage for TDM and FFA.",
      url: "#wgevents-gamemodes",
      label: "Open gamemodes page"
    },
    {
      title: "Teams & scoreboard control",
      text: "Registry teams, aliases, balancing, and team options.",
      url: "#wgevents-teams",
      label: "Open team systems page"
    },
    {
      title: "Spawns, spawnzones & idle lobby",
      text: "How match spawns and idle destinations are configured and enforced.",
      url: "#wgevents-spawns",
      label: "Open spawn systems page"
    },
    {
      title: "Rewards & voting",
      text: "Server-side rewards and public next-match voting.",
      url: "#wgevents-rewards",
      label: "Open rewards page"
    },
    {
      title: "Commands & architecture",
      text: "Admin/public command structure and internal code layout.",
      url: "#wgevents-commands",
      label: "Open commands page"
    },
    {
      title: "Technical architecture",
      text: "Handlers, services, stores, and persistence layout.",
      url: "#wgevents-architecture",
      label: "Open architecture page"
    },
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
      date: "2026-04-08",
      text: "Expanded WGEvents from a single placeholder overview into a full multi-page source-backed wiki section."
    }
  ]
};
