import { shot, guardrail, contactBlock, ctaRow, claim, DISCLAIMER, results } from "../site.mjs";

export default {
  file: "pilot.html",
  title: "Pilot",
  description: "How a VERNIQEL pilot runs next to an existing acceptance process: six steps, the data requested, what a partner receives, and what has and has not been shown so far.",
  body: (cfg) => `
<section class="page-head"><div class="wrap">
  <p class="eyebrow">Pilot</p>
  <h1>Evaluate VERNIQEL without changing your acceptance process.</h1>
  <p>A pilot runs in shadow mode next to your existing specifications and testing. Your engineers keep making every decision; VERNIQEL records the evidence, the questions and the answers, so that both can be compared afterwards.</p>
  <p class="cta-row" style="margin-top:24px"><a class="btn btn-primary" href="contact.html">Start a pilot conversation</a></p>
</div></section>

<section class="sec" id="steps"><div class="wrap">
  <p class="eyebrow">How it runs</p>
  <h2>Six steps.</h2>
  <ol class="steps" style="margin-top:32px">
    <li><strong>Scope</strong><span>Agree one project, the layers and the verification questions in scope, and the study protocol: objective, arms, stopping rule.</span></li>
    <li><strong>Set up</strong><span>Configure the project, its coordinate reference, rollers, lifts and your agency's tolerances, each with its source and version.</span></li>
    <li><strong>Import</strong><span>Bring in roller exports and the tests you already take. Nothing is changed in your own systems.</span></li>
    <li><strong>Run in shadow</strong><span>For each verification step your engineer records a plan first. Only then is VERNIQEL's recommendation revealed — enforced by the database.</span></li>
    <li><strong>Record outcomes</strong><span>Physical results and engineer resolutions are recorded as measured. Estimates and scenarios are labelled separately.</span></li>
    <li><strong>Review together</strong><span>Read the study export and the verification evidence reports, including the results that did not favour VERNIQEL.</span></li>
  </ol>
  ${guardrail("Decision support, not an engineering acceptance determination. Final test location selection remains with the engineer.")}
</div></section>

<section class="sec sec-alt" id="mode"><div class="wrap feature">
  <div>
    <p class="eyebrow">Pilot mode</p>
    <h2 class="h3" style="font-size:1.6rem">Freeze before reveal.</h2>
    <p>${claim("pilot-infra")}</p>
    <p>Each step moves through ten stages: evidence snapshot, recommendation generated, plan frozen, result unavailable, engineer decision, physical test, result revealed, outcomes recorded, metrics updated, next step. The order is checked by the database, so a decision cannot be recorded after its result is known.</p>
  </div>
  ${shot("v16-pilot", "A pilot study on synthetic demonstration data.")}
</div></section>

<section class="sec" id="windows-demo"><div class="wrap feature">
  <div>
    <p class="eyebrow">Windows pilot demo</p>
    <h2 class="h3" style="font-size:1.6rem">VERNIQEL Windows Pilot Demo</h2>
    <p>Experience VERNIQEL locally through a self-contained Windows demonstration environment. ${claim("windows-demo")}</p>
    <p>It installs like ordinary engineering software on Windows 10 or 11 and runs entirely on the laptop: its own local database, no internet connection, and a guided Presentation Mode on a clearly labelled synthetic demonstration project. It is shared directly with prospective partners; there is no public download.</p>
    <p class="cta-row"><a class="btn btn-primary" href="contact.html">Request Demo</a><a class="btn btn-line" href="contact.html">Discuss a Pilot</a></p>
  </div>
  <div>
    <ul class="facts" style="grid-template-columns:1fr">
      <li><strong>Runs locally</strong>Evidence, cases, conflicts, abstention, Why here?, pilot mode and reports — offline.</li>
      <li><strong>Presentation Mode</strong>Fourteen guided steps from the project overview to the Verification Evidence Report.</li>
      <li><strong>Resettable</strong>The demonstration project returns to its starting state with one click.</li>
    </ul>
  </div>
</div></section>

<section class="sec" id="data"><div class="wrap duo">
  <div>
    <h3>Data we would ask for</h3>
    <ul>
      <li>Roller (intelligent-compaction) exports for the layers in scope, in the vendor's own format</li>
      <li>Physical test records you already take: density, moisture, LWD, DCP or others</li>
      <li>Layer, lift and roller details, and the project's coordinate reference</li>
      <li>Inspector observations, where your process records them</li>
      <li>The tolerances and specifications your agency applies, with their source</li>
      <li>Time from engineering staff to record plans and decisions</li>
    </ul>
  </div>
  <div>
    <h3>What a partner receives</h3>
    <ul>
      <li>A configured VERNIQEL project for the pilot, with role-based access</li>
      <li>Verification evidence reports for each case, in PDF, Markdown, JSON or CSV</li>
      <li>The study export with measured, estimated and scenario figures kept apart</li>
      <li>A written review of the results, including negative ones</li>
      <li>Control over whether and how any result is shared publicly</li>
    </ul>
  </div>
</div></section>

<section class="sec sec-alt" id="readiness"><div class="wrap sec-grid">
  <div class="sec-head"><h2>Readiness</h2><p>What a project needs before the loop can start.</p></div>
  <div class="sec-body">
    <p>A working coordinate system and time zone, roller data with its source, a legitimate spatial reference (a confirmed coordinate system or location tags defined by the source), roller and layer context, existing physical tests, a validation result with no blocking finding, and an engineer to review and decide.</p>
    ${shot("pilot-readiness", "The readiness checklist in the application. The status describes what a pilot needs, not the construction.")}
  </div>
</div></section>

<section class="sec" id="status"><div class="wrap sec-grid">
  <div class="sec-head"><h2>Where things stand</h2><p>Stated plainly, so a partner knows what they would be evaluating.</p></div>
  <div class="sec-body">
    <ul>
      <li>The case and pilot workflow runs end to end in the application. ${claim("pilot-infra")}</li>
      <li>The ranking has been checked retrospectively against simple baselines on one field trial. The recorded outcome is ${results.week8_overall.toLowerCase()}. <a href="research.html#retrospective">Details</a>.</li>
      <li>The priority has also been evaluated retrospectively on a public NCHRP/MnROAD spatial field dataset. No clear advantage over the comparison baselines was observed. <a href="research.html#external-spatial">Details</a>.</li>
      <li>No prospective field pilot has been run. No agency or contractor has used VERNIQEL on a live project. ${claim("prioritization-value")}</li>
      <li>VERNIQEL is a research prototype and is not production-certified.</li>
    </ul>
    <p class="table-note">No endorsement by NCHRP, TRB, MnDOT, MnROAD or any report author is implied.</p>
    <p class="disclaimer">${DISCLAIMER}</p>
  </div>
</div></section>

<section class="cta-band"><div class="wrap">
  <h2>Interested in evaluating VERNIQEL on a real project?</h2>
  <p>We welcome conversations with transportation agencies, contractors, testing and quality-assurance organizations, and research groups.</p>
  ${contactBlock(cfg)}
  ${ctaRow(`<a class="btn btn-primary" href="contact.html">Start a pilot conversation</a>`, `<a class="btn btn-line" href="research.html">View research approach</a>`)}
</div></section>
`,
};
