'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[var(--gold)]/10">
      <div className="absolute inset-0 bg-[var(--green-deep)]" />

      {/* ── WATERMARK — large background text ── */}
      <div
        aria-hidden
        className="absolute inset-0 flex flex-col items-center justify-end pb-6 pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-playfair font-bold text-[var(--gold)] leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 11rem)',
            opacity: 0.045,
            letterSpacing: '0.04em',
          }}
        >
          INFINIT
        </span>
        <span
          className="font-montserrat font-bold text-[var(--gold)] leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(1rem, 4vw, 3rem)',
            opacity: 0.03,
            letterSpacing: '0.35em',
          }}
        >
          FOOD &amp; DRINKS
        </span>
      </div>

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)`, backgroundSize: '32px 32px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 mb-12 sm:mb-16">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <p className="font-playfair text-xl font-bold tracking-[0.12em] text-[var(--gold)]">INFINIT</p>
              <p className="font-montserrat text-[8px] tracking-[0.35em] text-[var(--champagne)]/35 uppercase">Food & Drinks</p>
            </div>
            <p className="font-cormorant text-base italic text-[var(--champagne)]/55 leading-relaxed mb-5">
              &ldquo;Infinite Taste. Timeless Heritage.&rdquo;
            </p>
            <a
              href="tel:+38344528149"
              className="cursor-none flex items-center gap-2 group w-fit"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--gold)]/50 group-hover:text-[var(--gold)] transition-colors">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.78-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="font-inter text-sm text-[var(--champagne)]/50 group-hover:text-[var(--gold)] transition-colors">+383 44 528 149</span>
            </a>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-montserrat text-[8px] tracking-[0.38em] uppercase text-[var(--gold)]/55 mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Menu', href: '#menu' },
                { label: 'Events', href: '#events' },
                { label: 'Hours', href: '#hours' },
                { label: 'Reserve', href: '#reserve' },
              ].map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="cursor-none text-left font-inter text-sm text-[var(--champagne)]/45 hover:text-[var(--gold)] transition-colors duration-300 w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-montserrat text-[8px] tracking-[0.38em] uppercase text-[var(--gold)]/55 mb-5">Visit Us</p>
            <div className="flex flex-col gap-3 mb-6">
              <div>
                <p className="font-inter text-sm text-[var(--champagne)]/45 leading-relaxed">
                  Dëshmorët e Kombit<br />Prishtinë 10000, Kosovo
                </p>
              </div>
              <div>
                <p className="font-montserrat text-[8px] tracking-[0.25em] uppercase text-[var(--gold)]/35 mb-1">Hours</p>
                <p className="font-inter text-sm text-[var(--champagne)]/45">Mon – Sat: 7 AM – 11 PM</p>
                <p className="font-inter text-sm text-[var(--champagne)]/30">Sunday: Closed</p>
              </div>
              <a
                href="https://wolt.com" target="_blank" rel="noopener noreferrer"
                className="cursor-none font-inter text-sm text-[var(--champagne)]/45 hover:text-[var(--gold)] transition-colors duration-300 w-fit"
              >
                Order on Wolt →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent mb-7" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-[var(--champagne)]/20 tracking-wide">
            © {new Date().getFullYear()} Infinit Food & Drinks. All rights reserved.
          </p>
          <p className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-[var(--champagne)]/18">
            Prishtinë, Kosovo
          </p>
        </div>
      </div>
    </footer>
  );
}
