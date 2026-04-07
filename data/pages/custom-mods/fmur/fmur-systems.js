window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["fmur-systems"] = {
  title: "FMUR technical & presentation changes",
  summary: "Smaller Wargames-specific fixes, localisation cleanup, and packaged identity changes.",
  version: "WDG-specific systems",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
        <p>Beyond the WGCore combat-rule layer, the Wargames Edition also carries a smaller set of practical fixes and cleanup work.</p>

        <h3>Cross-platform player stats handling</h3>
        <ul>
          <li>Player statistics file handling has been corrected for safer cross-platform and dedicated-server use</li>
          <li>Legacy or historically inconsistent stats paths are detected and migrated</li>
          <li>This reduces path problems when running in Linux-style server environments instead of relying on Windows-oriented assumptions</li>
        </ul>

        <h3>Language and interface cleanup</h3>
        <ul>
          <li>English text has been cleaned up across keybinds, menus, HUD labels, and tooltips</li>
          <li>Weapon, ammo, and grenade-facing text reads more clearly than older mixed-language UI fragments</li>
          <li>This is mainly a usability and polish pass rather than a gameplay rewrite</li>
        </ul>

        <h3>Packaged identity changes</h3>
        <ul>
          <li>Metadata has been updated to package the mod as <strong>Flan's Mod Ultimate-R Wargames Edition</strong></li>
          <li>Branding, descriptions, project URLs, and visible presentation have been adjusted to match the Wargames stack</li>
          <li>These changes affect how the mod is shipped and identified, not just the code internals</li>
        </ul>

        <h3>How to think about this page</h3>
        <p>This page is the <strong>smallest layer</strong> in the overall chain, but it is still useful because it documents the project-specific parts that are neither broad upstream FMUR behaviour nor direct WGCore damage protection logic.</p>
      `,
  resources: [
    {
      title: "FMUR overview",
      text: "Return to the main FMUR lineage page.",
      url: "#fmur",
      label: "Back to overview"
    },
    {
      title: "WGCore integration",
      text: "Open the Wargames-specific protection layer page.",
      url: "#fmur-wgcore",
      label: "Open WGCore integration page"
    }
  ],
  videos: [],
  history: []
};
