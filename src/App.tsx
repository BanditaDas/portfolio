import { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Footer } from './components/Footer';
import { ThemeProvider } from './ThemeContext';
import Bento from './components/About/Bento';
import { Certificates } from './components/Certificates';
import { AllProjects } from './components/AllProjects';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsAndConditions } from './components/TermsAndConditions';
import { NotFound } from './components/NotFound';

function ScrollAndHashHandler() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If on the home page, validate the hash
    if (pathname === '/') {
      const validHashes = ['', '#', '#about', '#work', '#certificates', '#contact'];
      if (hash && !validHashes.includes(hash)) {
        // Redirect to a non-existent route to trigger the 404 page
        navigate('/404', { replace: true });
        return;
      }
    }

    // Default scroll to top if there's no hash (normal page navigation)
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, navigate]);
  
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
        <ScrollAndHashHandler />
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
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </ThemeProvider>
  );
}
