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
          { id: "wgcore-factions", label: "Factions", status: "live", visible: true },
          { id: "wgcore-territory", label: "Territory & claims", status: "live", visible: true },
          { id: "wgcore-flags", label: "Flags", status: "live", visible: true },
          { id: "wgcore-war", label: "War system", status: "live", visible: true },
          { id: "wgcore-fobs", label: "FOB system", status: "live", visible: true },
          { id: "wgcore-control", label: "Control & decay", status: "live", visible: true },
          { id: "wgcore-protection", label: "Protection rules", status: "live", visible: true },
          { id: "wgcore-commands", label: "Command reference", status: "live", visible: true },
          { id: "wgcore-configuration", label: "Configuration", status: "live", visible: true },
          { id: "wgcore-api", label: "Integration API", status: "live", visible: true }
        ]
      },
      {
        label: "WGEvents",
        sectionId: "wgevents-group",
        status: "live",
        visible: true,
        defaultExpanded: true,
        children: [
          { id: "wgevents", label: "Overview", status: "live", visible: true },
          { id: "wgevents-match-flow", label: "Match flow", status: "live", visible: true },
          { id: "wgevents-gamemodes", label: "Gamemodes", status: "live", visible: true },
          { id: "wgevents-teams", label: "Teams & scoreboard", status: "live", visible: true },
          { id: "wgevents-spawns", label: "Spawns & idle lobby", status: "live", visible: true },
          { id: "wgevents-rewards", label: "Rewards & voting", status: "live", visible: true },
          { id: "wgevents-commands", label: "Commands", status: "live", visible: true },
          { id: "wgevents-architecture", label: "Architecture", status: "live", visible: true }
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
        defaultExpanded: true,
        children: [
          { id: "flans", label: "Base mod foundation", status: "reference", visible: true },
          { id: "fmur", label: "FMUR overview", status: "live", visible: true },
          { id: "fmur-combat", label: "Combat systems", status: "live", visible: true },
          { id: "fmur-vehicles", label: "Vehicles & driveables", status: "live", visible: true },
          { id: "fmur-wgcore", label: "WGCore integration", status: "live", visible: true },
          { id: "fmur-systems", label: "Technical & presentation", status: "live", visible: true }
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
        defaultExpanded: true,
        children: [
          { id: "foliage-plus", label: "Overview", status: "live", visible: true },
          { id: "foliage-plus-gameplay", label: "Gameplay behaviour", status: "live", visible: true },
          { id: "foliage-plus-config", label: "Configuration", status: "live", visible: true },
          { id: "foliage-plus-technical", label: "Technical implementation", status: "live", visible: true }
        ]
      },
      {
        label: "HitmarkerPlus",
        sectionId: "hitmarkerplus-group",
        status: "live",
        visible: true,
        defaultExpanded: true,
        children: [
          { id: "hitmarkerplus", label: "Overview", status: "live", visible: true },
          { id: "hitmarkerplus-feedback", label: "Feedback behaviour", status: "live", visible: true },
          { id: "hitmarkerplus-installation", label: "Installation & compatibility", status: "live", visible: true },
          { id: "hitmarkerplus-technical", label: "Technical implementation", status: "live", visible: true }
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
