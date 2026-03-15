import { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { ThemeProvider } from './ThemeContext';

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
        <About />
        <Work />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
