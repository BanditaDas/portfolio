import { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

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
      <Router>
        <ScrollToTop />
        <main className="relative min-h-screen font-sans">
          <CustomCursor />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Bento />
                <Work />
                <Certificates />
              </>
            } />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </ThemeProvider>
  );
}
