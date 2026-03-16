import { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { ThemeProvider } from './ThemeContext';
import Bento from './components/About/Bento';
import { Certificate } from 'crypto';
import { Certificates } from './components/Certificates';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <main className="relative min-h-screen font-sans">
        <CustomCursor />
        <Navbar />
        <Hero />
        <Bento/>
        <Work />
        <Certificates />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
