'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const schedule = [
  { day: 'Monday',    short: 'Mon', hours: '7:00 AM — 11:00 PM', open: true },
  { day: 'Tuesday',   short: 'Tue', hours: '7:00 AM — 11:00 PM', open: true },
  { day: 'Wednesday', short: 'Wed', hours: '7:00 AM — 11:00 PM', open: true },
  { day: 'Thursday',  short: 'Thu', hours: '7:00 AM — 11:00 PM', open: true },
  { day: 'Friday',    short: 'Fri', hours: '7:00 AM — 11:00 PM', open: true },
  { day: 'Saturday',  short: 'Sat', hours: '7:00 AM — 11:00 PM', open: true },
  { day: 'Sunday',    short: 'Sun', hours: 'Closed',              open: false },
];

const IconSun = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
  </svg>
);
const IconCoffee = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
    <path d="M6.35 2.35a5.96 5.96 0 0 1 0 3.3M10.35 2.35a5.96 5.96 0 0 1 0 3.3"/>
  </svg>
);
const IconMoon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const slots = [
  { label: 'Morning', time: '7:00 — 11:00', icon: <IconSun />, desc: 'Breakfast & Coffee' },
  { label: 'Afternoon', time: '11:00 — 17:00', icon: <IconCoffee />, desc: 'Lunch & Light Bites' },
  { label: 'Evening', time: '17:00 — 23:00', icon: <IconMoon />, desc: 'Dinner & Cocktails' },
];

export default function Hours() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const todaySchedule = schedule.find(s => s.day === today);

  return (
    <section id="hours" ref={ref} className="relative py-24 sm:py-36 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--green-deep)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg,var(--gold) 0,var(--gold) 1px,transparent 0,transparent 50%)', backgroundSize: '28px 28px' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="w-10 sm:w-16 h-px bg-[var(--gold)]/40" />
            <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Hours of Operation</span>
            <div className="w-10 sm:w-16 h-px bg-[var(--gold)]/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.9 }}
            className="font-playfair font-bold leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            <span className="text-[var(--ivory)]">Open Every Day </span>
            <span className="text-gold-gradient italic">for You</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="font-cormorant text-lg sm:text-xl italic text-[var(--champagne)]/55"
          >
            From the first espresso to the last cocktail — we&apos;re always ready.
          </motion.p>
        </div>

        {/* Today live status */}
        {todaySchedule && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 sm:mb-14"
          >
            <div className={`flex items-center gap-2 px-5 py-2.5 border ${todaySchedule.open ? 'border-emerald-500/40 bg-emerald-500/8' : 'border-red-400/30 bg-red-400/5'}`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${todaySchedule.open ? 'bg-emerald-400' : 'bg-red-400'}`} />
              <span className={`font-montserrat text-[9px] tracking-[0.25em] uppercase ${todaySchedule.open ? 'text-emerald-400' : 'text-red-400'}`}>
                {todaySchedule.open ? 'Open Now' : 'Closed Today'}
              </span>
            </div>
            <div className="px-5 py-2.5 border border-[var(--gold)]/20 bg-[var(--gold)]/5">
              <span className="font-cormorant text-base text-[var(--gold)]">
                Today · {todaySchedule.hours}
              </span>
            </div>
          </motion.div>
        )}

        {/* Time slots — visual breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          {slots.map((slot, i) => (
            <motion.div
              key={slot.label}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 + i * 0.08 }}
              className="relative border border-[var(--gold)]/15 bg-[var(--green-heritage)]/30 p-6 sm:p-8 text-center hover:border-[var(--gold)]/40 hover:bg-[var(--green-forest)]/25 transition-all duration-400 group"
            >
              <div className="flex items-center justify-center text-[var(--gold)] mb-3">{slot.icon}</div>
              <p className="font-montserrat text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/60 mb-2">{slot.label}</p>
              <p className="font-cormorant text-xl sm:text-2xl text-[var(--ivory)] mb-1">{slot.time}</p>
              <p className="font-inter text-xs text-[var(--champagne)]/40">{slot.desc}</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-[var(--gold)] group-hover:w-12 transition-all duration-400" />
            </motion.div>
          ))}
        </motion.div>

        {/* Day-by-day schedule — redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.45 }}
          className="overflow-hidden border border-[var(--gold)]/12"
        >
          {schedule.map((item, i) => {
            const isToday = item.day === today;
            return (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                className={`flex items-center justify-between px-5 sm:px-8 py-4 sm:py-5 border-b border-[var(--gold)]/8 last:border-b-0 transition-all duration-300 ${
                  isToday
                    ? 'bg-[var(--gold)]/8 border-l-2 border-l-[var(--gold)]'
                    : 'hover:bg-[var(--green-forest)]/20'
                }`}
              >
                {/* Day */}
                <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                  <span className="font-montserrat text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[var(--champagne)]/30 w-8 shrink-0 hidden xs:block">
                    {item.short}
                  </span>
                  <span className={`font-cormorant text-lg sm:text-xl font-medium ${isToday ? 'text-[var(--gold)]' : 'text-[var(--ivory)]'}`}>
                    {item.day}
                  </span>
                  {isToday && (
                    <span className="hidden sm:inline font-montserrat text-[7px] tracking-[0.2em] uppercase bg-[var(--gold)] text-[var(--green-deep)] px-2 py-[2px]">
                      Today
                    </span>
                  )}
                </div>

                {/* Hours + status */}
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <span className={`font-montserrat text-xs sm:text-sm tracking-wide ${item.open ? 'text-[var(--champagne)]/70' : 'text-[var(--champagne)]/25 italic'}`}>
                    {item.hours}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.open ? 'bg-emerald-400' : 'bg-[var(--champagne)]/15'}`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Kitchen note */}
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.0 }}
          className="text-center font-inter text-[11px] text-[var(--champagne)]/25 mt-5 tracking-wide"
        >
          Kitchen closes 30 min before closing · Holiday hours may vary
        </motion.p>

        {/* Location card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 sm:mt-16 grid sm:grid-cols-2 gap-4"
        >
          {/* Address */}
          <div className="border border-[var(--gold)]/12 bg-[var(--green-heritage)]/25 p-6 sm:p-8 flex items-center gap-5">
            <div className="w-10 h-10 flex items-center justify-center border border-[var(--gold)]/20 text-[var(--gold)] shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/60 mb-1">Location</p>
              <p className="font-cormorant text-lg text-[var(--ivory)]">Dëshmorët e Kombit</p>
              <p className="font-inter text-xs text-[var(--champagne)]/40">Prishtinë 10000, Kosovo</p>
            </div>
          </div>

          {/* Directions CTA */}
          <a
            href="https://maps.google.com/?q=Dëshmorët+e+Kombit+Prishtina+Kosovo"
            target="_blank" rel="noopener noreferrer"
            className="cursor-none border border-[var(--gold)]/20 bg-[var(--gold)]/5 hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/50 transition-all duration-400 p-6 sm:p-8 flex items-center justify-between group"
          >
            <div>
              <p className="font-montserrat text-[9px] tracking-[0.3em] uppercase text-[var(--gold)]/60 mb-1">Get Directions</p>
              <p className="font-cormorant text-lg text-[var(--gold)] group-hover:text-[var(--gold-pale)] transition-colors">Open in Google Maps</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
              className="text-[var(--gold)]/50 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition-all duration-300">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
