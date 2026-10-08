import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
    title: "Field Programme",
    description:
        "The current field programme at Baril Bay — mapping, soil sampling and rock sampling — and planned exploration work for Quetico Superior Resources Inc.",
};

const TIMELINE = [
    { when: "Oct 2026", what: "Field mapping & sampling", status: "done" },
    { when: "Nov/Dec 2026", what: "Assay results", status: "pending" },
    { when: "Jan 2027", what: "Airborne geophysics", status: "planned" },
    { when: "Q1 2027", what: "Target generation", status: "planned" },
    {
        when: "Q2 2027",
        what: "Follow-up exploration / trenching",
        status: "planned",
    },
    { when: "Q2/Q3 2027", what: "Drill targets", status: "planned" },
];

export default function FieldProgrammePage() {
    return (
        <>
            <PageHeader
                eyebrow="Field Programme"
                title="Our current field programme at Baril Bay."
                intro="A live record of exploration work as it happens on the ground, separate from the property's historical results."
            />

            {/* Current programme */}
            <section className="bg-ink py-24 md:py-28">
                <div className="container-site">
                    <div className="mb-10 flex items-center gap-3">
                        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-gold" />
                        <p className="label-strata">Currently Underway</p>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl leading-snug max-w-2xl">
                        Mapping, soil sampling and rock sampling at Baril Bay.
                    </h2>
                    <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-light">
                        A field programme began at Baril Bay on 1 October 2026, with a
                        crew on site for approximately 10&ndash;12 days. The programme
                        comprises geological mapping, soil sampling and rock sampling
                        across priority areas of the property.
                    </p>

                    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
                        <div className="border-t border-gold-dim/50 pt-5">
                            <p className="font-display text-xl text-gold-light">
                                Oct 1, 2026
                            </p>
                            <p className="mt-1 text-[13px] text-slate">Programme started</p>
                        </div>
                        <div className="border-t border-gold-dim/50 pt-5">
                            <p className="font-display text-xl text-gold-light">
                                10&ndash;12 days
                            </p>
                            <p className="mt-1 text-[13px] text-slate">Crew on site</p>
                        </div>
                        <div className="border-t border-gold-dim/50 pt-5">
                            <p className="font-display text-xl text-gold-light">
                                Mapping
                            </p>
                            <p className="mt-1 text-[13px] text-slate">
                                Soil &amp; rock sampling
                            </p>
                        </div>
                        <div className="border-t border-gold-dim/50 pt-5">
                            <p className="font-display text-xl text-gold-light">TBC</p>
                            <p className="mt-1 text-[13px] text-slate">
                                Results &mdash; samples at lab
                            </p>
                        </div>
                    </div>

                    <p className="mt-10 max-w-2xl text-[13px] leading-relaxed text-slate">
                        Soil and rock samples collected during the programme are being
                        submitted for laboratory analysis. Results will be published
                        here, and on our{" "}
                        <Link
                            href="/news"
                            className="text-gold-light underline underline-offset-2 hover:text-paper transition-colors"
                        >
                            News
                        </Link>{" "}
                        page, once received.
                    </p>
                </div>
            </section>

            {/* Planned work */}
            <section className="border-t border-white/5 bg-ink-900 py-24 md:py-28">
                <div className="container-site">
                    <p className="label-strata mb-5">Planned Work</p>
                    <h2 className="font-display text-3xl md:text-4xl leading-snug max-w-2xl">
                        Airborne geophysical survey planned for January 2027.
                    </h2>
                    <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-light">
                        The programme is expected to include airborne magnetic and VTEM
                        (versatile time-domain electromagnetic) surveying, to further
                        characterize subsurface structure and targets across the
                        property.
                    </p>
                </div>
            </section>

            {/* Exploration timeline */}
            <section className="border-t border-white/5 bg-ink py-24 md:py-28">
                <div className="container-site">
                    <p className="label-strata mb-5">Exploration Timeline</p>
                    <h2 className="font-display text-3xl md:text-4xl leading-snug max-w-2xl">
                        From field mapping to drill targets.
                    </h2>
                    <p className="mt-4 text-[13px] text-slate">
                        Updated as each stage is completed.
                    </p>
                    <ol className="mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
                        {TIMELINE.map((t) => (
                            <li key={t.when} className="border-t border-gold-dim/50 pt-5">
                                <div className="flex items-center gap-2">
                                    {t.status === "done" ? (
                                        <span className="text-sm text-gold">&#10003;</span>
                                    ) : t.status === "pending" ? (
                                        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-gold" />
                                    ) : (
                                        <span className="h-2 w-2 shrink-0 rounded-full border border-gold-dim" />
                                    )}
                                    <p className="font-display text-lg text-gold-light">
                                        {t.when}
                                    </p>
                                </div>
                                <p className="mt-2 text-[13px] text-slate">{t.what}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Links out */}
            <section className="border-t border-white/5 bg-ink-900 py-20">
                <div className="container-site flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-md text-[15px] leading-relaxed text-slate-light">
                        For the property&rsquo;s historical exploration results, visit
                        the Projects page.
                    </p>
                    <Link
                        href="/projects"
                        className="inline-flex items-center border border-gold-dim px-7 py-3.5 text-[13px] tracking-wide2 uppercase text-gold-light hover:border-gold hover:text-paper transition-colors whitespace-nowrap"
                    >
                        View Projects
                    </Link>
                </div>
            </section>
        </>
    );
}