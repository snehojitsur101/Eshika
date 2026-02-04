
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AIStylist from './components/AIStylist';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductSection />
        <Newsletter />
      </main>
      <Footer />
      
      {/* Interactive AI Stylist Widget */}
      <AIStylist />
    </div>
  );
};

export default App;
