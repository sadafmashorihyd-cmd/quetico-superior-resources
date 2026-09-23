import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Quetico Superior Resources Inc. — 55 York Street, Suite 401, Toronto, ON, Canada.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd like to hear from you."
        intro="For investor, media or general inquiries, reach us using the details below or send a message directly."
      />

      <section className="bg-ink py-24 md:py-28">
        <div className="container-site grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-10">
            <div>
              <p className="label-strata mb-4">Registered Office</p>
              <address className="not-italic text-[15px] leading-relaxed text-slate-light">
                Quetico Superior Resources Inc.<br />
                55 York Street, Suite 401<br />
                Toronto, ON&nbsp; M5J 1R7<br />
                Canada
              </address>
            </div>

            <div>
              <p className="label-strata mb-4">Phone</p>
              <a
                href="tel:+447860598086"
                className="text-[15px] text-paper hover:text-gold-light transition-colors"
              >
                +44 7860 598086
              </a>
            </div>

            <div>
              <p className="label-strata mb-4">Email</p>
              <a
                href="mailto:info@queticosuperiorresources.com"
                className="text-[15px] text-paper hover:text-gold-light transition-colors"
              >
                info@queticosuperiorresources.com
              </a>
            </div>

            <div className="border-t border-gold-dim/40 pt-6">
              <p className="text-[13px] leading-relaxed text-slate">
                Investor and media inquiries are typically answered within
                two business days.
              </p>
            </div>
          </div>

          <div>
            <p className="label-strata mb-6">Send a Message</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
