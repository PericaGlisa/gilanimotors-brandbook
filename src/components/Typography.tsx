
import { useRef, useEffect } from 'react';

const Typography = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const typographyRef = useRef<HTMLDivElement>(null);

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
    const typographyElement = typographyRef.current;
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    if (typographyElement) {
      observer.observe(typographyElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      if (typographyElement) {
        observer.unobserve(typographyElement);
      }
    };
  }, []);

  return (
    <section id="typography" className="gilani-section relative overflow-hidden">
      <div className="gilani-container">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <p className="gilani-subheading">Visual Identity</p>
          <h2 className="gilani-heading text-3xl md:text-4xl mb-6">Typography</h2>
          <p className="text-gilani-silver">
            Typography plays a crucial role in our brand identity. We use a combination of elegant
            serif and clean sans-serif fonts to create a sophisticated and modern typographic system.
          </p>
        </div>

        <div 
          ref={typographyRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-1000 delay-300 transform opacity-0 translate-y-10"
        >
          {/* Primary Font - Playfair Display */}
          <div className="gilani-card border-gilani-gold/30">
            <h3 className="text-gilani-gold text-2xl mb-6 font-playfair">Playfair Display</h3>
            <p className="text-gilani-silver mb-8">
              Our primary display font for headings and brand statements. It conveys luxury, 
              elegance, and timelessness.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-gilani-silver text-sm mb-2">Light (400)</p>
                <p className="font-playfair font-normal text-xl text-gilani-cream">
                  Gilani Motors represents luxury and excellence.
                </p>
              </div>
              
              <div>
                <p className="text-gilani-silver text-sm mb-2">Medium (500)</p>
                <p className="font-playfair font-medium text-xl text-gilani-cream">
                  Gilani Motors represents luxury and excellence.
                </p>
              </div>
              
              <div>
                <p className="text-gilani-silver text-sm mb-2">Semibold (600)</p>
                <p className="font-playfair font-semibold text-xl text-gilani-cream">
                  Gilani Motors represents luxury and excellence.
                </p>
              </div>
              
              <div>
                <p className="text-gilani-silver text-sm mb-2">Bold (700)</p>
                <p className="font-playfair font-bold text-xl text-gilani-cream">
                  Gilani Motors represents luxury and excellence.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Font - Montserrat */}
          <div className="gilani-card border-gilani-gold/30">
            <h3 className="text-gilani-gold text-2xl mb-6 font-playfair">Montserrat</h3>
            <p className="text-gilani-silver mb-8">
              Our secondary font for body text, interfaces, and supporting content. 
              It provides excellent readability and a modern feel.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-gilani-silver text-sm mb-2">Light (300)</p>
                <p className="font-montserrat font-light text-base text-gilani-cream">
                  Gilani Motors represents luxury and excellence in automotive engineering, 
                  with a focus on precision and superior craftsmanship.
                </p>
              </div>
              
              <div>
                <p className="text-gilani-silver text-sm mb-2">Regular (400)</p>
                <p className="font-montserrat font-normal text-base text-gilani-cream">
                  Gilani Motors represents luxury and excellence in automotive engineering, 
                  with a focus on precision and superior craftsmanship.
                </p>
              </div>
              
              <div>
                <p className="text-gilani-silver text-sm mb-2">Medium (500)</p>
                <p className="font-montserrat font-medium text-base text-gilani-cream">
                  Gilani Motors represents luxury and excellence in automotive engineering, 
                  with a focus on precision and superior craftsmanship.
                </p>
              </div>
              
              <div>
                <p className="text-gilani-silver text-sm mb-2">Semibold (600)</p>
                <p className="font-montserrat font-semibold text-base text-gilani-cream">
                  Gilani Motors represents luxury and excellence in automotive engineering, 
                  with a focus on precision and superior craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="gilani-card border-gilani-gold/30 bg-gilani-navy bg-opacity-50 backdrop-blur-md">
            <h3 className="text-gilani-gold font-playfair text-xl mb-4">Typography Guidelines</h3>
            <ul className="text-gilani-silver space-y-3">
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Use Playfair Display for headings, titles, and brand statements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Use Montserrat for body text, UI elements, and supporting content.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Maintain a typographic hierarchy with clear size differentiation between headings and body text.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Ensure sufficient contrast between text and background for optimal readability.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Use gold text color sparingly and primarily for emphasis or important headings.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Typography;
