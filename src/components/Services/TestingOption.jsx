import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

function TestingOption({ title, description, icon, link }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>

      <Link to={link}>
        <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </Link>
    </div>
  );
}

export default TestingOption;
