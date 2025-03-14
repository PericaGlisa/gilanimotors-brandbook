
import { useRef, useEffect } from 'react';

const Iconography = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

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
    const iconsElement = iconsRef.current;
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    if (iconsElement) {
      observer.observe(iconsElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      if (iconsElement) {
        observer.unobserve(iconsElement);
      }
    };
  }, []);

  const iconCategories = [
    {
      title: "Vehicle Features",
      description: "Icons representing key vehicle features and specifications",
      icons: [
        "M15 11v4.833A3.167 3.167 0 0 1 11.833 19H4.167A3.167 3.167 0 0 1 1 15.833V4.167A3.167 3.167 0 0 1 4.167 1h7.666A3.167 3.167 0 0 1 15 4.167V9M15 11h-1.77a3 3 0 0 1-2.13-.88L9.882 8.88a3 3 0 0 0-2.131-.88H6M15 11h3m0 0h3m-3 0V8m0 3v3", // Battery icon for electric vehicles
        "m8 8-4 4 4 4M16 8l4 4-4 4M9 19l6-14", // Performance icon
        "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z", // Luxury features icon
      ]
    },
    {
      title: "Interface Icons",
      description: "UI elements for digital interfaces and applications",
      icons: [
        "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25", // Home icon
        "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z", // Search icon
        "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z", // User account icon
        "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z", // Shop icon
      ]
    },
    {
      title: "Navigation Icons",
      description: "Directional and navigational elements for wayfinding",
      icons: [
        "M8.25 4.5l7.5 7.5-7.5 7.5", // Right arrow
        "M15.75 19.5L8.25 12l7.5-7.5", // Left arrow
        "M4.5 15.75l7.5-7.5 7.5 7.5", // Up arrow
        "M19.5 8.25l-7.5 7.5-7.5-7.5", // Down arrow
      ]
    }
  ];

  return (
    <section id="iconography" className="gilani-section relative overflow-hidden">
      <div className="gilani-container">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <p className="gilani-subheading">Visual Identity</p>
          <h2 className="gilani-heading text-3xl md:text-4xl mb-6">Iconography</h2>
          <p className="text-gilani-silver">
            Our icon system uses clean, sophisticated geometric forms that reflect our 
            brand's attention to precision and detail. Icons are designed to be functional
            while maintaining our premium aesthetic.
          </p>
        </div>

        <div 
          ref={iconsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 transform opacity-0 translate-y-10"
        >
          {iconCategories.map((category, index) => (
            <div 
              key={index}
              className="gilani-card hover:border-gilani-gold/50 transition-all duration-300"
            >
              <h3 className="text-gilani-gold font-playfair text-xl mb-4">{category.title}</h3>
              <p className="text-gilani-silver mb-6">{category.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">
                {category.icons.map((pathData, iconIndex) => (
                  <div 
                    key={iconIndex} 
                    className="aspect-square rounded-lg flex items-center justify-center bg-gilani-navy/50 border border-gilani-gold/20 hover:border-gilani-gold/50 transition-all duration-300"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-8 h-8 text-gilani-gold"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={pathData} />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="gilani-card border-gilani-gold/30 bg-gilani-navy bg-opacity-50 backdrop-blur-md">
            <h3 className="text-gilani-gold font-playfair text-xl mb-4">Icon Guidelines</h3>
            <ul className="text-gilani-silver space-y-3">
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Maintain consistent line weights across all icons for visual harmony.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Use the brand's color palette, with gold as the primary accent color.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Apply rounded corners and terminals to maintain a sophisticated, approachable feel.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Maintain adequate padding within the icon's bounding box for visual clarity.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Scale icons appropriately for each application while maintaining proportions.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iconography;
