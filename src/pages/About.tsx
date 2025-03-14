
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-20 pb-6">
        <div className="container max-w-4xl px-4 mx-auto text-center">
          <div className="flex flex-col items-center">
            {/* Title first */}
            <h1 className="font-typewriter text-2xl md:text-4xl mb-6 rainbow-text">ABOUT ME</h1>
            
            {/* Profile image with border - now positioned under the heading */}
            <div className="mb-6">
              <div className="thin-rainbow-box rounded-lg p-1 w-[200px] h-[200px] md:w-[250px] md:h-[250px] overflow-hidden">
                <img 
                  src="/lovable-uploads/9a8d03de-c4ae-47e5-97dd-fc92b809962f.png" 
                  alt="Rahul Sirasao" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Text content below image */}
            <div className="w-full">
              <div className="prose prose-invert max-w-none">
                <p className="font-typewriter text-xs md:text-base leading-relaxed text-white">
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
