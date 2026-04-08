window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["hitmarkerplus-installation"] = {
  title: "HitmarkerPlus installation & compatibility",
  summary: "What HitmarkerPlus depends on, where it is intended to run, and how it should be deployed in practice.",
  version: "HitmarkerPlus source audit",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>HitmarkerPlus is a standard Forge 1.7.10 mod with a small client-side presentation layer and a server-side hit detection hook. The uploaded source and README both target the same core environment.</p>

        <h3>Platform target</h3>
        <ul>
          <li><strong>Minecraft</strong> — 1.7.10</li>
          <li><strong>Forge</strong> — 10.13.4.1614</li>
          <li><strong>Java</strong> — Java 8 toolchain for source builds</li>
        </ul>

        <h3>Required dependency</h3>
        <p>The mod declaration marks <strong>Flan's Mod</strong> as a required dependency through <strong>required-after:flansmod</strong>. In the uploaded repository, a FMUR jar is also present in <strong>libs/</strong> for development context, which fits the mod's reliance on Flan bullet entities.</p>

        <h3>Client and server role</h3>
        <ul>
          <li><strong>Server</strong> — listens for living hurt events and sends the packet back to the shooter</li>
          <li><strong>Client</strong> — receives the packet, renders the overlay, and plays the sound</li>
        </ul>

        <p>Because the overlay and audio are client-side features, the full effect is only visible to clients that have the mod installed. The server side is still needed to detect valid bullet hits and send the trigger packet back to the shooter.</p>

        <h3>Practical deployment notes</h3>
        <ul>
          <li>Install the same mod jar in the normal <strong>mods</strong> folder used by the pack</li>
          <li>Keep Flan / FMUR versions aligned with the environment the mod was built against</li>
          <li>Expect the feature to apply only to Flan bullet damage, not to every damage path in the pack</li>
          <li>The audited source exposes no user-facing config file, so behaviour is effectively fixed unless the code is changed</li>
        </ul>

        <div class="callout">
          <strong>Compatibility boundary</strong>
          <p>HitmarkerPlus is tightly scoped. It is not a universal damage-feedback framework. In its current source state, it is intentionally tied to Flan bullet entities and does not try to cover melee, explosions, missiles, or other external weapon systems.</p>
        </div>
  `.trim(),
  resources: [
    {
      title: "Feedback behaviour",
      text: "See how hits are detected and what the player actually experiences.",
      url: "#hitmarkerplus-feedback",
      label: "Open feedback page"
    },
    {
      title: "Technical implementation",
      text: "Read the lower-level packet, proxy, and asset details.",
      url: "#hitmarkerplus-technical",
      label: "Open technical page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated setup page describing dependency requirements, client-server responsibilities, and deployment expectations."
    }
  ]
};
