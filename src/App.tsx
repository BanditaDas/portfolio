import { useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { ThemeProvider } from './ThemeContext';
import Bento from './components/About/Bento';
import { Certificates } from './components/Certificates';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';

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

  const path = window.location.pathname;

  let content;
  if (path === '/privacy') {
    content = <PrivacyPolicy />;
  } else if (path === '/terms') {
    content = <TermsAndConditions />;
  } else {
    content = (
      <>
        <Hero />
        <Bento />
        <Work />
        <Certificates />
      </>
    );
  }

  return (
    <ThemeProvider>
      <main className="relative min-h-screen font-sans">
        <CustomCursor />
        <Navbar />
        {content}
        <Footer />
      </main>
    </ThemeProvider>
  );
}
