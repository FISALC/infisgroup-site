import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Plans from './components/Plans';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Plans />
      <Features />
      <HowItWorks />
      <Portfolio />
      <WhyChooseUs />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
