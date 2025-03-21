import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Quote } from "lucide-react";
import { Testimonials } from "../constants";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true, // Right to left scrolling
    cssEase: "linear",
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center flex-col mb-10">
          <h2 className="text-3xl font-semibold text-slate-800">Core Team</h2>
          <div className="w-20 h-1 bg-blue-600 mt-4 mb-2"></div>
        </div>
        
        <div className="overflow-hidden">
          <Slider {...settings} className="mx-auto">
            {Testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div className="bg-white rounded-lg shadow-md h-[350px] border border-slate-200">
                  <div className="p-6 h-full flex flex-col">
                    <Quote className="text-blue-600 h-6 w-6 mb-4" />
                    
                    <div className="flex-grow overflow-y-auto mb-4">
                      <p className="text-slate-700 text-base leading-relaxed">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name}`}
                        className="w-16 h-16 rounded-full object-cover border border-slate-200"
                      />
                      <div className="ml-4">
                        <h4 className="text-slate-800 font-medium">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;