import React from "react";
import { CompaniesMains } from "../constants";
import Slider from "react-slick";

const CompaniesMain = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="lg:mx-20 mx-10">
      <Slider {...settings}>
        {CompaniesMains.map((data, index) => {
          return (
            <div
              className="  bg-gray-100  rounded-lg px-10 py-8 relative lg:relative md:space-y-4 h-[450px] lg:h-[350px]"
              key={index}
            >
              <div>
                <h1 className="font-bold text-gray-700 text-lg">{data.name}</h1>
                <h1 className="text-gray-500">{data.designation}</h1>
                <p className="mt-5 italic text-sm text-gray-800 lg:text-xl tracking-wider lg:w-3/5">
                  {data.desription}
                </p>
              </div>
              <div className="lg:absolute lg:right-3 md:top-2 absolute bottom-4 right-[100px]">
                <img
                  src={data.image}
                  alt=""
                  className="md:h-56 md:w-56 h-28 w-28 rounded-full lg:mt-6 lg:mr-5"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CompaniesMain;
