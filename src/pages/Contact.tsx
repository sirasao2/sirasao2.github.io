
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="container max-w-3xl px-4 py-16 text-center">
          <h1 className="font-typewriter text-4xl mb-6">CONTACT ME</h1>
          <div className="border border-border p-6 inline-block">
            <p className="font-typewriter text-lg mb-4">Get in touch with me at:</p>
            <a 
              href="mailto:rahulsirasao96@gmail.com" 
              className="font-typewriter text-xl text-primary hover:text-primary/80 transition-colors"
            >
              rahulsirasao96@gmail.com
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
