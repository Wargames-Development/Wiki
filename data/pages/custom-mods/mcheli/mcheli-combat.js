window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["mcheli-combat"] = {
  title: "Combat & protection",
  summary: "How damage and explosions are controlled.",
  body: `
    <p>Combat is controlled by WGCore.</p>
    
            <h3>Explosion rules</h3>
            <ul>
              <li>Block damage can be completely blocked</li>
              <li>Entity damage can still apply separately</li>
              <li>Explosions are filtered per action</li>
            </ul>
    
            <h3>Damage rules</h3>
            <ul>
              <li>No damage in safezones</li>
              <li>Vehicle damage follows same rules</li>
              <li>All damage is attributed to a source</li>
            </ul>
  `.trim()
};
