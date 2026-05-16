'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const timeSlots = [
  '07:00', '07:30', '08:00', '08:30', '09:00', '09:30',
  '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
  '22:00', '22:30',
];

const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '10+'];

const inputClass =
  'w-full bg-transparent border border-[var(--gold)]/20 text-[var(--ivory)] placeholder-[var(--champagne)]/25 ' +
  'font-inter text-sm px-4 py-3.5 outline-none transition-all duration-300 ' +
  'focus:border-[var(--gold)]/70 focus:bg-[var(--gold)]/4 ' +
  'hover:border-[var(--gold)]/35';

const selectClass =
  'w-full bg-[var(--green-deep)] border border-[var(--gold)]/20 text-[var(--ivory)] ' +
  'font-inter text-sm px-4 py-3.5 outline-none transition-all duration-300 ' +
  'focus:border-[var(--gold)]/70 focus:bg-[var(--gold)]/4 ' +
  'hover:border-[var(--gold)]/35 cursor-pointer appearance-none';

const labelClass = 'block font-montserrat text-[8px] tracking-[0.3em] uppercase text-[var(--gold)]/60 mb-2';

export default function Reserve() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '',
    phone: '', guests: '', date: '', time: '',
    requests: '',
  });
  const [status, setStatus] = useState<FormState>('idle');

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.guests || !form.date || !form.time) return;
    setStatus('sending');
    // Simulate API call — replace with real endpoint when ready
    await new Promise(r => setTimeout(r, 1600));
    setStatus('success');
  };

  const reset = () => {
    setForm({ firstName: '', lastName: '', email: '', phone: '', guests: '', date: '', time: '', requests: '' });
    setStatus('idle');
  };

  return (
    <section id="reserve" ref={ref} className="relative py-24 sm:py-36 lg:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--matte-black)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--green-deep)] via-[var(--matte-black)] to-[var(--green-heritage)]/20" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/3 blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/18 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/18 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="w-10 sm:w-16 h-px bg-[var(--gold)]/40" />
            <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Make a Reservation</span>
            <div className="w-10 sm:w-16 h-px bg-[var(--gold)]/40" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="font-playfair font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            <span className="text-[var(--ivory)]">Reserve Your </span>
            <span className="text-gold-gradient italic">Infinit Experience</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="font-cormorant text-lg sm:text-xl italic text-[var(--champagne)]/55 max-w-xl mx-auto"
          >
            A table at Infinit is more than a seat — it&apos;s an invitation to a world where every moment is crafted for your pleasure.
          </motion.p>
        </div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.9 }}
          className="relative border border-[var(--gold)]/15 bg-[var(--green-deep)]/60 backdrop-blur-xl overflow-hidden"
        >
          {/* Corner ornaments */}
          <div className="absolute top-5 left-5 w-8 h-8 border-t border-l border-[var(--gold)]/25 pointer-events-none" />
          <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-[var(--gold)]/25 pointer-events-none" />
          <div className="absolute bottom-5 left-5 w-8 h-8 border-b border-l border-[var(--gold)]/25 pointer-events-none" />
          <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r border-[var(--gold)]/25 pointer-events-none" />

          {/* Gold top bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center py-20 sm:py-28 px-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 border border-[var(--gold)]/50 flex items-center justify-center mb-8"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </motion.div>
                <p className="font-montserrat text-[9px] tracking-[0.4em] uppercase text-[var(--gold)] mb-4">Reservation Received</p>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[var(--ivory)] mb-4">
                  Thank you, {form.firstName}.
                </h3>
                <p className="font-cormorant text-lg italic text-[var(--champagne)]/65 mb-8 max-w-sm">
                  We have received your reservation and will confirm via email shortly. We look forward to welcoming you.
                </p>
                <button onClick={reset} className="btn-outline-gold cursor-none">
                  Make Another Reservation
                </button>
              </motion.div>
            ) : (
              /* ── Form ── */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="p-8 sm:p-12 lg:p-16"
              >
                {/* Row 1 — Name + Surname */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
                  <div>
                    <label className={labelClass}>First Name <span className="text-[var(--gold)]">*</span></label>
                    <input
                      type="text" name="firstName" required
                      value={form.firstName} onChange={handleChange}
                      placeholder="Enter first name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name <span className="text-[var(--gold)]">*</span></label>
                    <input
                      type="text" name="lastName" required
                      value={form.lastName} onChange={handleChange}
                      placeholder="Enter last name"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2 — Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-5">
                  <div>
                    <label className={labelClass}>Email Address <span className="text-[var(--gold)]">*</span></label>
                    <input
                      type="email" name="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel" name="phone"
                      value={form.phone} onChange={handleChange}
                      placeholder="+383 __ __ __ __"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3 — Date + Time + Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-5">
                  <div>
                    <label className={labelClass}>Date <span className="text-[var(--gold)]">*</span></label>
                    <div className="relative">
                      <input
                        type="date" name="date" required min={today}
                        value={form.date} onChange={handleChange}
                        className={inputClass + ' pr-10 [color-scheme:dark]'}
                      />
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--gold)]/40 pointer-events-none" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Time <span className="text-[var(--gold)]">*</span></label>
                    <div className="relative">
                      <select name="time" required value={form.time} onChange={handleChange} className={selectClass}>
                        <option value="" disabled>Select time</option>
                        {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--gold)]/40 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Guests <span className="text-[var(--gold)]">*</span></label>
                    <div className="relative">
                      <select name="guests" required value={form.guests} onChange={handleChange} className={selectClass}>
                        <option value="" disabled>No. of guests</option>
                        {guestOptions.map(g => <option key={g} value={g}>{g} {g === '1' ? 'guest' : 'guests'}</option>)}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--gold)]/40 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Row 4 — Special requests */}
                <div className="mb-8 sm:mb-10">
                  <label className={labelClass}>Special Requests</label>
                  <textarea
                    name="requests" rows={3}
                    value={form.requests} onChange={handleChange}
                    placeholder="Allergies, special occasions, seating preferences…"
                    className={inputClass + ' resize-none'}
                  />
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/15 to-transparent mb-8 sm:mb-10" />

                {/* Submit row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <p className="font-inter text-xs text-[var(--champagne)]/30 max-w-xs leading-relaxed">
                    Or call us directly at{' '}
                    <a href="tel:+38344528149" className="text-[var(--gold)]/60 hover:text-[var(--gold)] transition-colors cursor-none">
                      +383 44 528 149
                    </a>
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-gold cursor-none w-full sm:w-auto flex items-center justify-center gap-3 disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                        <span>Confirming…</span>
                      </>
                    ) : (
                      <span>Confirm Reservation</span>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Gold bottom bar */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/50 to-transparent" />
        </motion.div>

        {/* Quick-contact strip below form */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { icon: '📞', label: 'Call', value: '+383 44 528 149', href: 'tel:+38344528149' },
            { icon: '📍', label: 'Visit', value: 'Dëshmorët e Kombit, Prishtinë', href: 'https://maps.google.com/?q=42.6538035,21.1596276' },
          ].map(item => (
            <a key={item.label} href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="cursor-none flex items-center gap-3 group"
            >
              <span className="text-base">{item.icon}</span>
              <div>
                <p className="font-montserrat text-[8px] tracking-[0.25em] uppercase text-[var(--gold)]/40">{item.label}</p>
                <p className="font-inter text-xs text-[var(--champagne)]/50 group-hover:text-[var(--gold)] transition-colors duration-300">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
