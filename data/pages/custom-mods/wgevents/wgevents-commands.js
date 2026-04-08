window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgevents-commands"] = {
  title: "WGEvents commands",
  summary: "Admin and public command structure in WGEvents.",
  version: "WGEvents 1.0.0 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
        <p>WGEvents deliberately separates commands into two layers:</p>
        <ul>
          <li><strong>/wge</strong> or <strong>/wgevents</strong> — admin-only control surface</li>
          <li><strong>/wg</strong> — public player-facing status and vote surface</li>
        </ul>

        <h3>Public command path</h3>
        <p>The public command entrypoint is intentionally small and safe. The reviewed source exposes:</p>
        <ul>
          <li><code>/wg help</code></li>
          <li><code>/wg status</code></li>
          <li><code>/wg stats</code></li>
          <li><code>/wg leaderboard</code></li>
          <li><code>/wg vote list</code></li>
          <li><code>/wg vote &lt;gamemode&gt;</code></li>
        </ul>

        <h3>Admin command groups</h3>
        <p><code>CommandWGE</code> is much broader and already has organised help output in the source. The main groups are:</p>
        <ul>
          <li><strong>General</strong> — help, mode switching, match start/begin/stop/status, rebalance, reload</li>
          <li><strong>Team modes</strong> — list, dump, add, delete, rename, team options, force move, team spawn setup</li>
          <li><strong>FFA spawnzones</strong> — create/list/add/delete region sets</li>
          <li><strong>Idle lobby</strong> — idle destination, idle zone corners, direction, and config toggles</li>
          <li><strong>TDM debug tools</strong> — score injection, forced time expiry, forced end</li>
          <li><strong>FFA debug tools</strong> — kill injection, forced time expiry, forced end</li>
        </ul>

        <h3>Build and combat controls</h3>
        <p>Separate from mode logic, the command surface also exposes operational controls such as:</p>
        <ul>
          <li><strong>buildlock</strong> — globally blocks break/place when enabled</li>
          <li><strong>buildlock bypass</strong> — explicit bypass for selected admins or operators</li>
          <li><strong>idle protection</strong>, <strong>wipeidle</strong>, <strong>wipematch</strong>, and <strong>whitelist</strong> config toggles</li>
        </ul>

        <h3>Why the split matters</h3>
        <p>This separation keeps event administration powerful without making the public player command path noisy or risky. Players can see status and vote; admins control event structure, spawns, and technical toggles through a separate namespaced command.</p>
      `,
  resources: [
    {
      title: "Rewards & voting",
      text: "See how the public vote commands fit into the idle-state voting system.",
      url: "#wgevents-rewards",
      label: "Open rewards page"
    },
    {
      title: "Technical architecture",
      text: "See how commands stay thin by delegating to handlers, services, and stores.",
      url: "#wgevents-architecture",
      label: "Open architecture page"
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
      text: "Documented the split between public /wg usage and the admin /wge command surface."
    }
  ]
};
