window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["hitmarkerplus-technical"] = {
  title: "HitmarkerPlus technical implementation",
  summary: "How HitmarkerPlus is implemented internally using an event hook, a single packet, client proxy registration, and lightweight assets.",
  version: "HitmarkerPlus source audit",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
<p>Although HitmarkerPlus is small, the source is cleanly split into server, shared, and client responsibilities rather than bundling everything into one class.</p>

        <h3>Main components</h3>
        <ul>
          <li><strong>HitmarkerPlus</strong> — main Forge mod entry point, packet registration, and event registration</li>
          <li><strong>HitmarkerHandler</strong> — server-side <strong>LivingHurtEvent</strong> listener that detects valid Flan bullet hits</li>
          <li><strong>PacketHitmarker</strong> — zero-payload packet used to trigger client feedback</li>
          <li><strong>ClientHitmarker</strong> — local helper that starts the overlay and plays the sound</li>
          <li><strong>HitmarkerOverlay</strong> — overlay renderer that draws the centre-screen hitmarker</li>
          <li><strong>ClientProxy / CommonProxy</strong> — sided registration split so overlay registration stays client-only</li>
        </ul>

        <h3>Packet path</h3>
        <p>The network side is intentionally minimal. The packet carries no payload because the client does not need hit location, damage value, or victim identity to perform its job. It only needs a signal that a valid hit occurred for that shooter.</p>
        <ol>
          <li>Server receives <strong>LivingHurtEvent</strong></li>
          <li>Handler confirms the damage source is a Flan <strong>EntityBullet</strong></li>
          <li>Handler confirms the bullet owner is an <strong>EntityPlayerMP</strong></li>
          <li>Server sends <strong>PacketHitmarker</strong> only to that shooter</li>
          <li>Client schedules the response on the main client thread</li>
          <li>Client triggers the overlay and sound locally</li>
        </ol>

        <h3>Rendering details</h3>
        <p>The overlay is drawn through the Forge game-overlay event system rather than by patching the HUD. It binds <strong>assets/hitmarkerplus/textures/gui/hitmarker.png</strong> and draws a small textured quad at screen centre. OpenGL state is kept simple: blending is enabled for the fade, depth testing is temporarily disabled, and state is restored afterwards.</p>

        <h3>Audio assets</h3>
        <p>The resource side includes:</p>
        <ul>
          <li><strong>sounds.json</strong></li>
          <li><strong>assets/hitmarkerplus/sounds/hitmarker.ogg</strong></li>
          <li>the GUI hitmarker texture under <strong>assets/hitmarkerplus/textures/gui/</strong></li>
        </ul>

        <h3>Implementation characteristics</h3>
        <ul>
          <li>No persistent world data</li>
          <li>No config loader in the audited source</li>
          <li>No custom commands or GUIs</li>
          <li>No gameplay-stat mutation beyond local feedback presentation</li>
          <li>Very small packet surface area and low runtime complexity</li>
        </ul>

        <div class="callout">
          <strong>Why the implementation stays small</strong>
          <p>The mod is solving a single problem: give the shooter clean confirmation that a Flan bullet landed. By keeping the packet empty and the client logic local, the source avoids unnecessary state syncing or feature creep.</p>
        </div>

        <h3>Version context from the uploaded source</h3>
        <p>The uploaded Gradle properties identify the audited source state as <strong>1.0.20_X2</strong> on the <strong>main</strong> branch.</p>
  `.trim(),
  resources: [
    {
      title: "Feedback behaviour",
      text: "Return to the gameplay-facing description of how hits are turned into feedback.",
      url: "#hitmarkerplus-feedback",
      label: "Open feedback page"
    },
    {
      title: "Overview",
      text: "Return to the main summary page for the mod.",
      url: "#hitmarkerplus",
      label: "Back to overview"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated technical page covering the event hook, packet path, overlay renderer, and bundled assets."
    }
  ]
};
