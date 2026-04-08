window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["installation"] = {
  title: "Installation",
  summary: "A launcher-first setup page for players who just need to get the pack installed and opened.",
  version: "Survival v2.0B",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
<p>Wargames Survival is currently distributed through public launcher pages. This page is intentionally short and practical so new players can get into the pack quickly.</p>
        <h3>Recommended setup flow</h3>
        <ol>
          <li>Open the Wargames modpack page on your preferred launcher.</li>
          <li>Install the pack and let the launcher finish downloading all required files.</li>
          <li>Launch the pack once so it can build its local profile and config folders.</li>
          <li>Join the community Discord if you need live help, server details, or troubleshooting.</li>
        </ol>
        <h3>Before you ask for support</h3>
        <ul>
          <li>Make sure you are launching the current published Wargames pack version</li>
          <li>Allow the launcher to complete the full first-time download before closing it</li>
          <li>Keep your crash log or error message ready if you need help in Discord</li>
        </ul>
        <div class="callout">
          <strong>Note</strong>
          <p>This page avoids hardcoding system requirements that may change. If RAM guidance or Java guidance changes later, update this page and add a history entry instead of burying the information in announcements.</p>
        </div>
  `.trim(),
  resources: [
    {
      title: "Technic",
      text: "Primary public pack entry shown on the current site header.",
      url: "https://www.technicpack.net/modpack/wargames-release.1994291",
      label: "Open Technic"
    },
    {
      title: "CurseForge",
      text: "Secondary public pack entry shown on the current site header.",
      url: "https://www.curseforge.com/minecraft/modpacks/wargames-official",
      label: "Open CurseForge"
    },
    {
      title: "Discord support",
      text: "Use this if something goes wrong during setup or first launch.",
      url: "https://discord.gg/ZmCJDg8ev7",
      label: "Open Discord"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Installation page rewritten around the live pack entry points instead of placeholder example text."
    }
  ]
};
