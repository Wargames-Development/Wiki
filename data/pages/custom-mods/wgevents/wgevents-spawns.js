window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgevents-spawns"] = {
  title: "WGEvents spawns and idle lobby",
  summary: "Team spawn zones, FFA spawnzone sets, safe spawn searching, idle destinations, and respawn routing.",
  version: "WGEvents 1.0.0 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>WGEvents has two different spawn systems in the current source: one for team modes and one for FFA. On top of that, it has a separate idle destination system used whenever no match is running.</p>

        <h3>Team-mode spawn zones</h3>
        <p><code>SpawnStore</code> stores a <code>SpawnZone</code> per team alias. Each zone can store:</p>
        <ul>
          <li><strong>pos1</strong> and <strong>pos2</strong> corners</li>
          <li><strong>yaw/pitch direction</strong></li>
          <li>Dimension information</li>
        </ul>

        <p>For team modes, a valid spawn zone is expected to have <code>pos1</code>, <code>pos2</code>, and <code>dir</code>. The source also preserves backwards-compatible handling for older saves where Y values were not fully configured.</p>

        <h3>FFA spawnzone sets</h3>
        <p>FFA uses <code>SpawnZoneGroupStore</code> instead of the team alias store. A set can contain multiple rectangular regions, allowing one named FFA spawn set to be made up of several valid areas.</p>

        <p>The admin command layer supports:</p>
        <ul>
          <li>Creating named sets</li>
          <li>Recording pending <code>pos1</code> and <code>pos2</code> corners</li>
          <li>Adding a region into the set</li>
          <li>Listing regions</li>
          <li>Deleting single regions or a whole set</li>
        </ul>

        <h3>Safe spawn selection</h3>
        <p><code>SpawnService</code> does more than raw teleporting. The current source shows a real safety pipeline:</p>
        <ul>
          <li>Searches for safe surfaces inside the chosen region</li>
          <li>Checks body space before accepting a position</li>
          <li>Rejects forbidden blocks and unsafe body placement</li>
          <li>Tracks recent spawns to avoid repeatedly stacking players too close together</li>
          <li>Checks distance from other nearby players</li>
        </ul>

        <h3>Validation before match start</h3>
        <p><code>SpawnValidation</code> is used to make sure required spawn data exists before a round starts:</p>
        <ul>
          <li>Team modes validate the first two registered team aliases</li>
          <li>FFA validates the default or chosen spawnzone set and its regions</li>
          <li>Validation includes structure checks and loaded-dimension checks</li>
        </ul>

        <h3>Idle destination system</h3>
        <p>When WGEvents is in <code>IDLE</code>, players can be routed to either:</p>
        <ul>
          <li><strong>World spawn</strong>, or</li>
          <li>A configured <strong>idle zone</strong></li>
        </ul>

        <p>The source also shows optional idle behaviour controls:</p>
        <ul>
          <li>Idle protection snap-back enforcement while no match is running</li>
          <li>Optional idle inventory wipe</li>
          <li>Optional match-entry inventory wipe</li>
          <li>Optional OP whitelist bypass for idle protection and wipe rules</li>
        </ul>

        <div class="callout">
          <strong>Important split</strong>
          <p>Team spawn zones and FFA spawnzone sets are not the same storage path. Team modes key off team aliases, while FFA keys off a named set of one or more regions.</p>
        </div>
  `.trim(),
  resources: [
    {
      title: "Match flow",
      text: "See how start, join, respawn, and stop use these spawn systems.",
      url: "#wgevents-match-flow",
      label: "Open match flow page"
    },
    {
      title: "Teams & scoreboard control",
      text: "Team alias configuration affects team spawn setup.",
      url: "#wgevents-teams",
      label: "Open team systems page"
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
      text: "Added dedicated documentation for team spawns, FFA region sets, safe spawn checks, and the idle lobby path."
    }
  ]
};
