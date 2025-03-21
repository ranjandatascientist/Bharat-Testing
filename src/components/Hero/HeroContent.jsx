import React from 'react';
import { Link } from "react-router";
import { Shield, BadgeCheck,Microscope, Award } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="md:w-1/2 mb-10 md:mb-0">
      <div className="mb-2">
    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
      <BadgeCheck className="w-4 h-4 mr-1" />
      ISO Certified
    </span>
  </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Precision Testing for <span className="text-blue-500">Reliable Results</span>
      </h1>
      
      <p className="text-xl text-blue-100 mb-8">
        Empowering industries with cutting-edge laboratory testing, accurate 
        analysis, and certified results—ensuring quality, safety, and compliance.
      </p>
      
      <div className="flex flex-col md:flex-row gap-5 mb-8">
        <div className="flex items-center">
          <Shield className="w-5 h-5 mr-2 text-blue-300" />
          <span className="text-sm text-blue-100">Trusted by 200+ Companies</span>
        </div>
        <div className="flex items-center">
          <Award className="w-5 h-5 mr-2 text-blue-300" />
          <span className="text-sm text-blue-100">Government Approved</span>
        </div>
        <div className="flex items-center">
          <Microscope className="w-5 h-5 mr-2 text-blue-300" />
          <span className="text-sm text-blue-100">99.8% Accuracy Rate</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link to={"../../auth/"}>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg">
            Request a Test
          </button>
        </Link>
        <Link to={"../../about"}>
          <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:bg-opacity-20 transition-colors duration-300">
            Our Process
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroContent;