import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The Bon Terra gold and copper exploration property, Boot Bay Area, Thunder Bay Mining Division, Ontario — held by Quetico Superior Resources Inc.",
};

const RESULTS_2025 = [
  { sample: "C273435", rock: "Silicified felsic intrusive", au: "350 ppb" },
  { sample: "C273436", rock: "Quartz vein in chloritic host", au: "6 ppb" },
  { sample: "C273437", rock: "Silicified felsic intrusive", au: "246 ppb" },
  { sample: "C273438", rock: "Quartz + ankerite vein", au: "5,680 ppb" },
  { sample: "C273439", rock: "Gossanous, sheared metasediment", au: "13,000 ppb" },
  { sample: "C273440", rock: "Quartz + ankerite vein", au: "4,370 ppb" },
  { sample: "C273441", rock: "Silicified chlorite schist", au: "63 ppb" },
];

const HISTORICAL = [
  { year: "2008", who: "Benton Resources", result: "Up to 3.6 g/t Au (grab); 1.3 g/t Au over 1 m (channel)" },
  { year: "2022", who: "Property reconnaissance", result: "Best 5 of 9 grab samples: 3.02, 2.28, 0.70, 0.58, 0.57 g/t Au" },
  { year: "2025", who: "Grab sampling program (7 samples)", result: "Up to 13,000 ppb (13 g/t) Au — see table below" },
];

const GALLERY = [
  { src: "/projects/bon-terra-location-map.png", caption: "Provincial location — Bon Terra property, northwestern Ontario", tall: false },
  { src: "/projects/bon-terra-regional-map.png", caption: "Regional access map, Boot Bay Area near Kashabowie", tall: false },
  { src: "/projects/bon-terra-geology-map.png", caption: "Property geology, structure and claim outline", tall: false },
  { src: "/projects/bon-terra-sample-map.png", caption: "2025 grab sample results by location", tall: false },
  { src: "/projects/bon-terra-outcrop-photo.png", caption: "Field outcrop showing quartz veining and shearing", tall: true },
  { src: "/projects/bon-terra-sample-c273435.jpg", caption: "Sample C273435, collected on outcrop", tall: true },
  { src: "/projects/bon-terra-sample-c273436.jpg", caption: "Sample C273436, quartz vein in chloritic host rock", tall: true },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Bon Terra — a Gold & Copper exploration property in the Lac des Mille Lacs Greenstone Belt."
        intro="Located in the Boot Bay Area, Thunder Bay Mining Division, Bon Terra sits along the Quetico Fault — a structural corridor with a long history of gold occurrences in northwestern Ontario."
      />

      {/* Overview */}
      <section className="bg-ink py-24 md:py-28">
        <div className="container-site grid gap-14 md:grid-cols-[1fr_1fr]">
          <div>
            <p className="label-strata mb-5">Property Overview</p>
            <div className="space-y-5 text-[15px] leading-relaxed text-slate-light">
              <p>
                The Bon Terra property lies in the Boot Bay Area (NTS 052B15),
                on the peninsula between Baril Bay and Bull Island on Lac Des
                Milles Lacs Lake — approximately 125–132 km west of Thunder
                Bay and roughly 60 km east of Atikokan. The property is
                accessible via Highway 11 and Brule Creek Road, with several
                fishing lodges and boat access points nearby.
              </p>
              <p>
                The property is underlain by mafic to intermediate
                metavolcanic rocks of the Lac des Mille Lacs greenstone belt,
                within the central Wabigoon Subprovince. The Quetico Fault —
                a major, east–west trending structural feature extending
                over 500 km — runs approximately 1 km south of the property
                through Baril Bay, marking the contact between the volcanic
                Wabigoon Subprovince and the sedimentary Quetico Subprovince.
              </p>
              <p>
                Gold mineralization on the property is of orogenic style,
                typically associated with shear zones showing disseminated
                sulphides, iron-carbonate and silica alteration — a setting
                shared with the Geraldton and Mine Centre gold camps along
                the same structural trend.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 content-start">
            <div className="border-t border-gold-dim/50 pt-5">
              <p className="font-display text-xl text-gold-light">Au (Cu)</p>
              <p className="mt-1 text-[13px] text-slate">Target commodities</p>
            </div>
            <div className="border-t border-gold-dim/50 pt-5">
              <p className="font-display text-xl text-gold-light">Grassroots</p>
              <p className="mt-1 text-[13px] text-slate">Exploration stage</p>
            </div>
            <div className="border-t border-gold-dim/50 pt-5">
              <p className="font-display text-xl text-gold-light">~125 km</p>
              <p className="mt-1 text-[13px] text-slate">West of Thunder Bay</p>
            </div>
            <div className="border-t border-gold-dim/50 pt-5">
              <p className="font-display text-xl text-gold-light">Quetico Fault</p>
              <p className="mt-1 text-[13px] text-slate">~1 km south of property</p>
            </div>
            <div className="col-span-2 border-t border-gold-dim/50 pt-5">
              <p className="font-display text-xl text-gold-light">13 g/t Au</p>
              <p className="mt-1 text-[13px] text-slate">
                Best 2025 grab sample result (sample C273439)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-t border-white/5 bg-ink-900 py-24 md:py-28">
        <div className="container-site">
          <p className="label-strata mb-5">Exploration Results</p>
          <h2 className="font-display text-3xl md:text-4xl leading-snug max-w-2xl">
            A history of anomalous to high-grade gold values.
          </h2>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-gold-dim/50 text-[12px] uppercase tracking-wide2 text-gold">
                  <th className="pb-3 pr-4 font-normal">Year</th>
                  <th className="pb-3 pr-4 font-normal">Program</th>
                  <th className="pb-3 font-normal">Result</th>
                </tr>
              </thead>
              <tbody className="text-slate-light">
                {HISTORICAL.map((row) => (
                  <tr key={row.year} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-paper">{row.year}</td>
                    <td className="py-3 pr-4">{row.who}</td>
                    <td className="py-3">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-10 label-strata mb-4">2025 Grab Sample Results</p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left text-[14px]">
              <thead>
                <tr className="border-b border-gold-dim/50 text-[12px] uppercase tracking-wide2 text-gold">
                  <th className="pb-3 pr-4 font-normal">Sample</th>
                  <th className="pb-3 pr-4 font-normal">Rock Type</th>
                  <th className="pb-3 font-normal">Au</th>
                </tr>
              </thead>
              <tbody className="text-slate-light">
                {RESULTS_2025.map((row) => (
                  <tr key={row.sample} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-paper">{row.sample}</td>
                    <td className="py-3 pr-4">{row.rock}</td>
                    <td className={`py-3 ${parseInt(row.au) >= 1000 ? "text-gold-light font-medium" : ""}`}>
                      {row.au}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-2xl text-[13px] leading-relaxed text-slate">
            Samples were collected October 2025 and analyzed by Actlabs,
            Thunder Bay, via total digestion ICP-OES and fire assay.
            Historical results reported by Benton Resources (2008) and prior
            operators; grab samples are selective and may not represent
            average grades across the property.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-ink py-24 md:py-28">
        <div className="container-site">
          <p className="label-strata mb-5">Maps &amp; Field Photos</p>
          <h2 className="font-display text-3xl md:text-4xl leading-snug max-w-2xl mb-12">
            The property, its geology, and samples from the field.
          </h2>

          <figure className="mb-10">
            <a
              href="/projects/baril-bay-project-map.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-white/5 bg-white"
            >
              <Image
                src="/projects/baril-bay-project-map.png"
                alt="Project scale map of the Baril Bay Property, Boot Bay Area, Ontario, showing mining cell claims, the Benton #1 Trench and nearby occurrences"
                width={2420}
                height={1870}
                quality={95}
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="h-auto w-full"
              />
            </a>
            <figcaption className="mt-3 text-[12px] text-slate">
              Project scale map — Baril Bay Property, Boot Bay Area, Ontario
              (May 2026). Click to open full size.
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {GALLERY.map((item) => (
              <figure
                key={item.src}
                className={`relative overflow-hidden border border-white/5 bg-ink-900 ${item.tall ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                  }`}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
          <p className="mt-6 text-[12px] text-slate">
            Project scale map prepared for Quetico Superior Resources Inc.
            Other maps and figures from prospecting and assessment work by
            Salo Geoscience Services (2025) and R. Hrkac (2022).
          </p>
        </div>
      </section>

      {/* Recommendations */}
      <section className="border-t border-white/5 bg-ink-900 py-24 md:py-28">
        <div className="container-site max-w-2xl">
          <p className="label-strata mb-5">Next Steps</p>
          <h2 className="font-display text-3xl md:text-4xl leading-snug">
            An underexplored property with clear next steps.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-slate-light">
            Structural proximity to the Quetico Fault, combined with the
            alteration and mineralization styles observed to date, indicates
            potential for orogenic-style gold mineralization on the
            property. Recommended next steps include litho-structural
            mapping and a soil geochemical survey, followed by trenching and
            channel sampling of anomalous areas to delineate drill targets.
            A historical copper showing on the property has not yet been
            investigated and warrants follow-up.
          </p>
        </div>
      </section>

      <div className="mt-16 border border-dashed border-gold-dim/50 p-10 text-center mx-6 md:mx-10 mb-24">
        <p className="font-display text-xl text-gold-light">
          Further opportunities under review
        </p>
        <p className="mx-auto mt-3 max-w-md text-[14px] leading-relaxed text-slate">
          We continue to evaluate additional ground across the region as
          part of our ongoing due diligence process. New projects will be
          added to this page as they are confirmed.
        </p>
      </div>
    </>
  );
}
