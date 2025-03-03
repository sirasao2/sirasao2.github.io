
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="h-screen flex flex-col overflow-auto">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Index;
