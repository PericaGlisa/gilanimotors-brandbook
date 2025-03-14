
import { useRef, useEffect } from 'react';

const LogoGuidelines = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const guidelinesRef = useRef<HTMLDivElement>(null);

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

    const sectionElement = sectionRef.current;
    const logoElement = logoRef.current;
    const guidelinesElement = guidelinesRef.current;
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    if (logoElement) {
      observer.observe(logoElement);
    }
    
    if (guidelinesElement) {
      observer.observe(guidelinesElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      if (logoElement) {
        observer.unobserve(logoElement);
      }
      if (guidelinesElement) {
        observer.unobserve(guidelinesElement);
      }
    };
  }, []);

  return (
    <section id="logo" className="gilani-section relative overflow-hidden">
      <div className="gilani-container">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <p className="gilani-subheading">Visual Identity</p>
          <h2 className="gilani-heading text-3xl md:text-4xl mb-6">Logo Guidelines</h2>
          <p className="text-gilani-silver">
            Our logo is the cornerstone of our visual identity. It represents the essence of Gilani Motors
            and should be presented consistently across all touchpoints.
          </p>
        </div>

        <div 
          ref={logoRef}
          className="bg-gilani-navy/70 border border-gilani-gold/20 rounded-lg p-10 max-w-4xl mx-auto mb-16 text-center transition-all duration-1000 delay-200 transform opacity-0 translate-y-10"
        >
          <div className="mb-10 mx-auto max-w-xs sm:max-w-sm md:max-w-md relative">
            {/* Enhanced decorative border with thicker gradient edge */}
            <div className="absolute inset-0 rounded-lg p-[3px] bg-gradient-to-br from-[#403E43] via-gilani-gold to-[#8A898C] shadow-2xl"></div>
            
            {/* Logo container with improved visibility */}
            <div className="relative rounded-lg overflow-hidden p-8 bg-gilani-navy/80 shadow-inner">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-gilani-gold font-playfair text-lg mb-3">Emblem</h3>
              <p className="text-gilani-silver text-sm">
                The winged 'G' emblem symbolizes freedom, speed, and a forward-thinking approach.
              </p>
            </div>
            
            <div>
              <h3 className="text-gilani-gold font-playfair text-lg mb-3">Typography</h3>
              <p className="text-gilani-silver text-sm">
                Custom serif typography that conveys elegance, tradition, and timeless quality.
              </p>
            </div>
            
            <div>
              <h3 className="text-gilani-gold font-playfair text-lg mb-3">Circle</h3>
              <p className="text-gilani-silver text-sm">
                The gold circle represents unity, perfection, and the premium nature of our brand.
              </p>
            </div>
          </div>
        </div>

        <div 
          ref={guidelinesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-1000 delay-400 transform opacity-0 translate-y-10"
        >
          <div className="gilani-card border-gilani-gold/30">
            <h3 className="text-gilani-gold text-xl font-playfair mb-6">Logo Usage</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-gilani-silver font-medium mb-2">Clear Space</h4>
                <p className="text-gilani-silver/80 text-sm">
                  Always maintain clear space around the logo equal to the height of the "I" in GILANI 
                  to ensure visual impact and legibility.
                </p>
              </div>
              
              <div>
                <h4 className="text-gilani-silver font-medium mb-2">Minimum Size</h4>
                <p className="text-gilani-silver/80 text-sm">
                  The logo should never be reproduced smaller than 1 inch or 72 pixels in width 
                  to maintain legibility.
                </p>
              </div>
              
              <div>
                <h4 className="text-gilani-silver font-medium mb-2">Color Variations</h4>
                <p className="text-gilani-silver/80 text-sm">
                  The primary logo is gold on navy background. For special applications, 
                  monochrome versions in white or black may be used.
                </p>
              </div>
            </div>
          </div>

          <div className="gilani-card border-gilani-gold/30">
            <h3 className="text-gilani-gold text-xl font-playfair mb-6">Logo Don'ts</h3>
            
            <ul className="text-gilani-silver space-y-4">
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span className="text-sm">Do not stretch, distort, or alter the proportions of the logo.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span className="text-sm">Do not change the colors of the logo elements unless using approved monochrome versions.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span className="text-sm">Do not place the logo on busy backgrounds that compromise legibility.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span className="text-sm">Do not add effects such as shadows, outlines, or glows to the logo.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span className="text-sm">Do not rotate, flip, or tilt the logo.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span className="text-sm">Do not rearrange or separate the logo elements.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoGuidelines;
