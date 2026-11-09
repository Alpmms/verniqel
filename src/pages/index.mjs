import { shot, results, TRUST, DISCLAIMER, workflowDiagram, claim, demoCta } from "../site.mjs";
import { spatialStatement, spatialVerdict, spatialCounts } from "./_parts.mjs";

const soil = results.week5.find((r) => r.run === "A_dry_density_soil_layer1");
const ugm = results.week5.find((r) => r.run === "A_dry_density_UGM_layer2");
const m = (x) => `${x < 0 ? "−" : "+"}${Math.abs(x).toFixed(2)}`;

// Small line icons (original, 24 px grid, stroke only).
const I = {
  provenance: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 14l2 2 4-4"/></svg>`,
  applicability: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`,
  disagreement: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h11l-3-3M17 17H6l3 3"/></svg>`,
  abstention: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M8 12h8"/></svg>`,
};

export default {
  file: "index.html",
  title: "VERNIQEL",
  body: (cfg) => `
<section class="hero hero-dm" id="hero" aria-labelledby="hero-title">
  <div class="wrap">
    <div class="hero-copy">
      <h1 id="hero-title"><span>Evidence</span> <span>before</span> <span>decisions.</span></h1>
      <p class="lede">Field verification for pavement and earthwork.</p>
      <p class="cta-row">
        <a class="btn btn-primary" href="workflow.html">Explore the workflow</a>
        <a class="btn btn-line" href="pilot.html">Partner on a pilot</a>
        ${demoCta(cfg)}
      </p>
      <p class="trust">${TRUST}</p>
    </div>
  </div>
  <img class="hero-mark" src="assets/brand/mark-outline.svg" width="236" height="225" alt="" aria-hidden="true">
</section>

<section class="intro" id="intro" aria-labelledby="intro-title">
  <div class="wrap intro-grid">
    <div>
      <p class="formerly">Research prototype · Formerly LayerProof</p>
      <h2 id="intro-title">Know when the evidence is enough.</h2>
      <p class="lead">VERNIQEL brings roller data, physical tests and field observations into one auditable verification case — showing where the evidence agrees, where it conflicts, and when it is not enough to conclude.</p>
      <p>The decision stays with the engineer. VERNIQEL keeps it open while the evidence is not enough, and shows what would change that.</p>
      <p class="intro-links"><a href="#principles">What it keeps in view</a> <a href="research.html">View the evidence</a></p>
    </div>
    ${shot("v16-case-head", "A verification case: its state, the evidence map and what would resolve it.", { eager: true })}
  </div>
</section>

<section class="statement" id="problem">
  <div class="wrap">
    <p class="eyebrow">The problem</p>
    <h2>More data does not automatically mean a better decision.</h2>
    <div class="cols">
      <div><h3>Roller data is dense</h3><p>Intelligent-compaction systems log thousands of measurement values per lift. They describe the roller's response, in the vendor's own units — not density, not stiffness.</p></div>
      <div><h3>Physical tests are sparse</h3><p>Density, moisture, LWD or DCP results exist at a handful of spots, and each answers a different question about the layer.</p></div>
      <div><h3>Context decides what is comparable</h3><p>Layer, lift, pass, time, position and calibration decide whether two pieces of evidence can be compared at all.</p></div>
    </div>
    <p class="kicker">When those sources disagree, or simply do not overlap, the useful answer is often “the evidence is not enough yet” — and what would change that.</p>
  </div>
</section>

<section class="sec sec-alt" id="principles">
  <div class="wrap">
    <p class="eyebrow">What VERNIQEL keeps in view</p>
    <h2>Four questions before any interpretation.</h2>
    <div class="pillars">
      <article class="pillar"><div class="ic">${I.provenance}</div><h3>Provenance</h3><p>Where did this result come from? Every file is fingerprinted, versioned and kept with its source, parser version and import history.</p></article>
      <article class="pillar"><div class="ic">${I.applicability}</div><h3>Applicability</h3><p>Can it be located, aligned in time and compared with the other evidence here? If not, VERNIQEL says which condition fails.</p></article>
      <article class="pillar" id="disagreement"><div class="ic">${I.disagreement}</div><h3>Disagreement</h3><p>When aligned evidence disagrees, it goes to a conflict queue with possible explanations. The software never picks the correct result.</p></article>
      <article class="pillar"><div class="ic">${I.abstention}</div><h3>Abstention</h3><p>When the evidence cannot support a conclusion, VERNIQEL abstains and lists what cannot be concluded and what would resolve it.</p></article>
    </div>
  </div>
</section>

<section class="sec on-dark" id="workflow">
  <div class="wrap">
    <p class="eyebrow">The workflow</p>
    <h2>One verification question, from first evidence to a recorded answer.</h2>
    <p>Each question becomes a verification case. The evidence is frozen into a snapshot, disagreement is listed, the case abstains or proceeds, a physical test is planned with its reason, and the engineer's resolution is appended to a hash-chained record.</p>
    ${workflowDiagram()}
    <p style="margin-top:28px"><a href="workflow.html">Walk through the workflow</a></p>
  </div>
</section>

<section class="sec" id="explain">
  <div class="wrap feature">
    <div>
      <p class="eyebrow">Why here?</p>
      <h2>A recommendation should explain itself.</h2>
      <p>Every verification recommendation says why it exists, what a test at that location may resolve — and what it will not resolve. Its scientific state is stated next to it: a research recommendation, not calibrated and not validated prospectively.</p>
      <p>${claim("why-here")}</p>
    </div>
    ${shot("v16-why-here", "The Why here? panel for one recommendation, on synthetic demonstration data.")}
  </div>
</section>

<section class="sec sec-alt" id="engineer">
  <div class="wrap feature flip">
    <div>
      <p class="eyebrow">Engineering judgment</p>
      <h2>The engineer remains the decision-maker.</h2>
      <p>For each recommendation the engineer can accept it, change the location, change the test type, reject it or defer it — always with a reason. The decision is appended next to the original recommendation, which is never rewritten.</p>
      <ul class="decisions" aria-label="Engineer decision options"><li>Accept</li><li>Change location</li><li>Change modality</li><li>Reject</li><li>Defer</li></ul>
      <p class="disclaimer">${DISCLAIMER}</p>
    </div>
    ${shot("v16-conflict", "A conflict card. VERNIQEL lists possible explanations and does not decide which evidence is correct.")}
  </div>
</section>

<section class="sec" id="prospective">
  <div class="wrap sec-grid">
    <div class="sec-head"><p class="eyebrow">Pilot mode</p><h2>Built for prospective evaluation.</h2></div>
    <div class="sec-body">
      <p class="lead">VERNIQEL includes infrastructure for prospective field evaluation. Prospective performance has not yet been established.</p>
      <p>In pilot mode the engineer's plan is frozen before the VERNIQEL recommendation is revealed, and the database refuses any other order. Study arms are fixed by the protocol, outcomes are recorded as measured, and estimated or scenario figures are labelled as such.</p>
      <p>${claim("pilot-infra")} ${claim("prioritization-value")}</p>
      <p><a href="pilot.html">How a pilot works</a></p>
    </div>
  </div>
</section>

<section class="sec sec-alt" id="negative">
  <div class="wrap">
    <p class="eyebrow">Research record</p>
    <h2>Negative results stay visible.</h2>
    <p>The questions VERNIQEL was tested on, and the answers as they came out. Nothing was tuned after the results were known.</p>
    <div class="negres">
      <div><h3>Retrospective check on a field trial</h3><span class="verdict">${results.week8_overall}</span><p>Historical test locations were hidden one at a time. The frozen ranking did not show a clear advantage over simple baselines.</p></div>
      <div><h3>External spatial benchmark</h3>${spatialVerdict()}<p>${spatialStatement()}</p></div>
      <div><h3>Roller values and physical density</h3><span class="verdict">NO PREDICTIVE MODEL ACCEPTED</span><p>On a real field trial, simple models built from roller values did worse than a mean baseline at held-out locations (linear-model R² ${m(ugm.ols_r2)} on UGM layer 2, ${m(soil.ols_r2)} on soil layer 1). Roller values did not show a stable universal relationship with physical density.</p></div>
      <div><h3>Prospective field performance</h3><span class="verdict">NOT YET ESTABLISHED</span><p>No prospective field pilot has been run. That is the open question a pilot partner would help answer.</p></div>
    </div>
    ${spatialCounts()}
    <p class="table-note">The external benchmark is a retrospective external spatial evaluation on published NCHRP 933 / MnROAD data. No endorsement by NCHRP, TRB, MnDOT, MnROAD or any report author is implied.</p>
    <p><a href="research.html">Read the full research record</a></p>
  </div>
</section>

<section class="sec" id="who">
  <div class="wrap">
    <p class="eyebrow">Who it is for</p>
    <h2>Designed for workflows such as…</h2>
    <div class="aud">
      <div><h3>Agency field and materials engineers</h3><p>Reviewing questionable results and documenting why an additional test was or was not taken.</p></div>
      <div><h3>Contractor quality-control teams</h3><p>Keeping roller data, tests and field observations together on one lift.</p></div>
      <div><h3>Testing and inspection organizations</h3><p>Recording observations in the field and linking them to the evidence they question.</p></div>
      <div><h3>Resident engineers</h3><p>Seeing which verification questions are open, abstaining or waiting on a test.</p></div>
      <div><h3>Researchers</h3><p>Running prospective evaluations with a frozen, auditable protocol.</p></div>
      <div><h3>Quality-assurance managers</h3><p>Exporting a verification evidence report with its provenance intact.</p></div>
    </div>
  </div>
</section>

<section class="cta-band" id="contact">
  <div class="wrap">
    <h2>Bring VERNIQEL alongside your existing workflow.</h2>
    <p>A pilot runs next to your current acceptance process, not instead of it.</p>
    <p class="cta-row"><a class="btn btn-primary" href="contact.html">Discuss a pilot</a><a class="btn btn-line" href="research.html">View research approach</a></p>
  </div>
</section>
`,
};
