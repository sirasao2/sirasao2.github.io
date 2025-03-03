
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="container max-w-3xl px-4 py-16">
          <h1 className="font-typewriter text-4xl mb-6 text-center">ABOUT ME</h1>
          <div className="prose prose-invert max-w-none">
            <p className="font-typewriter text-lg leading-relaxed">
              Hi, I'm Rahul Sirasao—an entrepreneur, engineer, and AI enthusiast. I build cutting-edge tech products that merge automation, AI, and creativity. From MotivVerse, an AI-powered mental wellness app, to Cornstarch (formerly Estro.ai), an AI-driven tool that uses OCR to detect harmful and beneficial ingredients in products, I thrive on innovation that makes life smarter and more efficient. I also work at AT&T Labs, where I contribute to groundbreaking applications in telecom, handling large-scale metric data to optimize network performance. Whether it's automating workflows, crafting sleek digital experiences, or pushing the boundaries of AI, I'm always creating. Let's connect and build the future.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
