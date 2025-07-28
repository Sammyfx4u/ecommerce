import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default HomePage;
