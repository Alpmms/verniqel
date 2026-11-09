import { shot, workflowDiagram, claim, DISCLAIMER, TRUST } from "../site.mjs";

const step = (n, id, title, body) => `
<article class="wstep" id="${id}">
  <span class="wn">${String(n).padStart(2, "0")}</span>
  <div><h3>${title}</h3>${body}</div>
</article>`;

export default {
  file: "workflow.html",
  title: "Workflow",
  description: "The VERNIQEL verification case workflow: evidence, review, conflict, abstain or proceed, verify, resolve and record — with the engineer deciding at every step.",
  body: () => `
<section class="page-head"><div class="wrap">
  <p class="eyebrow">Workflow</p>
  <h1>Evidence → Review → Conflict → Abstain / Proceed → Verify → Resolve → Record</h1>
  <p>Seven steps from the first piece of evidence to a recorded answer. Software prepares and records; the engineer decides.</p>
  <p class="trust">${TRUST}</p>
</div></section>

<section class="sec on-dark"><div class="wrap">
  ${workflowDiagram()}
</div></section>

<section class="sec"><div class="wrap wsteps">
${step(1, "evidence", "Evidence", `<p>Roller exports, physical test results, inspector observations and project context are imported through versioned adapters. The original file is kept byte for byte with its SHA-256 fingerprint, parser version and mapping. ${claim("provenance")}</p>`)}
${step(2, "review", "Review", `<p>An evidence review aligns the sources by location, layer, pass and time, and states for each piece of evidence whether it can be located, aligned and compared. Units and vendor metrics are kept as reported: a roller value is not treated as a density or a stiffness.</p>`)}
${step(3, "conflict", "Conflict", `<p>Where aligned evidence disagrees beyond a stated tolerance, the pair goes to the conflict queue with possible explanations and what would reduce uncertainty. Tolerances come from the project policy, with their source and version shown. VERNIQEL does not decide which evidence is correct. ${claim("conflicts")}</p>`)}
${step(4, "abstain", "Abstain / Proceed", `<p>A case abstains when there are open conflicts, no applicable physical evidence of the quantity in question, or context that makes comparison unsafe. Abstaining is a result: the case lists what cannot be concluded and what would resolve it. ${claim("abstention")}</p>
  ${shot("v16-cannot", "What the evidence cannot conclude, for one case on synthetic data.")}`)}
${step(5, "verify", "Verify", `<p>When physical verification would help, VERNIQEL offers a recommendation with its reasons — why here, which test type, what it may resolve and what it will not. The engineer accepts it, changes the location or the test type, rejects it or defers it, with a reason. ${claim("engineer-decision")}</p>`)}
${step(6, "resolve", "Resolve", `<p>The new result is imported like any other evidence, the snapshot is refreshed and the engineer records the resolution and why. A resolved case records how the verification question was answered; it is not an acceptance determination.</p>`)}
${step(7, "record", "Record", `<p>Every event is appended to the case's hash-chained history. The Verification Evidence Report exports the whole record — evidence, conflicts, abstention, decisions, outcome and chain — as PDF, Markdown, JSON or CSV. ${claim("report")}</p>`)}
</div></section>

<section class="sec sec-alt" id="pilot"><div class="wrap feature">
  <div>
    <p class="eyebrow">In a pilot</p>
    <h2 class="h3" style="font-size:1.6rem">The same workflow, with the recommendation sealed.</h2>
    <p>In pilot mode the engineer's plan is frozen before VERNIQEL's recommendation is revealed, and the database refuses any other order. The study's arms, stopping rule and modalities are fixed when the study is created.</p>
    <p><a href="pilot.html">How a pilot runs</a></p>
  </div>
  ${shot("v16-pilot", "A pilot study with its ten-step freeze-before-reveal workflow, on synthetic data.")}
</div></section>

<section class="sec"><div class="wrap">
  <p class="disclaimer">${DISCLAIMER}</p>
</div></section>
`,
};
