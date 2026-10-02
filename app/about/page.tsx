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

      {/* Leadership / team */}
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
                  companies. He founded First Class Metals Plc and led the
                  company through its London listing in 2022.
                </p>
                <p>
                  At First Class Metals Plc within 12 months of formation,
                  Ayub secured a strategic joint venture with a partner
                  committing to fund a C$2 million exploration programme in
                  the Hemlo area of Ontario. Ayub also secured financing to
                  purchase the historic Sunbeam Gold project in the Atikokan
                  area of NW Ontario next to Agnico Eagle&rsquo;s Hammond Reef
                  deposit. His focus is on identifying quality precious &amp;
                  critical metal opportunities, establishing strategic
                  partnerships, and creating long-term value for
                  stakeholders.
                </p>
                <p>
                  Ayub subsequently founded an Ontario-focused metals
                  company, Quetico Superior Resources Inc., targeting gold,
                  copper, and platinum group metals (PGMs).
                </p>
              </div>
            </div>

            <div className="mt-8 border border-white/5 bg-ink p-8">
              <div className="h-16 w-16 rounded-full border border-gold-dim/50" />
              <p className="mt-6 font-display text-lg text-paper">
                Ikram (Ike) Osmani, M.Sc., P.Geo.
              </p>
              <p className="mt-1 text-[13px] text-gold-light">
                Independent Technical Consultant
              </p>
              <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-slate-light">
                <p>
                  Mr. Osmani is a professional geologist with more than 40
                  years of experience in mineral exploration, resource
                  development, geological research, and managing publicly
                  traded junior resource companies. He holds an M.Sc. in
                  Geology and Geophysics from the University of Windsor and is
                  a registered Professional Geoscientist (P.Geo.) with
                  Engineers and Geoscientists British Columbia.
                </p>
                <p>
                  Throughout his career, Mr. Osmani has worked extensively in
                  Canada&rsquo;s Precambrian Shield and internationally, with
                  experience spanning a broad range of mineral deposit types,
                  including lode gold, magmatic copper-nickel-PGE, volcanogenic
                  massive sulphide (VMS), banded iron formation (BIF),
                  manganese, rare-earth elements (REE), and lithium-rich
                  rare-element pegmatites. His field-based expertise includes
                  geological mapping, prospecting, geophysical data
                  interpretation, diamond-drilling program design and
                  supervision, drill-core logging and interpretation,
                  exploration project planning and management, and preparing
                  and reviewing NI 43-101 technical reports as a Qualified
                  Person (QP).
                </p>
                <p>
                  Mr. Osmani has been involved in discovering, evaluating, and
                  advancing several mineral exploration projects. He
                  co-developed and published a shear-hosted gold deposit model
                  for far northwestern Ontario and was instrumental in
                  developing a NI 43-101-compliant gold resource of
                  approximately one million ounces in the Indicated and
                  Inferred categories. This resource subsequently became part
                  of the Moss Gold Project in the Shebandowan Greenstone Belt
                  of northwestern Ontario, which Gold X2 Mining Inc. is
                  currently advancing.
                </p>
                <p>
                  In 2001, while exploring and developing a magmatic Ni-Cu-PGE
                  deposit on Aurora Platinum Corporation&rsquo;s Lansdowne
                  House property, Mr. Osmani identified significant
                  titanium-vanadium mineralization. The property is now part
                  of PTX Metals Inc.&rsquo;s W2 property in the Ring of Fire
                  area in northern Ontario.
                </p>
                <p>
                  Mr. Osmani is the founder and principal of Faarnad
                  Geological Consulting Inc. (FGC), a mineral exploration and
                  mining consultancy based in Coquitlam, British Columbia.
                  Through FGC and its associates, he provides geological and
                  technical consulting services to exploration and mining
                  companies, prospectors, and investors. The group brings
                  together experienced professionals with decades of combined
                  industry experience in designing, managing, and executing
                  mineral exploration programs; project evaluation and due
                  diligence; resource estimation; mine planning and
                  scheduling; and technical audits, reviews, and reporting.
                </p>
                <p>
                  Mr. Osmani combines extensive hands-on field experience with
                  technical and corporate-level expertise, providing clients
                  with practical, independent geological advice throughout the
                  exploration and resource-development cycle.
                </p>
              </div>
            </div>

            <div className="mt-8 border border-white/5 bg-ink p-8">
              <div className="h-16 w-16 rounded-full border border-gold-dim/50" />
              <p className="mt-6 font-display text-lg text-paper">
                Robin Webster
              </p>
              <p className="mt-1 text-[13px] text-gold-light">
                Independent Consultant
              </p>
              <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-slate-light">
                <p>
                  A dedicated professional with a wide-ranging skill set
                  developed over 15 years working with Canadian mineral
                  exploration companies. Robin is passionate about building
                  relationships and creating opportunities through responsible
                  exploration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}