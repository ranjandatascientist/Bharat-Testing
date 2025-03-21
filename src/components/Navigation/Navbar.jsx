import { Link } from "react-router";
import { LINKS } from "../../constants/";
import { useState, useEffect, useRef } from "react";
import { X, AlignJustify } from "lucide-react";
import bharatlogo from "../../constants/";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    // Get the actual height of the menu when it's rendered
    if (mobileMenuRef.current && isOpen) {
      setMenuHeight(mobileMenuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full">
      <nav 
        className={`border-b-2 sticky top-0 z-50 bg-white w-full transition-all duration-300 ${
          scrolled ? 'shadow-md py-2' : 'py-4'
        }`}
      >
        <div className="flex justify-between items-center px-4 md:px-6 max-w-7xl mx-auto">
          <Link to="/">
            <div className="flex items-center transition-transform duration-300 hover:scale-105">
              <img
                src={bharatlogo}
                alt="Bharat Testing Laboratory Logo"
                className="h-12 w-auto md:h-15 lg:h-11 transition-all duration-300"
              />
              <span className="ml-2 text-xl font-semibold text-[#0F1035] transition-colors duration-300">
                Bharat Testing Laboratory
              </span>
            </div>
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-2xl p-2 transition-transform duration-300 hover:scale-110"
            >
              {isOpen ? <X /> : <AlignJustify />}
            </button>
          </div>

          <div className="hidden md:flex md:space-x-6 pr-2">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="uppercase text-lg font-medium p-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu with CSS transition using height instead of display */}
        <div 
          ref={mobileMenuRef}
          style={{ 
            height: `${menuHeight}px`,
            transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            overflow: 'hidden'
          }}
          className="bg-white border-b md:hidden w-full"
        >
          <div className="px-4 pb-4">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="uppercase text-lg font-medium block py-3 opacity-0 transform translate-y-4 transition-all duration-300"
                onClick={() => setIsOpen(false)}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(1rem)',
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;