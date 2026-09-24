import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "News",
  description:
    "News and exploration updates from Quetico Superior Resources Inc.",
};

type NewsItem = {
  date: string;
  title: string;
  summary: string;
  href?: string; // optional link to a full article or PDF
};

// To publish a news item, add it at the TOP of this list (newest first).
// Example:
//   {
//     date: "1 October 2026",
//     title: "Headline goes here",
//     summary: "One or two sentences about the update.",
//     href: "/news/example.pdf", // optional
//   },
const NEWS: NewsItem[] = [];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News"
        title="Company news and exploration updates."
        intro="Announcements and updates from the field will be published here as our exploration program develops."
      />

      <section className="bg-ink py-24 md:py-28">
        <div className="container-site max-w-3xl">
          {NEWS.length === 0 ? (
            <div className="border border-white/5 bg-ink-900 p-10">
              <p className="label-strata mb-4">Coming Soon</p>
              <p className="text-[15px] leading-relaxed text-slate-light">
                There are no announcements yet. News from the field and
                corporate updates will appear here as the exploration story
                unfolds.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center border border-gold-dim px-7 py-3.5 text-[13px] tracking-wide2 uppercase text-gold-light hover:border-gold hover:text-paper transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-white/5 border-y border-white/5">
              {NEWS.map((item) => (
                <li key={`${item.date}-${item.title}`} className="py-8">
                  <p className="text-[12px] tracking-wide2 uppercase text-gold-dim">
                    {item.date}
                  </p>
                  <h2 className="mt-3 font-display text-2xl text-paper">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-light">
                    {item.summary}
                  </p>
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-[13px] text-gold-light hover:text-paper transition-colors"
                    >
                      Read more →
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
