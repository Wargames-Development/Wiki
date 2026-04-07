window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-commands"] = {
  title: "WGCore command reference",
  summary: "A player-facing command index based on the current /wg and /wgc command roots present in the WGCore source.",
  version: "WGCore build X138 context",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: "\n        <p>The current WGCore source exposes two main command roots:</p>\n        <ul>\n          <li><code>/wg</code> for normal player and faction interaction</li>\n          <li><code>/wgc</code> for administration, force actions, and configuration work</li>\n        </ul>\n        <h3>Major player command branches currently present under <code>/wg</code></h3>\n        <ul>\n          <li><code>help</code> and <code>version</code></li>\n          <li><code>create</code>, <code>leave</code>, <code>disband</code>, <code>rename</code>, <code>tag</code></li>\n          <li><code>apply</code>, <code>applicants</code>, <code>invite</code>, <code>invites</code></li>\n          <li><code>promote</code>, <code>demote</code>, <code>kick</code>, <code>transfer</code>, <code>move</code></li>\n          <li><code>sethome</code>, <code>home</code>, <code>warp</code></li>\n          <li><code>list</code>, <code>info</code>, <code>zone</code>, <code>border</code></li>\n          <li><code>war</code>, <code>chat</code>, <code>permission</code>, <code>team</code>, <code>unclaim</code>, <code>fob</code></li>\n        </ul>\n        <h3>What this means for players</h3>\n        <p>The command set is not only about creating a faction and inviting people. WGCore also exposes commands for faction chat, team settings, homes and warps, zone lookups, border visibility, war status, and more advanced territory tools.</p>\n        <h3>Administrative branch</h3>\n        <p>The uploaded source also contains <code>/wgc</code> subcommands for administration and maintenance, including war controls, config editing, whitelist handling, grace controls, zone tools, claim tools, force actions, and cooldown tools.</p>\n        <div class=\"callout\">\n          <strong>Documentation note</strong>\n          <p>This page is intentionally an index rather than a full syntax manual. The branches listed here are present in the uploaded source, but argument-level command examples should be documented only after they are checked against the live build you are publishing.</p>\n        </div>\n      ",
  resources: [
    {
      title: "WGCore overview",
      text: "Read this first if you want the big-picture explanation behind the commands.",
      url: "#wgcore",
      label: "Open WGCore overview"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Added the first command index based directly on the registered CommandWG and CommandWGC subcommand trees in the uploaded WGCore source."
    }
  ]
};
