window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore"] = {
  title: "WGCore overview",
  summary: "A source-backed overview of the Wargames faction, territory, war, protection, and integration framework for Minecraft 1.7.10.",
  version: "WGCore 1.0.0_X138 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p><strong>WGCore</strong> is the server-side framework that holds together factions, land ownership, war flow, protection, control, and mod integration for the Wargames server stack. It is not just a claim mod and it is not just an admin tool. The uploaded source shows a broad, persistent rules framework that decides who owns land, who controls it, what actions are allowed, when wars can happen, and how external mods are expected to respect those rules.</p>

<div class="callout">
  <strong>What this mod is for</strong>
  <p>If the server needs one consistent answer to questions like <em>who owns this chunk</em>, <em>can this explode here</em>, <em>is this war active</em>, <em>should this claim decay</em>, or <em>can this faction capture that land</em>, WGCore is the layer that answers it.</p>
</div>

<h3>Major systems visible in the current source</h3>
<ul>
  <li><strong>Faction lifecycle</strong> for creation, invites, applications, roles, homes, warps, disbanding, and membership control</li>
  <li><strong>Territory ownership and control</strong> with chunk-level claim state, ownership, controller state, and control percentage</li>
  <li><strong>Flags</strong> for cores, expansions, FOBs, capture flow, and core relocation</li>
  <li><strong>War flow</strong> with declaration checks, timed phases, capture rules, war points, cooldowns, and resolution</li>
  <li><strong>Decay and control enforcement</strong> for normal claims, core claims, and FOB-related territory</li>
  <li><strong>Protection and permissions</strong> for PvP, explosions, block actions, interaction, containers, zones, and modded combat integration</li>
  <li><strong>Notifications</strong> for system messages, faction updates, offline catch-up delivery, and ordered login delivery</li>
  <li><strong>Configuration and admin tooling</strong> for live tuning, command-driven edits, zone overrides, force actions, and rewards</li>
</ul>

<h3>How WGCore fits into the wider Wargames stack</h3>
<p>Other Wargames mods may add weapons, vehicles, radar, event systems, or special gameplay features, but WGCore is the persistent authority for ownership, conflict, protection, and territory state. That means it is the mod most responsible for keeping survival and faction gameplay coherent even when multiple custom forks are running together on the same server.</p>

<h3>Where to go next</h3>
<ul>
  <li>Read <strong>Factions</strong> for membership, roles, invites, and lifecycle behaviour</li>
  <li>Read <strong>Territory and claims</strong> for ownership, control, and claim-state rules</li>
  <li>Read <strong>War system</strong> for phase flow, declaration rules, outcomes, and war points</li>
  <li>Read <strong>Protection rules</strong> for what WGCore blocks or allows in different areas</li>
  <li>Read <strong>Integration API</strong> if you are documenting how other mods respect WGCore decisions</li>
</ul>
  `.trim(),
  resources: [
    {
      title: "Factions",
      text: "Player grouping, roles, invites, applications, homes, warps, and faction lifecycle behaviour.",
      url: "#wgcore-factions",
      label: "Open factions page"
    },
    {
      title: "Territory and claims",
      text: "Ownership, controller state, claim types, and player territory feedback.",
      url: "#wgcore-territory",
      label: "Open territory page"
    },
    {
      title: "War system",
      text: "Declaration checks, phase timing, outcomes, and control-driven capture.",
      url: "#wgcore-war",
      label: "Open war system page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Expanded the WGCore documentation from a short overview into a multi-page source-backed documentation section based on the uploaded Step 138 codebase."
    }
  ]
};
