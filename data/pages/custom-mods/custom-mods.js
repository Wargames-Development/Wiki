window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["custom-mods"] = {
  title: "Custom mods and forks",
  summary: "An index page for the Wargames-specific mods and forks currently represented in the uploaded source archives.",
  version: "Documentation pass 3",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
<p>Wargames relies on a custom code stack, not just a normal public modpack list. The mods below are the Wargames-specific projects and forks currently represented in the uploaded source archives.</p>
        <h3>Custom stack now split into individual wiki pages</h3>
        <ul>
          <li><strong>WGCore</strong> — the faction, territory, war, protection, and integration backbone</li>
          <li><strong>WGEvents</strong> — a separate event-server mod for match flow, spawns, voting, and gamemode automation</li>
          <li><strong>MCHeli-R Wargames Edition</strong> — the Wargames vehicle and aircraft fork built from MCHeli-Reforged</li>
          <li><strong>Flan's Mod Ultimate-R Wargames Edition</strong> — the Wargames Flan lineage section, now split into a base Flan foundation page plus dedicated FMUR subpages</li>
          <li><strong>HBM Space WDG Edition</strong> — a systems-focused fork of the HBM Space branch with ownership tracking, protection-aware weapons, and missile behaviour improvements</li>
          <li><strong>Foliage+</strong> — an original Wargames support mod that turns leaves into interactive foliage with pass-through movement, slowdown, and rustling tradeoffs</li>
          <li><strong>HitmarkerPlus</strong> — a lightweight combat feedback support mod for Flan-based weapon damage, now split into overview, behaviour, setup, and technical pages</li>
        </ul>
        <div class="callout">
          <strong>Documentation note</strong>
          <p>The HBM Space fork now has a general overview page and several focused subpages so the WDG-specific changes are documented separately from the base HBM Space progression and content.</p>
        </div>
  `.trim(),
  resources: [
    {
      title: "WGCore",
      text: "The main Wargames backbone mod.",
      url: "#wgcore",
      label: "Open WGCore page"
    },
    {
      title: "WGEvents",
      text: "The separate Wargames event-server mod.",
      url: "#wgevents",
      label: "Open WGEvents page"
    },
    {
      title: "MCHeli-R Wargames Edition",
      text: "The Wargames vehicle and aircraft fork.",
      url: "#mcheli",
      label: "Open MCHeli page"
    },
    {
      title: "Flan's Mod Plus Ultimate",
      text: "The upstream Flan foundation page used for the FMUR documentation chain.",
      url: "#flans",
      label: "Open base page"
    },
    {
      title: "Flan's Mod Ultimate-R overview",
      text: "The Wargames FMUR lineage overview page.",
      url: "#fmur",
      label: "Open FMUR overview"
    },
    {
      title: "NTM: Space overview",
      text: "The general HBM Space branch overview and external wiki reference.",
      url: "#ntm-space",
      label: "Open NTM: Space overview"
    },
    {
      title: "HBM Space WDG Edition overview",
      text: "The WDG-specific fork overview page.",
      url: "#ntm-space-wdg-overview",
      label: "Open WDG overview"
    },
    {
      title: "Protection & ownership system",
      text: "How ownership and protection affect explosives, missiles, and turrets.",
      url: "#ntm-space-protection",
      label: "Open protection page"
    },
    {
      title: "Weapon & missile changes",
      text: "Gameplay-facing missile and weapon behaviour changes.",
      url: "#ntm-space-weapons",
      label: "Open weapon changes page"
    },
    {
      title: "Server impact & use cases",
      text: "Why this fork exists and what server problems it solves.",
      url: "#ntm-space-server-impact",
      label: "Open server impact page"
    },
    {
      title: "Foliage+ overview",
      text: "The main overview page for the original foliage interaction support mod.",
      url: "#foliage-plus",
      label: "Open overview"
    },
    {
      title: "Foliage+ gameplay behaviour",
      text: "How pass-through leaves, slowdown, and rustling behave in play.",
      url: "#foliage-plus-gameplay",
      label: "Open gameplay page"
    },
    {
      title: "Foliage+ configuration",
      text: "Server-facing settings for foliage collision, cover, and slowdown.",
      url: "#foliage-plus-config",
      label: "Open configuration page"
    },
    {
      title: "Foliage+ technical implementation",
      text: "Coremod, hook, and tick-handler details for the mod.",
      url: "#foliage-plus-technical",
      label: "Open technical page"
    },
    {
      title: "HitmarkerPlus overview",
      text: "The main overview page for the hitmarker feedback support mod.",
      url: "#hitmarkerplus",
      label: "Open overview"
    },
    {
      title: "HitmarkerPlus feedback behaviour",
      text: "How hit detection, overlay timing, and audio feedback behave in play.",
      url: "#hitmarkerplus-feedback",
      label: "Open feedback page"
    },
    {
      title: "HitmarkerPlus installation & compatibility",
      text: "What the mod requires and how it is intended to be deployed on client and server.",
      url: "#hitmarkerplus-installation",
      label: "Open installation page"
    },
    {
      title: "HitmarkerPlus technical implementation",
      text: "Packet flow, event hooks, client rendering, and asset details.",
      url: "#hitmarkerplus-technical",
      label: "Open technical page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Expanded the HBM Space documentation path into a base overview plus dedicated WDG Edition subpages."
    }
  ]
};
