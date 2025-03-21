import React from "react";
import FooterSection from "./FooterSection";
import { footerSections } from "../../data/footerData";

function Footer() {
  return (
    <footer className="bg-[#0F1035] text-white py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Bharat Testing Labartary. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
