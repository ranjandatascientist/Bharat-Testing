import { Link } from "react-router";
import { LINKS } from "../../constants/";
import { useState } from "react";
import { X, AlignJustify } from "lucide-react";
import bharatlogo from "../../constants/";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-b-2 sticky top-0 z-10 bg-white">
      <div className="flex justify-between items-center px-2 py-5 md:py-5 max-w-7xl mx-auto">
        <Link to="/">
          <div className="flex items-center">
            <img
              src= {bharatlogo}// Replace with your actual logo path
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
            className="text-2xl"
          >
            {isOpen ? <X /> : <AlignJustify />}
          </button>
        </div>

        <div className="hidden md:flex md:space-x-4 space-x-8 pr-2">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="uppercase text-lg font-medium p-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 px-4 border-b-4 w-full bg-neutral-50 md:hidden`}
      >
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="uppercase text-lg font-medium block py-2 tracking-wide"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
