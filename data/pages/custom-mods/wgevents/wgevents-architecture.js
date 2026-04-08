window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgevents-architecture"] = {
  title: "WGEvents architecture",
  summary: "Internal layout of WGEvents, including handlers, services, stores, configuration, and persistence.",
  version: "WGEvents 1.0.0 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
        <p>The WGEvents source is already structured in a way that is easy to document and maintain. The main code is split into clear domains rather than being folded into one large command class or event handler.</p>

        <h3>Main architectural layers</h3>
        <ul>
          <li><strong>command</strong> — admin and public command entrypoints</li>
          <li><strong>gamemode</strong> — mode interface plus concrete TDM and FFA implementations</li>
          <li><strong>handler</strong> — Forge/FML event listeners for combat lock, build lock, freeze, lifecycle, settings, and tick handling</li>
          <li><strong>service</strong> — join, respawn, death, freeze, and build-lock logic kept outside the handlers</li>
          <li><strong>match</strong> — state model, manager, status formatting, and frozen-player tracking</li>
          <li><strong>team</strong> — registry, runtime assignment store, and scoreboard service</li>
          <li><strong>spawn</strong> and <strong>spawnzone</strong> — team spawn data, FFA region sets, validation, and teleport logic</li>
          <li><strong>rewards</strong> and <strong>vote</strong> — server automation layers</li>
          <li><strong>config</strong> — config-backed toggles and settings persistence</li>
        </ul>

        <h3>Persistence model</h3>
        <p>The source uses multiple <code>WorldSavedData</code> stores rather than collapsing everything into a single blob. Visible persisted stores include:</p>
        <ul>
          <li><code>TeamRegistryStore</code></li>
          <li><code>TeamStore</code></li>
          <li><code>SpawnStore</code></li>
          <li><code>SpawnZoneGroupStore</code></li>
          <li><code>SettingsStore</code></li>
        </ul>

        <h3>Configuration model</h3>
        <p>WGEvents loads a dedicated config directory:</p>
        <ul>
          <li><code>config/wgevents/wgevents.cfg</code> for rule toggles and numeric settings</li>
          <li><code>config/wgevents/rewards.yml</code> for reward automation</li>
        </ul>

        <p>The config service is grouped into explicit categories covering:</p>
        <ul>
          <li>Global defaults</li>
          <li>Idle behaviour</li>
          <li>Spawn behaviour</li>
          <li>TDM settings</li>
          <li>FFA settings</li>
          <li>Reward switches</li>
          <li>Combat protection</li>
          <li>Voting</li>
        </ul>

        <h3>Handler vs service split</h3>
        <p>A useful pattern in the source is that the event handlers stay relatively narrow:</p>
        <ul>
          <li><strong>PlayerLifecycleHandler</strong> forwards login, respawn, and death into dedicated services</li>
          <li><strong>FreezeHandler</strong> focuses on event subscriptions while <code>FreezeService</code> owns the freeze logic</li>
          <li><strong>BuildLockHandler</strong> performs enforcement while <code>BuildLockService</code> owns the toggle/bypass state</li>
        </ul>

        <div class="callout">
          <strong>Why this matters for the wiki</strong>
          <p>WGEvents is one of your own mods, so documenting it as “just a plugin-like command set” would undersell it. The source already has a proper internal structure with persisted world data, stateful services, config layers, and separate automation systems.</p>
        </div>
      `,
  resources: [
    {
      title: "Commands",
      text: "See how the command layer maps onto the internal services and stores.",
      url: "#wgevents-commands",
      label: "Open commands page"
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
      text: "Added a dedicated technical architecture page covering handlers, services, stores, and config layout."
    }
  ]
};
