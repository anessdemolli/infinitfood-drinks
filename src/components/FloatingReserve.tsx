'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingReserve() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = () => {
    const el = document.querySelector('#reserve');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.4 }}
          onClick={scrollTo}
          className="float-reserve btn-gold cursor-none shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        >
          <span>Reserve →</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
