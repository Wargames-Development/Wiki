window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgevents-match-flow"] = {
  title: "WGEvents match flow",
  summary: "How WGEvents handles round states, player entry, countdown freeze, live play, and post-match reset.",
  version: "WGEvents 1.0.0 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
        <p>The event lifecycle is driven by <code>MatchManager</code> and a small, explicit state model:</p>

        <ul>
          <li><strong>IDLE</strong> — no event is running</li>
          <li><strong>LOBBY</strong> — a match has been prepared and players are frozen</li>
          <li><strong>COUNTDOWN</strong> — the match is still frozen, but the live start timer is running</li>
          <li><strong>RUNNING</strong> — the match is live and the active gamemode owns the round tick logic</li>
        </ul>

        <h3>Start flow</h3>
        <p>When an admin starts a match, WGEvents prepares the round in a controlled order:</p>
        <ul>
          <li>Resets temporary match reward state</li>
          <li>Clears old team memory from the previous round</li>
          <li>Optionally wipes inventories on entry into the match</li>
          <li>Assigns teams for team modes</li>
          <li>Teleports players to the correct spawn path for the active mode</li>
          <li>Anchors them for freeze enforcement</li>
          <li>Moves the server into <code>LOBBY</code></li>
        </ul>

        <h3>Countdown behaviour</h3>
        <p><code>/wge match begin &lt;seconds&gt;</code> moves the event into <code>COUNTDOWN</code>. During this phase:</p>
        <ul>
          <li>Players remain frozen through <code>FreezeService</code> and <code>FrozenPlayers</code></li>
          <li>Interaction and attack events are cancelled for frozen players</li>
          <li>Countdown messages are broadcast at sensible intervals</li>
          <li>Once the countdown expires, the match flips to <code>RUNNING</code> and freeze state is cleared</li>
        </ul>

        <h3>Late join and respawn handling</h3>
        <p>WGEvents has explicit service-layer handling for players joining or respawning while a match is active:</p>
        <ul>
          <li><strong>JoinService</strong> assigns teams for active team modes and teleports players to the active-mode spawn path</li>
          <li><strong>RespawnService</strong> overrides vanilla respawn placement and routes players back to the active-mode spawn path</li>
          <li>If the server is still in a frozen phase, late joiners and respawns are immediately re-anchored and frozen</li>
        </ul>

        <h3>Death routing</h3>
        <p><code>DeathService</code> resolves killers and forwards results into the active gamemode. The source shows support for:</p>
        <ul>
          <li>Direct player damage</li>
          <li>Indirect projectile damage</li>
          <li>Reflection-based shooter recovery for common projectile fields</li>
          <li>Flan's damage source handling without a hard compile dependency in the death-routing layer</li>
        </ul>

        <h3>Match stop/reset flow</h3>
        <p>When a round ends or is stopped manually, WGEvents performs a full reset back to the idle state:</p>
        <ul>
          <li>Lets the active gamemode clean up its runtime state</li>
          <li>Restores any FFA-only gamerule changes made by WGEvents</li>
          <li>Clears freeze state</li>
          <li>Clears team memory and removes WGEvents scoreboard teams</li>
          <li>Resets reward streak state</li>
          <li>Returns players to the idle destination if the idle feature is enabled</li>
          <li>Optionally wipes inventory on return to idle</li>
          <li>Optionally opens the next public vote window</li>
        </ul>

        <div class="callout">
          <strong>Important design point</strong>
          <p>WGEvents does not treat “match running” as a loose flag. The state machine is small but deliberate, and several protection systems use those exact states to decide whether players can move, fight, build, vote, or be teleported.</p>
        </div>
      `,
  resources: [
    {
      title: "WGEvents overview",
      text: "Return to the WGEvents overview page.",
      url: "#wgevents",
      label: "Back to overview"
    },
    {
      title: "Gamemodes",
      text: "See how TDM and FFA use the running phase differently.",
      url: "#wgevents-gamemodes",
      label: "Open gamemodes page"
    },
    {
      title: "Spawns & idle lobby",
      text: "See how join, respawn, and idle placement are configured.",
      url: "#wgevents-spawns",
      label: "Open spawn systems page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added full documentation for the state-driven match lifecycle and post-match reset flow."
    }
  ]
};
