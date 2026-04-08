window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["hitmarkerplus"] = {
  title: "HitmarkerPlus overview",
  summary: "A small original Wargames combat-feedback mod that sends a hitmarker overlay and sound back to the shooter when a Flan bullet lands.",
  version: "HitmarkerPlus source build 1.0.20_X2 context",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p><strong>HitmarkerPlus</strong> is a small original Wargames support mod for Forge 1.7.10. Its job is narrow but useful: when a player lands a valid hit with a Flan bullet, the shooter receives immediate local feedback through a short on-screen hitmarker and a matching sound.</p>

        <p>The uploaded source shows a deliberately lightweight design. The server watches for Flan bullet damage, identifies the shooter, and sends a tiny client packet back only to that player. The client then renders the overlay and plays the hitmarker sound locally.</p>

        <h3>What the mod changes</h3>
        <ul>
          <li>Adds direct hit-confirmation feedback for Flan bullet damage</li>
          <li>Sends feedback only to the shooter rather than broadcasting it globally</li>
          <li>Shows a centred hitmarker overlay with a short fade-out</li>
          <li>Plays a dedicated custom hitmarker sound, with a vanilla fallback if needed</li>
          <li>Keeps the implementation small and dependency-light apart from the required Flan mod dependency</li>
        </ul>

        <div class="callout">
          <strong>Design goal</strong>
          <p>HitmarkerPlus is not a content mod and it is not a weapon rebalance system. It is a presentation and combat-feedback support mod meant to make gunplay feel clearer and more responsive without changing weapon stats, armour values, or damage rules.</p>
        </div>

        <h3>How the section is split</h3>
        <ul>
          <li><strong>Overview</strong> — what the mod is for and the gameplay role it fills</li>
          <li><strong>Feedback behaviour</strong> — how hits are detected and what the player sees and hears</li>
          <li><strong>Installation &amp; compatibility</strong> — practical deployment notes for client and server</li>
          <li><strong>Technical implementation</strong> — event flow, packet path, overlay rendering, and assets</li>
        </ul>
  `.trim(),
  resources: [
    {
      title: "Feedback behaviour",
      text: "Detailed in-game behaviour for hit detection, overlay timing, and sound playback.",
      url: "#hitmarkerplus-feedback",
      label: "Open feedback page"
    },
    {
      title: "Installation & compatibility",
      text: "Deployment notes, dependency expectations, and practical setup guidance.",
      url: "#hitmarkerplus-installation",
      label: "Open installation page"
    },
    {
      title: "Technical implementation",
      text: "How the mod is built internally using a hurt-event hook, packet, proxy, and client overlay.",
      url: "#hitmarkerplus-technical",
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
      text: "Expanded HitmarkerPlus from a single short page into a proper multi-page section based on the uploaded source and README."
    }
  ]
};
