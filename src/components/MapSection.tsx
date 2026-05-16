'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function MapSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Gradient fade-in from previous section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--green-deep)] to-transparent z-10 pointer-events-none" />
      {/* Gradient fade-out to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--matte-black)] to-transparent z-10 pointer-events-none" />

      {/* Label overlay — top */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4"
      >
        <div className="w-8 h-px bg-[var(--gold)]/50" />
        <span className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-[var(--gold)] bg-[var(--green-deep)]/80 backdrop-blur-sm px-3 py-1.5 border border-[var(--gold)]/20">
          Find Us in Prishtinë
        </span>
        <div className="w-8 h-px bg-[var(--gold)]/50" />
      </motion.div>

      {/* Map iframe — dark filtered */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full"
        style={{ height: 'clamp(320px, 50vw, 560px)' }}
      >
        <iframe
          title="Infinit Food & Drinks — Google Maps"
          src="https://maps.google.com/maps?q=42.6538035,21.1596276&hl=en&z=17&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            display: 'block',
            // Dark-mode effect via CSS filter
            filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.05) saturate(0.75)',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Overlay to restore gold/ivory tones on the UI elements */}
        <div className="absolute inset-0 bg-[var(--gold)]/[0.03] mix-blend-color pointer-events-none" />
      </motion.div>

      {/* Info bar — bottom overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-5"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[var(--green-deep)]/90 backdrop-blur-lg border border-[var(--gold)]/20 px-6 sm:px-8 py-4 sm:py-5">
          <div className="flex items-center gap-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-[var(--gold)] shrink-0">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            <div>
              <p className="font-montserrat text-[8px] tracking-[0.25em] uppercase text-[var(--gold)]/55">Location</p>
              <p className="font-cormorant text-base text-[var(--ivory)]">Dëshmorët e Kombit, Prishtinë 10000</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Infinit+Food+%26+Drinks/@42.6538035,21.1570473,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-none flex items-center gap-2 font-montserrat text-[9px] tracking-[0.2em] uppercase text-[var(--gold)] hover:text-[var(--gold-pale)] transition-colors shrink-0 border border-[var(--gold)]/30 hover:border-[var(--gold)]/70 px-4 py-2 transition-all duration-300"
          >
            Open in Maps
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
