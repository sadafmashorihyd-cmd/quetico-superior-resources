import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative -mt-20 w-full overflow-hidden"
        style={{ aspectRatio: "1200 / 800", minHeight: "480px", maxHeight: "720px" }}
      >
        <Image
          src="/hero-dawn-banner.jpg"
          alt="Sunrise over the treeline of the Quetico–Superior region, northwestern Ontario"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/25 via-transparent to-transparent" />

        <div className="container-site relative flex h-full flex-col justify-end pb-14 md:pb-20">
          <p className="label-strata mb-6">Quetico–Superior Region · Northwestern Ontario</p>
          <h1 className="font-display text-4xl italic leading-[1.15] text-paper sm:text-5xl md:text-6xl md:max-w-3xl">
            A new dawn emerges in the Quetico, exploring for gold, copper &amp;
            platinum group metals.
          </h1>
          <p className="mt-7 max-w-xl text-[15px] leading-relaxed text-slate-light">
            Quetico Superior Resources Inc. is a Canadian mineral exploration
            company built on the Archean geology of the Quetico–Superior
            region — ground that has produced some of Ontario&rsquo;s
            longest-running gold camps.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center bg-gold px-7 py-3.5 text-[13px] tracking-wide2 uppercase text-ink hover:bg-gold-light transition-colors"
            >
              View Our Projects
            </Link>
            <Link
              href="/exploration"
              className="inline-flex items-center border border-gold-dim px-7 py-3.5 text-[13px] tracking-wide2 uppercase text-gold-light hover:border-gold hover:text-paper transition-colors"
            >
              How We Work
            </Link>
          </div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="relative bg-ink-900 py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0 bg-contour-lines bg-cover bg-center opacity-60"
          aria-hidden="true"
        />
        <div className="container-site relative">
          <div className="max-w-2xl">
            <p className="label-strata mb-5">Who We Are</p>
            <h2 className="font-display text-3xl md:text-4xl leading-snug">
              A focused explorer, three metals, one region.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-light">
              We are assembling and advancing a portfolio of exploration
              ground across the Quetico–Superior region and the wider Ontario area, targeting the
              structures and greenstone belts that have historically hosted
              gold, copper and platinum group metal mineralization in
              northwestern Ontario.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-light">
              Our focus is district-scale exploration, using modern
              techniques including AI.
            </p>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
            <div className="border-t border-gold-dim/50 pt-6">
              <h3 className="font-display text-xl text-gold-light">Gold</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate">
                Targeting shear-hosted and quartz-vein gold systems along
                structurally favourable corridors within the region&rsquo;s
                greenstone belts.
              </p>
            </div>
            <div className="border-t border-gold-dim/50 pt-6">
              <h3 className="font-display text-xl text-gold-light">Copper</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate">
                Evaluating volcanogenic and intrusion-related copper
                occurrences associated with mafic and ultramafic rock units.
              </p>
            </div>
            <div className="border-t border-gold-dim/50 pt-6">
              <h3 className="font-display text-xl text-gold-light">
                Platinum Group Metals
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-slate">
                Reviewing mafic–ultramafic intrusive complexes with potential
                for platinum group metal enrichment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Region */}
      <section className="bg-ink py-24 md:py-32">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="label-strata mb-5">Where We Explore</p>
            <h2 className="font-display text-3xl md:text-4xl leading-snug">
              Ground shaped by two billion years of geology.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-light">
              Our ground is situated in the Lac des Mille Lacs area, along
              the Wabigoon Greenstone Belt of the Archean Superior Province —
              a setting of mafic metavolcanic belts,
              metasedimentary basins and structural corridors that has long
              attracted exploration across northwestern Ontario.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-light">
              Our work is centred within reach of Thunder Bay and Atikokan,
              where established infrastructure supports year-round field
              programs.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-gold-dim/50 pt-10 sm:grid-cols-4">
            <div>
              <p className="font-display text-2xl text-gold-light">110 km</p>
              <p className="mt-1 text-[13px] text-slate">West of Thunder Bay</p>
            </div>
            <div>
              <p className="font-display text-2xl text-gold-light">73 km</p>
              <p className="mt-1 text-[13px] text-slate">East of Atikokan</p>
            </div>
            <div>
              <p className="font-display text-2xl text-gold-light">Wabigoon</p>
              <p className="mt-1 text-[13px] text-slate">Subprovince</p>
            </div>
            <div>
              <p className="font-display text-2xl text-gold-light">Archean</p>
              <p className="mt-1 text-[13px] text-slate">Superior Province</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-white/5 bg-ink-900 py-20">
        <div className="container-site flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-2xl md:text-3xl max-w-md">
            Follow our progress as the exploration story unfolds.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gold px-7 py-3.5 text-[13px] tracking-wide2 uppercase text-ink hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}