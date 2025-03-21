import React from "react";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from "lucide-react";
import office from "../assets/office.jpg";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Let's Start a Conversation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're here to help with any questions about our services. 
            Reach out to us and our team will respond promptly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact info with consistent height */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img
                src={office}
                alt="Our Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white px-6 py-3 bg-blue-600 bg-opacity-90 rounded-md">
                  Our Headquarters
                </h3>
              </div>
            </div>
            
            <div className="p-8 flex-grow">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      C- 63 Sector 88 Phase-II Noida<br />
                      Gautam Nagar, Uttar Pradesh
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9899801211</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@btllab.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Form with matching height */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg flex-grow flex flex-col">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center text-sm font-medium text-gray-700 mb-2"
                >
                  <User className="w-4 h-4 mr-2 text-blue-600" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="flex items-center text-sm font-medium text-gray-700 mb-2"
                  >
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="phone"
                    className="flex items-center text-sm font-medium text-gray-700 mb-2"
                  >
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 98998 01211"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30"
                  />
                </div>
              </div>
              
              <div className="flex-grow">
                <label
                  htmlFor="message"
                  className="flex items-center text-sm font-medium text-gray-700 mb-2"
                >
                  <MessageSquare className="w-4 h-4 mr-2 text-blue-600" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="How can we help you today?"
                  rows={5}
                  className="block w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-30 h-40"
                ></textarea>
              </div>
              
              <div className="mt-auto">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 font-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;