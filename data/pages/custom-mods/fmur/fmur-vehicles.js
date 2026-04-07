window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["fmur-vehicles"] = {
  title: "FMUR vehicles & driveables",
  summary: "How vehicles fit into the FMUR lineage and how Wargames uses them.",
  version: "Gameplay reference",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
        <p>The broader Flan and FMUR lineage includes <strong>driveables</strong> such as aircraft and ground vehicles, along with supporting driveable inventory, fuel, seats, mounted weapons, and client-side vehicle presentation systems.</p>

        <h3>Vehicle role in the stack</h3>
        <ul>
          <li>The Flan/FMUR side supplies the driveable framework itself</li>
          <li>MCHeli remains the larger dedicated aircraft-heavy platform elsewhere in the Wargames stack</li>
          <li>FMUR still matters because it provides vehicle-capable behaviour inside the Flan-based combat branch</li>
        </ul>

        <h3>What the lineage already contributes</h3>
        <ul>
          <li>Driveable entities with seats and player-controlled operation</li>
          <li>Vehicle inventory and fuel-related systems</li>
          <li>Mounted-weapon and vehicle-crosshair style presentation</li>
          <li>A practical multiplayer vehicle framework inherited through the Flan branch and developed further in FMUR</li>
        </ul>

        <h3>What the Wargames layer changes</h3>
        <p>The Wargames Edition does not replace the driveable system, but it does ensure vehicle-caused harm cannot bypass server protection logic.</p>

        <ul>
          <li>Vehicle collision and roadkill-style damage is validated through WGCore</li>
          <li>Acting player resolution attempts to attribute vehicle-caused damage sensibly</li>
          <li>This prevents protected-area bypass simply because the damage came from a driveable interaction instead of a direct weapon hit</li>
        </ul>
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
      text: "Read how vehicle harm is checked against protection rules.",
      url: "#fmur-wgcore",
      label: "Open WGCore integration page"
    }
  ],
  videos: [],
  history: []
};
