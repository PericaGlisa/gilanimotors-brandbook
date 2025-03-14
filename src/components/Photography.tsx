
import { useRef, useEffect } from 'react';

const Photography = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
    const gridElement = gridRef.current;
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    if (gridElement) {
      observer.observe(gridElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      if (gridElement) {
        observer.unobserve(gridElement);
      }
    };
  }, []);

  const styles = [
    {
      title: "Product Focus",
      description: "Clean, minimalist compositions that highlight vehicle details",
      imageSrc: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1740&auto=format&fit=crop",
      alt: "Luxury car detail photography"
    },
    {
      title: "Environmental",
      description: "Vehicles positioned in upscale, architectural environments",
      imageSrc: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1740&auto=format&fit=crop",
      alt: "Luxury car in architectural setting"
    },
    {
      title: "Dynamic",
      description: "Motion-focused imagery capturing performance and speed",
      imageSrc: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1740&auto=format&fit=crop",
      alt: "Luxury car in motion"
    },
    {
      title: "Lifestyle",
      description: "Elegant lifestyle imagery aligning with the luxury clientele",
      imageSrc: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?q=80&w=1740&auto=format&fit=crop",
      alt: "Luxury lifestyle with vehicle"
    }
  ];

  return (
    <section id="photography" className="gilani-section relative overflow-hidden">
      <div className="gilani-container">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <p className="gilani-subheading">Visual Identity</p>
          <h2 className="gilani-heading text-3xl md:text-4xl mb-6">Photography Style</h2>
          <p className="text-gilani-silver">
            Our photography style captures the essence of Gilani Motors through sophisticated imagery
            that emphasizes craftsmanship, luxury, and performance.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-300 transform opacity-0 translate-y-10"
        >
          {styles.map((style, index) => (
            <div key={index} className="gilani-card overflow-hidden group hover:border-gilani-gold/50 transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={style.imageSrc} 
                  alt={style.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gilani-gold font-playfair text-xl mb-2">{style.title}</h3>
                <p className="text-gilani-silver">{style.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="gilani-card border-gilani-gold/30 bg-gilani-navy bg-opacity-50 backdrop-blur-md">
            <h3 className="text-gilani-gold font-playfair text-xl mb-4">Photography Guidelines</h3>
            <ul className="text-gilani-silver space-y-3">
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Use natural lighting when possible to highlight the metallic finishes and contours.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Maintain a color palette that complements the brand colors—environments should feature neutral tones.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Focus on craftsmanship details that showcase the superior quality of Gilani vehicles.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>For lifestyle imagery, reflect the sophisticated taste of our clientele without being ostentatious.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gilani-gold mr-2">•</span>
                <span>Ensure all photography has adequate negative space for text overlay when needed.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photography;
