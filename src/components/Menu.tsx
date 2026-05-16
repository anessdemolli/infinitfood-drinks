'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/* ── Real SVG icons for each category ─────────────── */
const IconBreakfast = ({ active }: { active?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 1.8 : 1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const IconCoffee = ({ active }: { active?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 1.8 : 1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
    <path d="M6.35 2.35a5.96 5.96 0 0 1 0 3.3M10.35 2.35a5.96 5.96 0 0 1 0 3.3"/>
  </svg>
);
const IconDrinks = ({ active }: { active?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 1.8 : 1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22h8"/><path d="M12 11v11"/><path d="M20 2H4l4 9a4 4 0 0 0 8 0l4-9z"/>
  </svg>
);
const IconLunch = ({ active }: { active?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 1.8 : 1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
  </svg>
);
const IconDinner = ({ active }: { active?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 1.8 : 1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20"/><path d="M5 20V10a7 7 0 0 1 14 0v10"/>
    <path d="M12 3v3"/><path d="M9.5 6a2.5 2.5 0 0 0 5 0"/>
  </svg>
);
const IconDesserts = ({ active }: { active?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 1.8 : 1.4} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1 2.5 2 3.5s2 2 2 3.5"/><path d="M8 8a3 3 0 0 0-6 0c0 3 4 6 10 6s10-3 10-6a3 3 0 0 0-6 0"/>
    <path d="M2 14h20"/><path d="M6 14v6"/><path d="M18 14v6"/><path d="M10 14v6"/><path d="M14 14v6"/>
  </svg>
);

/* ── 4 FIXED showcase items shown in EVERY tab ─────── */
const showcaseItems = [
  {
    name: 'Heritage Eggs Benedict',
    desc: 'Slow-poached eggs, hollandaise, artisan bread',
    price: '€6.50', tag: "Chef's Pick",
    img: '/img/474451401_916550620675085_1671872683631195839_n.jpg',
  },
  {
    name: 'Signature Espresso',
    desc: 'Single origin heritage blend, velvet crema',
    price: '€1.80', tag: 'Signature',
    img: '/img/625045805_18071934866145867_3919183020268343189_n.jpg',
  },
  {
    name: 'Grilled Salmon',
    desc: 'Herb-crusted salmon, seasonal vegetables, lemon butter',
    price: '€13.50', tag: "Chef's Pick",
    img: '/img/622103999_18075696206366387_4878483076741911896_n.jpg',
  },
  {
    name: 'Chocolate Heritage Cake',
    desc: 'Valrhona dark chocolate, gold leaf, berry coulis',
    price: '€5.50', tag: 'Signature',
    img: '/img/625009727_18081592679243404_1433254937647084644_n.jpg',
  },
];

const categories = [
  { id: 'breakfast',  label: 'Breakfast',        icon: (a: boolean) => <IconBreakfast active={a} /> },
  { id: 'coffee',     label: 'Coffee',            icon: (a: boolean) => <IconCoffee    active={a} /> },
  { id: 'drinks',     label: 'Signature Drinks',  icon: (a: boolean) => <IconDrinks    active={a} /> },
  { id: 'lunch',      label: 'Lunch',             icon: (a: boolean) => <IconLunch     active={a} /> },
  { id: 'dinner',     label: 'Dinner',            icon: (a: boolean) => <IconDinner    active={a} /> },
  { id: 'desserts',   label: 'Desserts',          icon: (a: boolean) => <IconDesserts  active={a} /> },
];

function MenuCard({ item, index, inView }: { item: typeof showcaseItems[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group heritage-card flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden shrink-0">
        <Image
          src={item.img} alt={item.name} fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--green-deep)] via-[var(--green-deep)]/15 to-transparent" />
        {item.tag && (
          <span className="absolute top-3 left-3 bg-[var(--gold)] text-[var(--green-deep)] font-montserrat text-[7px] font-bold tracking-[0.2em] uppercase px-2.5 py-[3px]">
            {item.tag}
          </span>
        )}
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="font-playfair text-base font-semibold text-[var(--ivory)] leading-snug">{item.name}</h4>
          {item.price && (
            <span className="font-cormorant text-base font-semibold text-[var(--gold)] shrink-0 pt-0.5">{item.price}</span>
          )}
        </div>
        <div className="w-8 h-px bg-[var(--gold)]/25 mb-2" />
        <p className="font-inter text-xs text-[var(--champagne)]/50 leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('breakfast');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: false, margin: '-40px' });

  return (
    <section id="menu" ref={sectionRef} className="relative py-24 sm:py-36 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--green-deep)] to-[var(--matte-black)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="w-10 sm:w-16 h-px bg-[var(--gold)]/40" />
            <span className="font-montserrat text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[var(--gold)]">Culinary Excellence</span>
            <div className="w-10 sm:w-16 h-px bg-[var(--gold)]/40" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 36 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.9 }}
            className="font-playfair font-extrabold leading-tight mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            <span className="text-[var(--ivory)]">Our </span>
            <span className="text-gold-gradient italic">Signature Menu</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.22 }}
            className="font-cormorant text-lg sm:text-xl text-[var(--champagne)]/55 italic"
          >
            Every plate tells a story of heritage, craft, and limitless flavour.
          </motion.p>
        </div>

        {/* Category tabs — real icons, each a distinct box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.28 }}
          className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-10 sm:mb-14"
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`cursor-none flex flex-col items-center gap-2 py-4 px-2 border transition-all duration-300 ${
                  isActive
                    ? 'bg-[var(--gold)]/10 border-[var(--gold)] text-[var(--gold)]'
                    : 'bg-[var(--green-heritage)]/20 border-[var(--gold)]/12 text-[var(--champagne)]/40 hover:border-[var(--gold)]/35 hover:text-[var(--champagne)]/70'
                }`}
              >
                <span>{cat.icon(isActive)}</span>
                <span className="font-montserrat text-[8px] sm:text-[9px] tracking-[0.16em] uppercase leading-none text-center">
                  {cat.label}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Active tab label */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="font-cormorant text-center text-lg italic text-[var(--gold)]/50 mb-8 -mt-4"
          >
            Showcase — {categories.find(c => c.id === activeTab)?.label}
          </motion.p>
        </AnimatePresence>

        {/* Grid — same 4 items every time, crossfade on tab change */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {showcaseItems.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} inView={gridInView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 sm:mt-16"
        >
          <p className="font-cormorant text-base sm:text-lg italic text-[var(--champagne)]/35">
            Full menu available in-restaurant and on Wolt
          </p>
          <a href="https://wolt.com" target="_blank" rel="noopener noreferrer" className="btn-wolt">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-1 1.5 1.5 2H17V9.5h2zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm13.5-9H17v2.5h4L19.5 9zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
            </svg>
            Order on Wolt
          </a>
        </motion.div>
      </div>
    </section>
  );
}
