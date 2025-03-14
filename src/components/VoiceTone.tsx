
import { useRef, useEffect } from 'react';

const VoiceTone = () => {
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

  const examples = [
    {
      type: "Product Description",
      wrong: "Our car is fast and luxurious with good features that people will like.",
      right: "The Gilani Sovereign delivers an unparalleled fusion of dynamic performance and refined luxury, crafted for the discerning driver who demands excellence."
    },
    {
      type: "Customer Communication",
      wrong: "We'll fix your car as soon as possible. Thanks for choosing us.",
      right: "Your Gilani vehicle will receive our immediate attention from our master technicians. We appreciate your distinguished patronage and commitment to excellence."
    },
    {
      type: "Social Media",
      wrong: "Check out our awesome new car! It's super cool and you'll love it!",
      right: "Introducing the new Gilani Elegance—where revolutionary engineering meets timeless design. Experience automotive artistry redefined. #GilaniMotors #PursuitOfExcellence"
    },
    {
      type: "Crisis Communication",
      wrong: "We're sorry about the problems. We'll try to do better.",
      right: "We acknowledge the concerns raised and take full responsibility. Our commitment to excellence demands immediate action, and we are implementing comprehensive measures to exceed expectations."
    }
  ];

  return (
    <section id="voice-tone" className="gilani-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gilani-navy/50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gilani-gold/5 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-gilani-gold/5 to-transparent z-0"></div>
      
      <div className="gilani-container relative z-10">
        <div 
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 transform opacity-0 translate-y-10"
        >
          <p className="gilani-subheading">Communication</p>
          <h2 className="gilani-heading text-3xl md:text-4xl mb-6">Voice & Tone</h2>
          <p className="text-gilani-silver">
            How we communicate is as important as what we communicate. Our voice and tone
            guidelines ensure consistency in our verbal identity across all touchpoints.
          </p>
        </div>

        <div 
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start transition-all duration-1000 delay-300 transform opacity-0 translate-y-10"
        >
          <div>
            <div className="gilani-card hover:border-gilani-gold/50 transition-all duration-300">
              <h3 className="text-gilani-gold font-playfair text-2xl mb-6">Communication Principles</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-gilani-silver font-medium mb-3">1. Sophisticated Elegance</h4>
                  <p className="text-gilani-silver/80">
                    Use refined language that reflects the brand's luxury positioning without being
                    pretentious. Choose words that convey quality, precision, and excellence.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gilani-silver font-medium mb-3">2. Clear Authority</h4>
                  <p className="text-gilani-silver/80">
                    Speak with confidence and expertise about automotive topics. 
                    Demonstrate deep knowledge without overwhelming the audience with 
                    overly technical jargon.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gilani-silver font-medium mb-3">3. Emotional Connection</h4>
                  <p className="text-gilani-silver/80">
                    Engage on an emotional level by appealing to the passion and appreciation
                    for automotive excellence. Evoke the experience of driving a Gilani vehicle.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-gilani-silver font-medium mb-3">4. Respectful Directness</h4>
                  <p className="text-gilani-silver/80">
                    Be concise and direct while maintaining a respectful tone that honors the 
                    intelligence of our audience. Avoid unnecessary complexity or verbosity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="gilani-card hover:border-gilani-gold/50 transition-all duration-300">
              <h3 className="text-gilani-gold font-playfair text-2xl mb-6">Voice Examples</h3>
              
              <div className="space-y-8">
                {examples.map((example, index) => (
                  <div key={index}>
                    <h4 className="text-gilani-silver font-medium mb-3">{example.type}</h4>
                    
                    <div className="mb-3 p-4 bg-red-950/20 border border-red-800/30 rounded-lg">
                      <p className="text-red-300 text-sm font-medium mb-1">Incorrect:</p>
                      <p className="text-gilani-silver/80 italic">"{example.wrong}"</p>
                    </div>
                    
                    <div className="p-4 bg-green-950/20 border border-green-800/30 rounded-lg">
                      <p className="text-green-300 text-sm font-medium mb-1">Correct:</p>
                      <p className="text-gilani-silver/80 italic">"{example.right}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <div className="gilani-card border-gilani-gold/30 bg-gilani-navy bg-opacity-50 backdrop-blur-md">
            <h3 className="text-gilani-gold font-playfair text-xl mb-4">Key Vocabulary</h3>
            <p className="text-gilani-silver mb-6">
              Certain words and phrases help reinforce our brand identity. Use them consistently
              in communications to strengthen brand associations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-3 bg-gilani-navy/50 border border-gilani-gold/20 rounded-lg text-center">
                <span className="text-gilani-gold">Excellence</span>
              </div>
              <div className="p-3 bg-gilani-navy/50 border border-gilani-gold/20 rounded-lg text-center">
                <span className="text-gilani-gold">Craftsmanship</span>
              </div>
              <div className="p-3 bg-gilani-navy/50 border border-gilani-gold/20 rounded-lg text-center">
                <span className="text-gilani-gold">Precision</span>
              </div>
              <div className="p-3 bg-gilani-navy/50 border border-gilani-gold/20 rounded-lg text-center">
                <span className="text-gilani-gold">Innovation</span>
              </div>
              <div className="p-3 bg-gilani-navy/50 border border-gilani-gold/20 rounded-lg text-center">
                <span className="text-gilani-gold">Legacy</span>
              </div>
              <div className="p-3 bg-gilani-navy/50 border border-gilani-gold/20 rounded-lg text-center">
                <span className="text-gilani-gold">Distinction</span>
              </div>
              <div className="p-3 bg-gilani-navy/50 border border-gilani-gold/20 rounded-lg text-center">
                <span className="text-gilani-gold">Performance</span>
              </div>
              <div className="p-3 bg-gilani-navy/50 border border-gilani-gold/20 rounded-lg text-center">
                <span className="text-gilani-gold">Sophistication</span>
              </div>
              <div className="p-3 bg-gilani-navy/50 border border-gilani-gold/20 rounded-lg text-center">
                <span className="text-gilani-gold">Masterpiece</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceTone;
