import { shot, guardrail, demoCta, claim, DISCLAIMER } from "../site.mjs";

const stage = (n, id, name, lead, body, figure) => `
<div class="stage" id="${id}">
  <div><span class="stage-no">Foundation ${n} of 7</span><h2>${name}</h2><p class="lead" style="margin-top:14px">${lead}</p>${body}</div>
  <div>${figure}</div>
</div>`;

export default {
  file: "product.html",
  title: "Product",
  description: "The VERNIQEL product: verification cases, the conflict queue, Why here? explanations, field observations, the verification evidence report and the evidence foundation underneath, shown with screenshots of the working application.",
  body: (cfg) => `
<section class="page-head"><div class="wrap">
  <p class="eyebrow">Product</p>
  <h1>A verification case for every open engineering question.</h1>
  <p>VERNIQEL turns a questionable result, a coverage gap or a disagreement between evidence into a verification case: an auditable record of the evidence, what it can and cannot support, the engineer's decision and the outcome.</p>
  ${cfg.demoUrl ? `<p class="cta-row" style="margin-top:22px">${demoCta(cfg, { primary: true })}</p>` : `<p class="plain-note" style="margin-top:22px">A read-only demonstration of the application is packaged for hosting. It is not publicly hosted; the screens on this page are screenshots of the same application on a clearly labelled synthetic demonstration project, and on real public field-trial data where stated.</p>`}
</div></section>

<section class="sec" id="cases"><div class="wrap">
  <div class="feature">
    <div>
      <p class="eyebrow">Verification cases</p>
      <h2 class="h3" style="font-size:1.6rem">A queue of questions, not a score.</h2>
      <p>${claim("cases")}</p>
      <p>Each case has an identity, a trigger, a frozen evidence snapshot and a state — from Unresolved through Physical verification planned to Resolved or Closed without resolution. Every change is an appended event with an actor, a time and a reason, chained by hash so that an edit after the fact is detectable.</p>
      <p>The queue filters by state, conflict, abstention, modality, layer and owner. Nothing in the queue rates risk or quality: states describe the evidence, not the construction.</p>
    </div>
    ${shot("v16-queue", "The case queue on synthetic demonstration data.")}
  </div>
  <div class="feature flip" id="resolve">
    <div>
      <p class="eyebrow">Case detail</p>
      <h2 class="h3" style="font-size:1.6rem">What would resolve this?</h2>
      <p>Every case lists what the current evidence can conclude, what it cannot, and the missing evidence that would change that — ordered by a documented product-policy rule, with each item saying what it addresses. VERNIQEL does not claim a test “will fix” anything; it says what the test could inform.</p>
      <p>${claim("abstention")}</p>
    </div>
    ${shot("v16-case-resolve", "The ordered list of missing evidence for one case.")}
  </div>
  <div class="feature" id="why">
    <div>
      <p class="eyebrow">Why here?</p>
      <h2 class="h3" style="font-size:1.6rem">Recommendations that explain themselves.</h2>
      <p>${claim("why-here")}</p>
      <p>A verification recommendation shows why the candidate exists, the recommended test type and why, what the test may resolve and what it will not resolve. Its scientific state is always shown: a research recommendation, not calibrated.</p>
      <p>${claim("engineer-decision")}</p>
    </div>
    ${shot("v16-why-here", "The Why here? panel next to a case.")}
  </div>
  <div class="feature flip" id="conflicts">
    <div>
      <p class="eyebrow">Conflict queue</p>
      <h2 class="h3" style="font-size:1.6rem">Disagreement is evidence too.</h2>
      <p>${claim("conflicts")}</p>
      <p>Roller against physical, test against repeat, method against method, physical against inspector, timestamp and spatial-support mismatches each get a card: why it matters, comparison applicability, possible explanations and what would reduce uncertainty. Dispositions are recorded with a reason.</p>
    </div>
    ${shot("v16-conflict", "A conflict card between two density results on synthetic data.")}
  </div>
  <div class="feature" id="overview">
    <div>
      <p class="eyebrow">Project overview</p>
      <h2 class="h3" style="font-size:1.6rem">The state of the evidence at a glance.</h2>
      <p>Evidence items, open cases, conflicts requiring review, abstaining cases, physical tests and active pilot studies, with provenance completeness and applicability limits beside them.</p>
    </div>
    ${shot("v16-overview", "The project overview on synthetic demonstration data.")}
  </div>
</div></section>

<section class="sec sec-alt" id="more"><div class="wrap">
  <p class="eyebrow">Also in the Pilot Edition</p>
  <h2>Built to sit next to an agency process.</h2>
  <ul class="steps" style="margin-top:32px">
    <li id="field"><strong>Field mode ${claim("field-mode")}</strong><span>A phone-sized form for inspectors: automatic time, optional GPS, category, severity and photo. Observations queue offline and sync later without duplicates.</span></li>
    <li id="report"><strong>Verification Evidence Report ${claim("report")}</strong><span>PDF, Markdown, JSON or a CSV package with checksums, opening with the decision-support disclaimer and closing with the hash chain.</span></li>
    <li id="policy"><strong>Agency and project policy ${claim("policy")}</strong><span>Tolerances and constraints carry their source, policy name, version and origin. Defaults are always shown as defaults.</span></li>
    <li id="calibration"><strong>Calibration states ${claim("calibration")}</strong><span>Not calibrated, data insufficient, project calibration available or outside the calibration domain. VERNIQEL never extrapolates outside a recorded domain.</span></li>
    <li id="ingestion"><strong>Data adapters ${claim("provenance")}</strong><span>Every import keeps the raw file hash, parser version, mapping and row-level outcome, so a result can always be traced to its source.</span></li>
    <li id="access"><strong>Project roles ${claim("roles")}</strong><span>Admin, Project Manager, Engineer, Inspector, Researcher and Viewer, assigned per project.</span></li>
  </ul>
  <p class="disclaimer" style="margin-top:32px">${DISCLAIMER}</p>
</div></section>

<section class="sec"><div class="wrap">
  <p class="eyebrow">The evidence foundation</p>
  <h2>Underneath every case.</h2>
  <p>The case workflow is built on seven workspaces that import, validate, map and analyse the evidence. These screens use real public field-trial data.</p>
</div></section>

<section class="sec sec-alt"><div class="wrap">
  <ol class="pipe">
    <li><strong><a href="#project">Project</a></strong><span>Metadata, lifts, rollers, coordinate and reference context</span></li>
    <li><strong><a href="#data">Data</a></strong><span>Import with source files, units and versions preserved</span></li>
    <li><strong><a href="#evidence">Evidence</a></strong><span>Validation and evidence sufficiency</span></li>
    <li><strong><a href="#map">Map</a></strong><span>Coverage, tests, areas and associations</span></li>
    <li><strong><a href="#science">Science</a></strong><span>Leakage-resistant analysis of real paired evidence</span></li>
    <li><strong><a href="#verify">Verify</a></strong><span>Evidence gaps and ranked candidates</span></li>
    <li><strong><a href="#pilot">Pilot</a></strong><span>Review, decision log, field-test return</span></li>
  </ol>
  <p class="table-note">This page is a static walkthrough. The website itself does not run the VERNIQEL backend.</p>
</div></section>

<section class="sec" style="padding-top:0"><div class="wrap">
${stage(1, "project", "Project", "Set the reference frame everything else depends on.", `
  <p>A project records its working coordinate system, time zone and vertical datum, the lifts and the rollers. VERNIQEL does not guess any of these: roller data cannot be placed on a map until the coordinate reference is confirmed.</p>
  <p>Every stored file gets a SHA-256 fingerprint, checked in the browser, on the server and again whenever the stored copy is re-verified.</p>`,
  shot("provenance-fingerprint", "A stored file with its fingerprint and three integrity checks."))}
${stage(2, "data", "Data", "Import roller and test files without losing where they came from.", `
  <p>Roller exports and physical-test workbooks are mapped to a canonical form. The original file is kept byte for byte, the mapping is saved and versioned, and each import creates a new dataset version rather than overwriting the last.</p>
  <p>Units are carried as stated in the source. Where a source does not state a unit, VERNIQEL records that instead of assuming one.</p>`,
  shot("data-datasets", "Datasets, their versions and the ingestion runs that produced them."))}
${stage(3, "evidence", "Evidence", "Check what the data can be used for before using it.", `
  <p>Validation runs in levels: file structure, coordinates and reference system, time, measurements and units, then the association between tests and roller data, then whether the minimum data package for an analysis is present.</p>
  <p>Findings are specific. An unconfirmed coordinate system blocks spatial use; unconfirmed time-zone semantics block time-based use. Nothing is silently repaired.</p>`,
  shot("evidence-validation", "Validation levels with the findings that block spatial and temporal use."))}
${stage(4, "map", "Map and evidence twin", "See the roller coverage and the tests in the same place.", `
  <p>The map draws recorded evidence only: roller observations, coverage, physical tests, lots and sublots, associations and located validation findings. At large scale the server returns aggregated grid cells, so a dataset with over a million rows never reaches the browser as individual points.</p>
  <p>Roller values are shown as the vendor's source metric. The map does not interpolate, estimate stiffness or mark zones.</p>
  <p>Where a project records its alignment, the evidence twin places the same evidence by station, lane and lift, with the construction events, conflicts, where VERNIQEL stopped and the field work. Each evidence type keeps its own symbol; there is no heat map and no combined score.</p>`,
  shot("twin-plan", "The evidence twin plan view on the synthetic demonstration project."))}
${stage(5, "science", "Science", "Evaluate real paired evidence, and keep the result whatever it is.", `
  <p>A gate checks that the roller data and the tests are real, from the same site, spatially referenced, in known units and deterministically associated. Only then are baseline models evaluated, always held out by physical test location so that neighbouring rows cannot leak into the test set.</p>
  <p>Negative and inconclusive results are stored and shown like any other. <a href="research.html">See what the real study found.</a></p>`,
  shot("science-gate", "The evidence gate on real field-trial data, with statistical adequacy left unresolved."))}
${stage(6, "verify", "Verify", "Find the evidence gaps and rank where another test may help.", `
  <p>VERNIQEL ranks candidate locations by <span class="code">EVIDENCE_GAP_PRIORITY</span>, built from seven visible components. A read-only simulation shows how many units would gain a physical anchor if a test were taken at a candidate, without assuming any test result.</p>
  ${guardrail("Decision support only — final test location selection remains with the engineer.")}`,
  shot("verify-candidates", "Ranked candidates with support state, priority and reason codes.") + shot("verify-components", "The component breakdown behind one candidate.") + shot("twin-verification", "Verification across the synthetic demonstration project, by station and lane."))}
${stage(7, "pilot", "Pilot", "Close the loop with the engineer and the field.", `
  <p>The Pilot tab holds a readiness checklist, a log of engineer decisions on each candidate, and a before-and-after comparison once a new physical test has been imported. A decision is added next to the ranking; the ranking itself is never rewritten.</p>
  <p><a href="pilot.html">How a pilot would run</a></p>`,
  shot("pilot-readiness", "The pilot readiness checklist.") + shot("pilot-decisions", "The engineer review log beside the ranked candidates."))}
</div></section>
`,
};
