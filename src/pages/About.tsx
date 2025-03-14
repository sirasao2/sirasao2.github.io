
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
              I'm Rahul Sirasao—entrepreneur, engineer, and innovator. I built MotivVerse, an AI-powered mental wellness app, Cornstarch (formerly Estro.ai), which scans ingredients to call out the good and bad, and Zensai, a meditation app in Hindi and Marathi. By day, I crush it at AT&T Labs, making technology work for telecom.<br /><br />
              If you have an idea and want to turn it into reality—whether it's an app, a website, or something bigger—reach out for a one-on-one consultation and a quote. Let's build something great.<br /><br />
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
