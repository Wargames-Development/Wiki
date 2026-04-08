window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-control"] = {
  title: "WGCore control and decay",
  summary: "How ownership, controller state, control percentage, and passive decay work together in WGCore.",
  version: "WGCore Step 138 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>WGCore does not treat claimed land as permanently stable once placed. The current source and project context show a control model where chunks track control percentage, can decay, and can change state over time.</p>

<h3>Control model</h3>
<ul>
  <li>Chunks track a <strong>control percentage</strong></li>
  <li>That percentage is used for both hostile pressure and owner-side restoration behaviour in the broader project context</li>
  <li>War capture and passive decay both interact with this same state rather than using disconnected systems</li>
</ul>

<h3>Passive decay</h3>
<p>Claims can lose stability over time. The exact timings are configurable and differ by claim type in the wider project context. The important point for documentation is that WGCore supports automatic territory degradation rather than assuming claims last forever without upkeep or pressure.</p>

<h3>Observed behavioural split</h3>
<ul>
  <li><strong>Normal faction territory</strong> can pause passive decay during war</li>
  <li><strong>FOB territory</strong> continues decaying during war</li>
</ul>

<h3>What happens at failure points</h3>
<ul>
  <li>FOB-related territory can collapse when its control reaches zero</li>
  <li>Main-core loss at the required failure point can lead into full faction removal behaviour in the broader system</li>
  <li>Territory state is therefore tied to long-term strategic upkeep, not only to one-time claiming</li>
</ul>

<div class="callout">
  <strong>Design takeaway</strong>
  <p>WGCore uses control and decay to make territory dynamic. Ownership matters, but control stability matters too. That makes wars, recovery, and forward bases feel more like a living territory system instead of static chunk colouring.</p>
</div>
  `.trim(),
  resources: [
    {
      title: "Territory and claims",
      text: "The ownership and controller model that control percentage applies to.",
      url: "#wgcore-territory",
      label: "Open territory page"
    },
    {
      title: "War system",
      text: "How control percentage drives capture and outcomes.",
      url: "#wgcore-war",
      label: "Open war page"
    },
    {
      title: "FOB system",
      text: "Why FOBs decay differently from normal territory.",
      url: "#wgcore-fobs",
      label: "Open FOB page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated control page explaining control percentage, decay, and zero-control consequences."
    }
  ]
};
