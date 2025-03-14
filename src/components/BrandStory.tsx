
import { useRef, useEffect } from 'react';

const BrandStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
    const contentElement = contentRef.current;
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    if (contentElement) {
      observer.observe(contentElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      if (contentElement) {
        observer.unobserve(contentElement);
      }
    };
  }, []);

  return (
    <section id="brand-story" className="gilani-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gilani-navy/50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-gilani-gold/5 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gilani-gold/5 to-transparent z-0"></div>
      
      <div className="gilani-container relative z-10">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <p className="gilani-subheading">Our Identity</p>
          <h2 className="gilani-heading text-3xl md:text-4xl mb-6">Brand Story</h2>
          <p className="text-gilani-silver">
            The Gilani Motors brand embodies luxury, precision, and a relentless pursuit of excellence.
            Our identity is crafted to reflect our dedication to automotive perfection.
          </p>
        </div>

        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 transform opacity-0 translate-y-10"
        >
          <div>
            <div className="gilani-card hover:border-gilani-gold/50 transition-all duration-300">
              <h3 className="text-gilani-gold font-playfair text-2xl mb-6">Brand Essence</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-gilani-silver font-medium mb-2">Vision</h4>
                  <p className="text-gilani-silver/80">
                    To redefine automotive luxury through exceptional design, 
                    innovation, and craftsmanship that creates memorable experiences.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gilani-silver font-medium mb-2">Mission</h4>
                  <p className="text-gilani-silver/80">
                    Crafting automotive masterpieces that exceed expectations in 
                    performance, luxury, and sustainability while prioritizing 
                    customer satisfaction.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gilani-silver font-medium mb-2">Values</h4>
                  <ul className="text-gilani-silver/80 space-y-2">
                    <li className="flex items-start">
                      <span className="text-gilani-gold mr-2">•</span>
                      <span><strong className="text-gilani-silver">Excellence:</strong> Uncompromising quality in every detail</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gilani-gold mr-2">•</span>
                      <span><strong className="text-gilani-silver">Innovation:</strong> Pioneering new technologies and designs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gilani-gold mr-2">•</span>
                      <span><strong className="text-gilani-silver">Integrity:</strong> Transparent and ethical in all relationships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gilani-gold mr-2">•</span>
                      <span><strong className="text-gilani-silver">Exclusivity:</strong> Creating unique experiences for discerning clients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="gilani-card hover:border-gilani-gold/50 transition-all duration-300">
              <h3 className="text-gilani-gold font-playfair text-2xl mb-6">Brand Voice</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-gilani-silver font-medium mb-2">Personality</h4>
                  <p className="text-gilani-silver/80">
                    Confident, sophisticated, and authoritative. The Gilani Motors 
                    voice conveys expertise and luxury without being pretentious.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gilani-silver font-medium mb-2">Tone</h4>
                  <ul className="text-gilani-silver/80 space-y-2">
                    <li className="flex items-start">
                      <span className="text-gilani-gold mr-2">•</span>
                      <span><strong className="text-gilani-silver">Refined:</strong> Elegant and sophisticated language</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gilani-gold mr-2">•</span>
                      <span><strong className="text-gilani-silver">Confident:</strong> Assured but never arrogant</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gilani-gold mr-2">•</span>
                      <span><strong className="text-gilani-silver">Passionate:</strong> Conveying enthusiasm for automotive excellence</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gilani-gold mr-2">•</span>
                      <span><strong className="text-gilani-silver">Clear:</strong> Direct and concise communication</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-gilani-silver font-medium mb-2">Brand Promise</h4>
                  <p className="text-gilani-silver/80">
                    "Extraordinary engineering, unparalleled luxury, and a driving experience 
                    that transcends expectations."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
