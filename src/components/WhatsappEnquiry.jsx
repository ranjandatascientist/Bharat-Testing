import React from "react";
import whatsapp from "../assets/WhatsApp.png";

const WhatsappEnquiry = () => {
  const phoneNumber = "919899801211";
  const message = "Hello, I'm interested in discussing Bharat Testing Laboratory's accredited testing services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8 mb-12">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Bharat Testing Laboratory</h2>
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-6">ISO 9001:2015 Certified</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
              Precision Chemical Analysis & Testing Solutions
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders  with NABL accreditation and rapid result delivery.
            </p>
          </div>
          
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-center mb-6">Request a Consultation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Our technical experts are available to discuss your specific testing requirements and provide customized solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <button
                className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 transition-colors text-white font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2"
                onClick={handleWhatsAppClick}
              >
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  className="object-cover"
                />
                <span>Connect with an Expert</span>
              </button>
            </div>
            <p className="text-xs text-gray-500 text-center mt-4">
              Typical response time: Within 2 business hours
            </p>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default WhatsappEnquiry;