import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import DesignPortfolio from './pages/DesignPortfolio.jsx';
import DevelopmentPortfolio from './pages/DevelopmentPortfolio.jsx';
import DesignCaseStudy from './pages/DesignCaseStudy.jsx';
import DevelopmentProject from './pages/DevelopmentProject.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const theme = pathname.startsWith('/design') ? 'design' : pathname.startsWith('/development') ? 'development' : pathname === '/about' ? 'about' : 'home';

  return (
    <div className={`app theme-${theme}`}>
      <ScrollToTop />
      <a href="#main" className="skip-link">Skip to content</a>
      <NavBar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<DesignPortfolio />} />
          <Route path="/design/:slug" element={<DesignCaseStudy />} />
          <Route path="/development" element={<DevelopmentPortfolio />} />
          <Route path="/development/:slug" element={<DevelopmentProject />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
