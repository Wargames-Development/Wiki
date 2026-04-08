window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["foliage-plus-technical"] = {
  title: "Foliage+ technical implementation",
  summary: "How Foliage+ is implemented internally using a combined mod and coremod approach.",
  version: "Foliage+ source audit",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
        <p>Although Foliage+ is small in scope, it is not implemented as a single event hack. The source uses a mixed standard-mod and coremod structure so collision handling can be altered at block level while movement and sound stay in ordinary tick-based logic.</p>

        <h3>Main components</h3>
        <ul>
          <li><strong>FoliagePlusMod</strong> — normal Forge mod entry point that loads config and registers handlers</li>
          <li><strong>FoliagePlusConfig</strong> — central configuration loader and synchroniser</li>
          <li><strong>FoliagePlusTickHandler</strong> — Forge/FML event handler for slowdown and client rustling</li>
          <li><strong>FoliagePlusHooks</strong> — shared hook methods used by both event code and ASM-injected collision logic</li>
          <li><strong>FoliagePlusCoreMod</strong> — IFMLLoadingPlugin entry point for the coremod side</li>
          <li><strong>FoliagePlusTransformer</strong> — ASM transformer that patches the Block collision method</li>
        </ul>

        <h3>Why a transformer is used</h3>
        <p>Pass-through leaves need to alter collision generation directly. To do that, the transformer targets Minecraft 1.7.10's <strong>Block</strong> class and patches the collision method used when collision boxes are added. It supports both obfuscated and deobfuscated naming patterns and inserts an early return when the custom hook says collision should be skipped.</p>

        <h3>Hook logic</h3>
        <p>The shared hook checks:</p>
        <ul>
          <li>whether the mod is enabled</li>
          <li>whether the block is actually a leaf block</li>
          <li>whether the current entity is allowed to ignore foliage collision</li>
          <li>whether the dense-foliage rule should keep the lower leaf block solid</li>
        </ul>

        <h3>Slowdown implementation</h3>
        <p>Movement slowdown is handled through the vanilla movement speed attribute using a fixed UUID-backed attribute modifier. That makes the modifier easy to update or remove without stacking duplicates, and it also ensures the effect is cleaned up whenever the entity leaves foliage or the feature is disabled.</p>

        <h3>Audio implementation</h3>
        <p>Rustling is handled client-side in the player tick event. The mod checks whether the player is in leaves and moving fast enough to matter, then plays a custom <strong>foliageplus:rustle</strong> sound with slight pitch variation. The resource pack side registers six rustle files through <strong>sounds.json</strong>.</p>

        <div class="callout">
          <strong>Packaging note</strong>
          <p>The project is intended to ship as a single combined mod and coremod jar placed in the normal <strong>mods</strong> folder. That matches the README guidance and the presence of the IFMLLoadingPlugin-based coremod entry point in the same source tree.</p>
        </div>

        <h3>Version context from the uploaded source</h3>
        <p>The uploaded Gradle properties identify the audited source state as <strong>1.0.0_X11</strong> on the <strong>release</strong> branch, with Forge 1.7.10 / 10.13.4.1614 targeting.</p>
      `,
  resources: [
    {
      title: "Overview",
      text: "Return to the main Foliage+ overview page.",
      url: "#foliage-plus",
      label: "Open overview"
    },
    {
      title: "Gameplay behaviour",
      text: "See how the technical pieces translate into player-facing behaviour.",
      url: "#foliage-plus-gameplay",
      label: "Open gameplay page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated technical page covering the mod, coremod, hooks, transformer, and sound setup." 
    }
  ]
};
