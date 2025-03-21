import { Link } from "react-router";
import { LINKS } from "../../constants/";
import { useState, useEffect, useRef } from "react";
import { X, AlignJustify } from "lucide-react";
import bharatlogo from "../../constants/";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);
  
  useEffect(() => {
    // Get the actual height of the menu when it's rendered
    if (mobileMenuRef.current && isOpen) {
      setMenuHeight(mobileMenuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full">
      <nav className="border-b-2 sticky top-0 z-50 bg-white w-full">
        <div className="flex justify-between items-center px-4 py-4 md:py-5 max-w-7xl mx-auto">
          <Link to="/">
            <div className="flex items-center">
              <img
                src={bharatlogo} // Replace with your actual logo path
                alt="Bharat Testing Laboratory Logo"
                className="h-12 w-auto md:h-15 lg:h-11" // Adjust size as needed
              />
              <span className="ml-2 text-xl font-semibold text-[#0F1035]">
                Bharat Testing Laboratory
              </span>
            </div>
          </Link>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="text-2xl p-2"
            >
              {isOpen ? <X /> : <AlignJustify />}
            </button>
          </div>

          <div className="hidden md:flex md:space-x-6 pr-2">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="uppercase text-lg font-medium p-2 hover:text-blue-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu with CSS transition using height instead of display */}
        <div 
          ref={mobileMenuRef}
          style={{ 
            height: `${menuHeight}px`,
            transition: 'height 0.3s ease-in-out',
            overflow: 'hidden'
          }}
          className="bg-white border-b md:hidden w-full"
        >
          <div className="px-4 pb-4">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="uppercase text-lg font-medium block py-3 hover:text-blue-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
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