window.WARGAMES_WIKI = {
  site: {
    title: 'Wargames Wiki',
    domain: 'wiki.wargames.host',
    repositoryUrl: 'https://github.com/Wargames-Development/wiki',
    social: {
      discord: {
        label: 'Discord',
        url: 'https://discord.gg/ZmCJDg8ev7',
        serverId: '958500212396163083',
      },
      technic: {
        label: 'Technic',
        url: 'https://www.technicpack.net/modpack/wargames-release.1994291',
      },
      curseforge: {
        label: 'CurseForge',
        url: 'https://www.curseforge.com/minecraft/modpacks/wargames-official',
      },
    },
    status: [
      { title: 'Hosting', text: 'Ready for GitHub Pages with a custom CNAME file already included.' },
      { title: 'Content model', text: 'Supports hidden pages, video embeds, update banners, and per-page history entries.' },
      { title: 'Current phase', text: 'Starter wiki shell for Wargames Survival v2.0B. Flesh out guides over time.' },
    ],
    hero: {
      title: 'A clean starter wiki for Wargames',
      summary: 'This build is meant to be your hosted foundation right now, not the final finished documentation set. It is simple to edit, swap branding on, and expand with tutorials, videos, release notes, and page update warnings.',
      primaryLabel: 'Open installation guide',
      primaryPage: 'installation',
      secondaryLabel: 'Open version history',
      secondaryPage: 'release-notes',
    },
  },
  navigation: [
    {
      title: 'Start here',
      items: [
        { id: 'home', label: 'Home', status: 'live', visible: true },
        { id: 'installation', label: 'Installation', status: 'live', visible: true },
        { id: 'first-steps', label: 'First steps', status: 'live', visible: true },
      ],
    },
    {
      title: 'Gameplay',
      items: [
        { id: 'survival', label: 'Survival systems', status: 'updating', visible: true },
        { id: 'combat', label: 'Combat', status: 'updating', visible: true },
        { id: 'factions', label: 'Factions and war', status: 'hidden', visible: false },
      ],
    },
    {
      title: 'Reference',
      items: [
        { id: 'modpack', label: 'Modpack overview', status: 'live', visible: true },
        { id: 'release-notes', label: 'Release notes', status: 'live', visible: true },
        { id: 'faq', label: 'FAQ', status: 'live', visible: true },
      ],
    },
  ],
  pages: {
    home: {
      title: 'Welcome to the Wargames Wiki',
      summary: 'The front page introduces the modpack, points players to setup help, and acts as a stable endpoint while the full wiki grows.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      updateMessage: '',
      body: `
        <p>This wiki is the starting point for Wargames Survival and future Wargames projects. It is intentionally lightweight for now, but it already supports the things you said you need: clear navigation, space for written documentation, embedded tutorials, social links, release visibility control, and page-level update messaging.</p>
        <div class="callout">
          <strong>What this site is for right now</strong>
          <p>Give players one clear place to learn the basics, grab links, check the current version, and see which parts of the documentation are still being written.</p>
        </div>
        <h3>What players can use today</h3>
        <ul>
          <li>Installation help and launcher links</li>
          <li>Early first-step guidance for joining the pack</li>
          <li>Release notes and quick FAQ coverage</li>
          <li>Discord access as the main support/community entry point</li>
        </ul>
        <h3>How this grows later</h3>
        <ul>
          <li>Add more pages to the <code>pages</code> object in <code>data/site-data.js</code></li>
          <li>Hide or show navigation items by changing <code>visible</code> in the navigation config</li>
          <li>Swap the main logo by replacing <code>assets/images/logo.png</code></li>
          <li>Add YouTube tutorials by dropping video URLs into a page's <code>videos</code> array</li>
        </ul>
      `,
      resources: [
        {
          title: 'Wiki repository',
          text: 'Use a normal GitHub workflow so edits are easy to review and page history remains visible.',
          url: 'https://github.com/Wargames-Development/wargames-wiki',
          label: 'Open repository',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Initial GitHub Pages starter shell created for Wargames Survival.' },
      ],
    },
    installation: {
      title: 'Installation',
      summary: 'A clear starting page for launcher links, version expectations, and common setup questions.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>Use this page for the launcher steps you want players to follow. The starter content below is intentionally simple and can be replaced line-by-line later.</p>
        <h3>Recommended structure</h3>
        <ol>
          <li>Tell players which launcher is preferred.</li>
          <li>Give the exact modpack name or direct link.</li>
          <li>State the expected Minecraft version and Java version.</li>
          <li>List RAM guidance and any common client-side fixes.</li>
        </ol>
        <h3>Example notes</h3>
        <ul>
          <li>Preferred launcher: Technic or CurseForge, depending on where you publish the pack.</li>
          <li>Version target: Wargames Survival v2.0B.</li>
          <li>Suggested RAM: replace this with your actual recommendation.</li>
          <li>If you use a custom server IP, place it here too.</li>
        </ul>
      `,
      resources: [
        { title: 'Technic pack link', text: 'Replace with your real Technic pack URL.', url: 'https://www.technicpack.net/', label: 'Technic' },
        { title: 'CurseForge pack link', text: 'Replace with your real CurseForge page.', url: 'https://www.curseforge.com/minecraft/modpacks', label: 'CurseForge' },
      ],
      videos: [
        {
          title: 'Installation walkthrough',
          text: 'Drop in your YouTube tutorial link when it is ready.',
          youtubeId: '',
          url: 'https://youtube.com/',
        },
      ],
      history: [
        { date: '2026-04-07', text: 'Starter install page scaffolded.' },
      ],
    },
    'first-steps': {
      title: 'First steps',
      summary: 'An onboarding page for new players that explains what to do immediately after joining.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>This page is where you explain the first ten minutes of Wargames in plain language.</p>
        <h3>Useful first-step topics</h3>
        <ul>
          <li>What players should do at spawn</li>
          <li>How to join the community or server properly</li>
          <li>Where to find help if they get stuck</li>
          <li>Any early-game mechanics that are easy to misunderstand</li>
        </ul>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Initial player onboarding placeholder added.' },
      ],
    },
    survival: {
      title: 'Survival systems',
      summary: 'A page for core gameplay systems once you are ready to document them properly.',
      version: 'Survival v2.0B',
      releaseState: 'Updating',
      lastUpdated: '2026-04-07',
      needsUpdate: true,
      updateMessage: 'This page is still being rewritten and may not match the latest live server balance yet.',
      body: `
        <p>Use this page for survival-specific mechanics, balancing notes, world rules, or progression changes.</p>
        <div class="callout">
          <strong>Suggested sections</strong>
          <p>Health, hunger, temperature, loot progression, economy, world rules, and anything else that differs from vanilla expectations.</p>
        </div>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Marked as needing revision before public write-up.' },
      ],
    },
    combat: {
      title: 'Combat',
      summary: 'An expandable combat page for weapons, PvP expectations, and server-specific mechanics.',
      version: 'Survival v2.0B',
      releaseState: 'Updating',
      lastUpdated: '2026-04-07',
      needsUpdate: true,
      updateMessage: 'Combat documentation is not complete yet. Ask in Discord if you need current guidance.',
      body: `
        <p>This section is ready for weapon categories, armor expectations, healing differences, and any custom mod mechanics players need to understand.</p>
        <h3>Later additions</h3>
        <ul>
          <li>Combat videos and clip embeds</li>
          <li>Beginner PvP loadout suggestions</li>
          <li>Server rule clarifications</li>
        </ul>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Combat page created as a visible placeholder.' },
      ],
    },
    modpack: {
      title: 'Modpack overview',
      summary: 'Use this for mod lists, custom feature summaries, and a plain-language explanation of what Wargames includes.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>This page works well for a short curated overview instead of a giant raw mod dump.</p>
        <ul>
          <li>Core combat and survival mods</li>
          <li>Quality-of-life additions</li>
          <li>Custom Wargames features and balance changes</li>
        </ul>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Overview page scaffolded.' },
      ],
    },
    'release-notes': {
      title: 'Release notes',
      summary: 'A home for visible version history so players can see what changed and when.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>Use this page to summarize major pack updates in player-facing language.</p>
        <h3>Current example</h3>
        <ul>
          <li>Wargames Survival v2.0B wiki endpoint published</li>
          <li>Starter navigation and documentation shell added</li>
          <li>Discord and launcher links prepared for public use</li>
        </ul>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Wiki starter release published.' },
        { date: '2026-04-05', text: 'Internal planning and template layout prepared.' },
      ],
    },
    faq: {
      title: 'FAQ',
      summary: 'A quick-answer page for the questions you know players will ask repeatedly.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <h3>Where should players go first?</h3>
        <p>Discord should be the main live support and announcement hub.</p>
        <h3>Can the logo be replaced later?</h3>
        <p>Yes. Replace <code>assets/images/logo.png</code> and refresh the site.</p>
        <h3>Can sections stay hidden until release?</h3>
        <p>Yes. In the navigation config, set <code>visible: false</code> for pages that should not appear yet.</p>
        <h3>Can each page show update status?</h3>
        <p>Yes. Set <code>needsUpdate: true</code> and write an <code>updateMessage</code>.</p>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'FAQ starter entries added.' },
      ],
    },
  },
};
