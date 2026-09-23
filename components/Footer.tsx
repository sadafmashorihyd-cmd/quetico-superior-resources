import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-ink-900">
      <div className="container-site py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Logo compact />
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-slate">
            Exploring the Quetico–Superior region of northwestern Ontario for
            gold, copper and platinum group metals.
          </p>
        </div>

        <div>
          <p className="label-strata mb-4">Company</p>
          <ul className="space-y-2.5 text-[14px] text-slate-light">
            <li><Link href="/about" className="hover:text-gold-light transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-gold-light transition-colors">Services</Link></li>
            <li><Link href="/projects" className="hover:text-gold-light transition-colors">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-gold-light transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="label-strata mb-4">Contact</p>
          <address className="not-italic text-[14px] leading-relaxed text-slate-light">
            55 York Street, Suite 401<br />
            Toronto, ON&nbsp; M5J 1R7<br />
            Canada<br />
            <a href="tel:+447860598086" className="hover:text-gold-light transition-colors">
              +44 7860 598086
            </a><br />
            <a
              href="mailto:info@queticosuperiorresources.com"
              className="hover:text-gold-light transition-colors"
            >
              info@queticosuperiorresources.com
            </a>
          </address>
        </div>
      </div>

      <div className="rule-gold">
        <div className="container-site py-6 flex flex-col md:flex-row gap-2 items-center justify-between text-[12px] text-slate">
          <p>© {year} Quetico Superior Resources Inc. All rights reserved.</p>
          <p>QueticoSuperiorResources.com</p>
        </div>
      </div>
    </footer>
  );
}
