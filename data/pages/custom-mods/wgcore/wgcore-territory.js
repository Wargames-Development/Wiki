window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-territory"] = {
  title: "WGCore territory and claims",
  summary: "A source-backed explanation of claim types, ownership, controller state, and territory feedback in WGCore.",
  version: "WGCore Step 138 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>WGCore manages land on a chunk basis. Claims are not a flat yes-or-no ownership flag. The current source distinguishes between the faction that <strong>owns</strong> a chunk and the faction that may currently <strong>control</strong> it, and it tracks a control percentage that drives war capture and decay behaviour.</p>

<h3>Claim and territory types visible in the source and project context</h3>
<ul>
  <li><strong>Core territory</strong> tied to a faction's main base</li>
  <li><strong>Expansion claims</strong> extending outward from a core or other allowed structure</li>
  <li><strong>FOB territory</strong> for forward operating bases</li>
  <li><strong>Zone-based territory</strong> such as safezones, warzones, wilderness, and other special areas documented elsewhere in the project</li>
</ul>

<h3>Ownership versus control</h3>
<ul>
  <li><strong>Owner</strong> is the faction that legally owns the chunk</li>
  <li><strong>Controller</strong> is the faction currently exerting control over that chunk</li>
  <li><strong>Control percentage</strong> tracks how stable that control is and whether the chunk is at risk of flipping</li>
</ul>

<p>This distinction matters because wars do not simply toggle land from one side to the other instantly. Capture and recovery operate through the control system.</p>

<h3>What players see</h3>
<p>The current WGCore implementation includes territory feedback for players moving between chunks. That includes popup-style feedback showing territory identity and control-related context rather than leaving players to guess where they are.</p>

<ul>
  <li>Owner information</li>
  <li>Controller information</li>
  <li>Control percentage</li>
  <li>Relation-aware presentation such as own, ally, neutral, or enemy context</li>
</ul>

<h3>Why this matters in gameplay</h3>
<p>WGCore territory is not just decorative map colouring. The territory state decides who can expand, who can capture, how wars resolve, what claims are stable, whether decay applies, and what types of actions other mods are allowed to perform inside the chunk.</p>
  `.trim(),
  resources: [
    {
      title: "Flags",
      text: "How core, expansion, capture, FOB, and relocation flags interact with claims.",
      url: "#wgcore-flags",
      label: "Open flags page"
    },
    {
      title: "Control and decay",
      text: "How control percentage changes over time and during conflict.",
      url: "#wgcore-control",
      label: "Open control page"
    },
    {
      title: "Protection rules",
      text: "How territory state affects block actions, explosions, and PvP.",
      url: "#wgcore-protection",
      label: "Open protection page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated territory page explaining ownership, control, and claim-state behaviour."
    }
  ]
};
