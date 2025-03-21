import React, { useState } from "react";
import Navbar from "../Navigation/Navbar";
import { Shield, Calendar, Clock, ClipboardCheck } from "lucide-react";
import {
  FileCheck,
  BadgeCheck,
  CheckCircle,
  Scale,
  LineChart,
  Layers,
  Ruler,
  BookOpen,
  Microscope,
  FileBadge,
  BarChart4,
  Clipboard,
  SearchCheck,
  ScanLine,
  Boxes,
  FileCog,
  Workflow,
  Award,
  Factory
} from "lucide-react";

const services = [
  {
    icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    name: "Quality Management Systems",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-blue-600" />,
    name: "Quality Documentation Review",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-blue-600" />,
    name: "ISO Certification Support",
  },
  { 
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />, 
    name: "Quality Control Procedures" 
  },
  {
    icon: <Scale className="w-6 h-6 text-blue-600" />,
    name: "Process Validation",
  },
  {
    icon: <LineChart className="w-6 h-6 text-blue-600" />,
    name: "Statistical Process Control",
  },
  {
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    name: "Supplier Quality Management",
  },
  {
    icon: <Ruler className="w-6 h-6 text-blue-600" />,
    name: "Measurement System Analysis",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-600" />,
    name: "Quality Training Programs",
  },
  {
    icon: <Microscope className="w-6 h-6 text-blue-600" />,
    name: "Inspection Planning & Services",
  },
];

const additionalServices = [
  {
    icon: <FileBadge className="w-6 h-6 text-blue-600" />,
    name: "Regulatory Compliance",
  },
  {
    icon: <SearchCheck className="w-6 h-6 text-blue-600" />,
    name: "Quality Auditing",
  },
  {
    icon: <Clipboard className="w-6 h-6 text-blue-600" />,
    name: "Compliance Assessment",
  },
  {
    icon: <BarChart4 className="w-6 h-6 text-blue-600" />,
    name: "Quality Metrics Development",
  },
  {
    icon: <ScanLine className="w-6 h-6 text-blue-600" />,
    name: "Non-Conformance Management",
  },
  {
    icon: <Boxes className="w-6 h-6 text-blue-600" />,
    name: "Product Quality Planning",
  },
  {
    icon: <FileCog className="w-6 h-6 text-blue-600" />,
    name: "Quality Risk Management",
  },
  {
    icon: <Workflow className="w-6 h-6 text-blue-600" />,
    name: "Corrective & Preventive Actions",
  },
  {
    icon: <Award className="w-6 h-6 text-blue-600" />,
    name: "Quality Certification Services",
  },
  { 
    icon: <Factory className="w-6 h-6 text-blue-600" />, 
    name: "Manufacturing Quality Support" 
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

const QualityAssurance = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industryType: "",
    servicesNeeded: [],
    projectDescription: "",
    preferredDate: "",
    urgency: "standard",
    companyLocation: "",
    projectScope: ""
  });

  const allServices = [...services, ...additionalServices];

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
    alert("Your quality assurance service request has been submitted successfully! We'll contact you shortly.");
  };

  return (
    <>
      <Navbar />
      {/* Main hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-24 bg-gradient-to-r from-[#365486] to-[#0F1035] text-white">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center justify-center text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Quality Assurance
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Comprehensive quality management systems and certification services
            </p>
          </div>
          <div className="space-x-4 mt-8">
            <a href="#booking-form">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-colors duration-200">
                Request Quality Assurance Services
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
                Why Choose Our Quality Assurance Services?
              </h3>
              <p className="text-gray-500 mb-4">
                Our quality assurance services provide comprehensive solutions to help your organization meet industry standards, regulatory requirements, and customer expectations. We implement proven methodologies to enhance product quality and process efficiency.
              </p>
              <ul className="list-disc list-inside mb-8">
                <li>Experienced quality professionals</li>
                <li>Customized quality management systems</li>
                <li>Regulatory compliance expertise</li>
                <li>Continuous improvement approach</li>
              </ul>
              <a href="#booking-form">
                <button className="bg-[#0F1035] hover:bg-[#1a1b4d] text-white px-6 py-4 rounded-lg transition-colors duration-200">
                  Request Quality Assurance Services
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
              Comprehensive quality assurance solutions for all industries
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
            Benefits of Quality Assurance
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg bg-white">
              <Shield className="h-12 w-12 text-blue-600" />
              <h1 className="font-bold text-2xl text-center">Enhanced Reputation</h1>
              <p className="text-sm text-gray-600 text-center">
                Build trust with customers through consistent quality and reliability.
              </p>
            </div>
            <div className="border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg bg-white">
              <Award className="h-12 w-12 text-blue-600" />
              <h1 className="font-bold text-2xl text-center">Cost Reduction</h1>
              <p className="text-sm text-gray-600 text-center">
                Minimize waste, rework, and warranty claims through effective quality systems.
              </p>
            </div>
            <div className="border border-gray-300 p-10 rounded-lg flex items-center justify-center flex-col space-y-4 shadow-lg bg-white">
              <ClipboardCheck className="h-12 w-12 text-blue-600" />
              <h1 className="font-bold text-2xl text-center whitespace-nowrap">Operational Excellence</h1>
              <p className="text-sm text-gray-600 text-center">
                Streamline processes, improve efficiency, and maintain consistent product quality.
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
              Request Quality Assurance Services
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to schedule your quality assurance consultation
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
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="industryType">
                    Industry Type *
                  </label>
                  <select
                    id="industryType"
                    name="industryType"
                    required
                    value={formData.industryType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Industry Type</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="pharmaceutical">Pharmaceutical</option>
                    <option value="food-beverage">Food & Beverage</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="automotive">Automotive</option>
                    <option value="electronics">Electronics</option>
                    <option value="aerospace">Aerospace</option>
                    <option value="construction">Construction</option>
                    <option value="other">Other (Please specify in description)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="companyLocation">
                    Company Location *
                  </label>
                  <input
                    type="text"
                    id="companyLocation"
                    name="companyLocation"
                    required
                    value={formData.companyLocation}
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
                  {allServices.map((service, index) => (
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
                Project Requirements *
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please describe your quality assurance needs, specific goals, and any relevant background information..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="preferredDate">
                    Preferred Consultation Date
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
                      <option value="standard">Standard (7-10 business days)</option>
                      <option value="priority">Priority (3-5 business days)</option>
                      <option value="urgent">Urgent (1-2 business days)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2" htmlFor="projectScope">
                    Project Scope
                  </label>
                  <select
                    id="projectScope"
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Project Scope</option>
                    <option value="department">Single Department</option>
                    <option value="facility">Entire Facility</option>
                    <option value="multiple">Multiple Locations</option>
                    <option value="global">Global Operations</option>
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
                >
                  Submit Quality Assurance Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default QualityAssurance;