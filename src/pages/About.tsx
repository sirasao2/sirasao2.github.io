
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="container max-w-3xl px-4 py-16 mx-auto text-center">
          <h1 className="font-typewriter text-4xl mb-6 rainbow-text">ABOUT ME</h1>
          
          {/* Profile image with border */}
          <div className="mb-8 flex justify-center">
            <div className="thin-rainbow-box rounded-lg p-1 w-[280px] h-[280px] overflow-hidden">
              <img 
                src="/lovable-uploads/3516bd5b-67bc-4d74-ac34-ae9c49d079e5.png" 
                alt="Rahul Sirasao by a lake" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="font-typewriter text-lg leading-relaxed text-white">
              I'm Rahul Sirasao, an entrepreneur, engineer, and innovator. I built MotivVerse, an AI-powered mental wellness app; Cornstarch (formerly Estro.ai), which scans ingredients to identify the good and bad; and Zensai, a meditation app in Hindi and Marathi. By day, I crush it at AT&T Labs, making technology work for telecom.
              <br /><br />
              If you have an idea and want to turn it into reality—whether it's an app, a website, or something bigger—reach out for a one-on-one consultation and a quote. Let's build something great.
              <br /><br />
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
