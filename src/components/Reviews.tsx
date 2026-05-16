'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const reviews = [
  { name: 'Arta K.', rating: 5, text: 'Absolutely stunning experience. The coffee is exceptional and the ambiance is like nothing else in Prishtinë. A true gem of the city.' },
  { name: 'Blerim M.', rating: 5, text: 'World-class quality right in our city. The breakfast menu is divine and the service is impeccable. I bring every guest here.' },
  { name: 'Fjolla H.', rating: 4, text: 'The interior, the food, the service — everything is perfectly curated. Infinit truly lives up to its name in every way.' },
  { name: 'Driton V.', rating: 5, text: 'From the first espresso to the last bite of dessert, every moment was crafted to perfection. This is what premium dining feels like.' },
];

const galleryStrip = [
  '/img/622492504_18105834445826539_414613650511040065_n.jpg',
  '/img/474699217_921349763528504_1925776168323312875_n.jpg',
  '/img/475578812_924824036514410_1002740529587850537_n.jpg',
  '/img/475765216_924823749847772_5189594268809876941_n.jpg',
  '/img/475766431_925422476454566_7726840500892970352_n.jpg',
  '/img/622161702_18036387299537030_8178934272611074832_n.jpg',
  '/img/622550873_18073091555577962_7139994217130470369_n.jpg',
  '/img/623093750_18154858348428079_307958382663674271_n.jpg',
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24"
          fill={i < count ? 'var(--gold)' : 'none'} stroke="var(--gold)" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative py-24 sm:py-36 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--matte-black)] to-[var(--green-deep)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header + rating side-by-side on large screens */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-4 mb-5"
            >
              <div className="w-10 sm:w-16 h-px bg-[var(--gold)]/40" />
              <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Guest Reviews</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.9 }}
              className="font-playfair font-bold leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
            >
              <span className="text-gold-gradient italic">Loved by Locals.</span>
              <br />
              <span className="text-[var(--ivory)]">Designed for Everyone.</span>
            </motion.h2>
          </div>

          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.25 }}
            className="flex items-center gap-6 border border-[var(--gold)]/15 bg-[var(--green-heritage)]/20 px-7 py-5 self-start lg:self-auto"
          >
            <div className="text-center">
              <p className="font-playfair text-5xl font-bold text-gold-gradient leading-none mb-1">4.3</p>
              <Stars count={4} />
              <p className="font-montserrat text-[8px] tracking-[0.3em] uppercase text-[var(--champagne)]/40 mt-2">Google Rating</p>
            </div>
            <div className="w-px h-14 bg-[var(--gold)]/15" />
            <div className="text-center">
              <svg width="28" height="28" viewBox="0 0 24 24" className="text-[var(--gold)] mx-auto mb-1" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              <p className="font-montserrat text-[8px] tracking-[0.2em] uppercase text-[var(--champagne)]/35">Prishtinë</p>
            </div>
          </motion.div>
        </div>

        {/* Review cards — horizontal layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-20">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.7 }}
              className="border border-[var(--gold)]/10 bg-[var(--green-heritage)]/20 hover:border-[var(--gold)]/30 hover:bg-[var(--green-heritage)]/30 transition-all duration-400 p-6 sm:p-7 flex flex-col"
            >
              {/* Stars */}
              <Stars count={r.rating} />

              {/* Quote */}
              <p className="font-cormorant text-base sm:text-lg italic text-[var(--champagne)]/70 leading-relaxed mt-4 mb-5 flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--gold)]/10">
                <div className="w-8 h-8 rounded-full bg-[var(--gold)]/15 flex items-center justify-center shrink-0">
                  <span className="font-playfair text-sm text-[var(--gold)]">{r.name[0]}</span>
                </div>
                <p className="font-montserrat text-[9px] tracking-[0.2em] uppercase text-[var(--gold)]/55">{r.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photo gallery strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[var(--gold)]/30" />
            <p className="font-montserrat text-[9px] tracking-[0.35em] uppercase text-[var(--gold)]/40">From Our Kitchen</p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2">
            {galleryStrip.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.65 + i * 0.04 }}
                className="relative aspect-square overflow-hidden group cursor-none"
              >
                <Image
                  src={src} alt="Infinit gallery" fill
                  className="object-cover group-hover:scale-110 transition-transform duration-600"
                  sizes="(max-width:640px) 25vw, 12.5vw"
                />
                <div className="absolute inset-0 bg-[var(--green-deep)]/25 group-hover:bg-[var(--gold)]/8 transition-colors duration-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
