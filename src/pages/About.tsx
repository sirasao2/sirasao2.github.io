
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="container max-w-3xl px-4 py-16 mx-auto text-center">
          <h1 className="font-typewriter text-4xl mb-6">ABOUT ME</h1>
          <div className="prose prose-invert max-w-none">
            <p className="font-typewriter text-lg leading-relaxed text-center">
              Yo, I'm Rahul Sirasao—entrepreneur, engineer, and innovator. I built MotivVerse, an AI-powered mental wellness app, and Cornstarch (formerly Estro.ai), which scans ingredients to call out the good and bad. By day, I crush it at AT&T Labs, making technology work for telecom. I have many more projects upcoming. So stay tuned.<br /><br />
              Always building, always winning. Let's make moves.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
