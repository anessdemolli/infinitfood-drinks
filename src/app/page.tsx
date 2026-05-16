'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Events from '@/components/Events';
import Hours from '@/components/Hours';
import MapSection from '@/components/MapSection';
import Reserve from '@/components/Reserve';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';


export default function Home() {
  useEffect(() => {
    document.body.style.opacity = '0';
    const t = setTimeout(() => {
      document.body.style.transition = 'opacity 0.8s ease';
      document.body.style.opacity = '1';
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Events />
        <Hours />
        <MapSection />
        <Reserve />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
