window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["fmur"] = {
  title: "Flan's Mod Ultimate-R overview",
  summary: "How FMUR fits between the Flan's Ultimate base and the Wargames Edition changes.",
  version: "FMUR / Reloaded-Reforged lineage",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: `
        <p><strong>Flan's Mod Ultimate-R</strong> is the intermediate layer between the broader Flan's Mod Plus Ultimate foundation and the smaller Wargames-specific changes used on top of it.</p>

        <h3>Lineage</h3>
        <ul>
          <li><strong>Flan's Mod Plus Ultimate</strong> provides the main technical base</li>
          <li><strong>FMUR</strong> builds on that base with broader gameplay, stability, and presentation work</li>
          <li><strong>Flan's Mod Ultimate-R Wargames Edition</strong> adds WGCore integration and a smaller set of project-specific fixes and presentation changes</li>
        </ul>

        <h3>What FMUR contributes as a separate layer</h3>
        <p>Within the Wargames documentation chain, FMUR should be treated as the major middle layer rather than as a thin rename. It carries forward the Flan-based weapons-and-driveables foundation while adding further work around gun behaviour, vehicle handling, and general mod usability.</p>

        <ul>
          <li>Further developed infantry gameplay on top of the Flan foundation</li>
          <li>Continued work around recoil, reload, attachments, and weapon feel</li>
          <li>Ongoing driveable and multiplayer behaviour improvements</li>
          <li>General technical cleanup and practical improvements compared with older Flan-based branches</li>
        </ul>

        <div class="callout">
          <strong>Important</strong>
          <p>The Wargames Edition is not documented here as if it replaced the whole mod. Most of what players experience still comes from the Flan Ultimate base and the FMUR layer above it. The Wargames-specific layer is comparatively smaller and is documented separately in the WGCore integration and technical changes pages.</p>
        </div>

        <h3>How this section is split</h3>
        <ul>
          <li><strong>Base foundation</strong> — what the Ultimate / Stability Edition contributes</li>
          <li><strong>Combat systems</strong> — infantry weapon behaviour and gameplay-facing systems</li>
          <li><strong>Vehicles & driveables</strong> — vehicle role, handling, and driveable context</li>
          <li><strong>WGCore integration</strong> — the Wargames-specific protection and rule layer</li>
          <li><strong>Technical & presentation changes</strong> — stats handling, localisation, branding, and packaging</li>
        </ul>
      `,
  resources: [
    {
      title: "Flan's Ultimate base page",
      text: "Read the upstream foundation page first.",
      url: "#flans",
      label: "Open base page"
    },
    {
      title: "Combat systems",
      text: "Gameplay-facing notes for weapons, recoil, reloads, and attachments.",
      url: "#fmur-combat",
      label: "Open combat page"
    },
    {
      title: "Vehicles & driveables",
      text: "How the FMUR branch fits into the Wargames vehicle stack.",
      url: "#fmur-vehicles",
      label: "Open vehicles page"
    },
    {
      title: "WGCore integration",
      text: "Wargames-specific protection, damage, and explosion integration.",
      url: "#fmur-wgcore",
      label: "Open WGCore integration page"
    },
    {
      title: "Technical & presentation changes",
      text: "Stats handling, language cleanup, and Wargames branding.",
      url: "#fmur-systems",
      label: "Open systems page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Split the FMUR documentation path into a fuller multi-page section instead of a single overview page."
    }
  ]
};
