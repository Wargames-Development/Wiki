window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["hitmarkerplus-feedback"] = {
  title: "HitmarkerPlus feedback behaviour",
  summary: "How HitmarkerPlus detects valid Flan bullet hits and turns them into client-side visual and audio feedback.",
  version: "HitmarkerPlus source audit",
  releaseState: "Live",
  lastUpdated: "2026-04-08",
  needsUpdate: false,
  updateMessage: "",
  body: `
        <p>HitmarkerPlus is built around a simple feedback loop: a valid server-side bullet hit occurs, the shooter is identified, a client packet is sent back to that shooter, and the shooter receives immediate feedback.</p>

        <h3>What counts as a hit</h3>
        <p>The source listens to <strong>LivingHurtEvent</strong> on the server. It then checks the damage source and only continues if the source entity is a <strong>com.flansmod.common.guns.EntityBullet</strong>.</p>
        <ul>
          <li>Non-Flan damage does not trigger the system</li>
          <li>The handler runs server-side only</li>
          <li>The bullet owner must be an <strong>EntityPlayerMP</strong></li>
          <li>The feedback packet is sent only to that player</li>
        </ul>

        <h3>What the shooter experiences</h3>
        <p>When the client receives the packet, HitmarkerPlus triggers two things at once:</p>
        <ul>
          <li>a centred hitmarker overlay</li>
          <li>a short hitmarker sound</li>
        </ul>

        <h3>Overlay behaviour</h3>
        <p>The overlay uses a small texture rendered in the middle of the screen. In the uploaded source, it stays visible for roughly <strong>400 ms</strong> and fades out over that window using a squared alpha falloff so the final part of the fade is softer than a flat linear fade.</p>
        <ul>
          <li>The overlay is drawn during the <strong>RenderGameOverlayEvent.Post</strong> ALL phase</li>
          <li>It uses a raw draw size of <strong>16 px</strong> in the audited source</li>
          <li>If the custom texture fails to bind, a fallback X is drawn instead</li>
          <li>The overlay is purely local and does not affect gameplay state</li>
        </ul>

        <h3>Audio behaviour</h3>
        <p>The client first tries to play the mod's own <strong>hitmarkerplus:hitmarker</strong> sound through Minecraft's sound handler. If that fails for any reason, it falls back to a vanilla orb sound so the player still gets audible confirmation.</p>

        <div class="callout">
          <strong>Gameplay effect</strong>
          <p>The mod does not make weapons stronger or hits easier to land. Its value is clarity. The shooter gets instant confirmation that a Flan bullet connected, which makes firefights easier to read without changing the underlying damage model.</p>
        </div>
      `,
  resources: [
    {
      title: "Installation & compatibility",
      text: "See what the mod requires and how it is meant to be deployed.",
      url: "#hitmarkerplus-installation",
      label: "Open installation page"
    },
    {
      title: "Technical implementation",
      text: "Read the exact event, packet, and render path behind the feedback loop.",
      url: "#hitmarkerplus-technical",
      label: "Open technical page"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-08",
      text: "Added a dedicated behaviour page covering hit detection rules, overlay timing, and audio fallback behaviour."
    }
  ]
};
