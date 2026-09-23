import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Exploration",
  description:
    "How Quetico Superior Resources Inc. explores for gold, copper and platinum group metals across northwestern Ontario — district-scale exploration using modern techniques including AI.",
};

const APPROACH = [
  {
    title: "Historical Data Review",
    body: "Compiling assessment files, prospector records and past assay results to identify ground with genuine structural and geochemical merit.",
  },
  {
    title: "Field Verification",
    body: "On-the-ground prospecting, trenching and sampling to confirm and extend historical showings before committing to drilling.",
  },
  {
    title: "Targeted Drill Programs",
    body: "Focused, cost-disciplined drilling guided by structural geology rather than broad, speculative coverage.",
  },
  {
    title: "Stakeholder Engagement",
    body: "Working openly with local communities, landowners and regulators throughout every stage of exploration.",
  },
];

export default function ExplorationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Exploration"
        title="Gold & critical metals exploration, done in harmony with the land."
        intro="Quetico Superior Resources Inc. is a gold and critical metals exploration company working in the greenstone belts of northwestern Ontario — in harmony with the environment, local communities and our stakeholders and investors."
      />

      <section className="border-b border-white/5 bg-ink-900 py-20 md:py-24">
        <div className="container-site max-w-3xl">
          <p className="label-strata mb-5">Our Focus</p>
          <h2 className="font-display text-3xl md:text-4xl leading-snug">
            District-scale exploration, using modern techniques including AI.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-light">
            Rather than looking at a single showing in isolation, we look at
            the greenstone belts and structural corridors of the region as a
            whole — and apply modern techniques, including AI, to that work.
          </p>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-28">
        <div className="container-site">
          <p className="label-strata mb-8">How We Work</p>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {APPROACH.map((item) => (
              <div key={item.title} className="border-t border-gold-dim/50 pt-6">
                <h2 className="font-display text-xl text-gold-light">
                  {item.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-slate">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-ink-900 py-24 md:py-28">
        <div className="container-site max-w-2xl">
          <p className="label-strata mb-5">Our Commitment</p>
          <h2 className="font-display text-3xl md:text-4xl leading-snug">
            A new gold and critical metals explorer, built on partnership.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-light">
            We believe responsible exploration starts with relationships —
            with the land, with the communities who call this region home,
            and with the stakeholders and investors who share in the
            journey. Every project we advance is guided by that principle.
          </p>
        </div>
      </section>
    </>
  );
}
