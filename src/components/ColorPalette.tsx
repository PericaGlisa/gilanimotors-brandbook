
import { useRef, useEffect } from 'react';

const ColorPalette = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const colorsRef = useRef<HTMLDivElement>(null);

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
    const colorsElement = colorsRef.current;
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    if (colorsElement) {
      observer.observe(colorsElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      if (colorsElement) {
        observer.unobserve(colorsElement);
      }
    };
  }, []);

  const colors = [
    {
      name: 'Navy Blue',
      hex: '#0A0F1C',
      rgb: 'RGB(10, 15, 28)',
      usage: 'Primary background color, represents sophistication and luxury.',
      bgClass: 'bg-gilani-navy',
      textClass: 'text-white'
    },
    {
      name: 'Gold',
      hex: '#D4AF37',
      rgb: 'RGB(212, 175, 55)',
      usage: 'Primary accent color, represents excellence and prestige.',
      bgClass: 'bg-gilani-gold',
      textClass: 'text-gilani-navy'
    },
    {
      name: 'Silver',
      hex: '#C0C0C0',
      rgb: 'RGB(192, 192, 192)',
      usage: 'Secondary accent color, represents elegance and modernity.',
      bgClass: 'bg-gilani-silver',
      textClass: 'text-gilani-navy'
    },
    {
      name: 'Charcoal',
      hex: '#333333',
      rgb: 'RGB(51, 51, 51)',
      usage: 'Tertiary color, represents strength and stability.',
      bgClass: 'bg-gilani-charcoal',
      textClass: 'text-white'
    },
    {
      name: 'Cream',
      hex: '#F5F5F0',
      rgb: 'RGB(245, 245, 240)',
      usage: 'Light accent color for contrast and readability.',
      bgClass: 'bg-gilani-cream',
      textClass: 'text-gilani-navy'
    }
  ];

  return (
    <section id="color-palette" className="gilani-section relative overflow-hidden">
      <div className="gilani-container">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <p className="gilani-subheading">Visual Identity</p>
          <h2 className="gilani-heading text-3xl md:text-4xl mb-6">Color Palette</h2>
          <p className="text-gilani-silver">
            Our color palette has been carefully selected to reflect the luxury and sophistication
            of the Gilani Motors brand. Each color plays a specific role in creating a cohesive
            visual identity that resonates with our target audience.
          </p>
        </div>

        <div 
          ref={colorsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 transition-all duration-1000 delay-300 transform opacity-0 translate-y-10"
        >
          {colors.map((color, index) => (
            <div 
              key={index}
              className={`gilani-card hover:shadow-lg hover:scale-105 transition-transform duration-300 ${color.bgClass} overflow-hidden rounded-lg`}
            >
              <div className="aspect-square"></div>
              <div className="p-6 bg-gilani-navy/90 backdrop-blur-md">
                <h3 className={`font-playfair font-semibold text-xl mb-2 ${color.textClass === 'text-white' ? 'text-gilani-gold' : 'text-gilani-gold'}`}>
                  {color.name}
                </h3>
                <p className="text-gilani-silver text-sm mb-1">{color.hex}</p>
                <p className="text-gilani-silver text-sm mb-2">{color.rgb}</p>
                <p className="text-gilani-silver/80 text-sm leading-relaxed">{color.usage}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="gilani-card border-gilani-gold/30 bg-gilani-navy bg-opacity-50 backdrop-blur-md">
            <h3 className="text-gilani-gold font-playfair text-xl mb-4">Color Application Guidelines</h3>
            <ul className="text-gilani-silver space-y-3">
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Use Navy Blue as the primary background color for most applications.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Gold should be used sparingly for emphasis and to highlight important elements.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Silver complements gold and can be used for secondary text and details.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Charcoal provides depth and can be used for sections requiring visual separation.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Cream should be used for elements requiring high contrast against dark backgrounds.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorPalette;
