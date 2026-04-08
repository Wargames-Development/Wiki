window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-commands"] = {
  title: "WGCore command reference",
  summary: "A source-backed command index for the current /wg and /wgc branches visible in the WGCore Step 138 codebase.",
  version: "WGCore Step 138 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>The current WGCore source exposes two main command roots:</p>
<ul>
  <li><code>/wg</code> for player-facing faction and territory interaction</li>
  <li><code>/wgc</code> for administration, force actions, configuration, and maintenance</li>
</ul>

<h3>Major player branches visible under <code>/wg</code></h3>
<ul>
  <li><code>help</code> and <code>version</code></li>
  <li><code>create</code>, <code>leave</code>, <code>disband</code>, <code>rename</code>, <code>tag</code></li>
  <li><code>apply</code>, <code>applicants</code>, <code>invite</code>, <code>invites</code></li>
  <li><code>promote</code>, <code>demote</code>, <code>kick</code>, <code>transfer</code>, <code>move</code></li>
  <li><code>sethome</code>, <code>home</code>, <code>warp</code></li>
  <li><code>list</code>, <code>info</code>, <code>zone</code>, <code>border</code></li>
  <li><code>war</code>, <code>chat</code>, <code>permission</code>, <code>team</code>, <code>unclaim</code>, <code>fob</code></li>
</ul>

<h3>Administrative coverage visible under <code>/wgc</code></h3>
<ul>
  <li>War controls and force declare or end tools</li>
  <li>Config editing and related live admin controls</li>
  <li>Zone tools and claim tools</li>
  <li>Force membership and faction-state actions</li>
  <li>Override and maintenance tooling for running the server ruleset</li>
</ul>

<div class="callout">
  <strong>Reference scope</strong>
  <p>This page is an index of command branches that are visible in the source. It is useful for wiki structure and feature documentation. Exact argument-level syntax should still be validated against the live build you plan to publish if you want player-facing examples.</p>
</div>
  `.trim(),
  resources: [
    {
      title: "Factions",
      text: "Most common player-facing faction lifecycle commands.",
      url: "#wgcore-factions",
      label: "Open factions page"
    },
    {
      title: "War system",
      text: "Where /wg war and related admin controls fit into gameplay.",
      url: "#wgcore-war",
      label: "Open war page"
    },
    {
      title: "Configuration",
      text: "How live config editing fits into admin tooling.",
      url: "#wgcore-configuration",
      label: "Open configuration page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Expanded the old WGCore command page into a cleaner source-backed command index aligned with the new WGCore documentation section."
    }
  ]
};
