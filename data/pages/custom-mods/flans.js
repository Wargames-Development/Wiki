window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["flans"] = {
  title: "Flan's Mod (Ultimate / Stability Edition)",
  summary: "The base Flan's Mod Plus Ultimate lineage that FMUR and the Wargames Edition build upon.",
  version: "Flan's Mod Plus Ultimate",
  releaseState: "Reference",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
        <p><strong>Flan's Mod Plus Ultimate</strong> (often referred to as the Ultimate or Stability Edition) is the base platform that modern Flan-based combat mods are built on within the 1.7.10 ecosystem.</p>

        <h3>Core systems</h3>
        <ul>
          <li>Gun and attachment system with modular behaviour</li>
          <li>Driveable vehicles including planes, helicopters, and ground vehicles</li>
          <li>Content pack system allowing external weapons and vehicles</li>
          <li>Basic projectile, explosion, and damage handling</li>
        </ul>

        <h3>Limitations of the base</h3>
        <ul>
          <li>No built-in awareness of territory or protection systems</li>
          <li>Explosion and damage logic handled locally without global rule control</li>
          <li>Attribution of indirect damage sources is limited</li>
        </ul>

        <h3>Role in the Wargames stack</h3>
        <p>This version acts as the technical foundation. All later work (FMUR and WDG Edition) builds on top of this behaviour rather than replacing it entirely.</p>
      `,
  resources: [
    {
      title: "External wiki",
      text: "Full documentation for Flan's Mod Plus Ultimate.",
      url: "https://github.com/Unknown025/Flans-Mod-Plus/wiki",
      label: "Open upstream wiki"
    },
    {
      title: "FMUR",
      text: "Next evolution layer (Reforged / Reloaded).",
      url: "#fmur",
      label: "Open FMUR page"
    }
  ],
  videos: [],
  history: []
};
