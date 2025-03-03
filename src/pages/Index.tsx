
import React from 'react';
import Navbar from '../components/Navbar';
import MinimalLayout from '../components/MinimalLayout';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
      <Navbar />
      <MinimalLayout />
      <Footer />
    </div>
  );
};

export default Index;
