# Wargames Wiki starter

This is a static GitHub Pages-ready wiki shell for **wiki.wargames.host**.

## What is included

- clear sidebar navigation
- dark green styling based on the Wargames branding
- swap-in logo file at `assets/images/logo.png`
- Discord, Technic, and CurseForge links in the header
- optional Discord widget embed
- page-level update notice banner
- per-page version, state, and last updated metadata
- simple version history block on each page
- hide/show control for navigation entries
- no build step required

## Quick edit points

### 1. Social links and Discord widget
Edit `data/site-data.js`:

- `site.social.discord.url`
- `site.social.discord.serverId`
- `site.social.technic.url`
- `site.social.curseforge.url`

### 2. Logo updates
Replace:

- `assets/images/logo.png`

Keep the filename the same and the site will use the new logo automatically.

### 3. Show or hide pages
In `data/site-data.js`, each navigation item has:

```js
{ id: 'factions', label: 'Factions and war', status: 'hidden', visible: false }
```

Set `visible: true` when you want it to appear.

### 4. Mark a page as outdated
For any page:

```js
needsUpdate: true,
updateMessage: 'This page is still being rewritten and may not match the latest live server balance yet.'
```

### 5. Add a page
Add the page in `pages`, then add its matching item in `navigation`.

## GitHub Pages deployment

1. Create a repository for the wiki.
2. Upload these files to the repository root.
3. In GitHub, open **Settings -> Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Choose your main branch and `/root`.
6. Save.

Because this is plain static HTML, CSS, and JS, GitHub Pages can host it directly with no action workflow required.

## Custom domain

A `CNAME` file is included already:

```txt
wiki.wargames.host
```

### Cloudflare setup

Point the subdomain to GitHub Pages with one of these common approaches:

- `CNAME` record for `wiki` -> `<your-github-username>.github.io`
- or the GitHub Pages target GitHub shows inside the repository Pages settings

Then in GitHub Pages, set the custom domain to:

```txt
wiki.wargames.host
```

Leave Cloudflare SSL in normal proxied mode if it works cleanly for your setup. If certificate issuance or propagation behaves oddly, temporarily disabling proxying on the DNS record can help during initial validation.

## Recommended next step

Once this is live, start replacing the placeholder text in:

- `installation`
- `first-steps`
- `survival`
- `combat`
- `release-notes`
- `faq`

All content lives in one place: `data/site-data.js`.
