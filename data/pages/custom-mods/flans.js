window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["flans"] = {
  title: "Flan's Mod Plus Ultimate (Ultimate / Stability Edition)",
  summary: "The broader Flan's Mod Plus Ultimate foundation that FMUR and the Wargames Edition build upon.",
  version: "Reference / upstream foundation",
  releaseState: "Reference",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
<p><strong>Flan's Mod Plus Ultimate</strong>, often referred to in this stack as the <strong>Ultimate</strong> or <strong>Stability Edition</strong>, is the base platform that the later FMUR and Wargames work is built on.</p>

        <div class="callout">
          <strong>Documentation note</strong>
          <p>This page is the lineage and capability overview only. For wider upstream documentation, configuration notes, and content-pack oriented reference, use the upstream Flan's Mod Plus Ultimate wiki linked below.</p>
        </div>

        <h3>What the Ultimate/Stability Edition provides</h3>
        <ul>
          <li>A mature 1.7.10 Flan-based gun and ammunition framework</li>
          <li>Attachment-aware weapon behaviour, recoil, reload, spread, and aiming systems</li>
          <li>Driveables including aircraft, helicopters, and ground vehicles</li>
          <li>Content-pack support for weapons, ammo, attachments, vehicles, and related assets</li>
          <li>Broader client and gameplay systems such as muzzle flash, recoil, penetration-related behaviour, and vehicle weapon foundations</li>
        </ul>

        <h3>Why it matters in the Wargames stack</h3>
        <p>This is the technical base that later forks build upon. Wargames does not replace the Flan lineage entirely; it builds upward through FMUR and then adds a smaller Wargames-specific integration layer on top of that.</p>

        <h3>What this base does not do by itself</h3>
        <ul>
          <li>It is not territory-aware by default</li>
          <li>It does not understand WGCore safezones, claims, wars, or faction permissions</li>
          <li>Indirect damage attribution is not designed around an external protection authority</li>
          <li>Explosion and damage decisions are primarily local mod behaviour rather than centrally governed server rules</li>
        </ul>

        <h3>How to read the FMUR documentation section</h3>
        <ul>
          <li><strong>This page</strong> explains the upstream base</li>
          <li><strong>FMUR overview</strong> explains the later Reloaded / Reforged layer built on top of it</li>
          <li><strong>WGCore integration</strong> explains the smaller Wargames-specific changes added after FMUR</li>
        </ul>
  `.trim(),
  resources: [
    {
      title: "Upstream Flan's Mod Plus Ultimate wiki",
      text: "Reference for the broader base mod lineage and upstream documentation.",
      url: "https://github.com/Unknown025/Flans-Mod-Plus/wiki",
      label: "Open upstream wiki"
    },
    {
      title: "FMUR overview",
      text: "Read the next layer built on top of the Ultimate base.",
      url: "#fmur",
      label: "Open FMUR overview"
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
      date: "2026-04-07",
      text: "Expanded the Flan's base page into a proper upstream foundation page for the FMUR documentation chain."
    }
  ]
};
