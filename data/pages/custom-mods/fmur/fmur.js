window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["fmur"] = {
  title: "Flan's Mod Ultimate-R (FMUR & Wargames Edition)",
  summary: "Layered overview of FMUR (Reforged/Reloaded) and the Wargames Edition built on top.",
  version: "FMUR + WDG",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
        <h3>Layered structure</h3>
        <p>This mod exists as a layered evolution rather than a single standalone system:</p>
        <ul>
          <li><strong>Flan's Mod Plus Ultimate</strong> — base platform</li>
          <li><strong>FMUR (Reloaded / Reforged)</strong> — stability, fixes, and combat improvements</li>
          <li><strong>Wargames Edition</strong> — integration into WGCore and multiplayer rule systems</li>
        </ul>

        <h3>FMUR (Reloaded / Reforged layer)</h3>
        <p>The FMUR layer introduces major improvements over the base Flan's Mod platform:</p>
        <ul>
          <li>Improved gun handling and recoil systems</li>
          <li>More stable networking and entity behaviour</li>
          <li>Better vehicle handling and synchronization</li>
          <li>General bug fixes and performance improvements</li>
        </ul>

        <h3>Wargames Edition layer</h3>
        <p>The Wargames Edition builds on FMUR and focuses specifically on integration with WGCore.</p>

        <h4>WGCore integration</h4>
        <ul>
          <li>Central integration layer via <code>com.flansmod.common.wgc.Integrations</code></li>
          <li>All damage routed through WGCore validation</li>
          <li>Explosion decisions handled by WGCore</li>
        </ul>

        <h4>Combat behaviour</h4>
        <ul>
          <li>Bullet damage respects territory protection</li>
          <li>Melee damage follows the same validation path</li>
          <li>Grenade and flash effects are permission-checked</li>
        </ul>

        <h4>Explosion system</h4>
        <ul>
          <li>Explosion attribution added</li>
          <li>Terrain damage controlled per territory rules</li>
          <li>Entity damage validated per-target</li>
        </ul>

        <h4>Vehicle interaction</h4>
        <ul>
          <li>Collision damage validated through WGCore</li>
          <li>Prevents bypass of protection systems</li>
        </ul>

        <h4>Technical fixes</h4>
        <ul>
          <li>Cross-platform player stats handling fix</li>
          <li>Legacy stats migration support</li>
        </ul>

        <h3>Summary</h3>
        <p>The Wargames Edition does not replace FMUR functionality, but ensures it behaves correctly within a protected, territory-based multiplayer environment.</p>
      `,
  resources: [
    {
      title: "Base Flan's Mod",
      text: "Understand the base system.",
      url: "#flans",
      label: "Open Flan's Mod page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Rewritten to reflect layered architecture: Flan's base → FMUR → WDG Edition."
    }
  ]
};
