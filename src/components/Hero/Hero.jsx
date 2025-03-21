import React from "react";
import HeroContent from "./HeroContent";
import { TestTube2 } from "lucide-react";
import bharatlogo from "../../constants";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#365486] to-[#0F1035] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <HeroContent />
          <div className="p-4 md:p-5 lg:p-8 rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center">
            {/* <TestTube2 className="w-48 h-48 text-white opacity-90" /> */}
            <img
              src={bharatlogo}
              alt="Bharat Testing Laboratory Logo"
              className="h-48 w-48 object-contain" 
              style={{ borderRadius: "inherit" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;