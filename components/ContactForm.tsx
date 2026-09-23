"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-gold-dim/50 bg-ink-900 p-8">
        <p className="font-display text-xl text-gold-light">
          Message sent.
        </p>
        <p className="mt-2 text-[14px] text-slate-light">
          Thank you for reaching out — our team will reply shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[13px] text-slate-light">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-white/10 bg-ink-900 px-4 py-3 text-[14px] text-paper placeholder:text-slate outline-none focus:border-gold"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[13px] text-slate-light">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-white/10 bg-ink-900 px-4 py-3 text-[14px] text-paper placeholder:text-slate outline-none focus:border-gold"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-[13px] text-slate-light">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full border border-white/10 bg-ink-900 px-4 py-3 text-[14px] text-paper placeholder:text-slate outline-none focus:border-gold"
          placeholder="General inquiry"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-[13px] text-slate-light">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full border border-white/10 bg-ink-900 px-4 py-3 text-[14px] text-paper placeholder:text-slate outline-none focus:border-gold"
          placeholder="Tell us how we can help."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center bg-gold px-7 py-3.5 text-[13px] tracking-wide2 uppercase text-ink hover:bg-gold-light transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-[13px] text-red-400">
          Something went wrong sending your message. Please try again, or
          email us directly at{" "}
          <a href="mailto:info@queticosuperiorresources.com" className="underline">
            info@queticosuperiorresources.com
          </a>.
        </p>
      )}
    </form>
  );
}
