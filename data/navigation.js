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
      {
        label: "Modpack",
        sectionId: "modpack-group",
        status: "updating",
        visible: true,
        defaultExpanded: false,
        children: [
          { id: "modpack", label: "Overview", status: "updating", visible: true }
        ]
      },
      {
        label: "WGCore",
        sectionId: "wgcore-group",
        status: "live",
        visible: true,
        defaultExpanded: true,
        children: [
          { id: "wgcore", label: "Overview", status: "live", visible: true },
          { id: "wgcore-commands", label: "Command reference", status: "live", visible: true }
        ]
      },
      {
        label: "WGEvents",
        sectionId: "wgevents-group",
        status: "live",
        visible: true,
        defaultExpanded: false,
        children: [
          { id: "wgevents", label: "Overview", status: "live", visible: true }
        ]
      },
      {
        label: "MCHeli-R Wargames Edition",
        sectionId: "mcheli-group",
        status: "live",
        visible: true,
        defaultExpanded: true,
        children: [
          { id: "mcheli", label: "Mod overview", status: "live", visible: true },
          { id: "mcheli-overview", label: "Gameplay role", status: "live", visible: true },
          { id: "mcheli-combat", label: "Combat & protection", status: "live", visible: true },
          { id: "mcheli-radar", label: "Radar & missiles", status: "live", visible: true },
          { id: "mcheli-weapons", label: "Weapon types", status: "live", visible: true },
          { id: "mcheli-aircraft", label: "Aircraft guide", status: "live", visible: true },
          { id: "mcheli-systems", label: "Systems & changes", status: "live", visible: true }
        ]
      },
      {
        label: "Flan's Mod Ultimate-R Wargames Edition",
        sectionId: "fmur-group",
        status: "live",
        visible: true,
        defaultExpanded: false,
        children: [
          { id: "fmur", label: "Overview", status: "live", visible: true }
        ]
      },
      {
        label: "NTM: Space / HBM Space WDG Edition",
        sectionId: "ntm-space-group",
        status: "live",
        visible: true,
        defaultExpanded: true,
        children: [
          { id: "ntm-space", label: "Base mod overview", status: "live", visible: true },
          { id: "ntm-space-wdg-overview", label: "WDG Edition overview", status: "live", visible: true },
          { id: "ntm-space-protection", label: "Protection & ownership", status: "live", visible: true },
          { id: "ntm-space-weapons", label: "Weapon & missile changes", status: "live", visible: true },
          { id: "ntm-space-server-impact", label: "Server impact & use cases", status: "live", visible: true }
        ]
      },
      {
        label: "Foliage+",
        sectionId: "foliage-plus-group",
        status: "live",
        visible: true,
        defaultExpanded: false,
        children: [
          { id: "foliage-plus", label: "Overview", status: "live", visible: true }
        ]
      },
      {
        label: "HitmarkerPlus",
        sectionId: "hitmarkerplus-group",
        status: "live",
        visible: true,
        defaultExpanded: false,
        children: [
          { id: "hitmarkerplus", label: "Overview", status: "live", visible: true }
        ]
      }
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
