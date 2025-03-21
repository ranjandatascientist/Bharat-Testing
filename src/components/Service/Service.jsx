import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";
import { Shield, Calendar, Clock, ClipboardCheck } from "lucide-react";
import {
  Beaker,
  Hammer,
  Building,
  Wrench,
  Microscope,
  Gauge,
  Zap,
  FileSearch,
  Factory,
  Construction,
  Flame,
  Ruler,
  Magnet,
  GlassWater,
  Scan,
  Scale,
  Thermometer,
  Landmark,
  TestTubes,
} from "lucide-react";

const services = [
  {
    icon: <Hammer className="w-6 h-6 text-blue-600" />,
    name: "Mechanical Properties Testing",
  },
  {
    icon: <Beaker className="w-6 h-6 text-blue-600" />,
    name: "Chemical Composition Analysis",
  },
  {
    icon: <Building className="w-6 h-6 text-blue-600" />,
    name: "Concrete & Cement Testing",
  },
  { 
    icon: <Wrench className="w-6 h-6 text-blue-600" />, 
    name: "Metallurgical Testing" 
  },
  {
    icon: <Microscope className="w-6 h-6 text-blue-600" />,
    name: "Microstructural Analysis",
  },
  {
    icon: <Flame className="w-6 h-6 text-blue-600" />,
    name: "High Temperature Testing",
  },
  {
    icon: <Scan className="w-6 h-6 text-blue-600" />,
    name: "Non-Destructive Testing",
  },
  {
    icon: <FileSearch className="w-6 h-6 text-blue-600" />,
    name: "Material Certification",
  },
  {
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    name: "Industrial Material Validation",
  },
  {
    icon: <Construction className="w-6 h-6 text-blue-600" />,
    name: "Construction Materials Testing",
  },
  {
    icon: <Ruler className="w-6 h-6 text-blue-600" />,
    name: "Dimensional Analysis",
  },
  {
    icon: <Magnet className="w-6 h-6 text-blue-600" />,
    name: "Magnetic Properties Testing",
  },
  {
    icon: <Scale className="w-6 h-6 text-blue-600" />,
    name: "Density & Specific Gravity Testing",
  },
];

const additionalServices = [
  {
    icon: <GlassWater className="w-6 h-6 text-blue-600" />,
    name: "Corrosion Resistance Testing",
  },
  // {
  //   icon: <Chemical className="w-6 h-6 text-blue-600" />,
  //   name: "Polymer & Plastic Testing",
  // },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    name: "Electrical Properties Testing",
  },
  {
    icon: <Thermometer className="w-6 h-6 text-blue-600" />,
    name: "Thermal Analysis",
  },
  {
    icon: <Gauge className="w-6 h-6 text-blue-600" />,
    name: "Fatigue & Fracture Testing",
  },
  {
    icon: <Landmark className="w-6 h-6 text-blue-600" />,
    name: "Structural Component Testing",
  },
  { 
    icon: <Flame className="w-6 h-6 text-blue-600" />, 
    name: "Flammability Testing" 
  },
  {
    icon: <Hammer className="w-6 h-6 text-blue-600" />,
    name: "Impact & Hardness Testing",
  },
  {
    icon: <TestTubes className="w-6 h-6 text-blue-600" />,
    name: "Surface Chemistry Analysis",
  },
];

function ServiceItem({ icon, name }) {
  return (
    <div className="flex items-center space-x-3 mb-4">
      <div className="flex-shrink-0">{icon}</div>
      <span className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
        {name}
      </span>
    </div>
  );
}

const Service = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    materialType: "",
    servicesNeeded: [],
    projectDescription: "",
    preferredDate: "",
    urgency: "standard"
  });

  const allTestingServices = [...services, ...additionalServices];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceSelect = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        servicesNeeded: [...formData.servicesNeeded, value]
      });
    } else {
      setFormData({
        ...formData,
        servicesNeeded: formData.servicesNeeded.filter(service => service !== value)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, like sending to an API
    console.log("Form submitted:", formData);
    alert("Your request has been submitted successfully! We'll contact you shortly.");
  };

  return (
    <>
      <Navbar />
      {/* Main hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-24 bg-gradient-to-r from-[#365486] to-[#0F1035] text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Material Testing
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Comprehensive material analysis and certification for all industries
            </p>
          </div>
          <div className="space-x-4 mt-8">
            <a href="#booking-form">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors duration-200">
                Request Material Testing
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Why choose our services section */}
      <section className="w-full py-12 md:py-24 lg:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Our Material Testing Services?
              </h3>
              <p className="text-gray-500 mb-4">
                Our comprehensive material testing services cover a wide range of analyses to ensure your materials meet quality and safety standards. We use state-of-the-art equipment and proven methodologies to provide accurate and reliable results.
              </p>
              <ul className="list-disc list-inside mb-8">
                <li>Industry-leading testing capabilities</li>
                <li>Accredited laboratory facilities</li>
                <li>Fast turnaround times</li>
                <li>Detailed material certification reports</li>
              </ul>
              <a href="#booking-form">
                <button className="bg-[#0F1035] hover:bg-[#1a1b4d] text-white px-6 py-4 rounded-lg transition-colors duration-200">
                  Request Material Testing
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive material testing and certification solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              {services.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  name={service.name}
                />
              ))}
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              {additionalServices.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  name={service.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
{/* Benefits section */}
<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
  <div className="container px-4 md:px-6 mx-auto">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
      Benefits of Material Testing
    </h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg bg-white">
        <Shield className="h-12 w-12 text-blue-600" />
        <h1 className="font-bold text-2xl text-center">Quality Assurance</h1>
        <p className="text-sm text-gray-600 text-center">
          Verify material properties and ensure compliance with standards.
        </p>
      </div>
      <div className="border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg bg-white">
        <ClipboardCheck className="h-12 w-12 text-blue-600" />
        <h1 className="font-bold text-2xl text-center">Risk Mitigation</h1>
        <p className="text-sm text-gray-600 text-center">
          Identify material defects before they cause structural failures.
        </p>
      </div>
      <div className="border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg bg-white">
        <Shield className="h-12 w-12 text-blue-600" />
        <h1 className="font-bold text-2xl text-center whitespace-nowrap">Regulatory Compliance</h1>
        <p className="text-sm text-gray-600 text-center">
          Meet industry standards and regulatory requirements with certified testing.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Booking Form Section */}
      <section id="booking-form" className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Request Material Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to schedule your material testing
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="sampleType">
                    Sample Type *
                  </label>
                  <select
                    id="sampleType"
                    name="sampleType"
                    required
                    value={formData.sampleType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                     <option value="">Select Material Type</option>
                     <option value="metal">Metal/Alloy</option>
                     <option value="concrete">Concrete/Cement</option>
                     <option value="polymer">Polymer/Plastic</option>
                     <option value="ceramic">Ceramic</option>
                     <option value="composite">Composite Material</option>
                     <option value="wood">Wood/Timber</option>
                     <option value="soil">Soil/Aggregate</option>
                     <option value="other">Other (Please specify in description)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="siteLocation">
                    Site Location *
                  </label>
                  <input
                    type="text"
                    id="siteLocation"
                    name="siteLocation"
                    required
                    value={formData.siteLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="123 Main St, City, State"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Services Needed *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {allTestingServices.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`service-${index}`}
                        name="servicesNeeded"
                        value={service.name}
                        onChange={handleServiceSelect}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`service-${index}`} className="ml-2 block text-sm text-gray-700">
                        {service.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="projectDescription">
                  Project Description *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please describe your project and specific testing requirements..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="preferredDate">
                    Preferred Testing Date
                  </label>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="urgency">
                    Urgency Level
                  </label>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="standard">Standard (5-7 business days)</option>
                      <option value="rush">Rush (2-3 business days)</option>
                      <option value="emergency">Emergency (24 hours)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="sampleSize">
                    Number of Samples
                  </label>
                  <input
                    type="number"
                    id="sampleSize"
                    name="sampleSize"
                    value={formData.sampleSize}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1"
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
                >
                  Submit Material Testing Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;