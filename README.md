# Quetico Superior Resources Inc. — Website

A 5-page corporate website (Home, About Us, Projects, Investors, Contact)
built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## What's included

- `app/` — the 5 pages, root layout, SEO metadata, sitemap.xml and robots.txt
- `components/` — Header (with mobile menu), Footer, Logo, PageHeader, ContactForm
- `public/logo-mark.svg` — the gold survey-mark logo icon
- `public/hero-dawn.jpg` — your sunrise cover photo, used on the homepage hero
- `public/contour.svg` — a subtle topographic line pattern used as a background texture
- `app/api/contact/route.ts` — a stub API route for the contact form (see "Connecting the contact form" below)

## Running it locally

You'll need [Node.js](https://nodejs.org) 18.18 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying

The fastest path is [Vercel](https://vercel.com) (made by the Next.js team):

1. Push this folder to a GitHub repository.
2. Import the repository at vercel.com/new.
3. Vercel auto-detects Next.js — no configuration needed. Click Deploy.
4. In the Vercel project's **Settings → Domains**, add `queticosuperiorresources.com`
   and follow the DNS instructions it gives you (usually one A record and one
   CNAME, set at your domain registrar).

Netlify, AWS Amplify, or any Node.js host will also work.

## Connecting the contact form to real email delivery

Right now, submitting the contact form validates the input and logs it on
the server, but doesn't actually send an email — that needs an email API,
since sending mail directly from a web form isn't reliable on its own.

Recommended: **[Resend](https://resend.com)** (simple, generous free tier,
works well with Next.js).

1. Create a Resend account and verify your domain
   (`queticosuperiorresources.com`) — this is also part of the email setup
   below.
2. `npm install resend`
3. Add your API key as an environment variable named `RESEND_API_KEY`
   (in Vercel: Settings → Environment Variables).
4. In `app/api/contact/route.ts`, uncomment/add the Resend call shown in the
   comment at the top of that file.

## Setting up info@queticosuperiorresources.com

This website can't provision an inbox on its own — that's configured at
your domain registrar and an email provider. The straightforward path:

1. **Pick an email host** — Google Workspace, Microsoft 365, or a
   lighter option like Zoho Mail all work with any domain.
2. **Add the mailbox** `info@queticosuperiorresources.com` in that
   provider's admin console.
3. **Add the DNS records** the provider gives you (MX records at minimum,
   plus SPF, DKIM and ideally DMARC for deliverability) at wherever
   `queticosuperiorresources.com` is registered.
4. Allow up to 24–48 hours for DNS to propagate.

If you'd like, share which registrar and email provider you plan to use and
the exact DNS records can be worked out together.

## Content still to add

Several sections are intentionally placeholders, per the brief:

- **Projects** — the three sample project cards should be replaced with
  real project names, locations, maps and results.
- **About Us** — the leadership/team cards need real names, titles and bios.
- **Investors** — corporate presentation, filings and news are marked
  "Coming Soon" pending your listing process.

## Design notes

- **Palette**: deep navy/near-black (`#0A0E14` / `#0B1220`) with a muted
  antique gold accent (`#C9A227`, highlight `#E8C468`) — see
  `tailwind.config.ts` under `theme.extend.colors`.
- **Type**: Fraunces (serif, display/headings) paired with Inter (sans,
  body/UI) — loaded via `next/font/google` in `app/layout.tsx`.
- **Motif**: a faint topographic contour-line pattern (`public/contour.svg`)
  and the logo's survey-point mark echo the geological survey maps and
  assay data that are central to the exploration business.
