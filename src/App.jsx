import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import WebDev from './components/WebDev';
import Recruitment from './components/Recruitment';
import Training from './components/Training';
import About from './components/About';
import Contact from './components/Contact'; // Assuming Contact component exists and can be used as a page

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-development" element={<WebDev />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/training" element={<Training />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div className="pt-24"><Contact /></div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
