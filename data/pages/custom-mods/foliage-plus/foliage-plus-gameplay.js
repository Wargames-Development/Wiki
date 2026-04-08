window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["foliage-plus-gameplay"] = {
  title: "Foliage+ gameplay behaviour",
  summary: "How foliage movement, slowdown, and rustling behave during normal play.",
  version: "Foliage+ source audit",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
        <p>Foliage+ changes leaves from simple static blocks into interactive cover. The core gameplay loop is that foliage becomes easier to move through, but not free to abuse.</p>

        <h3>Pass-through leaves</h3>
        <p>The transformer hooks into Minecraft's block collision handling and can skip collision on leaf blocks. In practical terms, that means players can move through vanilla leaves instead of being stopped by them like a wall.</p>
        <ul>
          <li>Vanilla leaf blocks are the intended target</li>
          <li>The behaviour can be limited to players only</li>
          <li>Or it can be extended to all entities through config</li>
        </ul>

        <h3>Slowdown inside foliage</h3>
        <p>While an affected entity is inside leaves, Foliage+ applies a movement-speed attribute modifier. This is multiplicative rather than a one-off movement shove, so it behaves consistently while the entity remains inside foliage and is removed cleanly once they leave.</p>
        <ul>
          <li>The multiplier is configurable from <strong>0.01</strong> to <strong>1.00</strong></li>
          <li><strong>1.00</strong> means effectively no slowdown</li>
          <li>Flying players are excluded from the slowdown check</li>
          <li>When the mod is disabled or the entity is no longer in leaves, the modifier is removed</li>
        </ul>

        <h3>Rustling as an anti-stealth tradeoff</h3>
        <p>Client-side player tick handling plays a dedicated rustle sound while a player is moving through leaves. This makes foliage useful as concealment, but prevents it from becoming silent, consequence-free ambush cover.</p>
        <ul>
          <li>The sound only plays while the player is actually moving</li>
          <li>A short cooldown prevents constant sound spam every tick</li>
          <li>Pitch varies slightly for less repetition</li>
          <li>The sound is played slightly above the player to reduce harsh stereo panning</li>
          <li>The source assets include six rustle variants</li>
        </ul>

        <h3>Dense foliage / full-cover control</h3>
        <p>The <strong>allowFullCover</strong> option changes how two-high leaf columns behave for players. When full cover is disabled, the lower leaf block in a column with leaves directly above it stays solid. This stops players from becoming fully embedded inside dense bushes while still letting upper foliage act more like passable cover.</p>

        <div class="callout">
          <strong>Gameplay effect</strong>
          <p>This setup gives servers a middle ground between fully solid leaves and completely free bush movement. Players can use foliage as soft cover and concealment, but they cannot always hide fully inside it without restriction.</p>
        </div>
      `,
  resources: [
    {
      title: "Configuration",
      text: "See which settings control these gameplay behaviours.",
      url: "#foliage-plus-config",
      label: "Open configuration page"
    },
    {
      title: "Technical implementation",
      text: "Read how the collision and tick logic is implemented internally.",
      url: "#foliage-plus-technical",
      label: "Open technical page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated gameplay page describing movement, slowdown, sound, and dense-foliage behaviour." 
    }
  ]
};
