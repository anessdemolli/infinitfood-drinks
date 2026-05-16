'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const events = [
  {
    img: '/img/event.jpg',
    title: 'Evening Dining Experience',
    date: 'Every Friday & Saturday',
    desc: 'A curated dining experience with live ambiance, signature cocktails, and a seasonal tasting menu crafted by our chef.',
    tag: 'Recurring',
    // zoom out — show more of the scene, not just the face
    objectPosition: 'center 35%',
  },
  {
    img: '/img/event1.jpg',
    title: 'Private Celebrations',
    date: 'By Reservation Only',
    desc: 'Host your birthdays, anniversaries, and corporate events in our exclusively arranged and elegantly decorated private space.',
    tag: 'Private',
    objectPosition: 'center 30%',
  },
];

const IconCalendar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
);
const IconPhone = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.49 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.4 1.29h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.78-1.78a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const IconArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="events" ref={ref} className="relative py-24 sm:py-36 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--green-heritage)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)`, backgroundSize: '40px 40px' }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-4 mb-5"
          >
            <div className="w-10 sm:w-16 h-px bg-[var(--gold)]/40" />
            <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">At Infinit</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <motion.h2
              initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9 }}
              className="font-playfair font-bold leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              <span className="text-[var(--ivory)]">Our </span>
              <span className="text-gold-gradient italic">Events</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.22 }}
              className="font-cormorant text-base sm:text-lg italic text-[var(--champagne)]/55 max-w-md"
            >
              Every occasion deserves an Infinit setting — from quiet mornings to grand evenings.
            </motion.p>
          </div>
        </div>

        {/* Two cinematic cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {events.map((ev, i) => (
            <motion.div
              key={ev.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.8 }}
              className="group relative cursor-none overflow-hidden border border-[var(--gold)]/14 hover:border-[var(--gold)]/45 transition-all duration-600"
            >
              {/* Image — stepped back / zoomed out */}
              <div className="relative overflow-hidden" style={{ height: 'clamp(260px, 32vw, 420px)' }}>
                <Image
                  src={ev.img}
                  alt={ev.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                  style={{
                    objectPosition: ev.objectPosition,
                    // Scale down slightly so figure is further from the lens
                    transform: 'scale(0.95)',
                  }}
                />
                {/* Re-apply the group-hover scale via a wrapper trick */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-deep)] via-[var(--green-deep)]/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--green-deep)]/15 to-transparent" />

                {/* Tag */}
                <div className="absolute top-5 left-5 flex items-center gap-2 px-3 py-1.5 border border-[var(--gold)]/40 bg-[var(--green-deep)]/80 backdrop-blur-md">
                  <IconCalendar />
                  <span className="font-montserrat text-[7px] tracking-[0.25em] uppercase text-[var(--gold)]">{ev.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative bg-[var(--green-deep)] border-t border-[var(--gold)]/10 p-7 sm:p-9">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2 text-[var(--gold)]/55">
                    <IconCalendar />
                    <p className="font-montserrat text-[8px] tracking-[0.28em] uppercase">{ev.date}</p>
                  </div>
                  <div className="text-[var(--gold)]/25 group-hover:text-[var(--gold)] group-hover:-rotate-45 transition-all duration-500">
                    <IconArrow />
                  </div>
                </div>

                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold text-[var(--ivory)] mb-3 leading-snug group-hover:text-[var(--gold-pale)] transition-colors duration-400">
                  {ev.title}
                </h3>

                <div className="w-10 h-px bg-[var(--gold)]/30 mb-4 group-hover:w-20 transition-all duration-500" />

                <p className="font-inter text-sm text-[var(--champagne)]/55 leading-relaxed mb-6">
                  {ev.desc}
                </p>

                <a
                  href="tel:+38344528149"
                  className="cursor-none inline-flex items-center gap-2 font-montserrat text-[9px] tracking-[0.22em] uppercase text-[var(--gold)] hover:text-[var(--gold-pale)] transition-colors"
                >
                  <IconPhone />
                  Enquire Now
                  <IconArrow />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-5 border border-[var(--gold)]/12 p-6 sm:p-8"
        >
          <div>
            <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/55 mb-1">Host Your Event</p>
            <p className="font-cormorant text-xl sm:text-2xl text-[var(--ivory)]">Planning something special?</p>
          </div>
          <a href="tel:+38344528149"
            className="btn-gold cursor-none shrink-0 w-full sm:w-auto text-center flex items-center justify-center gap-2">
            <IconPhone />
            <span>Call +383 44 528 149</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
