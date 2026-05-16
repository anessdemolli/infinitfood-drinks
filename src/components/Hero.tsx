'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const IconMenu = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2h18l-2 7H5L3 2z"/><path d="M5 9c0 5.5 3.5 9 7 9s7-3.5 7-9"/>
    <line x1="12" y1="18" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/>
  </svg>
);
const IconReserve = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
  </svg>
);
const IconWolt = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-1 1.5 1.5 2H17V9.5h2zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13.5-9H17v2.5h4L19.5 9zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
  </svg>
);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 180]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={containerRef} className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">

      {/* Background — Ken Burns slow zoom + parallax */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 hero-zoom">
          <Image
            src="/img/first section.jpg"
            alt="Infinit Food & Drinks"
            fill priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[var(--green-deep)]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--green-deep)]/60 via-transparent to-[var(--green-deep)]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--green-deep)]/35 via-transparent to-[var(--green-deep)]/15" />
      </motion.div>

      {/* Corner ornaments */}
      <div className="absolute top-24 left-5 sm:left-10 w-10 h-10 border-t border-l border-[var(--gold)]/30 pointer-events-none" />
      <div className="absolute bottom-10 right-5 sm:right-10 w-10 h-10 border-b border-r border-[var(--gold)]/30 pointer-events-none" />
      <div className="absolute top-24 right-5 sm:right-10 w-5 h-5 border-t border-r border-[var(--gold)]/15 pointer-events-none" />
      <div className="absolute bottom-10 left-5 sm:left-10 w-5 h-5 border-b border-l border-[var(--gold)]/15 pointer-events-none" />
      <div className="absolute left-10 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-transparent hidden lg:block" />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto w-full">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="flex items-center justify-center gap-3 sm:gap-5 mb-6 sm:mb-8"
        >
          <div className="w-8 sm:w-14 h-px bg-[var(--gold)]/50" />
          <span className="font-montserrat text-[9px] sm:text-[10px] font-medium tracking-[0.35em] uppercase text-[var(--gold)]">
            Prishtinë, Kosovo · Est. 2019
          </span>
          <div className="w-8 sm:w-14 h-px bg-[var(--gold)]/50" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-playfair font-extrabold leading-[1.0] mb-4 sm:mb-6"
          style={{ fontSize: 'clamp(3.2rem, 10vw, 8rem)' }}
        >
          <span className="block text-[var(--ivory)]">Infinit</span>
          <span className="block text-gold-gradient italic">Food & Drinks</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="font-cormorant font-light text-lg sm:text-2xl tracking-[0.06em] text-[var(--champagne)]/75 mb-8 sm:mb-12 italic"
        >
          &ldquo;Where Flavor Has No Limits.&rdquo;
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-14 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto mb-8 sm:mb-12"
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <button onClick={() => scrollTo('#menu')}
            className="btn-gold w-full sm:w-auto cursor-none flex items-center justify-center gap-2">
            <IconMenu />
            <span>View Menu</span>
          </button>

          <button onClick={() => scrollTo('#reserve')}
            className="btn-outline-gold w-full sm:w-auto cursor-none flex items-center justify-center gap-2">
            <IconReserve />
            Reserve a Table
          </button>

          <a href="https://wolt.com" target="_blank" rel="noopener noreferrer"
            className="btn-wolt w-full sm:w-auto cursor-none">
            <IconWolt />
            Order on Wolt
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-montserrat text-[8px] tracking-[0.4em] uppercase text-[var(--gold)]/50">Scroll</span>
        <div className="relative w-px h-10 bg-gradient-to-b from-[var(--gold)]/40 to-transparent overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-4 bg-[var(--gold)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
