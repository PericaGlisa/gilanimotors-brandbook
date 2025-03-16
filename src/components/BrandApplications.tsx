
import { useRef, useEffect } from 'react';

const BrandApplications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const applicationsRef = useRef<HTMLDivElement>(null);

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
    const applicationsElement = applicationsRef.current;
    
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    if (applicationsElement) {
      observer.observe(applicationsElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
      if (applicationsElement) {
        observer.unobserve(applicationsElement);
      }
    };
  }, []);

  const applications = [
    {
      title: "Vehicle Badging",
      description: "Elegant metal emblem applications on Gilani vehicles",
      imageSrc: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1740&auto=format&fit=crop",
      alt: "Luxury car badge"
    },
    {
      title: "Business Collateral",
      description: "Premium stationery, business cards and printed materials",
      imageSrc: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1738&auto=format&fit=crop",
      alt: "Luxury business cards and stationery"
    },
    {
      title: "Digital Presence",
      description: "Sophisticated website and mobile application interfaces",
      imageSrc: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1374&auto=format&fit=crop",
      alt: "Luxury website design on devices"
    },
    {
      title: "Retail Environment",
      description: "Upscale showroom design and customer experience spaces",
      imageSrc: "https://images.unsplash.com/photo-1621929747188-0b4dc28498d2?q=80&w=1372&auto=format&fit=crop",
      alt: "Luxury car showroom"
    },
    {
      title: "Brand Merchandise",
      description: "Premium accessories and lifestyle products",
      imageSrc: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=1770&auto=format&fit=crop",
      alt: "Luxury branded merchandise"
    },
    {
      title: "Event Branding",
      description: "Sophisticated presence at automotive shows and private events",
      imageSrc: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1740&auto=format&fit=crop",
      alt: "Luxury brand event"
    }
  ];

  return (
    <section id="brand-applications" className="gilani-section relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-gilani-gold/5 to-transparent z-0"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-gilani-gold/5 to-transparent z-0"></div>
      
      <div className="gilani-container relative z-10">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <p className="gilani-subheading">Visual Identity</p>
          <h2 className="gilani-heading text-3xl md:text-4xl mb-6">Brand Applications</h2>
          <p className="text-gilani-silver">
            The Gilani Motors brand identity is designed to be versatile and consistently applied
            across various touchpoints, enhancing brand recognition and reinforcing our 
            premium positioning.
          </p>
        </div>

        <div 
          ref={applicationsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 transform opacity-0 translate-y-10"
        >
          {applications.map((application, index) => (
            <div 
              key={index}
              className="gilani-card overflow-hidden group hover:border-gilani-gold/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={application.imageSrc} 
                  alt={application.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-gilani-gold font-playfair text-xl mb-2">{application.title}</h3>
                <p className="text-gilani-silver">{application.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="gilani-card border-gilani-gold/30 bg-gilani-navy bg-opacity-50 backdrop-blur-md">
            <h3 className="text-gilani-gold font-playfair text-xl mb-4">Application Guidelines</h3>
            <p className="text-gilani-silver mb-4">
              When applying the Gilani Motors brand across different mediums, maintain consistency
              while adapting to each context's unique requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-gilani-silver font-medium mb-2">Physical Applications</h4>
                <ul className="text-gilani-silver/80 space-y-2">
                  <li className="flex items-start">
                    <span className="text-gilani-gold mr-2">•</span>
                    <span>Use premium materials that reflect the brand's quality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gilani-gold mr-2">•</span>
                    <span>Incorporate subtle gold accents and tactile elements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gilani-gold mr-2">•</span>
                    <span>Maintain consistent spacing around the logo</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-gilani-silver font-medium mb-2">Digital Applications</h4>
                <ul className="text-gilani-silver/80 space-y-2">
                  <li className="flex items-start">
                    <span className="text-gilani-gold mr-2">•</span>
                    <span>Ensure the brand color values are correctly implemented for screen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gilani-gold mr-2">•</span>
                    <span>Design interfaces with adequate negative space</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gilani-gold mr-2">•</span>
                    <span>Incorporate subtle animations that reflect sophistication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandApplications;
