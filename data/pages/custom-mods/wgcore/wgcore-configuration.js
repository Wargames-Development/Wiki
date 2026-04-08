window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-configuration"] = {
  title: "WGCore configuration",
  summary: "Server-authoritative configuration, live editing, and tunable gameplay systems visible in the WGCore source.",
  version: "WGCore Step 138 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>WGCore is designed to be configured from the server side rather than hardcoded into one fixed public ruleset. The source shows dedicated config services, typed config values, edit support, and related reward handling.</p>

<h3>What the current configuration layer covers</h3>
<ul>
  <li>Server-authoritative values rather than client-led behaviour</li>
  <li>Persistent config storage</li>
  <li>Live editing through admin command paths</li>
  <li>Reward-related configuration through YAML-backed structures in the broader project context</li>
</ul>

<h3>Types of systems configured by WGCore</h3>
<ul>
  <li>War timings and cooldown windows</li>
  <li>Decay timings and related control behaviour</li>
  <li>Capture behaviour and conflict rules</li>
  <li>Permissions and administrative behaviour</li>
  <li>Leaderboard and reward-related settings</li>
</ul>

<h3>Why this matters</h3>
<p>WGCore is intended to support a controlled server environment that can be tuned without rewriting code for every ruleset change. That is especially important when the server wants to adjust war pacing, capture pressure, protection strictness, or reward output between seasons or testing phases.</p>
  `.trim(),
  resources: [
    {
      title: "Command reference",
      text: "Where live admin editing sits in the command tree.",
      url: "#wgcore-commands",
      label: "Open command reference"
    },
    {
      title: "War system",
      text: "Examples of major gameplay systems controlled through configuration.",
      url: "#wgcore-war",
      label: "Open war page"
    },
    {
      title: "Control and decay",
      text: "Another major rules area shaped by config values.",
      url: "#wgcore-control",
      label: "Open control page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated configuration page explaining the server-authoritative and live-editable nature of WGCore tuning."
    }
  ]
};
