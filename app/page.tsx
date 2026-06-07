import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
] as const;


const STATS = [
  { value: "8+", label: "Years of Pharmacy Practice" },
  { value: "MBA", label: "Candidate, Cairo University" },
  { value: "FBA", label: "Amazon Marketplace Seller" },
  { value: "Dipl.", label: "Cosmetic Formulations, AIAE 2022" },
] as const;

const EDUCATION = [
  {
    degree: "Bachelor of Pharmaceutical Sciences",
    inst: "Al-Azhar University, Assiut",
    year: "2018",
    tag: "EPSF Member · Highly Accomplished Graduate",
  },
  {
    degree: "Diploma in Cosmetic Formulations",
    inst: "American Institute for Applied Education",
    year: "2022",
    tag: "Compounding · Derma Preparations · Formulation",
  },
  {
    degree: "MBA Candidate",
    inst: "Cairo University",
    year: "In Progress",
    tag: "Operations · Marketing · Finance",
  },
] as const;

const ROLES = [
  {
    title: "Pharmacist",
    org: "Lemon Company (Adama Branch), Riyadh",
    period: "2022 – Present",
    tag: "Current Role",
  },
  {
    title: "Pharmacist Manager",
    org: "Super Drug Pharmacy",
    period: "2020 – 2022",
    tag: "Pharmacy Operations",
  },
  {
    title: "Amazon FBA Seller",
    org: "Marlyn Store",
    period: "2022 – 2025",
    tag: "E-Commerce",
  },
] as const;


const JOURNEY = [
  {
    id: "01",
    tag: "Foundation",
    title: "Pharmacy Practice",
    period: "2018 – Present",
    desc: "Began in direct patient care — building the professional foundation of a rigorous pharmaceutical career through community pharmacies and inpatient hospital practice.",
  },
  {
    id: "02",
    tag: "Operations",
    title: "Pharmacy Operations",
    period: "2020 – 2022",
    desc: "Transitioned from bedside to management — directing pharmacy operations, inventory management, and staff scheduling at Super Drug Pharmacy while also sourcing medical supplies for major hospitals.",
  },
  {
    id: "03",
    tag: "Innovation",
    title: "Cosmetic Formulation",
    period: "2022 – Present",
    desc: "Completed a specialist Diploma in Cosmetic Formulations — developing expertise in compounding, derma preparations, and product formulation that bridges pharmaceutical science with the consumer market.",
  },
  {
    id: "04",
    tag: "Commerce",
    title: "Amazon FBA",
    period: "2022 – 2025",
    desc: "Launched and managed Marlyn Store on Amazon — conducting product research, pricing analysis, optimising online listings, and developing sales strategies to drive rankings and profitability.",
  },
  {
    id: "05",
    tag: "Strategy",
    title: "MBA Candidate",
    period: "2021 – Present",
    desc: "Pursuing graduate business education at Cairo University — studying Operations Management, CRM, Marketing, Economics, and Finance to build rigorous business frameworks on top of scientific expertise.",
  },
] as const;

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#F8F9FA] text-[#111827]">

      {/* Skip to content — keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
                   focus:bg-[#D4A017] focus:text-[#0B1F3A] focus:px-4 focus:py-2
                   focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        Skip to content
      </a>

      {/* ── NAVIGATION ──────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[64px] flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
            <span className="font-semibold text-[#0B1F3A] text-[15px] tracking-tight">
              Mohamed Karam
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-[14px] text-[#64748B] hover:text-[#0B1F3A] transition-colors duration-200 font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-[#0B1F3A] text-white px-4 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-[#122e58] transition-colors duration-200"
          >
            Get In Touch
          </a>

          {/* Mobile menu anchor — links to contact on small screens */}
          <a
            href="#contact"
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-1 rounded-md
                       hover:bg-[#F1F5F9] transition-colors duration-200"
            aria-label="Contact"
          >
            <span className="block w-5 h-[1.5px] bg-[#64748B]" />
            <span className="block w-5 h-[1.5px] bg-[#64748B]" />
            <span className="block w-3 h-[1.5px] bg-[#64748B]" />
          </a>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="pt-[64px] min-h-screen flex items-center bg-[#F1F5F9] overflow-hidden">

        <div className="w-full max-w-[1320px] mx-auto
                        px-6 sm:px-10 lg:px-14 xl:px-20
                        py-12 sm:py-16 lg:py-24
                        grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]
                        gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* LEFT — text */}
          <div className="order-2 lg:order-1">
            <div className="max-w-[540px]">

              {/* Kicker pill */}
              <div className="inline-flex items-center gap-2.5
                              border border-[#E2E8F0] bg-white rounded-full
                              px-4 py-2 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] flex-shrink-0" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#64748B] font-semibold">
                  Pharmacist · MBA Candidate · Entrepreneur
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(2.6rem,4.5vw,4.5rem)] font-bold text-[#0B1F3A]
                             leading-[1.04] tracking-tight mb-8">
                Building at the<br />
                intersection of<br />
                <span className="text-[#D4A017]">Healthcare,</span><br />
                Business &amp;<br />
                Innovation.
              </h1>

              {/* Sub-copy */}
              <p className="text-[15.5px] leading-[1.78] text-[#64748B] mb-10 max-w-[440px]">
                Pharmacist by training, entrepreneur by drive. I combine deep
                pharmaceutical expertise with business acumen — developing
                products, scaling Amazon FBA operations, and building at the
                crossroads of healthcare and commerce.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center gap-2
                             bg-[#0B1F3A] text-white px-7 py-3.5 rounded-lg
                             text-[15px] font-semibold
                             hover:bg-[#122e58] transition-colors duration-200"
                >
                  View Journey
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center
                             bg-white border border-[#CBD5E1] text-[#0B1F3A]
                             px-7 py-3.5 rounded-lg text-[15px] font-semibold
                             hover:border-[#0B1F3A] transition-colors duration-200"
                >
                  Get In Touch
                </a>
              </div>

              {/* Credibility strip */}
              <div className="flex flex-wrap gap-x-7 gap-y-2.5">
                {[
                  "Licensed Pharmacist",
                  "MBA Candidate",
                  "Cosmetic Formulation Specialist",
                  "Amazon FBA Seller",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                      <path d="M2 6.5l2.8 2.8 5.7-5.7" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[12.5px] text-[#64748B] font-medium">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT — portrait card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none">

              {/* Portrait card with rounded corners */}
              <div className="relative rounded-[28px] overflow-hidden bg-[#0B1F3A] aspect-[3/4] w-full
                              shadow-[0_24px_64px_rgba(11,31,58,0.22),0_4px_16px_rgba(11,31,58,0.10)]">
                <Image
                  src="/portrait.png"
                  alt="Mohamed Karam — Pharmacist, MBA Candidate, Entrepreneur"
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-contain object-bottom"
                  quality={92}
                  priority
                />
                {/* Amber square accent — top right */}
                <div className="absolute top-5 right-5 w-11 h-11 rounded-xl bg-[#D4A017]
                                pointer-events-none" />
              </div>

              {/* Bottom info card */}
              <div className="absolute bottom-5 inset-x-5
                              bg-white rounded-2xl
                              shadow-[0_8px_32px_rgba(11,31,58,0.18)]
                              px-4 py-3.5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#0B1F3A]
                                flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[12px] font-bold tracking-tight">MK</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13.5px] font-bold text-[#0B1F3A] leading-tight">
                    Mohamed Karam
                  </div>
                  <div className="text-[11.5px] text-[#64748B] mt-0.5">
                    Pharmacist · Entrepreneur
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[11px] text-[#64748B] font-medium">Open</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* ── PROFESSIONAL JOURNEY ────────────────────────────────── */}
      <section id="journey" className="py-24 lg:py-32 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-3">
                Professional Journey
              </span>
              <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold text-[#0B1F3A] leading-[1.15] tracking-tight">
                From clinical practice to<br className="hidden sm:block" />
                entrepreneurial leadership
              </h2>
            </div>
            {/* Mini direction indicator */}
            <div className="flex items-center gap-2 self-start lg:self-end shrink-0">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#CBD5E1]">2018</span>
              <div className="flex items-center gap-px">
                {[0,1,2,3].map(n => (
                  <div key={n} className="w-3 h-[2px] rounded-full bg-gradient-to-r from-[#0B1F3A] to-[#D4A017]" />
                ))}
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                  <path d="M0 3h6M4 1l2 2-2 2" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4A017]">Now</span>
            </div>
          </div>

          {/* ── DESKTOP: single unified row per milestone ── */}
          {/*
            Each column = one group { dot (z-10, overlays line) + card directly below }.
            The connecting line is at top-6 = 24px = h-12/2 (dot center).
            Hover on either dot OR card animates the entire column together.
          */}
          <div className="hidden lg:block">
            <div className="relative grid grid-cols-5 gap-4">

              {/* Connecting line — top-6 aligns with center of h-12 dots */}
              <div className="absolute top-6 left-[10%] right-[10%] h-[2px] z-0 pointer-events-none bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A] to-[#D4A017]" />

              {JOURNEY.map((item, i) => {
                const isLast = i === JOURNEY.length - 1;
                return (
                  <div key={item.id} className="group flex flex-col items-center gap-5">

                    {/* Numbered dot — z-10 so it overlays the line */}
                    <div className={`relative z-10 w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border-2 shadow-sm transition-all duration-300 group-hover:scale-110 ${
                      isLast
                        ? "bg-[#D4A017] border-[#D4A017] shadow-[#D4A017]/30"
                        : "bg-white border-[#0B1F3A] group-hover:bg-[#0B1F3A]"
                    }`}>
                      <span className={`text-[12px] font-bold select-none transition-colors duration-300 ${
                        isLast ? "text-white" : "text-[#0B1F3A] group-hover:text-white"
                      }`}>
                        {item.id}
                      </span>
                      {/* Hover ring */}
                      <span className="absolute inset-0 rounded-full ring-0 ring-[#D4A017]/20 group-hover:ring-[7px] transition-all duration-300 pointer-events-none" />
                    </div>

                    {/* Card — lifts on hover, coordinated by same group */}
                    <div className={`w-full rounded-xl p-5 border-2 transition-all duration-300 cursor-default group-hover:-translate-y-1.5 ${
                      isLast
                        ? "bg-[#0B1F3A] border-[#0B1F3A] shadow-lg shadow-[#0B1F3A]/20 group-hover:shadow-xl group-hover:shadow-[#0B1F3A]/30"
                        : "bg-[#F8F9FA] border-[#E2E8F0] group-hover:border-[#0B1F3A] group-hover:bg-white group-hover:shadow-lg group-hover:shadow-[#0B1F3A]/8"
                    }`}>
                      <span className="text-[9.5px] uppercase tracking-[0.22em] text-[#D4A017] font-bold block mb-2">
                        {item.tag}
                      </span>
                      <h3 className={`text-[14px] font-bold leading-snug mb-1.5 ${
                        isLast ? "text-white" : "text-[#0B1F3A]"
                      }`}>
                        {item.title}
                      </h3>
                      <p className={`text-[10.5px] font-semibold mb-3 tracking-wide ${
                        isLast ? "text-white/40" : "text-[#0B1F3A]/30"
                      }`}>
                        {item.period}
                      </p>
                      <p className={`text-[12px] leading-[1.72] ${
                        isLast ? "text-white/70" : "text-[#64748B]"
                      }`}>
                        {item.desc}
                      </p>
                      {isLast && (
                        <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
                          <span className="text-[9.5px] font-bold text-[#D4A017] uppercase tracking-[0.22em]">
                            In Progress
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* ── MOBILE: vertical, top-to-bottom ── */}
          <div className="lg:hidden relative">

            {/* Track line */}
            <div className="absolute left-5 top-5 bottom-10 w-[2px] bg-gradient-to-b from-[#0B1F3A] to-[#D4A017] z-0" />

            <div className="space-y-4">
              {JOURNEY.map((item, i) => {
                const isLast = i === JOURNEY.length - 1;
                return (
                  <div key={item.id} className="group relative flex items-start gap-5">

                    {/* Dot */}
                    <div className={`relative z-10 w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center border-2 shadow-sm transition-all duration-300 ${
                      isLast
                        ? "bg-[#D4A017] border-[#D4A017]"
                        : "bg-white border-[#0B1F3A] group-hover:bg-[#0B1F3A]"
                    }`}>
                      <span className={`text-[10px] font-bold transition-colors duration-300 ${
                        isLast ? "text-white" : "text-[#0B1F3A] group-hover:text-white"
                      }`}>
                        {item.id}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="flex-1 pb-1">
                      <div className={`rounded-xl p-5 border-2 transition-all duration-300 ${
                        isLast
                          ? "bg-[#0B1F3A] border-[#0B1F3A]"
                          : "bg-[#F8F9FA] border-[#E2E8F0] group-hover:border-[#0B1F3A] group-hover:bg-white group-hover:shadow-md group-hover:-translate-y-0.5"
                      }`}>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#D4A017] font-bold">
                            {item.tag}
                          </span>
                          <span className={`text-[10px] font-semibold shrink-0 ${
                            isLast ? "text-white/40" : "text-[#0B1F3A]/30"
                          }`}>
                            {item.period}
                          </span>
                        </div>
                        <h3 className={`text-[15px] font-bold mb-2 leading-snug ${
                          isLast ? "text-white" : "text-[#0B1F3A]"
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`text-[13px] leading-[1.72] ${
                          isLast ? "text-white/70" : "text-[#64748B]"
                        }`}>
                          {item.desc}
                        </p>
                        {isLast && (
                          <div className="mt-3 pt-3 border-t border-white/15 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
                            <span className="text-[9.5px] font-bold text-[#D4A017] uppercase tracking-[0.22em]">
                              In Progress
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── ABOUT / PREMISE ─────────────────────────────────────── */}
      <section id="about" className="py-24 lg:py-32 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section header */}
          <div className="max-w-xl mb-16 lg:mb-20">
            <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-4">
              The Story
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold text-[#0B1F3A] leading-[1.15] tracking-tight">
              One discipline was never<br className="hidden sm:block" />
              going to be enough.
            </h2>
          </div>

          {/* Two-column: narrative left, chapters right */}
          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">

            {/* Left — story narrative */}
            <div>
              <p className="text-[16.5px] leading-[1.85] text-[#64748B] mb-7">
                Most professionals spend a career deepening one skill. I chose to build
                laterally — moving deliberately across disciplines, each chapter adding a
                layer of capability that the last one alone couldn&apos;t provide.
              </p>
              <p className="text-[16.5px] leading-[1.85] text-[#64748B] mb-10">
                The result is a profile that sits at the convergence of science,
                operations, commerce, and strategy. Not by accident. By design.
              </p>
              {/* Pull quote */}
              <div className="border-l-[3px] border-[#D4A017] pl-6">
                <p className="text-[16px] font-semibold text-[#0B1F3A] leading-[1.7] italic">
                  &ldquo;The most valuable professionals are those who operate at the edges —
                  where disciplines rarely overlap and the problems are hardest to solve.&rdquo;
                </p>
              </div>
            </div>

            {/* Right — 5 story chapters */}
            <div className="space-y-8">
              {[
                {
                  id: "01",
                  phase: "Pharmacy Practice",
                  copy: "I started where medicine meets people — in community pharmacies and inpatient hospital wards. This is where I learned what precision means when a product reaches a human being, and the weight of getting it right.",
                },
                {
                  id: "02",
                  phase: "Operations & Management",
                  copy: "I moved behind the dispensary — into pharmacy management, inventory systems, staff coordination, and medical supply chains. As Pharmacist Manager at Super Drug Pharmacy and supplier to major Cairo hospitals, clinical insight became operational discipline.",
                },
                {
                  id: "03",
                  phase: "Cosmetic Formulation",
                  copy: "I formalised my formulation skills with a specialist Diploma from the American Institute for Applied Education — developing expertise in compounding, derma preparations, and product formulation. Pharmaceutical rigour, applied to the consumer market.",
                },
                {
                  id: "04",
                  phase: "E-Commerce & Amazon FBA",
                  copy: "I took products to market through Marlyn Store on Amazon FBA — learning product research, pricing strategy, listing optimisation, and what it takes to compete in a digital marketplace. Commerce as a discipline, not just a channel.",
                },
                {
                  id: "05",
                  phase: "Business Strategy (MBA)",
                  copy: "Now I&apos;m formalising the language. Pursuing an MBA at Cairo University — studying Operations Management, CRM, Marketing, Economics, and Finance — to translate lived experience into rigorous business strategy and speak fluently to those who build at scale.",
                },
              ].map(({ id, phase, copy }) => (
                <div key={id} className="flex gap-6 group">
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.15em]">
                      {id}
                    </span>
                  </div>
                  <div className="border-l border-[#E2E8F0] group-hover:border-[#D4A017]
                                  pl-6 transition-colors duration-300">
                    <h3 className="text-[15px] font-bold text-[#0B1F3A] mb-1.5 leading-snug">
                      {phase}
                    </h3>
                    <p className="text-[14px] leading-[1.78] text-[#64748B]">{copy}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── EXPERTISE ───────────────────────────────────────────── */}
      <section id="expertise" className="py-24 lg:py-32 bg-[#0B1F3A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
            <div className="max-w-xl">
              <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-4">
                Core Expertise
              </span>
              <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold text-white leading-[1.15] tracking-tight">
                Four capabilities. One uncommon profile.
              </h2>
            </div>
            <p className="text-[15px] leading-[1.78] text-[#94A3B8] max-w-[360px] lg:text-right">
              Each pillar is a domain others specialise in for a lifetime.
              Together, they form a single professional who can take an idea
              from lab to shelf to scale.
            </p>
          </div>

          {/* 4 pillar cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                number: "01",
                title: "Pharmacy Practice",
                domain: "Community & Hospital Practice",
                why: "Most products fail at the human level. Hands-on practice ensures they don't.",
                what: "Eight years across community pharmacies and an inpatient hospital role built the pharmaceutical rigour and patient-first thinking that underpins every product and business decision I make.",
                tags: ["Patient Counselling", "Medication Dispensing", "Inpatient Care"],
              },
              {
                number: "02",
                title: "Pharmacy Operations",
                domain: "Management & Supply Chain",
                why: "A great formula is worthless without a system behind it.",
                what: "From directing pharmacy operations and managing inventory to sourcing medical supplies for major hospitals — I build the operational infrastructure that makes healthcare delivery reliable and efficient.",
                tags: ["Inventory Management", "Staff Scheduling", "Workflow Optimisation"],
              },
              {
                number: "03",
                title: "Cosmetic Formulation",
                domain: "Compounding · Derma · Product Development",
                why: "The consumer market is won at the formulation stage.",
                what: "Diploma-trained in cosmetic formulations from the American Institute for Applied Education — I specialise in compounding, derma preparations, and product formulation, translating pharmaceutical-grade science into market-ready products.",
                tags: ["Compounding", "Derma Preparations", "Product Formulation"],
              },
              {
                number: "04",
                title: "E-Commerce & Amazon FBA",
                domain: "Product Research · Listings · Sales",
                why: "Building a product means nothing unless you can bring it to market.",
                what: "Launched and managed Marlyn Store on Amazon FBA — conducting product research and pricing analysis, managing online listings, developing competitive pricing strategies, and analysing market trends to boost rankings and profitability.",
                tags: ["Amazon FBA", "Product Research", "Pricing Strategy"],
              },
            ].map(({ number, title, domain, why, what, tags }) => (
              <div
                key={title}
                className="group relative flex flex-col bg-white/5 border border-white/10
                           rounded-2xl p-7 overflow-hidden
                           hover:bg-white/[0.08] hover:border-[#D4A017]/40
                           transition-all duration-300"
              >
                {/* Amber glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 pointer-events-none
                                bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.07),transparent_65%)]" />

                {/* Number + domain */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.18em]">
                    {number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#475569]
                                   font-semibold text-right leading-snug max-w-[120px]">
                    {domain}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-bold text-white leading-snug mb-4
                               group-hover:text-[#F0C84A] transition-colors duration-300">
                  {title}
                </h3>

                {/* Why it matters — amber accent line */}
                <div className="border-l-2 border-[#D4A017]/50 group-hover:border-[#D4A017]
                                pl-4 mb-5 transition-colors duration-300">
                  <p className="text-[13px] font-semibold text-[#CBD5E1] leading-[1.65] italic">
                    {why}
                  </p>
                </div>

                {/* What Mohamed brings */}
                <p className="text-[13px] leading-[1.78] text-[#64748B]
                              group-hover:text-[#94A3B8] transition-colors duration-300 flex-1">
                  {what}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-white/[0.07]">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-[0.12em]
                                 text-[#475569] group-hover:text-[#94A3B8]
                                 bg-white/5 rounded-md px-2.5 py-1
                                 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white
                         px-6 py-3.5 rounded-lg text-[14px] font-semibold
                         hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              Work with me
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* ── CREDENTIALS / EXPERIENCE ────────────────────────────── */}
      <section id="experience" className="py-24 lg:py-32 bg-[#F8F9FA] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-14">
            <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-4">
              Credentials
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold text-[#0B1F3A] leading-[1.15] tracking-tight">
              Education, experience &amp; accomplishments
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {STATS.map(({ value, label }) => (
              <div key={label} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
                <div className="text-[2rem] lg:text-[2.4rem] font-bold text-[#0B1F3A] leading-none mb-2 tracking-tight">
                  {value}
                </div>
                <div className="text-[12.5px] text-[#64748B] leading-snug">{label}</div>
              </div>
            ))}
          </div>

          {/* Education + Experience cards */}
          <div className="grid lg:grid-cols-2 gap-5">

            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
              <div className="border-b border-[#F1F5F9] px-6 py-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#64748B] font-semibold">
                  Education
                </span>
              </div>
              <div className="divide-y divide-[#F1F5F9]">
                {EDUCATION.map(({ degree, inst, year, tag }) => (
                  <div key={degree} className="px-6 py-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[14px] font-semibold text-[#0B1F3A] mb-1 leading-snug">
                        {degree}
                      </div>
                      <div className="text-[12.5px] text-[#64748B] mb-1">{inst}</div>
                      <div className="text-[11px] text-[#D4A017] font-semibold">{tag}</div>
                    </div>
                    <span className="flex-shrink-0 text-[11px] font-semibold text-[#64748B] bg-[#F8F9FA] border border-[#E2E8F0] px-2.5 py-1 rounded-md whitespace-nowrap">
                      {year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
              <div className="border-b border-[#F1F5F9] px-6 py-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#64748B] font-semibold">
                  Professional Experience
                </span>
              </div>
              <div className="divide-y divide-[#F1F5F9]">
                {ROLES.map(({ title, org, period, tag }) => (
                  <div key={title} className="px-6 py-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[14px] font-semibold text-[#0B1F3A] mb-1 leading-snug">
                        {title}
                      </div>
                      <div className="text-[12.5px] text-[#64748B] mb-1">{org}</div>
                      <div className="text-[11px] text-[#D4A017] font-semibold">{tag}</div>
                    </div>
                    <span className="flex-shrink-0 text-[11px] font-semibold text-[#64748B] bg-[#F8F9FA] border border-[#E2E8F0] px-2.5 py-1 rounded-md whitespace-nowrap">
                      {period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0B1F3A] relative overflow-hidden">

        {/* Subtle background texture */}
        <div className="absolute inset-0 pointer-events-none
                        bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(212,160,23,0.07)_0%,transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header — centered */}
          <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-16">
            <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-4">
              Contact
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-bold text-white leading-[1.1] tracking-tight mb-5">
              Let&apos;s Build Something Meaningful
            </h2>
            <p className="text-[16px] leading-[1.82] text-[#94A3B8]">
              Whether it&apos;s healthcare, operations, formulation, or business growth,
              I welcome thoughtful conversations and professional collaborations.
            </p>
          </div>

          {/* 3 action cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohamed-karam-80594b355"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center gap-4
                         bg-white/5 border border-white/10 rounded-2xl px-6 py-8
                         hover:bg-white/[0.09] hover:border-[#D4A017]/40
                         transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-[#D4A017]/15
                              flex items-center justify-center transition-colors duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                        stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="2" y="9" width="4" height="12" rx="0"
                        stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="4" cy="4" r="2"
                          stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-white mb-1 group-hover:text-[#F0C84A] transition-colors duration-300">
                  LinkedIn
                </div>
                <div className="text-[12px] text-[#64748B]">Connect professionally</div>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-[12px] font-semibold text-[#D4A017]">
                View Profile
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

            {/* Email — primary / amber */}
            <a
              href="mailto:Mohamedkaramhelmy@gmail.com"
              className="group flex flex-col items-center text-center gap-4
                         bg-[#D4A017] rounded-2xl px-6 py-8
                         hover:bg-[#c4920f]
                         transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-black/10
                              flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        stroke="#0B1F3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 6l-10 7L2 6"
                        stroke="#0B1F3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-[#0B1F3A] mb-1">
                  Email
                </div>
                <div className="text-[12px] text-[#0B1F3A]/60">Send a direct message</div>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-[12px] font-bold text-[#0B1F3A]">
                Get In Touch
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5h8M7 3.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

            {/* CV Download */}
            <a
              href="/cv-mohamed-karam.pdf"
              download
              className="group flex flex-col items-center text-center gap-4
                         bg-white/5 border border-white/10 rounded-2xl px-6 py-8
                         hover:bg-white/[0.09] hover:border-[#D4A017]/40
                         transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-[#D4A017]/15
                              flex items-center justify-center transition-colors duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                        stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"
                        stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-bold text-white mb-1 group-hover:text-[#F0C84A] transition-colors duration-300">
                  Download CV
                </div>
                <div className="text-[12px] text-[#64748B]">Full credentials & history</div>
              </div>
              <div className="mt-auto flex items-center gap-1.5 text-[12px] font-semibold text-[#D4A017]">
                PDF · English
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M6.5 2.5v8M3.5 7.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>

          </div>

          {/* Availability note */}
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
            <span className="text-[13px] text-[#64748B] font-medium">
              Currently open to consulting engagements, partnerships, and strategic collaborations.
            </span>
          </div>

        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[#0B1F3A] border-t border-white/10 px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-5 sm:gap-4">

          {/* Left — personal brand */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
              <span className="text-[13px] text-white/60 font-medium">Mohamed Karam</span>
            </div>
            <p className="text-[11px] text-white/25 pl-[18px]">
              © 2026 · Pharmacist · MBA Candidate · Entrepreneur
            </p>
          </div>

          {/* Right — ASCENDRA credit — all items centered for visual symmetry */}
          <div className="flex flex-col items-start sm:items-center gap-2">

            {/* "Designed & Developed by" — equal dividers both sides */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-white/18" />
              <span className="text-[9px] text-white/45 uppercase tracking-[0.28em] font-semibold whitespace-nowrap">
                Designed &amp; Developed by
              </span>
              <div className="w-12 h-px bg-white/18" />
            </div>

            {/* ASCENDRA — main focal point */}
            <a
              href="https://ascendrabyhosam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block
                         text-[15px] font-bold tracking-[0.24em] uppercase
                         text-white
                         hover:text-[#D4A017]
                         hover:scale-[1.05]
                         transition-all duration-300 ease-out
                         cursor-pointer select-none"
            >
              ASCENDRA
              <span
                className="absolute bottom-[-2px] left-0 h-px w-0 bg-[#D4A017]
                           group-hover:w-full transition-[width] duration-300 ease-out"
              />
            </a>

            {/* Tagline */}
            <p className="text-[9px] text-white/40 tracking-[0.24em] uppercase font-medium">
              Strategy &bull; Systems &bull; Scale
            </p>

            {/* Website link */}
            <a
              href="https://ascendrabyhosam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1
                         text-[10.5px] text-[#D4A017] font-semibold tracking-wide
                         hover:text-[#F0C84A] hover:scale-[1.03]
                         transition-all duration-200 ease-out"
            >
              <span className="relative">
                ascendrabyhosam.com
                <span
                  className="absolute bottom-[-1px] left-0 h-px w-0 bg-current
                             group-hover:w-full transition-[width] duration-300 ease-out"
                />
              </span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"
                   className="opacity-70 group-hover:opacity-100 group-hover:translate-x-px
                              group-hover:-translate-y-px transition-all duration-200">
                <path d="M1.5 8.5L8.5 1.5M5 1.5h3.5v3.5" stroke="currentColor"
                      strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

          </div>

        </div>
      </footer>

    </main>
  );
}
