import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Quetico Superior Resources Inc. — who we are, our mission and our vision as a mineral exploration company in northwestern Ontario.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Built on ground with a mining history, run by people who know it."
        intro="Quetico Superior Resources Inc. is a Canadian mineral exploration company focused on gold, copper and platinum group metals in the Quetico–Superior region of northwestern Ontario."
      />

      <section className="bg-ink py-24 md:py-28">
        <div className="container-site grid gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="label-strata mb-5">Who We Are</p>
            <div className="max-w-prose space-y-5 text-[15px] leading-relaxed text-slate-light">
              <p>
                We are assembling a focused exploration portfolio across the
                Quetico–Superior region — an area shaped by Archean
                greenstone belts, structural corridors and a long record of
                gold, base metal and platinum group metal occurrences.
              </p>
              <p>
                Our approach starts with the geology: compiling historical
                assessment data, prospector records and modern survey work
                to identify ground with genuine structural and geochemical
                merit before it is advanced into the field.
              </p>
              <p>
                Content on our portfolio, technical team and corporate
                structure is being finalized and will be published here as
                the company&rsquo;s exploration program develops.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="border-l-2 border-gold-dim/60 pl-7">
              <h2 className="font-display text-2xl text-gold-light">
                Our Mission
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate">
                To responsibly explore and advance high-quality gold, copper
                and platinum group metal projects in the Quetico–Superior
                region, applying disciplined geoscience and respect for the
                land and communities where we work.
              </p>
            </div>

            <div className="border-l-2 border-gold-dim/60 pl-7">
              <h2 className="font-display text-2xl text-gold-light">
                Our Vision
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed text-slate">
                To be recognized as a leading junior explorer in
                northwestern Ontario — building a portfolio capable of
                delivering discoveries that create lasting value for
                stakeholders, communities and the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder: leadership / team */}
      <section className="border-t border-white/5 bg-ink-900 py-24 md:py-28">
        <div className="container-site">
          <p className="label-strata mb-5">Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl max-w-xl leading-snug">
            Led from the field, by someone who knows the ground.
          </h2>
          <div className="mt-12 max-w-3xl">
            <div className="border border-white/5 bg-ink p-8">
              <div className="h-16 w-16 rounded-full border border-gold-dim/50" />
              <p className="mt-6 font-display text-lg text-paper">
                Ayub Bodi
              </p>
              <p className="mt-1 text-[13px] text-gold-light">
                Founder
              </p>
              <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-slate-light">
                <p>
                  Ayub Bodi is an entrepreneur and mining executive with a
                  track record of building and advancing natural resources
                  companies. He founded First Class Metals plc and led the
                  company through its London listing in 2022.
                </p>
                <p>
                  Ayub subsequently founded an Ontario-focused metals
                  company, Quetico Superior Resources Inc., targeting gold,
                  copper, and platinum group metals (PGMs).
                </p>
                <p>
                  Within 12 months of formation, he secured a strategic joint
                  venture with a partner committing to fund a C$2 million
                  exploration programme in Ontario. His focus is on
                  identifying quality mineral opportunities, establishing
                  strategic partnerships, and creating long-term value for
                  stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}