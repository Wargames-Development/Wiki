window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["fmur-combat"] = {
  title: "FMUR combat systems",
  summary: "Weapons, attachments, recoil, reloads, and infantry-facing behaviour in the FMUR lineage.",
  version: "Gameplay reference",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
        <p>The <strong>combat identity</strong> of the FMUR line still comes from the broader Flan weapon framework, but it is shaped further by later Ultimate and Reloaded/Reforged behaviour.</p>

        <h3>Core infantry systems in this lineage</h3>
        <ul>
          <li>Gun handling driven by configurable recoil, spread, reload, and fire-rate systems</li>
          <li>Attachment-aware weapon behaviour, allowing items to alter recoil, reload speed, aiming time, spread, movement, and related handling values</li>
          <li>A wider client-side presentation layer for sights, gun animations, muzzle effects, and HUD feedback</li>
          <li>Support for a more advanced content-pack style than very old Flan branches</li>
        </ul>

        <h3>Why this matters for Wargames</h3>
        <p>Wargames uses FMUR as the main infantry weapon base. The mod is not only a content carrier; it provides most of the underlying feel of small arms, grenades, attachment-driven weapon setups, and player-facing handling.</p>

        <h3>Combat behaviour that sits below the WDG layer</h3>
        <ul>
          <li>Recoil and reload handling originate from the FMUR / Flan lineage, not from WGCore</li>
          <li>Attachment effects still modify the underlying weapon behaviour as normal</li>
          <li>Penetration-related and muzzle-flash-capable behaviour remain part of the upstream gameplay foundation</li>
          <li>The Wargames-specific layer mainly governs <em>whether</em> damage is allowed, not how the underlying weapon system is built</li>
        </ul>

        <div class="callout">
          <strong>Practical reading rule</strong>
          <p>If you are documenting how a gun feels, reloads, recoils, or supports attachments, you are usually describing the Flan/FMUR lineage. If you are documenting whether a hit is allowed in a protected area, you are describing the Wargames WGCore layer.</p>
        </div>
      `,
  resources: [
    {
      title: "FMUR overview",
      text: "Return to the main FMUR lineage page.",
      url: "#fmur",
      label: "Back to overview"
    },
    {
      title: "WGCore integration",
      text: "Read how combat permission checks are layered on top.",
      url: "#fmur-wgcore",
      label: "Open WGCore integration page"
    }
  ],
  videos: [],
  history: []
};
