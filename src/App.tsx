import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './component/NavBar';
import Home from './page/Home';
import About from './page/About';
import Footer from './component/Footer';
import VerifiyCert from './page/VerifiyCert';
import Certification from './page/Certification';
import Contact from './page/Contact';

export default function App() {
  // Redirect users from /scw to /scw/ if they land on the wrong URL
  useEffect(() => {
    const currentPath = globalThis.location.pathname;
    if (currentPath === '/scw') {
      globalThis.location.replace('/scw/');
    }
  }, []);
  
  return (
    <Router basename="/">
      <NavBar />
      <Routes>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Certification />} />
      <Route path="verify-cert" element={<VerifiyCert />} />
      <Route path="contact" element={<Contact />} />
      {/* Redirect any unmatched routes to home */}
      <Route path="*" element={<Navigate to="home" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}