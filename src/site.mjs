// Layout and shared components for the VERNIQEL public website. Plain template strings; no framework.
import { readFileSync } from "node:fs";

const read = (p) => JSON.parse(readFileSync(new URL(p, import.meta.url), "utf8"));
export const results = read("./data/results.json");
export const external = read("./data/external_validation.json");
export const spatial = read("./data/external_spatial.json");
export const claims = read("./data/claims.json");
export const shots = Object.fromEntries(read("./assets/shots/manifest.json").map((s) => [s.id, s]));

export const GUARDRAIL = "Decision support only — final engineering decisions remain with the engineer.";
export const TITLE = "VERNIQEL — Evidence before decisions";
export const DESCRIPTION =
  "VERNIQEL (formerly LayerProof): field verification for pavement and earthwork. Engineering decision support for compaction quality assurance that keeps roller data, physical tests and field observations side by side, shows where they disagree, and abstains when the evidence is not enough.";
export const TRUST = "Engineering decision support — not automated acceptance.";
export const DISCLAIMER = "VERNIQEL provides engineering decision support. It does not determine construction acceptance or replace required agency testing, specifications, or professional judgment.";

export const NAV = [
  ["product.html", "Product"],
  ["workflow.html", "Workflow"],
  ["research.html", "Research"],
  ["pilot.html", "Pilot"],
  ["about.html", "About"],
];
export const NAV_CTA = ["contact.html", "Partner with us"];
const FOOT = [["index.html", "Home"], ...NAV, ["evidence.html", "Evidence states"], ["contact.html", "Contact"]];

export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Signed number with a real minus sign, as reported in the accepted tables (rounded for display only). */
export const signed = (x, d = 2) => (x == null ? "—" : `${x < 0 ? "−" : "+"}${Math.abs(x).toFixed(d)}`);
export const fixed = (x, d = 3) => (x == null ? "—" : x.toFixed(d));

const mark = (base) => `<img class="mark" src="${base}assets/brand/mark-ivory.svg" width="26" height="25" alt="" aria-hidden="true">`;

/** Frozen data files (exports of accepted results) still name the product LayerProof; the site shows the current name. */
export const brandName = (t) => String(t).replace(/LayerProof/g, "VERNIQEL");

/** A real application screenshot (cropped/resized copy). Opens the larger copy on click. */
export function shot(id, caption, { wide = false, eager = false } = {}) {
  const s = shots[id];
  if (!s) throw new Error(`unknown screenshot ${id}`);
  const lg = s.sizes[1400], sm = s.sizes[760];
  return `<figure class="shot${wide ? " shot-wide" : ""}">
  <a class="shot-frame" href="assets/shots/${lg.file}" aria-label="Open larger screenshot: ${esc(s.shows)}">
    <img src="assets/shots/${sm.file}" srcset="assets/shots/${sm.file} ${sm.width}w, assets/shots/${lg.file} ${lg.width}w"
      sizes="(min-width: 1100px) ${wide ? "1040px" : "720px"}, 94vw" width="${lg.width}" height="${lg.height}"
      alt="${esc(s.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>
  </a>
  <figcaption>${caption} <span class="shot-data">${s.interface === "verniqel" ? "Screenshot of the current VERNIQEL interface" : "Screenshot of the application (interface before the VERNIQEL rebrand)"}. Data shown: ${esc(s.data)}.</span></figcaption>
</figure>`;
}

export const guardrail = (text = GUARDRAIL) => `<p class="guardrail" role="note">${esc(text)}</p>`;

/** Link to the hosted read-only demo. Without a hosted URL nothing is rendered: the site never shows a dead button. */
export function demoCta(cfg, { primary = false } = {}) {
  if (!cfg.demoUrl) return "";
  return `<a class="btn ${primary ? "btn-primary" : "btn-line"}" href="${esc(cfg.demoUrl)}" rel="noopener">Explore the live demo</a>`;
}

/** A row of calls to action; renders nothing when every item is empty. */
export const ctaRow = (...items) => { const html = items.filter(Boolean).join(""); return html ? `<p class="cta-row">${html}</p>` : ""; };

export function contactBlock(cfg) {
  const ways = [];
  if (cfg.contactEmail) ways.push(`<a class="btn btn-primary" href="mailto:${esc(cfg.contactEmail)}?subject=VERNIQEL%20pilot%20or%20collaboration">Email ${esc(cfg.contactEmail)}</a>`);
  if (cfg.contactFormUrl) ways.push(`<a class="btn btn-line" href="${esc(cfg.contactFormUrl)}" rel="noopener">Open the contact form</a>`);
  if (!ways.length) return `<p class="contact-note">To start a conversation, reply to either co-founder through the channel where you received this link.</p>`;
  return `<p class="cta-row">${ways.join("")}</p>`;
}

/** Schematic of the SPARC trial lane tags (26 tagged positions; 8 with a physical density test on soil layer 1). */
export function laneStrip() {
  const tested = new Set(["A2", "A4", "A6", "A8", "B2", "B4", "B6", "B8"]);
  const cw = 76, ch = 58, x0 = 34, y0 = 10;
  let g = "";
  ["A", "B"].forEach((lane, r) => {
    g += `<text x="12" y="${y0 + r * (ch + 6) + ch / 2 + 5}" class="ls-lane">${lane}</text>`;
    for (let c = 0; c <= 12; c++) {
      const x = x0 + c * cw, y = y0 + r * (ch + 6), tag = `${lane}${c}`;
      g += `<rect x="${x}" y="${y}" width="${cw - 4}" height="${ch}" rx="2" class="ls-cell${tested.has(tag) ? " ls-anchored" : ""}"/>`;
      for (let i = 0; i < 9; i++) for (let j = 0; j < 4; j++)
        g += `<circle cx="${x + 8 + i * 7}" cy="${y + 11 + j * 12}" r="1.5" class="ls-ic" style="--d:${c * 40 + r * 120}ms"/>`;
      if (tested.has(tag)) g += `<circle cx="${x + (cw - 4) / 2}" cy="${y + ch / 2}" r="9" class="ls-test"/><circle cx="${x + (cw - 4) / 2}" cy="${y + ch / 2}" r="3" class="ls-test-dot"/>`;
    }
  });
  for (let c = 0; c <= 12; c++) g += `<text x="${x0 + c * cw + (cw - 4) / 2}" y="${y0 + 2 * (ch + 6) + 12}" class="ls-tag" text-anchor="middle">${c}</text>`;
  return `<figure class="lanestrip">
  <svg viewBox="0 0 1024 152" role="img" aria-labelledby="ls-title ls-desc">
    <title id="ls-title">Dense roller data, sparse physical tests</title>
    <desc id="ls-desc">Two lanes, A and B, divided into 13 tagged positions each. Every position is covered by many intelligent-compaction observations. Only eight positions carry a physical density test.</desc>
    ${g}
  </svg>
  <figcaption><span class="ls-key"><i class="k-ic"></i>intelligent-compaction observations</span><span class="ls-key"><i class="k-test"></i>physical field test</span>
  <span class="ls-note">Schematic of the lane-tag layout of the SPARC field trial: 26 tagged positions, physical density tests at 8 of them on soil layer 1. Dot counts are illustrative.</span></figcaption>
</figure>`;
}

export function page({ file, title, description, body, cfg, basePrefix = "", noindex = false }) {
  const b = basePrefix;
  const full = file === "index.html" ? TITLE : `${title} — VERNIQEL`;
  const canonical = cfg.siteUrl ? `${cfg.siteUrl.replace(/\/$/, "")}/${file === "index.html" ? "" : file}` : "";
  const ogImage = cfg.siteUrl ? `${cfg.siteUrl.replace(/\/$/, "")}/assets/og.png` : `${b}assets/og.png`;
  const nav = [...NAV, ...(cfg.demoUrl ? [[cfg.demoUrl, "Demo"]] : [])]
    .map(([href, label]) => {
      const ext = /^https?:/.test(href);
      return `<li><a href="${ext ? esc(href) : b + href}"${href === file ? ' aria-current="page"' : ""}${ext ? ' rel="noopener"' : ""}>${label}</a></li>`;
    }).join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${esc(description || DESCRIPTION)}">
<meta name="robots" content="${file === "404.html" || noindex ? "noindex" : "index, follow"}">
<meta name="theme-color" content="#20221e">
${canonical ? `<link rel="canonical" href="${esc(canonical)}">` : ""}
<meta property="og:type" content="website">
<meta property="og:site_name" content="VERNIQEL">
<meta property="og:title" content="${esc(full)}">
<meta property="og:description" content="${esc(description || DESCRIPTION)}">
<meta property="og:image" content="${esc(ogImage)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="VERNIQEL — Evidence before decisions. Field verification for pavement and earthwork.">
${canonical ? `<meta property="og:url" content="${esc(canonical)}">` : ""}
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${b}favicon.svg" type="image/svg+xml">
<link rel="icon" href="${b}favicon.png" sizes="48x48" type="image/png">
<link rel="apple-touch-icon" href="${b}apple-touch-icon.png">
<link rel="preload" href="${b}assets/fonts/barlow-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${b}assets/fonts/newsreader-latin-600-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${b}assets/styles.css">
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-head">
  <div class="wrap head-row">
    <a class="brand" href="${b}index.html" aria-label="VERNIQEL home">${mark(b)}<span>VERNIQEL</span></a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" aria-label="Main"><ul>${nav}</ul><a class="nav-cta" href="${b + NAV_CTA[0]}"${file === NAV_CTA[0] ? ' aria-current="page"' : ""}>${NAV_CTA[1]}</a></nav>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div>
      <p class="brand">${mark(b)}<span>VERNIQEL</span></p>
      <p>Engineering decision support for compaction quality assurance. A research-driven project by Metehan Alp Memis and Şevval Ulus Memiş.</p>
      <p class="foot-guard">${GUARDRAIL}</p>
    </div>
    <nav aria-label="Footer"><ul>${FOOT.map(([h, l]) => `<li><a href="${b + h}">${l}</a></li>`).join("")}</ul></nav>
    <div class="foot-notes">
      <p>${DISCLAIMER}</p>
      <p>VERNIQEL is a research prototype. It is not production-certified, and prospective performance in field use has not been established.</p>
      <p>Public datasets and reports are cited as sources only. No endorsement by NCHRP, TRB, MnDOT, MnROAD or any report author is implied.</p>
      <p>University names describe the founders' affiliations only. No university or agency owns, sponsors or endorses VERNIQEL.</p>
      <p>Map screenshots: © OpenStreetMap contributors. This site uses no cookies and no analytics.</p>
    </div>
  </div>
</footer>
<script src="${b}assets/site.js" defer></script>
</body>
</html>
`;
}

const STATUS_LABEL = { IMPLEMENTED: "Implemented", DEMONSTRATED: "Demonstrated", RESEARCH_HYPOTHESIS: "Research hypothesis", FUTURE_CAPABILITY: "Future capability" };
/** A claim-status label (claims governance: every capability statement says how established it is). */
export const status = (s) => `<span class="status st-${s.toLowerCase().replace(/_/g, "-")}">${STATUS_LABEL[s]}</span>`;
export const claim = (id) => { const c = claims.claims.find((x) => x.id === id); if (!c) throw new Error(`unknown claim ${id}`); return status(c.status); };
export function claimsTable() {
  const rows = claims.claims.map((c) => `<tr><td>${esc(brandName(c.claim))}</td><td>${status(c.status)}</td></tr>`).join("");
  const key = Object.entries(claims.statuses).map(([k, v]) => `<li>${status(k)} <span>${esc(v)}</span></li>`).join("");
  return `<ul class="status-key">${key}</ul>
<div class="table-wrap" tabindex="0" role="region" aria-label="Claims status"><table class="claims"><caption class="sr-only">Public claims and how established each one is</caption><thead><tr><th scope="col">Statement</th><th scope="col">Status</th></tr></thead><tbody>${rows}</tbody></table></div>`;
}

/** The case workflow as a diagram: Evidence → Review → Conflict → Abstain / Proceed → Verify → Resolve → Record. */
export function workflowDiagram() {
  const steps = [["Evidence", "Roller data, tests, observations, context"], ["Review", "Alignment, applicability, provenance"], ["Conflict", "Disagreement listed, never settled by software"], ["Abstain / Proceed", "Say what cannot be concluded"], ["Verify", "A physical test, with its reason"], ["Resolve", "The engineer decides and says why"], ["Record", "Append-only case history and report"]];
  return `<ol class="cflow" aria-label="VERNIQEL case workflow">${steps.map(([t, d], i) => `<li class="${i === 3 ? "fork" : ""}"><span class="n">${i + 1}</span><strong>${t}</strong><span>${d}</span></li>`).join("")}</ol>`;
}
