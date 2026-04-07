
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
      { title: 'Current focus', text: 'This wiki is being turned into a proper player-facing reference for Wargames Survival 2.0B and the custom mod stack behind it.' },
      { title: 'Documentation model', text: 'Pages support hidden navigation, update banners, video embeds, page version fields, and built-in visible history entries.' },
      { title: 'Code-aligned first pass', text: 'WGCore and the custom Wargames forks now have a cleaner documentation base instead of generic placeholders.' },
    ],
    hero: {
      title: 'Wargames Survival documentation, guides, and custom mod reference',
      summary: 'This wiki is the public documentation endpoint for Wargames. It is still early, but it now has a real structure for player help, WGCore explanation, custom mod reference pages, launcher links, and changelog-style page history.',
      primaryLabel: 'Read the WGCore overview',
      primaryPage: 'wgcore',
      secondaryLabel: 'Open the custom mods page',
      secondaryPage: 'custom-mods',
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
      title: 'Core gameplay',
      items: [
        { id: 'factions', label: 'Factions and war', status: 'live', visible: true },
        { id: 'combat', label: 'Combat', status: 'updating', visible: true },
        { id: 'survival', label: 'Survival systems', status: 'updating', visible: true },
      ],
    },
    {
      title: 'Custom mods',
      items: [
        { id: 'wgcore', label: 'WGCore overview', status: 'live', visible: true },
        { id: 'wgcore-commands', label: 'WGCore command reference', status: 'live', visible: true },
        { id: 'wgevents', label: 'WGEvents', status: 'live', visible: true },
        { id: 'mcheli', label: 'MCHeli-R Wargames Edition', status: 'live', visible: true },
        { id: 'fmur', label: 'Flan\'s Mod Ultimate-R Wargames Edition', status: 'live', visible: true },
        { id: 'ntm-space', label: 'NTM: Space', status: 'live', visible: true },
        { id: 'foliage-plus', label: 'Foliage+', status: 'live', visible: true },
        { id: 'hitmarkerplus', label: 'HitmarkerPlus', status: 'live', visible: true },
        { id: 'custom-mods', label: 'Custom mods and forks', status: 'live', visible: true },
        { id: 'modpack', label: 'Modpack overview', status: 'updating', visible: true },
      ],
    },
    {
      title: 'Reference',
      items: [
        { id: 'release-notes', label: 'Release notes', status: 'live', visible: true },
        { id: 'faq', label: 'FAQ', status: 'live', visible: true },
      ],
    },
  ],
  pages: {
    home: {
      title: 'Welcome to the Wargames Wiki',
      summary: 'The front page gives players one clear endpoint for setup help, custom mod documentation, and live community links.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      updateMessage: '',
      body: `
        <p>The Wargames wiki is the public reference point for the pack, the server, and the custom mods that make the experience work. This is still an early build of the documentation, but it now has a real structure instead of acting only as a placeholder landing page.</p>
        <div class="callout">
          <strong>What this wiki now covers</strong>
          <p>Launcher links, first-step guidance, a WGCore overview, a WGCore command reference, and a first-pass custom mod list for the Wargames-specific forks currently in development.</p>
        </div>
        <h3>What to read first</h3>
        <ul>
          <li><strong>Installation</strong> if you need the launcher links and pack entry points</li>
          <li><strong>First steps</strong> if you are new and want the short version of what to do after joining</li>
          <li><strong>Factions and war</strong> if you want the player-facing overview of how territory conflict works</li>
          <li><strong>WGCore overview</strong> if you want to understand the backbone system behind territory, protection, war, and server rules</li>
        </ul>
        <h3>How this site is meant to grow</h3>
        <ul>
          <li>Each page can show a visible update notice when it has fallen behind live gameplay</li>
          <li>Every page can include videos, links, and a visible page history section</li>
          <li>Navigation items can stay hidden until the related feature or guide is ready to publish</li>
          <li>The main logo can be replaced by swapping <code>assets/images/logo.png</code></li>
        </ul>
      `,
      resources: [
        {
          title: 'Discord',
          text: 'The main place for support, announcements, troubleshooting, and live clarification while the wiki is still being expanded.',
          url: 'https://discord.gg/ZmCJDg8ev7',
          label: 'Open Discord',
        },
        {
          title: 'Technic pack page',
          text: 'One of the public launcher entry points already linked in the site header.',
          url: 'https://www.technicpack.net/modpack/wargames-release.1994291',
          label: 'Open Technic page',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Front page rewritten to reflect the real Wargames Survival wiki structure instead of the original generic placeholder text.' },
      ],
    },
    installation: {
      title: 'Installation',
      summary: 'A launcher-first setup page for players who just need to get the pack installed and opened.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>Wargames Survival is currently distributed through public launcher pages. This page is intentionally short and practical so new players can get into the pack quickly.</p>
        <h3>Recommended setup flow</h3>
        <ol>
          <li>Open the Wargames modpack page on your preferred launcher.</li>
          <li>Install the pack and let the launcher finish downloading all required files.</li>
          <li>Launch the pack once so it can build its local profile and config folders.</li>
          <li>Join the community Discord if you need live help, server details, or troubleshooting.</li>
        </ol>
        <h3>Before you ask for support</h3>
        <ul>
          <li>Make sure you are launching the current published Wargames pack version</li>
          <li>Allow the launcher to complete the full first-time download before closing it</li>
          <li>Keep your crash log or error message ready if you need help in Discord</li>
        </ul>
        <div class="callout">
          <strong>Note</strong>
          <p>This page avoids hardcoding system requirements that may change. If RAM guidance or Java guidance changes later, update this page and add a history entry instead of burying the information in announcements.</p>
        </div>
      `,
      resources: [
        { title: 'Technic', text: 'Primary public pack entry shown on the current site header.', url: 'https://www.technicpack.net/modpack/wargames-release.1994291', label: 'Open Technic' },
        { title: 'CurseForge', text: 'Secondary public pack entry shown on the current site header.', url: 'https://www.curseforge.com/minecraft/modpacks/wargames-official', label: 'Open CurseForge' },
        { title: 'Discord support', text: 'Use this if something goes wrong during setup or first launch.', url: 'https://discord.gg/ZmCJDg8ev7', label: 'Open Discord' },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Installation page rewritten around the live pack entry points instead of placeholder example text.' },
      ],
    },
    'first-steps': {
      title: 'First steps',
      summary: 'A short onboarding page for the first few things a player should understand after joining Wargames.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>Wargames is not meant to be approached like a generic vanilla server. A lot of the pack identity comes from its custom territory, war, combat, and protection systems, so it helps to know the basics early.</p>
        <h3>Your first priorities</h3>
        <ol>
          <li>Join the Discord so you can see announcements, support replies, and live clarifications.</li>
          <li>Learn the difference between normal world territory, administrative zones, and faction-owned land.</li>
          <li>Read the <strong>Factions and war</strong> page before assuming the server uses standard off-the-shelf faction rules.</li>
          <li>Treat the custom mods and forks as part of the pack identity, not as random add-ons.</li>
        </ol>
        <h3>Good pages to read next</h3>
        <ul>
          <li><strong>WGCore overview</strong> for the core server logic</li>
          <li><strong>WGCore command reference</strong> for the most important player commands</li>
          <li><strong>Custom mods and forks</strong> for the Wargames-specific content stack</li>
        </ul>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'First-step guidance rewritten to direct players into the actual custom systems documentation.' },
      ],
    },
    factions: {
      title: 'Factions and war',
      summary: 'A player-facing explanation of the territory and war model built around WGCore.',
      version: 'WGCore build X138 context',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>Wargames uses a custom faction and territory system built around <strong>WGCore</strong>. It is not just a stock factions plugin with a few tweaks on top. Territory, control, protection, war, and integration with other mods all sit on the same backbone.</p>
        <h3>Core ideas</h3>
        <ul>
          <li><strong>Territory is chunk-based.</strong> Claims, control, and protection are resolved per chunk.</li>
          <li><strong>Zones matter.</strong> Areas such as Safezones and Warzones can override normal faction-territory behaviour.</li>
          <li><strong>Control and ownership are not always the same thing.</strong> During conflict, a chunk may be owned by one side while temporarily controlled by another.</li>
          <li><strong>War uses phases.</strong> The current WGCore implementation revolves around preparation, raiding, capture, and cooldown handling.</li>
        </ul>
        <h3>What players should expect</h3>
        <ul>
          <li>Faction creation, membership, invites, applications, and role-based command access</li>
          <li>Claim growth based around core and expansion systems rather than only a simple radius</li>
          <li>Admin-defined zones that can change what is allowed in an area</li>
          <li>War progression that is meant to be structured rather than chaotic freeform raiding at all times</li>
        </ul>
        <div class="callout">
          <strong>Important</strong>
          <p>If you are trying to understand how Wargames conflict works, read this page together with the WGCore overview and the WGCore command reference. The commands tell you how to interact with the system, but the overview explains why the system behaves the way it does.</p>
        </div>
      `,
      resources: [
        {
          title: 'WGCore overview',
          text: 'Read this for the deeper explanation of claims, zones, war, permissions, and integrations.',
          url: '#wgcore',
          label: 'Open WGCore overview',
        },
        {
          title: 'WGCore command reference',
          text: 'Read this if you want a quick player-facing summary of the major /wg branches.',
          url: '#wgcore-commands',
          label: 'Open command reference',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Added a proper player-facing factions and war overview based on the current WGCore architecture.' },
      ],
    },
    combat: {
      title: 'Combat',
      summary: 'Combat in Wargames is shaped by the custom mod stack, territory rules, and server-side integration logic.',
      version: 'Survival v2.0B',
      releaseState: 'Updating',
      lastUpdated: '2026-04-07',
      needsUpdate: true,
      updateMessage: 'This page is still missing weapon-specific writeups and server-specific balance guidance. Treat it as a framework page for now.',
      body: `
        <p>Combat in Wargames is not defined by one mod alone. It is the result of the pack composition plus the server-side rules enforced through WGCore and the Wargames-specific forks.</p>
        <h3>What already matters</h3>
        <ul>
          <li>Zone protection and territory permissions can affect what is allowed in an area</li>
          <li>Flan's Mod Ultimate-R Wargames Edition and MCHeli-R Wargames Edition are both part of the custom stack</li>
          <li>Support mods such as HitmarkerPlus and Foliage+ also shape how fights feel in practice</li>
        </ul>
        <h3>Planned additions</h3>
        <ul>
          <li>Weapon category overviews</li>
          <li>Vehicle notes and flight-combat guidance</li>
          <li>A clearer explanation of how territory protection and combat rules interact</li>
        </ul>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Combat page reframed around the actual custom Wargames stack, but still marked as incomplete.' },
      ],
    },
    survival: {
      title: 'Survival systems',
      summary: 'A framework page for survival mechanics, progression, and server-specific rules that still need to be written up properly.',
      version: 'Survival v2.0B',
      releaseState: 'Updating',
      lastUpdated: '2026-04-07',
      needsUpdate: true,
      updateMessage: 'This page still needs a proper writeup of world progression, economy rules, and server-specific survival mechanics.',
      body: `
        <p>This page is reserved for the broader survival layer of the pack rather than only factions, war, or combat. It will eventually be the place for explaining progression, environment rules, pack-specific expectations, and any systems that shape long-term play.</p>
        <h3>Good future sections</h3>
        <ul>
          <li>World progression and danger scaling</li>
          <li>Loot, resources, and progression bottlenecks</li>
          <li>Server rules that differ from player assumptions</li>
          <li>How the custom mods support the wider survival loop</li>
        </ul>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Survival page kept visible but clearly marked as still under construction.' },
      ],
    },
    wgcore: {
      title: 'WGCore overview',
      summary: 'WGCore is the foundational territory, faction, and rules-enforcement mod behind the Wargames server experience for Minecraft 1.7.10.',
      version: '1.0.0_X138-release',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p><strong>WGCore</strong> is the backbone mod behind the Wargames server ruleset. It handles faction territory, claim control, administrative zones, permissions, war flow, protection checks, and compatibility surfaces for the rest of the custom stack.</p>
        <div class="callout">
          <strong>In plain language</strong>
          <p>If you want to understand why the server behaves a certain way in claimed land, safezones, warzones, or faction conflict, WGCore is usually the answer.</p>
        </div>
        <h3>What WGCore is responsible for</h3>
        <ul>
          <li>Chunk-based faction territory claiming</li>
          <li>Zone systems such as Safezones, Warzones, Monuments, Resource Nodes, and Wilderness</li>
          <li>Relation-aware permission resolution</li>
          <li>Persistent ownership and control tracking for claims</li>
          <li>War declaration, raiding, capture, and war-resolution behaviour</li>
          <li>Protection hooks for block actions, interaction, explosions, and PvP-related checks</li>
          <li>Integration paths for other mods used by Wargames, including HBM and MCHeli</li>
        </ul>
        <h3>How the system is structured</h3>
        <p>The current codebase is built around services and persistent saved data rather than burying core logic inside random commands or event handlers. That matters because the server needs territory state, faction state, and war state to stay consistent even when players are offline.</p>
        <h3>Major systems currently visible in the codebase</h3>
        <ul>
          <li><strong>Faction services</strong> for creation, lifecycle, invites, applications, homes, warps, role changes, and permissions</li>
          <li><strong>Territory services</strong> for claims, permissions, relocation, expansion cleanup, and re-expansion cooldown handling</li>
          <li><strong>War services</strong> for declaration, presence checks, resolution, rewards, points, cooldowns, and global grace handling</li>
          <li><strong>Control services</strong> for territory control state and passive decay</li>
          <li><strong>Team services</strong> for team settings such as friendly fire and related visibility behaviour</li>
          <li><strong>Notification services</strong> for countdowns, broadcasts, and offline catch-up delivery</li>
        </ul>
        <h3>Player-facing takeaway</h3>
        <p>WGCore exists so the Wargames server can behave like one coherent game rather than like a loose stack of unrelated mods. Territory, conflict, rules, and integrations are meant to resolve through one consistent system.</p>
      `,
      resources: [
        {
          title: 'WGCore source overview',
          text: 'The current uploaded source is step 138 and already exposes the core architecture clearly through services for factions, territory, war, control, teams, notifications, and integrations.',
          url: '#wgcore-commands',
          label: 'Open command reference',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Added the first real WGCore wiki page using the uploaded step 138 source and project README as the basis.' },
      ],
    },
    'wgcore-commands': {
      title: 'WGCore command reference',
      summary: 'A player-facing command index based on the current /wg and /wgc command roots present in the WGCore source.',
      version: 'WGCore build X138 context',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>The current WGCore source exposes two main command roots:</p>
        <ul>
          <li><code>/wg</code> for normal player and faction interaction</li>
          <li><code>/wgc</code> for administration, force actions, and configuration work</li>
        </ul>
        <h3>Major player command branches currently present under <code>/wg</code></h3>
        <ul>
          <li><code>help</code> and <code>version</code></li>
          <li><code>create</code>, <code>leave</code>, <code>disband</code>, <code>rename</code>, <code>tag</code></li>
          <li><code>apply</code>, <code>applicants</code>, <code>invite</code>, <code>invites</code></li>
          <li><code>promote</code>, <code>demote</code>, <code>kick</code>, <code>transfer</code>, <code>move</code></li>
          <li><code>sethome</code>, <code>home</code>, <code>warp</code></li>
          <li><code>list</code>, <code>info</code>, <code>zone</code>, <code>border</code></li>
          <li><code>war</code>, <code>chat</code>, <code>permission</code>, <code>team</code>, <code>unclaim</code>, <code>fob</code></li>
        </ul>
        <h3>What this means for players</h3>
        <p>The command set is not only about creating a faction and inviting people. WGCore also exposes commands for faction chat, team settings, homes and warps, zone lookups, border visibility, war status, and more advanced territory tools.</p>
        <h3>Administrative branch</h3>
        <p>The uploaded source also contains <code>/wgc</code> subcommands for administration and maintenance, including war controls, config editing, whitelist handling, grace controls, zone tools, claim tools, force actions, and cooldown tools.</p>
        <div class="callout">
          <strong>Documentation note</strong>
          <p>This page is intentionally an index rather than a full syntax manual. The branches listed here are present in the uploaded source, but argument-level command examples should be documented only after they are checked against the live build you are publishing.</p>
        </div>
      `,
      resources: [
        {
          title: 'WGCore overview',
          text: 'Read this first if you want the big-picture explanation behind the commands.',
          url: '#wgcore',
          label: 'Open WGCore overview',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Added the first command index based directly on the registered CommandWG and CommandWGC subcommand trees in the uploaded WGCore source.' },
      ],
    },
    'custom-mods': {
      title: 'Custom mods and forks',
      summary: 'An index page for the Wargames-specific mods and forks currently represented in the uploaded source archives.',
      version: 'Documentation pass 2',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>Wargames relies on a custom code stack, not just a normal public modpack list. The mods below are the Wargames-specific projects and forks currently represented in the uploaded source archives.</p>
        <h3>Custom stack now split into individual wiki pages</h3>
        <ul>
          <li><strong>WGCore</strong> — the faction, territory, war, protection, and integration backbone</li>
          <li><strong>WGEvents</strong> — a separate event-server mod for match flow, spawns, voting, and gamemode automation</li>
          <li><strong>MCHeli-R Wargames Edition</strong> — the Wargames vehicle and aircraft fork built from MCHeli-Reforged</li>
          <li><strong>Flan's Mod Ultimate-R Wargames Edition</strong> — the Wargames infantry and weapon fork built from FMUR</li>
          <li><strong>NTM: Space</strong> — the HBM Space branch used in the Wargames stack</li>
          <li><strong>Foliage+</strong> — passable leaves, slowdown, and rustling behaviour for foliage interaction</li>
          <li><strong>HitmarkerPlus</strong> — a lightweight hitmarker feedback mod for Flan's weapon damage</li>
        </ul>
        <div class="callout">
          <strong>Documentation note</strong>
          <p>This page is now an index rather than the main writeup. Each custom project should have its own page so players can find the relevant information without digging through one giant mixed summary.</p>
        </div>
      `,
      resources: [
        {
          title: 'WGCore',
          text: 'The main Wargames backbone mod.',
          url: '#wgcore',
          label: 'Open WGCore page',
        },
        {
          title: 'WGEvents',
          text: 'The separate Wargames event-server mod.',
          url: '#wgevents',
          label: 'Open WGEvents page',
        },
        {
          title: 'MCHeli-R Wargames Edition',
          text: 'The Wargames vehicle and aircraft fork.',
          url: '#mcheli',
          label: 'Open MCHeli page',
        },
        {
          title: 'Flan\'s Mod Ultimate-R Wargames Edition',
          text: 'The Wargames FMUR fork.',
          url: '#fmur',
          label: 'Open FMUR page',
        },
        {
          title: 'NTM: Space',
          text: 'The HBM Space branch page.',
          url: '#ntm-space',
          label: 'Open NTM: Space page',
        },
        {
          title: 'Foliage+',
          text: 'The foliage interaction support mod.',
          url: '#foliage-plus',
          label: 'Open Foliage+ page',
        },
        {
          title: 'HitmarkerPlus',
          text: 'The hitmarker feedback support mod.',
          url: '#hitmarkerplus',
          label: 'Open HitmarkerPlus page',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Converted the custom-mods page into an index and split the uploaded custom projects into separate wiki pages.' },
      ],
    },
    modpack: {
      title: 'Modpack overview',
      summary: 'A curated overview page for the Wargames pack rather than a raw dump of every jar.',
      version: 'Survival v2.0B',
      releaseState: 'Updating',
      lastUpdated: '2026-04-07',
      needsUpdate: true,
      updateMessage: 'This page currently covers the Wargames-specific custom stack, but it is not yet a complete full pack mod list.',
      body: `
        <p>This page is meant to explain what kind of pack Wargames is, not to overwhelm new players with a giant unsorted list. For now, the most important thing is understanding the role of the custom Wargames forks.</p>
        <h3>Main pack identity</h3>
        <ul>
          <li>Custom faction, war, and territory backbone through WGCore</li>
          <li>Custom combat and vehicle stack through the Wargames FMUR and MCHeli forks</li>
          <li>Additional server flavour and gameplay support through smaller Wargames mods like Foliage+ and HitmarkerPlus</li>
          <li>Broader pack support from the rest of the installed mod list, which can be documented in more detail later</li>
        </ul>
        <h3>Why this page is still marked as updating</h3>
        <p>You asked to start by getting the wiki aligned with the codebases you uploaded. That means the custom Wargames pieces are documented first. A full player-facing mod catalogue can be added after you decide how detailed you want the public pack documentation to be.</p>
      `,
      resources: [
        {
          title: 'Custom mods and forks',
          text: 'This is currently the most useful modpack reference page because it documents the Wargames-specific code you uploaded.',
          url: '#custom-mods',
          label: 'Open custom mods page',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Modpack overview rewritten to focus on the custom Wargames stack first, with a later full pack list still planned.' },
      ],
    },
    'release-notes': {
      title: 'Release notes',
      summary: 'A player-facing page for site changes and visible documentation milestones.',
      version: 'Wiki build',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <p>This page tracks visible changes to the wiki itself and can also be used later for pack-facing notes if you want one public summary page.</p>
        <h3>Current wiki milestones</h3>
        <ul>
          <li>GitHub Pages deployment prepared for <code>wiki.wargames.host</code></li>
          <li>Discord, Technic, and CurseForge links wired into the header</li>
          <li>WGCore overview and WGCore command index added</li>
          <li>First-pass custom mod stack reference added from the uploaded codebases</li>
        </ul>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Wiki content updated from a generic shell into a first-pass Wargames documentation site aligned with the uploaded source code archives.' },
        { date: '2026-04-07', text: 'Initial GitHub Pages starter shell created for Wargames Survival.' },
      ],
    },
    faq: {
      title: 'FAQ',
      summary: 'Quick answers for common questions while the rest of the wiki is still being expanded.',
      version: 'Survival v2.0B',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      body: `
        <h3>Is this a finished wiki?</h3>
        <p>No. It is now a real documentation base, but several pages are still intentionally marked as updating.</p>
        <h3>What is the most important custom mod in the pack?</h3>
        <p>WGCore, because it underpins territory, factions, permissions, protection, war flow, and several integration paths for the rest of the Wargames stack.</p>
        <h3>Why are some pages marked as updating?</h3>
        <p>Because the site supports visible page health. This lets you publish useful documentation now without pretending every section is complete.</p>
        <h3>Can pages stay hidden until release?</h3>
        <p>Yes. In the navigation config, set <code>visible: false</code> for the relevant navigation item and keep the page data ready in the file until you want it exposed.</p>
        <h3>Can each page show when it was last revised?</h3>
        <p>Yes. Every page already supports <code>lastUpdated</code>, a version field, a release-state field, a page banner, and a visible history list.</p>
      `,
      resources: [],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'FAQ updated to match the new code-aligned wiki structure.' },
      ],
    },
    wgevents: {
      title: 'WGEvents',
      summary: 'A separate Wargames mod focused on event automation, match flow, spawns, voting, and gamemode control.',
      version: 'WGEvents source build X26 context',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      updateMessage: '',
      body: `
        <p><strong>WGEvents</strong> is a separate Wargames mod aimed at event-style gameplay rather than the main survival territory stack. The uploaded source shows a structure built around match flow, spawn handling, voting, and gamemode logic.</p>
        <h3>What is visible in the uploaded source</h3>
        <ul>
          <li><strong>Gamemode support</strong> through implementations such as <code>ModeFFA</code> and <code>ModeTDM</code></li>
          <li><strong>Match flow</strong> through services and models such as <code>MatchState</code>, <code>MatchScore</code>, and <code>MatchStatusFormatter</code></li>
          <li><strong>Spawn systems</strong> through <code>SpawnService</code>, <code>SpawnStore</code>, and <code>SpawnZone</code></li>
          <li><strong>Voting systems</strong> through <code>VotingService</code></li>
          <li><strong>Player-state handlers</strong> for things like combat lock, freeze behaviour, build lock, idle logic, and lifecycle management</li>
        </ul>
        <h3>What this means in practice</h3>
        <p>WGEvents is not just a generic utility mod. It is a dedicated event-server framework for running controlled match-based gameplay with spawn logic, team or free-for-all modes, and server-side restrictions that help event rounds run cleanly.</p>
        <div class="callout">
          <strong>How it differs from WGCore</strong>
          <p>WGCore is the persistent territory and war backbone for the survival environment. WGEvents is a separate event-oriented system built around rounds, spawns, match states, and minigame-style automation.</p>
        </div>
      `,
      resources: [
        {
          title: 'Custom mods index',
          text: 'Return to the custom stack index page.',
          url: '#custom-mods',
          label: 'Back to custom mods',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Replaced the hidden WGEvents placeholder with a real page based on the uploaded WGEvents source structure.' },
      ],
    },
    mcheli: {
      title: 'MCHeli-R Wargames Edition',
      summary: 'The Wargames fork of MCHeli-Reforged, used for aircraft, vehicles, and related combat systems.',
      version: 'MCHeli source build 1.8.1_X25 context',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      updateMessage: '',
      body: `
        <p><strong>MCHeli-R Wargames Edition</strong> is the Wargames fork of MCHeli-Reforged. The uploaded source is a large aircraft and vehicle codebase, with Wargames-specific work layered on top for server use and integration.</p>
        <h3>What is visible in the uploaded source and README</h3>
        <ul>
          <li>Aircraft and vehicle systems through the normal MCHeli vehicle stack</li>
          <li>Radar, IR, and lock-related behaviour through classes such as <code>MCH_Radar</code> and related aircraft systems</li>
          <li>Explosion handling through classes such as <code>MCH_Explosion</code> and packet/effect support</li>
          <li>Wargames-specific work mentioned in the README around explosions, IR and radar filtering, and tighter server-side behaviour</li>
        </ul>
        <h3>Why this matters on Wargames</h3>
        <p>This fork is not being used as a completely untouched public release. It is one of the major combat pillars of the Wargames stack, and the source shows ongoing work to make aircraft, targeting, and explosion behaviour fit the server's custom ruleset more cleanly.</p>
        <div class="callout">
          <strong>Documentation scope</strong>
          <p>This page is an overview page for now. Vehicle-by-vehicle guides, lock systems, and usage tutorials can be added later once you decide how much player-facing detail you want to expose.</p>
        </div>
      `,
      resources: [
        {
          title: 'Custom mods index',
          text: 'Return to the custom stack index page.',
          url: '#custom-mods',
          label: 'Back to custom mods',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Added a separate MCHeli page based on the uploaded Wargames fork source and README.' },
      ],
    },
    fmur: {
      title: 'Flan\'s Mod Ultimate-R Wargames Edition',
      summary: 'The Wargames fork of Flan\'s Mod Ultimate Reforged, used for the pack\'s Flan-based combat content.',
      version: 'FMUR source 1.58.x context',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      updateMessage: '',
      body: `
        <p><strong>Flan's Mod Ultimate-R Wargames Edition</strong> is the Wargames fork of FMUR. The uploaded source is a large combat codebase covering guns, hitboxes, player combat events, networking, and broader Flan-style systems.</p>
        <h3>What is visible in the uploaded source</h3>
        <ul>
          <li>Gun and combat events such as reloads, gun fire, bullet hits, soldier death, and revive-related flow</li>
          <li>Hitbox and damage-related systems through classes such as <code>HitboxHelper</code></li>
          <li>Packet-heavy multiplayer handling for weapon and vehicle behaviour</li>
          <li>A Wargames fork identity in the packaged metadata, naming, and source branch structure</li>
        </ul>
        <h3>What this means on Wargames</h3>
        <p>This fork is one of the main infantry-combat pillars of the server. It sits alongside the rest of the Wargames stack rather than acting as a standalone untouched public mod, so the page should be understood as a Wargames-specific fork page rather than a generic Flan's Mod guide.</p>
        <div class="callout">
          <strong>Note</strong>
          <p>The uploaded source shows version-context mismatch between generated build metadata and gradle properties, so this page deliberately uses a broader version label rather than hardcoding one exact public-facing build number.</p>
        </div>
      `,
      resources: [
        {
          title: 'Custom mods index',
          text: 'Return to the custom stack index page.',
          url: '#custom-mods',
          label: 'Back to custom mods',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Added a separate FMUR page based on the uploaded Wargames fork source and packaged metadata.' },
      ],
    },
    'ntm-space': {
      title: 'NTM: Space',
      summary: 'The HBM Space branch present in the Wargames source stack.',
      version: 'HBM Space source context',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      updateMessage: '',
      body: `
        <p><strong>NTM: Space</strong> is the HBM Space branch represented by the uploaded source archive. Its packaged metadata describes it as a mod that adds weapons, nuclear-themed systems, and space travel.</p>
        <h3>What is visible in the uploaded source</h3>
        <ul>
          <li>A very large content-heavy codebase with weapons, machines, blocks, configuration systems, and world systems</li>
          <li>Radar and combat-related surfaces through the public API and entity interfaces</li>
          <li>Broader machinery, explosives, and world-content support through the main HBM-style package structure</li>
        </ul>
        <h3>Why this page exists</h3>
        <p>Even though this is a much bigger and older codebase than some of the smaller Wargames support mods, it is still part of the custom stack you uploaded and should have its own page in the wiki rather than being buried as a one-line bullet elsewhere.</p>
      `,
      resources: [
        {
          title: 'Custom mods index',
          text: 'Return to the custom stack index page.',
          url: '#custom-mods',
          label: 'Back to custom mods',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Added a separate NTM: Space page based on the uploaded HBM Space source archive and packaged metadata.' },
      ],
    },
    'foliage-plus': {
      title: 'Foliage+',
      summary: 'A lightweight support mod that changes how leaves behave by allowing pass-through movement, slowdown, and rustling.',
      version: 'Foliage+ source build 1.0.0_X11 context',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      updateMessage: '',
      body: `
        <p><strong>Foliage+</strong> is a small but very gameplay-relevant Wargames support mod. The uploaded source and README show a system built around changing leaf behaviour so foliage feels like dense cover rather than solid terrain.</p>
        <h3>What is visible in the uploaded source</h3>
        <ul>
          <li>Leaves can become passable instead of acting like solid collision</li>
          <li>Movement slowdown can be applied while inside foliage</li>
          <li>Rustling sounds are played while moving through leaves</li>
          <li>Config options exist for player-only behaviour, all-entity behaviour, and whether players can be fully covered by leaves</li>
          <li>The mod uses hooks, config, and transformer/coremod pieces rather than only a simple one-file event tweak</li>
        </ul>
        <h3>Why it matters</h3>
        <p>This mod changes how concealment and movement through natural cover feels. On a combat-focused server, that makes it more than just a cosmetic tweak.</p>
      `,
      resources: [
        {
          title: 'Custom mods index',
          text: 'Return to the custom stack index page.',
          url: '#custom-mods',
          label: 'Back to custom mods',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Added a separate Foliage+ page based on the uploaded README, config, hooks, and tick-handler source.' },
      ],
    },
    hitmarkerplus: {
      title: 'HitmarkerPlus',
      summary: 'A lightweight hitmarker feedback mod for Flan-based weapon damage.',
      version: 'HitmarkerPlus source 1.0.20 context',
      releaseState: 'Live',
      lastUpdated: '2026-04-07',
      needsUpdate: false,
      updateMessage: '',
      body: `
        <p><strong>HitmarkerPlus</strong> is a focused support mod that adds hitmarker feedback for Flan-based gun damage. The uploaded README and source show both the network side and the client overlay side of the system.</p>
        <h3>What is visible in the uploaded source</h3>
        <ul>
          <li>A server-side hit detection handler that sends feedback packets back to the shooter</li>
          <li>A dedicated <code>PacketHitmarker</code> network path</li>
          <li>A client overlay system for rendering the hitmarker feedback</li>
          <li>Client-only support logic through proxy and overlay registration</li>
        </ul>
        <h3>Why it matters</h3>
        <p>Even though it is much smaller than WGCore, FMUR, or MCHeli, it is still part of the custom feel of the pack because it changes how combat feedback feels in play.</p>
      `,
      resources: [
        {
          title: 'Custom mods index',
          text: 'Return to the custom stack index page.',
          url: '#custom-mods',
          label: 'Back to custom mods',
        },
      ],
      videos: [],
      history: [
        { date: '2026-04-07', text: 'Added a separate HitmarkerPlus page based on the uploaded README, packet flow, and overlay source.' },
      ],
    },
  },
};
