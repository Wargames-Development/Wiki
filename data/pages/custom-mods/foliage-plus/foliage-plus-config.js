window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["foliage-plus-config"] = {
  title: "Foliage+ configuration",
  summary: "Server and client settings exposed by the mod and what they change.",
  version: "Foliage+ source audit",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>Foliage+ stores its settings in a Forge configuration file at <strong>/config/foliage-plus/foliage-plus.cfg</strong>. The config is small, but each option directly changes how foliage behaves in play.</p>

        <h3>Available settings</h3>
        <ul>
          <li><strong>enabled</strong> — master toggle for the mod. When disabled, leaves behave normally and any leftover slowdown modifier is removed on update.</li>
          <li><strong>speedMultiplier</strong> — movement multiplier used while an affected entity is inside leaves. Valid range is <strong>0.01</strong> to <strong>1.00</strong>.</li>
          <li><strong>allowFullCover</strong> — controls whether players can be fully covered by leaves. When set to false, the lower block of a two-high leaf column keeps collision.</li>
          <li><strong>affectAllEntities</strong> — when true, the pass-through logic applies to all entities; when false, it is limited to players.</li>
        </ul>

        <h3>Recommended usage patterns</h3>
        <ul>
          <li><strong>Combat-focused servers</strong> usually benefit from <strong>players-only</strong> behaviour so foliage is a player movement and concealment system rather than a general mob-pathing change.</li>
          <li><strong>Lower speedMultiplier values</strong> make bushes feel dense and costly to push through.</li>
          <li><strong>Disabling full cover</strong> is useful if you want foliage concealment without allowing players to bury themselves deeply inside leaf blocks.</li>
          <li><strong>Leaving speedMultiplier near 1.00</strong> keeps pass-through movement but removes most of the movement penalty.</li>
        </ul>

        <h3>Operational notes</h3>
        <p>The config is loaded during pre-initialisation and then pushed into the hook layer through a config snapshot. In this source state, the snapshot application is done at startup, so the intended workflow is to configure the mod through the config file and restart normally rather than expecting live in-session config hot-reload behaviour.</p>

        <div class="callout">
          <strong>Practical tuning</strong>
          <p>If the goal is to make foliage usable but not abusable, a moderate slowdown combined with rustling and <strong>allowFullCover=false</strong> gives the clearest tradeoff.</p>
        </div>
  `.trim(),
  resources: [
    {
      title: "Gameplay behaviour",
      text: "See how the config options show up in actual play.",
      url: "#foliage-plus-gameplay",
      label: "Open gameplay page"
    },
    {
      title: "Technical implementation",
      text: "Read how config values are consumed by the transformer hook and tick logic.",
      url: "#foliage-plus-technical",
      label: "Open technical page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated configuration page based on FoliagePlusConfig and the uploaded README."
    }
  ]
};
