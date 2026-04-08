window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["foliage-plus"] = {
  title: "Foliage+ overview",
  summary: "A small Wargames-made support mod that turns leaves into usable concealment with movement, slowdown, and audio tradeoffs.",
  version: "Foliage+ source build 1.0.0_X11 context",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p><strong>Foliage+</strong> is a small original Wargames support mod for Forge 1.7.10. Its purpose is simple: leaf blocks should behave more like dense foliage and less like hard terrain.</p>

        <p>Instead of treating leaves only as visual decoration or awkward solid collision, the mod allows controlled movement through them, optional slowdown while inside them, and loud rustling audio so concealment still carries a gameplay cost.</p>

        <h3>What the mod changes</h3>
        <ul>
          <li>Leaf blocks can become pass-through instead of fully solid</li>
          <li>Entities inside leaves can receive a configurable movement-speed penalty</li>
          <li>Players moving through leaves trigger a dedicated rustle sound set</li>
          <li>Servers can choose whether the behaviour applies to players only or to all entities</li>
          <li>A dense-foliage option can stop players from being fully buried inside two-high leaf columns</li>
        </ul>

        <div class="callout">
          <strong>Design goal</strong>
          <p>Foliage+ is not a decorative content mod. It is a gameplay-support mod aimed at combat and movement balance, especially where bushes, trees, and natural cover would otherwise act like either hard walls or silent hiding spots.</p>
        </div>

        <h3>How the section is split</h3>
        <ul>
          <li><strong>Overview</strong> — what the mod is for and what it changes</li>
          <li><strong>Gameplay behaviour</strong> — how pass-through leaves, slowdown, and rustling work in practice</li>
          <li><strong>Configuration</strong> — server options and gameplay tuning controls</li>
          <li><strong>Technical implementation</strong> — how the mod uses a coremod transformer, hooks, and tick handlers</li>
        </ul>
  `.trim(),
  resources: [
    {
      title: "Gameplay behaviour",
      text: "Detailed in-game behaviour for pass-through leaves, slowdown, and rustling.",
      url: "#foliage-plus-gameplay",
      label: "Open gameplay page"
    },
    {
      title: "Configuration",
      text: "Server-facing settings and what each one changes.",
      url: "#foliage-plus-config",
      label: "Open configuration page"
    },
    {
      title: "Technical implementation",
      text: "How the mod is built internally using hooks, events, and an ASM transformer.",
      url: "#foliage-plus-technical",
      label: "Open technical page"
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
      text: "Expanded Foliage+ from a single short page into a proper multi-page section based on the uploaded source and README."
    }
  ]
};
