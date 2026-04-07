window.WIKI_PAGES = window.WIKI_PAGES || {};

window.WIKI_PAGES["hitmarkerplus"] = {
  title: "HitmarkerPlus",
  summary: "A lightweight hitmarker feedback mod for Flan-based weapon damage.",
  version: "HitmarkerPlus source 1.0.20 context",
  releaseState: "Live",
  lastUpdated: "2026-04-07",
  needsUpdate: false,
  updateMessage: "",
  body: "\n        <p><strong>HitmarkerPlus</strong> is a focused support mod that adds hitmarker feedback for Flan-based gun damage. The uploaded README and source show both the network side and the client overlay side of the system.</p>\n        <h3>What is visible in the uploaded source</h3>\n        <ul>\n          <li>A server-side hit detection handler that sends feedback packets back to the shooter</li>\n          <li>A dedicated <code>PacketHitmarker</code> network path</li>\n          <li>A client overlay system for rendering the hitmarker feedback</li>\n          <li>Client-only support logic through proxy and overlay registration</li>\n        </ul>\n        <h3>Why it matters</h3>\n        <p>Even though it is much smaller than WGCore, FMUR, or MCHeli, it is still part of the custom feel of the pack because it changes how combat feedback feels in play.</p>\n      ",
  resources: [
    {
      title: "Custom mods index",
      text: "Return to the custom stack index page.",
      url: "#custom-mods",
      label: "Back to custom mods"
    }
  ],
  videos: [],
  history: [
    {
      date: "2026-04-07",
      text: "Added a separate HitmarkerPlus page based on the uploaded README, packet flow, and overlay source."
    }
  ]
};
