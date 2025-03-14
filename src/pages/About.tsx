
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center">
        <div className="container max-w-4xl px-4 mx-auto text-center">
          <div className="flex flex-col md:flex-row md:items-center md:gap-8">
            {/* Profile image with border */}
            <div className="mx-auto md:mx-0 mb-4 md:mb-0">
              <div className="thin-rainbow-box rounded-lg p-1 w-[220px] h-[220px] overflow-hidden">
                <img 
                  src="/lovable-uploads/3516bd5b-67bc-4d74-ac34-ae9c49d079e5.png" 
                  alt="Rahul Sirasao by a lake" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            <div className="flex-1">
              <h1 className="font-typewriter text-3xl md:text-4xl mb-4 rainbow-text">ABOUT ME</h1>
              <div className="prose prose-invert max-w-none">
                <p className="font-typewriter text-sm md:text-base leading-relaxed text-white">
                  I'm Rahul Sirasao, an entrepreneur, engineer, and innovator. I built MotivVerse, an AI-powered mental wellness app; Cornstarch (formerly Estro.ai), which scans ingredients to identify the good and bad; and Zensai, a meditation app in Hindi and Marathi. By day, I crush it at AT&T Labs, making technology work for telecom.
                  <br /><br />
                  If you have an idea and want to turn it into reality—whether it's an app, a website, or something bigger—reach out for a one-on-one consultation and a quote. Let's build something great.
                  <br /><br />
                  Always building, always winning. Let's make moves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
