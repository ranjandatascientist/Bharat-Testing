import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "He is having more than 12 years of Experience Business Developement Activities and and Tenders preparation for Environment Management Services. He is approved Functional Area Expert by QCI-NABET",
    name: "Manoj Kumar Saini",
    title: "Senior Manager - Marketing",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(417)-SuFDxXjHSpAFu1bGvctvub0n069pSs.png",
  },
  {
    id: 2,
    text: "Technical Manager of Gurugram Laboratory. Authorized Signatory for NABL & MoEF & CC (GOI) Reports.",
    name: "Gaurav Pratap Singh",
    title: "Lab Incharge & Technical Manager",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(417)-SuFDxXjHSpAFu1bGvctvub0n069pSs.png",
  },
  {
    id: 3,
    text: "Food & Agriculture Products, Environmental & Quality Control. All business processes are aligned with the requirements of the regulatory standards. Handing of Instruments LC-MSMS, ICP-MS, GC-MSMS.",
    name: "Dr. Shiv Prakash Singh",
    title: "Senior Technical Manager",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(417)-SuFDxXjHSpAFu1bGvctvub0n069pSs.png",
  },
];

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full md:max-w-6xl mx-auto px-4 py-12 bg-[#f5f8f5]">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <Card className="bg-white shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <Quote className="w-8 h-8 md:w-12 md:h-12 text-green-500 mb-3 md:mb-4" />
                    <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 min-h-[80px] md:min-h-[120px]">
                      {testimonial.text}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div className="text-center sm:text-left mt-2 sm:mt-0">
                        <h3 className="font-medium text-gray-900 text-sm md:text-base">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-4 md:mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-green-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;