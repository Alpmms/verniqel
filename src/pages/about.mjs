import { DISCLAIMER } from "../site.mjs";

export default {
  file: "about.html",
  title: "About",
  description: "About VERNIQEL: why it exists, how its research approach works, and the two co-founders, Metehan Alp Memis and Şevval Ulus Memiş.",
  body: (cfg) => `
<section class="page-head"><div class="wrap">
  <p class="eyebrow">About</p>
  <h1>Physical verification, engineering judgment and agency authority — kept in that order.</h1>
  <p>VERNIQEL is a research-driven project building engineering decision support for compaction quality assurance. It exists to make the evidence behind a verification decision easier to see, question and record — not to replace any part of the process that decides.</p>
</div></section>

<section class="sec" id="origin"><div class="wrap sec-grid">
  <div class="sec-head"><h2>Why VERNIQEL exists</h2></div>
  <div class="sec-body">
    <p>Intelligent compaction produces dense data, and physical verification stays sparse. VERNIQEL began as an attempt to rank where the next physical test would add the most evidence. The research record showed that ranking alone did not show a clear advantage over simple baselines — so the product moved towards what the evidence did support: keeping provenance, applicability and disagreement in view, abstaining when the evidence is not enough, and recording each verification question from start to finish.</p>
    ${cfg.showICorps ? `<p>The current direction was shaped by customer-discovery conversations held while the founders took part in the UW–Madison NSF I-Corps Regional Cohort, Fall 2026. Conversations are summarised only in de-identified form; no participant, organization or statement is named on this site.</p>` : ""}
    <p class="plain-note">Participation in an I-Corps cohort is a training and customer-discovery programme; it is not funding for, or an endorsement of, the technology. The universities named on this page are the founders' affiliations. They do not own, sponsor or endorse VERNIQEL.</p>
  </div>
</div></section>

<section class="sec sec-alt" id="approach"><div class="wrap sec-grid">
  <div class="sec-head"><h2>Research approach</h2></div>
  <div class="sec-body">
    <ul>
      <li>Protocols and evaluation rules are frozen before results are seen, and frozen results are reproduced exactly from the archived code.</li>
      <li>Negative and inconclusive results are published with the same prominence as any other.</li>
      <li>Nothing is tuned against a benchmark it is later evaluated on.</li>
      <li>Every public statement about the product carries a status: implemented, demonstrated, research hypothesis or future capability.</li>
      <li>Public datasets and reports are cited as sources only, without implying endorsement.</li>
    </ul>
    <p><a href="research.html">Read the research record</a></p>
  </div>
</div></section>

<section class="sec" id="team"><div class="wrap">
  <h2 style="margin-bottom:32px">Team</h2>
  <div class="team">
    <article class="person">
      <h3 class="h3" style="font-size:1.6rem">Metehan Alp Memis</h3>
      <p class="role">Co-Founder</p>
      <dl>
        <dt>Position</dt><dd>PhD Student, Civil &amp; Environmental Engineering</dd>
        <dt>Affiliation</dt><dd>University of Illinois Urbana-Champaign</dd>
        <dt>Focus</dt><dd>Transportation infrastructure, pavement engineering, intelligent compaction, field validation, research direction and product development.</dd>
      </dl>
    </article>
    <article class="person">
      <h3 class="h3" style="font-size:1.6rem">Şevval Ulus Memiş</h3>
      <p class="role">Co-Founder</p>
      <dl>
        <dt>Degree</dt><dd>M.S. Data Science, with a background in Computer Engineering and Data Science</dd>
        <dt>Affiliation</dt><dd>Maryville University</dd>
        <dt>Focus</dt><dd>Data science, machine learning, analytics, visualization, data workflows and product and data development.</dd>
      </dl>
    </article>
  </div>
  <p class="disclaimer" style="margin-top:40px">${DISCLAIMER}</p>
  <p><a href="contact.html">Get in touch about a pilot or collaboration</a></p>
</div></section>
`,
};
