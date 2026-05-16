'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Events', href: '#events' },
  { label: 'Hours', href: '#hours' },
  { label: 'Reserve', href: '#reserve' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'glass-dark py-3 shadow-[0_8px_40px_rgba(0,0,0,0.5)]' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo — text only */}
          <button onClick={() => scrollTo('#hero')} className="cursor-none group flex flex-col leading-none">
            <span className="font-playfair text-lg sm:text-xl font-bold tracking-[0.15em] text-[var(--gold)] group-hover:text-[var(--gold-pale)] transition-colors duration-300">
              INFINIT
            </span>
            <span className="font-montserrat text-[7px] sm:text-[8px] tracking-[0.4em] text-[var(--gold)]/50 uppercase">
              Food & Drinks
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="cursor-none font-montserrat text-[10px] font-medium tracking-[0.22em] uppercase text-[var(--champagne)]/60 hover:text-[var(--gold)] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-all duration-400" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo('#reserve')}
            className="hidden lg:block btn-gold text-[9px] tracking-[0.2em] px-7 py-3"
          >
            <span>Reserve a Table</span>
          </button>

          {/* Mobile burger — premium design */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                className="block h-px bg-[var(--gold)] origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                className="block h-px bg-[var(--gold)] w-4"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                className="block h-px bg-[var(--gold)] origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu — PREMIUM */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 bg-[var(--green-deep)]/95 backdrop-blur-xl"
            />

            {/* Panel */}
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 z-40 flex flex-col"
            >
              {/* Decorative bg element */}
              <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-[var(--gold)]/5 blur-3xl" />
              <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-[var(--gold)]/3 blur-3xl" />

              <div className="flex flex-col h-full px-8 pt-28 pb-12 justify-between">
                {/* Links */}
                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="border-b border-[var(--gold)]/10"
                    >
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="cursor-none w-full text-left py-5 group flex items-center justify-between"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-montserrat text-[9px] tracking-[0.3em] text-[var(--gold)]/30 uppercase">
                            0{i + 1}
                          </span>
                          <span className="font-playfair text-4xl sm:text-5xl font-semibold text-[var(--ivory)] group-hover:text-[var(--gold)] transition-colors duration-300">
                            {link.label}
                          </span>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                          className="text-[var(--gold)]/30 group-hover:text-[var(--gold)] transition-colors duration-300 -rotate-45">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </nav>

                {/* Bottom block */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="flex flex-col gap-5"
                >
                  <button
                    onClick={() => scrollTo('#reserve')}
                    className="btn-gold w-full text-center py-4"
                  >
                    <span>Reserve a Table</span>
                  </button>
                  <div className="flex items-center justify-between">
                    <p className="font-inter text-xs text-[var(--champagne)]/30">+383 44 528 149</p>
                    <p className="font-inter text-xs text-[var(--champagne)]/30">Prishtinë, Kosovo</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
