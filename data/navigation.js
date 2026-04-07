window.WIKI_NAVIGATION = [
  {
    title: "Start here",
    defaultExpanded: true,
    items: [
      { id: "home", label: "Home", status: "live", visible: true },
      { id: "installation", label: "Installation", status: "live", visible: true },
      { id: "first-steps", label: "First steps", status: "live", visible: true }
    ]
  },
  {
    title: "Core gameplay",
    defaultExpanded: true,
    items: [
      { id: "factions", label: "Factions and war", status: "live", visible: true },
      { id: "combat", label: "Combat", status: "updating", visible: true },
      { id: "survival", label: "Survival systems", status: "updating", visible: true }
    ]
  },
  {
    title: "Custom mods",
    defaultExpanded: true,
    items: [
      { id: "custom-mods", label: "Custom mods and forks", status: "live", visible: true },
      { id: "wgcore", label: "WGCore overview", status: "live", visible: true },
      { id: "wgcore-commands", label: "WGCore command reference", status: "live", visible: true },
      { id: "wgevents", label: "WGEvents", status: "live", visible: true },
      { id: "modpack", label: "Modpack overview", status: "updating", visible: true },
      {
        label: "MCHeli-R Wargames Edition",
        sectionId: "mcheli",
        id: "mcheli",
        status: "live",
        visible: true,
        defaultExpanded: true,
        children: [
          { id: "mcheli-overview", label: "Overview", status: "live", visible: true },
          { id: "mcheli-combat", label: "Combat & protection", status: "live", visible: true },
          { id: "mcheli-radar", label: "Radar & missiles", status: "live", visible: true },
          { id: "mcheli-weapons", label: "Weapon types", status: "live", visible: true },
          { id: "mcheli-aircraft", label: "Aircraft guide", status: "live", visible: true },
          { id: "mcheli-systems", label: "Systems & changes", status: "live", visible: true }
        ]
      },
      { id: "fmur", label: "Flan's Mod Ultimate-R Wargames Edition", status: "live", visible: true },
      {
        label: "NTM: Space / HBM Space WDG Edition",
        sectionId: "ntm-space",
        id: "ntm-space",
        status: "live",
        visible: true,
        defaultExpanded: true,
        children: [
          { id: "ntm-space-wdg-overview", label: "HBM Space WDG Edition overview", status: "live", visible: true },
          { id: "ntm-space-protection", label: "Protection & ownership system", status: "live", visible: true },
          { id: "ntm-space-weapons", label: "Weapon & missile changes", status: "live", visible: true },
          { id: "ntm-space-server-impact", label: "Server impact & use cases", status: "live", visible: true }
        ]
      },
      { id: "foliage-plus", label: "Foliage+", status: "live", visible: true },
      { id: "hitmarkerplus", label: "HitmarkerPlus", status: "live", visible: true }
    ]
  },
  {
    title: "Reference",
    defaultExpanded: true,
    items: [
      { id: "release-notes", label: "Release notes", status: "live", visible: true },
      { id: "faq", label: "FAQ", status: "live", visible: true }
    ]
  }
];
