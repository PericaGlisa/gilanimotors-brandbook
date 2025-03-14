
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-gilani-navy/80 backdrop-blur-md border-b border-gilani-gold/20 shadow-md'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="gilani-container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <div className="h-12 w-12 relative overflow-hidden">
            <img
              src="/lovable-uploads/12c63445-bce7-4f2b-a166-8a60ddc9bd00.png"
              alt="Gilani Motors Logo"
              className="object-contain absolute inset-0 h-full w-full drop-shadow-md"
            />
          </div>
          <span className="ml-3 font-playfair text-gilani-gold text-xl font-semibold">
            Gilani <span className="text-gilani-silver">Motors</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#brand-story"
            className="text-gilani-silver hover:text-gilani-gold transition-colors duration-300"
          >
            Brand Story
          </a>
          <a
            href="#color-palette"
            className="text-gilani-silver hover:text-gilani-gold transition-colors duration-300"
          >
            Colors
          </a>
          <a
            href="#typography"
            className="text-gilani-silver hover:text-gilani-gold transition-colors duration-300"
          >
            Typography
          </a>
          <a
            href="#logo"
            className="text-gilani-silver hover:text-gilani-gold transition-colors duration-300"
          >
            Logo
          </a>
          <a
            href="#photography"
            className="text-gilani-silver hover:text-gilani-gold transition-colors duration-300"
          >
            Photography
          </a>
          <a
            href="#iconography"
            className="text-gilani-silver hover:text-gilani-gold transition-colors duration-300"
          >
            Iconography
          </a>
          <a
            href="#brand-applications"
            className="text-gilani-silver hover:text-gilani-gold transition-colors duration-300"
          >
            Brand Applications
          </a>
          <a
            href="#voice-tone"
            className="text-gilani-silver hover:text-gilani-gold transition-colors duration-300"
          >
            Voice & Tone
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gilani-gold"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-gilani-navy/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out z-40',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <a
          href="#brand-story"
          className="block text-gilani-silver hover:text-gilani-gold transition-colors duration-300 py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Brand Story
        </a>
        <a
          href="#color-palette"
          className="block text-gilani-silver hover:text-gilani-gold transition-colors duration-300 py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Colors
        </a>
        <a
          href="#typography"
          className="block text-gilani-silver hover:text-gilani-gold transition-colors duration-300 py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Typography
        </a>
        <a
          href="#logo"
          className="block text-gilani-silver hover:text-gilani-gold transition-colors duration-300 py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Logo
        </a>
        <a
          href="#photography"
          className="block text-gilani-silver hover:text-gilani-gold transition-colors duration-300 py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Photography
        </a>
        <a
          href="#iconography"
          className="block text-gilani-silver hover:text-gilani-gold transition-colors duration-300 py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Iconography
        </a>
        <a
          href="#brand-applications"
          className="block text-gilani-silver hover:text-gilani-gold transition-colors duration-300 py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Brand Applications
        </a>
        <a
          href="#voice-tone"
          className="block text-gilani-silver hover:text-gilani-gold transition-colors duration-300 py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Voice & Tone
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
