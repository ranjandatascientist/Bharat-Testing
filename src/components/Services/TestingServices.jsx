import React from "react";
import TestingOption from "./TestingOption";
import { testingOptions } from "../../data/testingOptions";

function TestingServices() {
  return (
    <main
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      id="services"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Testing Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive range of testing services designed to meet
          your analytical needs with precision and reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testingOptions.map((option, index) => (
          <TestingOption
            key={index}
            title={option.title}
            description={option.description}
            icon={option.icon}
            link={option.link}
          />
        ))}
      </div>
    </main>
  );
}

export default TestingServices;
