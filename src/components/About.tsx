'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2h18l-2 7H5L3 2z"/><path d="M5 9c0 5.5 3.5 9 7 9s7-3.5 7-9"/>
        <path d="M12 18v4"/><path d="M8 22h8"/>
      </svg>
    ),
    title: 'Dine-In',
    desc: 'An atmosphere that makes every meal an occasion — elegant, warm, unforgettable.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10H3"/><path d="M21 6H3"/><path d="M21 14H3"/><path d="M21 18H3"/>
        <rect x="1" y="3" width="22" height="18" rx="2"/>
      </svg>
    ),
    title: 'Takeout',
    desc: 'Premium taste, perfectly packaged — wherever you choose to enjoy it.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Wolt Delivery',
    desc: 'Restaurant-quality cuisine, delivered fast to your door across Prishtinë.',
  },
];

const stats = [
  { value: '2019', label: 'Established' },
  { value: '4.3★', label: 'Google Rating' },
  { value: '3', label: 'Ways to Order' },
  { value: '∞', label: 'Flavors' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--green-deep)] via-[var(--green-heritage)] to-[var(--green-deep)]" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)`, backgroundSize: '48px 48px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-36 lg:py-48">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16 sm:mb-20"
        >
          <div className="w-10 sm:w-16 h-px bg-[var(--gold)]/40" />
          <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Our Story</span>
        </motion.div>

        {/* Main two-col grid */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          {/* LEFT — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-playfair font-bold leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              <span className="text-[var(--ivory)]">Where Prishtinë</span>
              <br />
              <span className="text-gold-gradient italic">Gathers in Style.</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="origin-left w-14 h-px bg-[var(--gold)]/60 mb-7"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="font-cormorant text-lg sm:text-xl leading-relaxed text-[var(--champagne)]/80 mb-5 italic"
            >
              Located on the iconic Dëshmorët e Kombit boulevard in the heart of Prishtinë,
              Infinit Food & Drinks is more than a restaurant — it is a way of life.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="font-inter text-sm leading-relaxed text-[var(--champagne)]/55 mb-10"
            >
              From sunrise coffee rituals to unforgettable evening dining, we blend Balkan
              heritage with modern culinary artistry. Every dish is a chapter in a story
              crafted with passion, precision, and an unwavering commitment to excellence.
            </motion.p>

            {/* Features — real SVG icons */}
            <div className="flex flex-col gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.1, duration: 0.7 }}
                  className="flex items-start gap-4 p-4 sm:p-5 border border-[var(--gold)]/12 hover:border-[var(--gold)]/35 bg-[var(--green-heritage)]/30 hover:bg-[var(--green-forest)]/30 transition-all duration-400 group"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-[var(--gold)]/20 text-[var(--gold)] group-hover:bg-[var(--gold)]/8 transition-colors duration-400">
                    {f.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-montserrat text-[10px] font-semibold tracking-[0.18em] uppercase text-[var(--gold)] mb-1">{f.title}</p>
                    <p className="font-inter text-sm text-[var(--champagne)]/55 leading-snug">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — image composition — fully contained, no overflow into stats */}
          <div ref={imageRef} className="relative">
            <motion.div
              style={{ y: imageY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative w-full aspect-[4/5] overflow-hidden border border-[var(--gold)]/10"
            >
              <Image
                src="/img/about us.jpg"
                alt="Infinit Food & Drinks interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-deep)]/50 to-transparent" />
            </motion.div>

            {/* Small accent image — bottom left, overlapping container only */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="absolute -bottom-5 -left-4 sm:-left-8 w-36 sm:w-44 h-28 sm:h-36 overflow-hidden border-4 border-[var(--green-deep)] z-10"
            >
              <Image src="/img/about us (2).jpg" alt="Infinit ambiance" fill className="object-cover" sizes="176px" />
            </motion.div>

            {/* Corner ornament */}
            <div className="absolute top-0 right-0 w-10 h-10 border-t border-r border-[var(--gold)]/35" />
          </div>
        </div>

        {/* Stats — in its own row BELOW both columns */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.9 }}
          className="mt-20 sm:mt-28 grid grid-cols-2 sm:grid-cols-4 border border-[var(--gold)]/12"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.85 + i * 0.08 }}
              className="text-center py-8 sm:py-10 px-4 bg-[var(--green-heritage)]/35 hover:bg-[var(--green-forest)]/40 transition-colors duration-500 border-r border-[var(--gold)]/10 last:border-r-0 [&:nth-child(2)]:border-r-0 sm:[&:nth-child(2)]:border-r"
            >
              <p className="font-playfair text-3xl sm:text-4xl font-bold text-gold-gradient mb-1">{s.value}</p>
              <p className="font-montserrat text-[8px] sm:text-[9px] tracking-[0.3em] uppercase text-[var(--champagne)]/45">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
