import React from "react";
import { PdfImages } from "../constants";
import { FileText } from "lucide-react";
import pdf from "../assets/pdf-1.pdf";

const PdfLists = () => {
  const openPdf = () => {
    window.open(pdf, "_blank");
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col mt-20">
        <h1 className="text-3xl ">Accreditation & Approvals</h1>
        <div
          className="w-16
        h-1 bg-green-500 mt-5 mb-4"
        ></div>
        <p className=" text-gray-500 max-w-xl text-center text-lg">
          Vardan is accredited EIA Consultant in India recognized and Approvals
          by multiple regulatory bodies to provide consultancy services.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mx-10 mt-20 place-items-center">
          {PdfImages.map((img, index) => {
            return (
              <div
                className="w-32 h-36 lg:w-44 lg:h-36 shadow-lg rounded-lg flex justify-center items-center flex-col gap-1 lg:gap-4"
                key={index}
              >
                <img src={img} alt="" className="w-20 h-20  object-contain" />
                <div>
                  <button onClick={openPdf}>
                    <FileText className="text-sm w-4 text-blue-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PdfLists;
