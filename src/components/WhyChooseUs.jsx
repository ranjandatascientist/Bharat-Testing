import React from "react";
import { FEATURES } from "../constants";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-12 md:py-24 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:ml-36">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <p className="text-lg text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
