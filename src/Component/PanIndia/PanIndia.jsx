import React from "react";
import indiaMap from "../../assets/IndiaMap/imageIndia.png";

const PanIndia = () => {
  return (
    <div className="bg-gray-50  p-6 md:p-12 flex flex-col md:flex-row items-center gap-6">
      <div className="md:w-1/2">
        <img
          src={indiaMap}
          alt="India Map"
          className="w-full h-auto max-w-md mx-auto rounded-lg"
          style={{background:"none"}}
        />
      </div>
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          We Deliver Pan India
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          We deliver our products pan India. Our delivery network is spread
          across the country, ensuring that our products reach every corner of
          India. We have a strong logistics system in place, which enables us to
          deliver our products quickly and efficiently. Our delivery network is
          supported by a team of experienced professionals who work tirelessly
          to ensure that our products reach our customers on time.
        </p>
      </div>

      {/* Image Section */}
    </div>
  );
};

export default PanIndia;
