'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  { src: '/img/event1.jpg', span: 'col-span-2 row-span-2' },
  { src: '/img/622242908_18063953864642462_8887114860163582939_n.jpg', span: '' },
  { src: '/img/622388009_18089025542042580_2482625767224589777_n.jpg', span: '' },
  { src: '/img/625891246_18115317370615005_5222125418068775120_n.jpg', span: '' },
  { src: '/img/626683778_18178090585327819_1710812902340627128_n.jpg', span: '' },
  { src: '/img/624454148_18101168359862659_852048975434129301_n.jpg', span: 'col-span-2' },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-[var(--matte-black)]">
      {/* Cinematic headline */}
      <motion.div
        style={{ y }}
        className="text-center mb-12 relative z-10"
      >
        <p className="font-montserrat text-[10px] tracking-[0.5em] uppercase text-[var(--gold)]/50 mb-3">The Infinit Experience</p>
        <h3
          className="font-playfair font-bold text-gold-gradient opacity-10"
          style={{ fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 1 }}
        >
          INFINIT
        </h3>
      </motion.div>

      {/* Mosaic grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <Image
                src={img.src}
                alt="Infinit experience"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[var(--green-deep)]/30 group-hover:bg-[var(--gold)]/5 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
