import React from 'react';
import { MapPin, Award, Users, Microscope, FileCheck, Globe, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16" id="about">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-600">Bharat Testing Laboratory</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Providing industry-leading testing services with unmatched precision and reliability from our state-of-the-art facility in Noida.
        </p>
      </div>

      {/* Company Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-black-800">Our Legacy of Excellence</h2>
          <p className="mb-4">
            Established in 2025, Bharat Testing Laboratory has grown to become one of India's premier testing facilities, serving diverse industries with comprehensive analytical solutions.
          </p>
          <p className="mb-4">
            Our Noida-based headquarters houses advanced equipment operated by a team of seasoned scientists and technicians, all dedicated to delivering results you can trust.
          </p>
          <div className="flex items-center text-black-600 mt-6">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="font-medium">Noida, Uttar Pradesh, India</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-blue-600 font-bold text-4xl mb-2">15+</div>
            <div className="text-sm">Years of Experience</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-blue-600 font-bold text-4xl mb-2">10k+</div>
            <div className="text-sm">Tests Conducted</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-blue-600 font-bold text-4xl mb-2">500+</div>
            <div className="text-sm">Corporate Clients</div>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="text-blue-600 font-bold text-4xl mb-2">10+</div>
            <div className="text-sm">Expert Scientists</div>
          </div>
        </div>
      </div>


      {/* Accreditations */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Our Accreditations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-blue-600">ISO</span>
            </div>
            <p className="font-medium">ISO 17025</p>
          </div>
          <div>
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-blue-600">NABL</span>
            </div>
            <p className="font-medium">NABL Certified</p>
          </div>
          <div>
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-blue-600">BIS</span>
            </div>
            <p className="font-medium">BIS Recognition</p>
          </div>
          <div>
            <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
              <span className="font-bold text-blue-600">FSSAI</span>
            </div>
            <p className="font-medium">FSSAI Approved</p>
          </div>
          
        </div>
      </div>

      {/* Why Choose Us */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-black-800">Why Choose <span className="text-blue-600">Bharat Testing Laboratory</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0 mt-1">
              <span className="font-bold text-blue-600">1</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">Cutting-Edge Technology</h3>
              <p>Our laboratory is equipped with the latest testing equipment and analytical instruments, ensuring precise and reliable results.</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0 mt-1">
              <span className="font-bold text-blue-600">2</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p>Our staff includes  scientists, experienced technicians, and industry specialists with deep expertise across multiple disciplines.</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0 mt-1">
              <span className="font-bold text-blue-600">3</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">Fast Turnaround Times</h3>
              <p>We understand the importance of timely results. Our efficient processes deliver accurate reports within industry-leading timeframes.</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center shrink-0 mt-1">
              <span className="font-bold text-blue-600">4</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">Comprehensive Reporting</h3>
              <p>Our detailed reports provide clear, actionable insights with full transparency on methodologies and findings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;