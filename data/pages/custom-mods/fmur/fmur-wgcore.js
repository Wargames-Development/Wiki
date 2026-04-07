window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["fmur-wgcore"] = {
  title: "FMUR WGCore integration",
  summary: "The Wargames-specific protection, damage, and explosion layer added on top of FMUR.",
  version: "WDG-specific systems",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  body: `
        <p>This page documents the main <strong>Wargames-specific</strong> work in the FMUR fork. Compared with the wider Flan and FMUR lineage, this layer is smaller in scope but very important operationally because it makes FMUR behave correctly inside WGCore territory, war, and protection rules.</p>

        <h3>Central integration entry point</h3>
        <p>The main integration entry point is <code>com.flansmod.common.wgc.Integrations</code>.</p>

        <p>This layer centralises WGCore-facing behaviour instead of scattering protection checks across unrelated gameplay systems.</p>

        <h3>What it does</h3>
        <ul>
          <li>Validates player harm through WGCore before applying certain FMUR damage paths</li>
          <li>Routes explosion decisions through WGCore instead of relying only on local mod logic</li>
          <li>Builds attribution context for explosion-style actions so WGCore can make informed decisions</li>
          <li>Extends the same rule model to bullets, melee, flashbang harm, grenade outcomes, and vehicle collision damage</li>
        </ul>

        <h3>Damage permission checks</h3>
        <ul>
          <li>Bullet damage against players is checked before application</li>
          <li>Gun melee damage follows the same protection path</li>
          <li>Flashbang or grenade-related player harm is checked as part of the same rule model</li>
          <li>Vehicle-caused player harm is also validated so driveables cannot sidestep the territory system</li>
        </ul>

        <h3>Explosion routing</h3>
        <p>The Wargames fork adds a more structured explosion decision path.</p>
        <ul>
          <li>Explosion origin and acting-player context are packaged into WGCore-compatible attribution</li>
          <li>WGCore can allow, deny, or partially filter the result depending on territory rules</li>
          <li>Terrain damage and entity damage are no longer treated as one inseparable action</li>
          <li>This is what allows protected terrain behaviour without losing all explosion-related combat control elsewhere</li>
        </ul>

        <div class="callout">
          <strong>Operational result</strong>
          <p>If FMUR damage or explosions behave differently across safezones, claims, or war-controlled areas, that is usually intentional WGCore integration rather than a random mod inconsistency.</p>
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
      title: "Technical & presentation changes",
      text: "Read the smaller WDG-specific fixes outside the combat rule layer.",
      url: "#fmur-systems",
      label: "Open systems page"
    }
  ],
  videos: [],
  history: []
};
