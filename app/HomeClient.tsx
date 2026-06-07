'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { T, type Lang } from './translations'

export default function HomeClient() {
  const [lang, setLang] = useState<Lang>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = T[lang]
  const isAr = lang === 'ar'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
  }, [lang, t.dir])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggle = () => setLang(l => (l === 'en' ? 'ar' : 'en'))
  const closeMenu = () => setMenuOpen(false)

  return (
    <main id="main-content" className="min-h-screen bg-[#F8F9FA] text-[#111827]">

      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
                   focus:bg-[#D4A017] focus:text-[#0B1F3A] focus:px-4 focus:py-2
                   focus:rounded-lg focus:font-semibold focus:text-sm"
      >
        {isAr ? 'انتقل إلى المحتوى' : 'Skip to content'}
      </a>

      {/* ── NAVIGATION ──────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[64px] flex items-center justify-between">

          <Link href="/" className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#D4A017]" />
            <span className="font-semibold text-[#0B1F3A] text-[15px] tracking-tight">
              Hossam Hosny
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {[
              { label: t.nav.journey, href: '#journey' },
              { label: t.nav.about, href: '#about' },
              { label: t.nav.expertise, href: '#expertise' },
              { label: t.nav.contact, href: '#contact' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-[14px] text-[#64748B] hover:text-[#0B1F3A] transition-colors duration-200 font-medium"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language toggle */}
            <button
              type="button"
              onClick={toggle}
              aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
              className="text-[13px] font-bold text-[#64748B] hover:text-[#0B1F3A]
                         border border-[#E2E8F0] hover:border-[#0B1F3A]
                         rounded-lg px-3 py-1.5 transition-all duration-200
                         leading-none tracking-wide"
            >
              {t.langToggle}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0B1F3A] text-white px-4 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-[#122e58] transition-colors duration-200"
            >
              {t.nav.getInTouch}
            </a>
          </div>

          {/* Mobile right — lang toggle + menu */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
              className="text-[13px] font-bold text-[#64748B] border border-[#E2E8F0]
                         rounded-lg px-2.5 py-1.5 transition-colors duration-200"
            >
              {t.langToggle}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen ? 'true' : 'false'}
              className="flex flex-col gap-[5px] p-2 -mr-1 rounded-md
                         hover:bg-[#F1F5F9] transition-colors duration-200"
            >
              {menuOpen ? (
                <>
                  <span className="block w-5 h-[1.5px] bg-[#0B1F3A] rotate-45 translate-y-[3.5px]" />
                  <span className="block w-5 h-[1.5px] bg-[#0B1F3A] -rotate-45 -translate-y-[3.5px]" />
                </>
              ) : (
                <>
                  <span className="block w-5 h-[1.5px] bg-[#64748B]" />
                  <span className="block w-5 h-[1.5px] bg-[#64748B]" />
                  <span className="block w-3 h-[1.5px] bg-[#64748B]" />
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* ── MOBILE NAV PANEL ────────────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[64px] z-40 bg-white border-t border-[#E2E8F0]
                        flex flex-col px-6 py-8 gap-1">
          {[
            { label: t.nav.journey, href: '#journey' },
            { label: t.nav.about, href: '#about' },
            { label: t.nav.expertise, href: '#expertise' },
            { label: t.nav.contact, href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-[18px] font-semibold text-[#0B1F3A] py-4
                         border-b border-[#F1F5F9] hover:text-[#D4A017]
                         transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 inline-flex items-center justify-center
                       bg-[#0B1F3A] text-white px-6 py-3.5 rounded-lg
                       text-[15px] font-semibold hover:bg-[#122e58]
                       transition-colors duration-200"
          >
            {t.nav.getInTouch}
          </a>
        </div>
      )}

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="pt-[64px] min-h-screen flex items-center bg-[#F1F5F9] overflow-hidden">
        <div className="w-full max-w-[1320px] mx-auto
                        px-6 sm:px-10 lg:px-14 xl:px-20
                        py-10 sm:py-12 lg:py-8 xl:py-16 2xl:py-24
                        grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px]
                        gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* LEFT — text */}
          <div className="order-2 lg:order-1">
            <div className="max-w-[540px]">

              {/* Kicker pill */}
              <div className="inline-flex items-center gap-2.5
                              border border-[#E2E8F0] bg-white rounded-full
                              px-4 py-2 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017] flex-shrink-0" />
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#64748B] font-semibold">
                  {t.hero.kicker}
                </span>
              </div>

              {/* Headline */}
              {isAr ? (
                <h1 className="text-[clamp(2.4rem,4.2vw,4.2rem)] font-bold text-[#0B1F3A]
                               leading-[1.1] tracking-tight mb-6">
                  بناء أنظمة<br />
                  تُحرّك<br />
                  <span className="text-[#D4A017]">النمو،</span><br />
                  والتوسع<br />
                  والتحول.
                </h1>
              ) : (
                <h1 className="text-[clamp(2.6rem,4.5vw,4.5rem)] font-bold text-[#0B1F3A]
                               leading-[1.04] tracking-tight mb-6">
                  Building systems<br />
                  that power<br />
                  <span className="text-[#D4A017]">growth,</span><br />
                  performance, and<br />
                  transformation.
                </h1>
              )}

              {/* Sub-copy */}
              <p className="text-[15.5px] leading-[1.78] text-[#64748B] mb-7 max-w-[440px]">
                {t.hero.subCopy}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center gap-2
                             bg-[#0B1F3A] text-white px-7 py-3.5 rounded-lg
                             text-[15px] font-semibold
                             hover:bg-[#122e58] transition-colors duration-200"
                >
                  {t.hero.cta1}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                       className={isAr ? 'rotate-180' : ''}>
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
                  {t.hero.cta2}
                </a>
              </div>

              {/* Credibility strip */}
              <div className="flex flex-wrap gap-x-7 gap-y-2.5">
                {t.hero.credStrip.map((item) => (
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

              <div className="relative rounded-[28px] overflow-hidden bg-[#0B1F3A] aspect-[3/4] w-full
                              shadow-[0_24px_64px_rgba(11,31,58,0.22),0_4px_16px_rgba(11,31,58,0.10)]">
                <Image
                  src="/portrait.png"
                  alt="Hossam Hosny — Business Systems & Growth Builder"
                  fill
                  sizes="(max-width: 1024px) 90vw, 460px"
                  className="object-contain object-bottom"
                  quality={92}
                  priority
                />
              </div>

              {/* Bottom info card */}
              <div className="absolute bottom-5 inset-x-5
                              bg-white rounded-2xl
                              shadow-[0_8px_32px_rgba(11,31,58,0.18)]
                              px-4 py-3.5 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#0B1F3A]
                                flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-[12px] font-bold tracking-tight">HH</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13.5px] font-bold text-[#0B1F3A] leading-tight">
                    {t.hero.cardName}
                  </div>
                  <div className="text-[11.5px] text-[#64748B] mt-0.5">
                    {t.hero.cardSubtitle}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[11px] text-[#64748B] font-medium">{t.hero.openLabel}</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── PROFESSIONAL JOURNEY ────────────────────────────────── */}
      <section id="journey" className="py-24 lg:py-32 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-3">
                {t.journey.sectionLabel}
              </span>
              <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold text-[#0B1F3A] leading-[1.15] tracking-tight">
                {t.journey.h2Line1}<br className="hidden sm:block" />
                {t.journey.h2Line2}
              </h2>
            </div>
            <div className="flex items-center gap-2 self-start lg:self-end shrink-0">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#CBD5E1]">2018</span>
              <div className="flex items-center gap-px">
                {[0, 1, 2, 3].map(n => (
                  <div key={n} className="w-3 h-[2px] rounded-full bg-gradient-to-r from-[#0B1F3A] to-[#D4A017]" />
                ))}
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                  <path d="M0 3h6M4 1l2 2-2 2" stroke="#D4A017" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4A017]">
                {t.journey.now}
              </span>
            </div>
          </div>

          {/* Desktop timeline */}
          <div className="hidden lg:block">
            <div className="relative grid grid-cols-5 gap-4">
              <div className="absolute top-6 left-[10%] right-[10%] h-[2px] z-0 pointer-events-none bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A] to-[#D4A017]" />

              {t.journey.items.map((item, i) => {
                const isLast = i === t.journey.items.length - 1
                return (
                  <div key={item.id} className="group flex flex-col items-center gap-5">
                    <div className={`relative z-10 w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center border-2 shadow-sm transition-all duration-300 group-hover:scale-110 ${
                      isLast
                        ? 'bg-[#D4A017] border-[#D4A017] shadow-[#D4A017]/30'
                        : 'bg-white border-[#0B1F3A] group-hover:bg-[#0B1F3A]'
                    }`}>
                      <span className={`text-[12px] font-bold select-none transition-colors duration-300 ${
                        isLast ? 'text-white' : 'text-[#0B1F3A] group-hover:text-white'
                      }`}>
                        {item.id}
                      </span>
                      <span className="absolute inset-0 rounded-full ring-0 ring-[#D4A017]/20 group-hover:ring-[7px] transition-all duration-300 pointer-events-none" />
                    </div>

                    <div className={`w-full rounded-xl p-5 border-2 transition-all duration-300 cursor-default group-hover:-translate-y-1.5 ${
                      isLast
                        ? 'bg-[#0B1F3A] border-[#0B1F3A] shadow-lg shadow-[#0B1F3A]/20 group-hover:shadow-xl group-hover:shadow-[#0B1F3A]/30'
                        : 'bg-[#F8F9FA] border-[#E2E8F0] group-hover:border-[#0B1F3A] group-hover:bg-white group-hover:shadow-lg group-hover:shadow-[#0B1F3A]/8'
                    }`}>
                      <span className="text-[9.5px] uppercase tracking-[0.22em] text-[#D4A017] font-bold block mb-2">
                        {item.tag}
                      </span>
                      <h3 className={`text-[14px] font-bold leading-snug mb-1.5 ${isLast ? 'text-white' : 'text-[#0B1F3A]'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-[10.5px] font-semibold mb-3 tracking-wide ${isLast ? 'text-white/40' : 'text-[#0B1F3A]/30'}`}>
                        {item.period}
                      </p>
                      <p className={`text-[12px] leading-[1.72] ${isLast ? 'text-white/70' : 'text-[#64748B]'}`}>
                        {item.desc}
                      </p>
                      {isLast && (
                        <div className="mt-4 pt-3 border-t border-white/15 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
                          <span className="text-[9.5px] font-bold text-[#D4A017] uppercase tracking-[0.22em]">
                            {t.journey.inProgress}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden relative">
            <div className="absolute left-5 top-5 bottom-10 w-[2px] bg-gradient-to-b from-[#0B1F3A] to-[#D4A017] z-0" />
            <div className="space-y-4">
              {t.journey.items.map((item, i) => {
                const isLast = i === t.journey.items.length - 1
                return (
                  <div key={item.id} className="group relative flex items-start gap-5">
                    <div className={`relative z-10 w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center border-2 shadow-sm transition-all duration-300 ${
                      isLast
                        ? 'bg-[#D4A017] border-[#D4A017]'
                        : 'bg-white border-[#0B1F3A] group-hover:bg-[#0B1F3A]'
                    }`}>
                      <span className={`text-[10px] font-bold transition-colors duration-300 ${
                        isLast ? 'text-white' : 'text-[#0B1F3A] group-hover:text-white'
                      }`}>
                        {item.id}
                      </span>
                    </div>
                    <div className="flex-1 pb-1">
                      <div className={`rounded-xl p-5 border-2 transition-all duration-300 ${
                        isLast
                          ? 'bg-[#0B1F3A] border-[#0B1F3A]'
                          : 'bg-[#F8F9FA] border-[#E2E8F0] group-hover:border-[#0B1F3A] group-hover:bg-white group-hover:shadow-md group-hover:-translate-y-0.5'
                      }`}>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#D4A017] font-bold">
                            {item.tag}
                          </span>
                          <span className={`text-[10px] font-semibold shrink-0 ${isLast ? 'text-white/40' : 'text-[#0B1F3A]/30'}`}>
                            {item.period}
                          </span>
                        </div>
                        <h3 className={`text-[15px] font-bold mb-2 leading-snug ${isLast ? 'text-white' : 'text-[#0B1F3A]'}`}>
                          {item.title}
                        </h3>
                        <p className={`text-[13px] leading-[1.72] ${isLast ? 'text-white/70' : 'text-[#64748B]'}`}>
                          {item.desc}
                        </p>
                        {isLast && (
                          <div className="mt-3 pt-3 border-t border-white/15 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
                            <span className="text-[9.5px] font-bold text-[#D4A017] uppercase tracking-[0.22em]">
                              {t.journey.inProgress}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────── */}
      <section id="about" className="py-24 lg:py-32 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-xl mb-16 lg:mb-20">
            <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-4">
              {t.about.sectionLabel}
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold text-[#0B1F3A] leading-[1.15] tracking-tight">
              {t.about.h2Line1}<br className="hidden sm:block" />
              {t.about.h2Line2}
            </h2>
          </div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
            <div>
              <p className="text-[16.5px] leading-[1.85] text-[#64748B] mb-7">{t.about.p1}</p>
              <p className="text-[16.5px] leading-[1.85] text-[#64748B] mb-10">{t.about.p2}</p>
              <div className="border-l-[3px] border-[#D4A017] pl-6">
                <p className="text-[16px] font-semibold text-[#0B1F3A] leading-[1.7] italic">
                  {t.about.pullQuote}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {t.about.chapters.map(({ id, phase, copy }) => (
                <div key={id} className="flex gap-6 group">
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.15em]">{id}</span>
                  </div>
                  <div className="border-l border-[#E2E8F0] group-hover:border-[#D4A017] pl-6 transition-colors duration-300">
                    <h3 className="text-[15px] font-bold text-[#0B1F3A] mb-1.5 leading-snug">{phase}</h3>
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

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
            <div className="max-w-xl">
              <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-4">
                {t.expertise.sectionLabel}
              </span>
              <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold text-white leading-[1.15] tracking-tight">
                {t.expertise.h2}
              </h2>
            </div>
            <p className="text-[15px] leading-[1.78] text-[#94A3B8] max-w-[360px] lg:text-right">
              {t.expertise.subCopy}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.expertise.cards.map(({ number, title, domain, why, what, tags }) => (
              <div
                key={number}
                className="group relative flex flex-col bg-white/5 border border-white/10
                           rounded-2xl p-7 overflow-hidden
                           hover:bg-white/[0.08] hover:border-[#D4A017]/40
                           transition-all duration-300"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 pointer-events-none
                                bg-[radial-gradient(ellipse_at_top_right,rgba(212,160,23,0.07),transparent_65%)]" />

                <div className="flex items-start justify-between mb-6">
                  <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.18em]">{number}</span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#475569] font-semibold text-right leading-snug max-w-[120px]">
                    {domain}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-white leading-snug mb-4
                               group-hover:text-[#F0C84A] transition-colors duration-300">
                  {title}
                </h3>

                <div className="border-l-2 border-[#D4A017]/50 group-hover:border-[#D4A017] pl-4 mb-5 transition-colors duration-300">
                  <p className="text-[13px] font-semibold text-[#CBD5E1] leading-[1.65] italic">{why}</p>
                </div>

                <p className="text-[13px] leading-[1.78] text-[#64748B] group-hover:text-[#94A3B8] transition-colors duration-300 flex-1">
                  {what}
                </p>

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

          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white
                         px-6 py-3.5 rounded-lg text-[14px] font-semibold
                         hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              {t.expertise.workWithMe}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                   className={isAr ? 'rotate-180' : ''}>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* ── CREDENTIALS ─────────────────────────────────────────── */}
      <section id="experience" className="py-24 lg:py-32 bg-[#F8F9FA] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mb-14">
            <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-4">
              {t.credentials.sectionLabel}
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold text-[#0B1F3A] leading-[1.15] tracking-tight">
              {t.credentials.h2}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {t.credentials.stats.map(({ value, label }) => (
              <div key={label} className="bg-white border border-[#E2E8F0] rounded-xl p-6">
                <div className="text-[2rem] lg:text-[2.4rem] font-bold text-[#0B1F3A] leading-none mb-2 tracking-tight">
                  {value}
                </div>
                <div className="text-[12.5px] text-[#64748B] leading-snug">{label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
              <div className="border-b border-[#F1F5F9] px-6 py-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#64748B] font-semibold">
                  {t.credentials.educationLabel}
                </span>
              </div>
              <div className="divide-y divide-[#F1F5F9]">
                {t.credentials.education.map(({ degree, inst, year, tag }) => (
                  <div key={degree} className="px-6 py-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[14px] font-semibold text-[#0B1F3A] mb-1 leading-snug">{degree}</div>
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
                  {t.credentials.experienceLabel}
                </span>
              </div>
              <div className="divide-y divide-[#F1F5F9]">
                {t.credentials.roles.map(({ title, org, period, tag }) => (
                  <div key={title} className="px-6 py-5 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-[14px] font-semibold text-[#0B1F3A] mb-1 leading-snug">{title}</div>
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

      {/* ── BUILDING ASENDRA ────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-14 lg:mb-16">
            <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-4">
              {t.asendra.sectionLabel}
            </span>
            <h2 className="text-[clamp(1.75rem,4vw,2.9rem)] font-bold text-[#0B1F3A] leading-[1.15] tracking-tight mb-6">
              {t.asendra.h2Line1}<br className="hidden sm:block" />
              {t.asendra.h2Line2}
            </h2>
            <p className="text-[16px] leading-[1.82] text-[#64748B] max-w-[640px]">
              {t.asendra.body}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {t.asendra.cards.map(({ number, title, domain, why, what, tags }) => (
              <div
                key={number}
                className="group relative flex flex-col bg-[#F8F9FA] border border-[#E2E8F0]
                           rounded-2xl p-7 overflow-hidden
                           hover:bg-white hover:border-[#0B1F3A]/20
                           hover:shadow-lg hover:shadow-[#0B1F3A]/5
                           transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[11px] font-bold text-[#D4A017] tracking-[0.18em]">{number}</span>
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#94A3B8] font-semibold text-right leading-snug max-w-[120px]">
                    {domain}
                  </span>
                </div>

                <h3 className="text-[18px] font-bold text-[#0B1F3A] leading-snug mb-4">{title}</h3>

                <div className="border-l-2 border-[#D4A017]/40 group-hover:border-[#D4A017] pl-4 mb-5 transition-colors duration-300">
                  <p className="text-[13px] font-semibold text-[#475569] leading-[1.65] italic">{why}</p>
                </div>

                <p className="text-[13px] leading-[1.78] text-[#64748B] group-hover:text-[#475569] transition-colors duration-300 flex-1">
                  {what}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-[#E2E8F0]">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold uppercase tracking-[0.12em]
                                 text-[#94A3B8] group-hover:text-[#64748B]
                                 bg-white border border-[#E2E8F0] rounded-md px-2.5 py-1
                                 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#E2E8F0] pt-10
                          flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <p className="text-[15px] leading-[1.78] text-[#64748B] max-w-[600px]">
              {t.asendra.closingP}
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017] animate-pulse" />
              <span className="text-[11px] font-bold text-[#D4A017] uppercase tracking-[0.22em]">
                {t.asendra.inDevelopment}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section id="contact" className="py-24 lg:py-32 bg-[#0B1F3A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none
                        bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(212,160,23,0.07)_0%,transparent_70%)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-16">
            <span className="inline-block text-[11px] uppercase tracking-[0.22em] text-[#D4A017] font-semibold mb-4">
              {t.contact.sectionLabel}
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-bold text-white leading-[1.1] tracking-tight mb-5">
              {t.contact.h2}
            </h2>
            <p className="text-[16px] leading-[1.82] text-[#94A3B8]">
              {t.contact.subCopy}
            </p>
          </div>

          {/* Executive contact card — single source of truth, no duplication */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white/[0.04] border border-white/[0.10] rounded-2xl overflow-hidden">

              {/* Amber top accent */}
              <div className="h-[3px] bg-[#D4A017]" />

              {/* Card header */}
              <div className="px-8 py-6 border-b border-white/[0.07]">
                <div className="text-[14px] font-bold text-white tracking-[0.06em] uppercase mb-1">
                  {t.contact.letConnect.title}
                </div>
                <div className="text-[13px] text-[#64748B] leading-snug">
                  {t.contact.letConnect.sub}
                </div>
              </div>

              {/* Contact rows */}
              <div className="divide-y divide-white/[0.06]">

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/hosam-h-emam-124393b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-8 py-5
                             hover:bg-white/[0.05] transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.07] group-hover:bg-[#D4A017]/15
                                  flex items-center justify-center shrink-0 transition-colors duration-200">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                            stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="2" y="9" width="4" height="12" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="4" cy="4" r="2" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-semibold text-white group-hover:text-[#F0C84A]
                                    transition-colors duration-200 leading-none mb-1">LinkedIn</div>
                    <div className="text-[12px] text-[#64748B]">{t.contact.linkedin.sub}</div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                       className={`text-[#475569] group-hover:text-[#D4A017] transition-colors duration-200 shrink-0${isAr ? ' rotate-180' : ''}`}>
                    <path d="M2 12L12 2M8 2h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:dr.hosamhosny2014@gmail.com"
                  className="group flex items-center gap-4 px-8 py-5
                             hover:bg-white/[0.05] transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.07] group-hover:bg-[#D4A017]/15
                                  flex items-center justify-center shrink-0 transition-colors duration-200">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                            stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 6l-10 7L2 6" stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-semibold text-white group-hover:text-[#F0C84A]
                                    transition-colors duration-200 leading-none mb-1">{t.contact.email.label}</div>
                    <div className="text-[12px] text-[#64748B] truncate">dr.hosamhosny2014@gmail.com</div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                       className={`text-[#475569] group-hover:text-[#D4A017] transition-colors duration-200 shrink-0${isAr ? ' rotate-180' : ''}`}>
                    <path d="M2 12L12 2M8 2h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/966563328225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-8 py-5
                             hover:bg-white/[0.05] transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.07] group-hover:bg-[#D4A017]/15
                                  flex items-center justify-center shrink-0 transition-colors duration-200">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                            stroke="#D4A017" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13.5px] font-semibold text-white group-hover:text-[#F0C84A]
                                    transition-colors duration-200 leading-none mb-1">WhatsApp</div>
                    <div className="text-[12px] text-[#64748B]">+966 56 332 8225</div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
                       className={`text-[#475569] group-hover:text-[#D4A017] transition-colors duration-200 shrink-0${isAr ? ' rotate-180' : ''}`}>
                    <path d="M2 12L12 2M8 2h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

              </div>

              {/* Availability footer */}
              <div className="px-8 py-4 border-t border-white/[0.07] flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                <span className="text-[12px] text-[#64748B] font-medium">
                  {t.contact.availabilityNote}
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="bg-[#0B1F3A] border-t border-white/10 px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-5 sm:gap-4">

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
              <span className="text-[13px] text-white/60 font-medium">Hossam Hosny</span>
            </div>
            <p className="text-[11px] text-white/25 pl-[18px]">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col items-start sm:items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-white/18" />
              <span className="text-[9px] text-white/45 uppercase tracking-[0.28em] font-semibold whitespace-nowrap">
                {t.footer.designedBy}
              </span>
              <div className="w-12 h-px bg-white/18" />
            </div>

            <a
              href="https://ascendrabyhosam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block
                         text-[15px] font-bold tracking-[0.24em] uppercase
                         text-white hover:text-[#D4A017]
                         hover:scale-[1.05]
                         transition-all duration-300 ease-out"
            >
              ASCENDRA
              <span className="absolute bottom-[-2px] left-0 h-px w-0 bg-[#D4A017]
                               group-hover:w-full transition-[width] duration-300 ease-out" />
            </a>

            <p className="text-[9px] text-white/40 tracking-[0.24em] uppercase font-medium">
              {t.footer.agencyTagline}
            </p>

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
                <span className="absolute bottom-[-1px] left-0 h-px w-0 bg-current
                                 group-hover:w-full transition-[width] duration-300 ease-out" />
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
  )
}
