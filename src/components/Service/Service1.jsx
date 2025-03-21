import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";
import { Shield, Calendar, Clock, ClipboardCheck } from "lucide-react";
import {
  Beaker,
  FlaskConical,
  Pipette,
  Microscope,
  FlameKindling,
  Atom,
  FileSearch,
  Factory,
  Waves,
  Pill,
  Leaf,
  Gauge,
  GlassWater,
  TestTubes,
  Scale,
  AlarmClock,
  ScrollText,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: <Beaker className="w-6 h-6 text-blue-600" />,
    name: "Elemental Analysis",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
    name: "Organic Compound Identification",
  },
  {
    icon: <Pipette className="w-6 h-6 text-blue-600" />,
    name: "Chromatography Analysis",
  },
  { 
    icon: <Microscope className="w-6 h-6 text-blue-600" />, 
    name: "Spectroscopy Testing" 
  },
  {
    icon: <FlameKindling className="w-6 h-6 text-blue-600" />,
    name: "Combustion Analysis",
  },
  {
    icon: <Atom className="w-6 h-6 text-blue-600" />,
    name: "Molecular Structure Analysis",
  },
  {
    icon: <FileSearch className="w-6 h-6 text-blue-600" />,
    name: "Certificate of Analysis (CoA)",
  },
  {
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    name: "Industrial Chemical Testing",
  },
  {
    icon: <Waves className="w-6 h-6 text-blue-600" />,
    name: "Water Quality Analysis",
  },
  {
    icon: <Pill className="w-6 h-6 text-blue-600" />,
    name: "Pharmaceutical Analysis",
  },
  {
    icon: <Leaf className="w-6 h-6 text-blue-600" />,
    name: "Agricultural Chemical Testing",
  },
];

const additionalServices = [
  {
    icon: <GlassWater className="w-6 h-6 text-blue-600" />,
    name: "Purity Analysis",
  },
  {
    icon: <TestTubes className="w-6 h-6 text-blue-600" />,
    name: "Heavy Metal Analysis",
  },
  {
    icon: <Gauge className="w-6 h-6 text-blue-600" />,
    name: "Viscosity Testing",
  },
  {
    icon: <Scale className="w-6 h-6 text-blue-600" />,
    name: "Density and Specific Gravity",
  },
  {
    icon: <AlarmClock className="w-6 h-6 text-blue-600" />,
    name: "Stability Testing",
  },
  { 
    icon: <ScrollText className="w-6 h-6 text-blue-600" />, 
    name: "Regulatory Compliance Testing" 
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    name: "Surface Chemistry Analysis",
  },
  {
    icon: <TestTubes className="w-6 h-6 text-blue-600" />,
    name: "Polymer Characterization",
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

const ChemicalService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sampleType: "",
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
              Chemical Analysis
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Comprehensive chemical testing and analysis services for all industries
            </p>
          </div>
          <div className="space-x-4 mt-8">
            <a href="#booking-form">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors duration-200">
                Request Chemical Testing
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
                Why Choose Our Chemical Analysis Services?
              </h3>
              <p className="text-gray-500 mb-4">
                Our chemical analysis services provide detailed characterization of materials, compounds, and mixtures to ensure quality, safety, and regulatory compliance. We employ advanced analytical techniques and instrumentation to deliver precise and reliable results.
              </p>
              <ul className="list-disc list-inside mb-8">
                <li>State-of-the-art analytical equipment</li>
                <li>ISO-certified laboratory facilities</li>
                <li>Detailed compositional analysis</li>
                <li>Trace element detection capabilities</li>
              </ul>
              <a href="#booking-form">
                <button className="bg-[#0F1035] hover:bg-[#1a1b4d] text-white px-6 py-4 rounded-lg transition-colors duration-200">
                  Request Chemical Analysis
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
              Comprehensive chemical analysis and testing solutions
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
            Benefits of Chemical Analysis
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg bg-white">
              <Shield className="h-12 w-12 text-blue-600" />
              <h1 className="font-bold text-2xl text-center">Quality Control</h1>
              <p className="text-sm text-gray-600 text-center">
                Ensure product consistency and quality through precise chemical composition analysis.
              </p>
            </div>
            <div className="border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg bg-white">
              <ClipboardCheck className="h-12 w-12 text-blue-600" />
              <h1 className="font-bold text-2xl text-center">Contaminant Detection</h1>
              <p className="text-sm text-gray-600 text-center">
                Identify unwanted substances and impurities at trace levels to maintain safety.
              </p>
            </div>
            <div className="border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg bg-white">
              <Shield className="h-12 w-12 text-blue-600" />
              <h1 className="font-bold text-2xl text-center whitespace-nowrap">Regulatory Compliance</h1>
              <p className="text-sm text-gray-600 text-center">
                Meet industry standards and regulations with certified chemical analysis reports.
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
              Request Chemical Analysis Services
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to schedule your chemical testing
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
                     <option value="">Select Sample Type</option>
                  <option value="liquid">Liquid Sample</option>
                  <option value="solid">Solid Sample</option>
                  <option value="gas">Gas Sample</option>
                  <option value="powder">Powder Sample</option>
                  <option value="mixture">Mixed Compounds</option>
                  <option value="polymer">Polymer/Plastic</option>
                  <option value="biological">Biological Sample</option>
                  <option value="soil">Soil/Environmental</option>
                  <option value="water">Water Sample</option>
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
                  Analysis Requirements *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please describe your sample, the analysis needed, and any specific parameters to be tested..."
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
                  Submit Chemical Analysis Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChemicalService;