window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["home"] = {
  title: "Welcome to the Wargames Wiki",
  summary: "The front page gives players one clear endpoint for setup help, custom mod documentation, and live community links.",
  version: "Survival v2.0B",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>The Wargames wiki is the public reference point for the pack, the server, and the custom mods that make the experience work. This is still an early build of the documentation, but it now has a real structure instead of acting only as a placeholder landing page.</p>
        <div class="callout">
          <strong>What this wiki now covers</strong>
          <p>Launcher links, first-step guidance, a WGCore overview, a WGCore command reference, and a first-pass custom mod list for the Wargames-specific forks currently in development.</p>
        </div>
        <h3>What to read first</h3>
        <ul>
          <li><strong>Installation</strong> if you need the launcher links and pack entry points</li>
          <li><strong>First steps</strong> if you are new and want the short version of what to do after joining</li>
          <li><strong>Factions and war</strong> if you want the player-facing overview of how territory conflict works</li>
          <li><strong>WGCore overview</strong> if you want to understand the backbone system behind territory, protection, war, and server rules</li>
        </ul>
        <h3>How this site is meant to grow</h3>
        <ul>
          <li>Each page can show a visible update notice when it has fallen behind live gameplay</li>
          <li>Every page can include videos, links, and a visible page history section</li>
          <li>Navigation items can stay hidden until the related feature or guide is ready to publish</li>
          <li>The main logo can be replaced by swapping <code>assets/images/logo.png</code></li>
        </ul>
  `.trim(),
  resources: [
    {
      title: "Discord",
      text: "The main place for support, announcements, troubleshooting, and live clarification while the wiki is still being expanded.",
      url: "https://discord.gg/ZmCJDg8ev7",
      label: "Open Discord"
    },
    {
      title: "Technic pack page",
      text: "One of the public launcher entry points already linked in the site header.",
      url: "https://www.technicpack.net/modpack/wargames-release.1994291",
      label: "Open Technic page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Front page rewritten to reflect the real Wargames Survival wiki structure instead of the original generic placeholder text."
    }
  ]
};
