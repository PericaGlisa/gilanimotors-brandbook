import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = heroRef.current;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  return (
    <div className="relative min-h-[85dvh] sm:min-h-[100dvh] flex items-center justify-center overflow-hidden px-2 sm:px-6">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gilani-navy to-black z-0"></div>
      
      {/* Gold circle background element */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="h-[60vh] sm:h-[120vh] w-[60vh] sm:w-[120vh] rounded-full border border-gilani-gold/20 opacity-30"></div>
        <div className="absolute h-[45vh] sm:h-[100vh] w-[45vh] sm:w-[100vh] rounded-full border border-gilani-gold/20 opacity-20"></div>
        <div className="absolute h-[30vh] sm:h-[80vh] w-[30vh] sm:w-[80vh] rounded-full border border-gilani-gold/20 opacity-10"></div>
      </div>

      {/* Hero Content */}
      <div 
        ref={heroRef}
        className="gilani-container relative z-10 text-center transition-all duration-1000 transform opacity-0 translate-y-10 py-2 sm:py-0"
      >
        <div className="mb-3 sm:mb-8 mx-auto max-w-[200px] sm:max-w-sm md:max-w-xl lg:max-w-2xl">
          <div className="relative rounded-lg">
            <div className="absolute inset-0 rounded-lg p-[1.5px] sm:p-[3px] bg-gradient-to-br from-[#403E43] via-gilani-gold to-[#8A898C] shadow-2xl"></div>
            <div className="relative rounded-lg overflow-hidden p-1.5 sm:p-8 bg-gilani-navy/80 shadow-inner">
              <div className="relative">
                <div className="absolute inset-0 -m-2 bg-gilani-gold/5 rounded-full blur-xl"></div>
                <img
                  src="/lovable-uploads/8d4b08c8-e37f-4ade-b748-069d94f90c56.png"
                  alt="Gilani Motors Logo"
                  className="w-full h-auto relative z-10 drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="gilani-heading text-lg sm:text-4xl md:text-5xl lg:text-6xl mb-1.5 sm:mb-6 leading-tight px-1 sm:px-0">
          Brand Identity <span className="text-gilani-silver">Guide</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-gilani-silver text-xs sm:text-lg md:text-xl mb-3 sm:mb-10 leading-relaxed px-1.5 sm:px-4">
          A comprehensive guide to the visual identity of Gilani Motors, 
          representing luxury, precision, and excellence in automotive craftsmanship.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-4 px-1.5 sm:px-0">
          <a href="#brand-story" className="gilani-button w-full sm:w-auto text-xs sm:text-base py-1.5 sm:py-3">
            Explore Brand
          </a>
          <a href="#color-palette" className="gilani-button w-full sm:w-auto text-xs sm:text-base py-1.5 sm:py-3">
            View Guidelines
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-1 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gilani-silver text-[10px] sm:text-sm mb-0.5 sm:mb-2">Scroll to explore</span>
        <div className="h-6 sm:h-12 w-3 sm:w-6 rounded-full border border-gilani-gold/30 flex items-start justify-center p-1">
          <div className="h-1 w-1 sm:h-2 sm:w-2 bg-gilani-gold rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
