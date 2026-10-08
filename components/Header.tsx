"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/exploration", label: "Exploration" },
  { href: "/projects", label: "Projects" },
  { href: "/field-programme", label: "Field Programme" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-ink-900/85 backdrop-blur">
      <div className="container-site flex items-center justify-between gap-6 h-20">
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Full menu only on wide screens; below that the menu button is used,
            so the tabs never crowd or overlap. */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7 whitespace-nowrap">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] text-slate-light hover:text-gold-light transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Get in touch remains visible on wide laptop/desktop screens. */}
        <Link
          href="/contact"
          className="hidden xl:inline-flex shrink-0 items-center border border-gold-dim px-3.5 py-2 text-[12px] tracking-wide2 uppercase text-gold-light hover:bg-gold hover:text-ink hover:border-gold transition-colors"
        >
          Get in touch
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="xl:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-px w-6 bg-gold-light transition-transform ${open ? "translate-y-[7px] rotate-45" : ""
              }`}
          />
          <span
            className={`block h-px w-6 bg-gold-light transition-opacity ${open ? "opacity-0" : "opacity-100"
              }`}
          />
          <span
            className={`block h-px w-6 bg-gold-light transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
          />
        </button>
      </div>

      {open && (
        <nav className="xl:hidden border-t border-white/5 bg-ink-900">
          <div className="container-site flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] text-slate-light hover:text-gold-light border-b border-white/5 last:border-none"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}