
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 border-t border-gilani-gold/20 bg-gilani-navy/80 backdrop-blur-sm">
      <div className="gilani-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="h-12 w-12 relative overflow-hidden">
              <img
                src="/lovable-uploads/12c63445-bce7-4f2b-a166-8a60ddc9bd00.png"
                alt="Gilani Motors Logo"
                className="object-contain absolute inset-0 h-full w-full drop-shadow-md"
              />
            </div>
            <span className="ml-2 font-playfair text-gilani-gold text-lg font-semibold">
              Gilani <span className="text-gilani-silver">Motors</span>
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gilani-silver text-sm">
            <span>© {currentYear} Gilani Motors</span>
            <span className="hidden sm:block h-4 w-px bg-gilani-gold/30"></span>
            <span>Brand Identity Guidelines</span>
            <span className="hidden sm:block h-4 w-px bg-gilani-gold/30"></span>
            <span>Created by Rod Rakic</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
