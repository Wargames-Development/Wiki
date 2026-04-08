window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["wgcore-factions"] = {
  title: "WGCore factions",
  summary: "Faction creation, membership flow, permissions, and lifecycle behaviour in the current WGCore source.",
  version: "WGCore Step 138 source review",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>Factions are the main organisational unit in WGCore. Territory ownership, war participation, invitations, applications, homes, warps, and several permission checks all flow through faction state. The current source shows that faction handling is much broader than a simple create-and-invite system.</p>

<h3>What factions support</h3>
<ul>
  <li>Creating a faction and establishing faction identity</li>
  <li>Application-based joining where players request to join and are accepted or denied</li>
  <li>Invitation-based joining where faction staff invite players directly</li>
  <li>Role-based management for leaders, officers, and regular members</li>
  <li>Leaving, kicking, promoting, demoting, and transferring control</li>
  <li>Faction home and warp features</li>
  <li>Faction chat and player chat-mode handling</li>
  <li>Offline-safe actions for membership management where that behaviour is supported by the current source</li>
</ul>

<h3>Role and permission structure</h3>
<p>The uploaded code clearly separates normal faction membership from management authority. Not every member can perform administrative faction actions. This matters because WGCore ties several gameplay actions to faction role checks, not just to whether someone belongs to a faction at all.</p>

<h3>Lifecycle behaviour</h3>
<ul>
  <li><strong>Creation</strong> establishes the faction and unlocks the rest of the faction-owned systems</li>
  <li><strong>Membership flow</strong> can move through applications, invites, acceptance, denial, and removal</li>
  <li><strong>Disband</strong> is not cosmetic; it removes owned land and attached faction structures from the world state</li>
</ul>

<div class="callout">
  <strong>Important disband behaviour</strong>
  <p>WGCore treats faction removal as a full cleanup event. Based on the current source and related services, disbanding is tied to territory cleanup and flag cleanup rather than leaving abandoned ownership behind.</p>
</div>

<h3>Player-facing commands visible in the source</h3>
<ul>
  <li><code>/wg create</code></li>
  <li><code>/wg apply</code> and <code>/wg applicants</code></li>
  <li><code>/wg invite</code> and <code>/wg invites</code></li>
  <li><code>/wg leave</code></li>
  <li><code>/wg disband</code></li>
  <li><code>/wg promote</code>, <code>/wg demote</code>, <code>/wg kick</code>, and related faction-management branches</li>
  <li><code>/wg sethome</code>, <code>/wg home</code>, and <code>/wg warp</code></li>
  <li><code>/wg chat</code> for faction or global chat behaviour</li>
</ul>

<h3>Related systems</h3>
<p>Factions are deeply tied to territory, war, notifications, teams, and permissions. For that reason, faction documentation should not be treated as isolated from the rest of WGCore.</p>
  `.trim(),
  resources: [
    {
      title: "Territory and claims",
      text: "How faction state connects to chunk ownership and controller state.",
      url: "#wgcore-territory",
      label: "Open territory page"
    },
    {
      title: "War system",
      text: "How factions declare wars, enter phases, and gain or lose land.",
      url: "#wgcore-war",
      label: "Open war page"
    },
    {
      title: "Command reference",
      text: "Source-backed index of visible /wg and /wgc command branches.",
      url: "#wgcore-commands",
      label: "Open command reference"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated factions page covering lifecycle, membership flow, and role-linked behaviour."
    }
  ]
};
