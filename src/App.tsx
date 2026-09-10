import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-deep text-light font-sans overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppWidget />
    </div>
  );
}
