
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandStory from '@/components/BrandStory';
import ColorPalette from '@/components/ColorPalette';
import Typography from '@/components/Typography';
import LogoGuidelines from '@/components/LogoGuidelines';
import Photography from '@/components/Photography';
import Iconography from '@/components/Iconography';
import BrandApplications from '@/components/BrandApplications';
import VoiceTone from '@/components/VoiceTone';
import Footer from '@/components/Footer';

const Index = () => {
  // Lazy load images with blur effect
  useEffect(() => {
    const loadImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const src = img.getAttribute('src');
        if (src) {
          const newImg = new Image();
          newImg.src = src;
          newImg.onload = () => {
            img.classList.add('loaded');
          };
        }
      });
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-gilani-navy overflow-hidden">
      <style>
        {`
          img {
            transition: filter 0.5s ease-out, opacity 0.5s ease-out;
            filter: blur(5px);
            opacity: 0.6;
          }
          
          img.loaded {
            filter: blur(0);
            opacity: 1;
          }
        `}
      </style>
      
      <Navbar />
      <Hero />
      <BrandStory />
      <ColorPalette />
      <Typography />
      <LogoGuidelines />
      <Photography />
      <Iconography />
      <BrandApplications />
      <VoiceTone />
      <Footer />
    </div>
  );
};

export default Index;
