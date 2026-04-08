window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["ntm-space-server-impact"] = {
  title: "Server impact & use cases",
  summary: "Why HBM Space WDG Edition exists and what multiplayer problems it is intended to solve.",
  version: "HBM Space WDG Edition docs",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>This fork exists because large-scale HBM-style weapons are difficult to manage on structured multiplayer servers if they do not carry ownership and do not respect protected areas.</p>
        <h3>Problems this fork addresses</h3>
        <ul>
          <li>Anonymous explosives once placed or fired</li>
          <li>Long-range weapons bypassing territory rules on impact</li>
          <li>Protected bases being exposed to uncontrolled explosive block damage</li>
          <li>Radiation, contamination, and EMP effects crossing into protected space without filtering</li>
          <li>Turrets and launch systems lacking faction-aware behaviour</li>
        </ul>
        <h3>Where this matters most</h3>
        <ul>
          <li>Faction servers using claims or protected territory</li>
          <li>Event servers where powerful weapons need to remain usable but controlled</li>
          <li>Modpacks that want HBM Space systems without fully open-ended griefing</li>
          <li>Private multiplayer environments that need attribution and predictable conflict rules</li>
        </ul>
        <h3>Practical result</h3>
        <p>The goal is not to remove destructive weapons. It is to make them behave in a controlled, attributable, and protection-aware way so they can still exist inside a structured server environment.</p>
  `.trim(),
  resources: [
    {
      title: "HBM Space WDG Edition overview",
      text: "Return to the main fork overview.",
      url: "#ntm-space-wdg-overview",
      label: "Back to WDG overview"
    },
    {
      title: "Official HBM Space wiki",
      text: "Use this for standard base-mod progression and content reference.",
      url: "https://nucleartech.wiki/wiki/NTM:_Space",
      label: "Open official HBM Space wiki"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Added the HBM Space WDG Edition server impact and use-cases page."
    }
  ]
};
