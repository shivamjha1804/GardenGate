import React from "react";
import bgImage from "../../assets/ShopNow/image.png";

const ShopNow = () => {
  return (
    <div
      className="relative h-[300px] mt-8 sm:h-[500px] md:h-[600px] lg:h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 md:px-12 lg:px-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight max-w-6xl">
          Make Your Gardening Skills Take To The Next Level
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl mb-6 max-w-md">
          with <span className="text-white-400 font-bold">60% off</span> on all
          gardening accessories
        </p>
        <button className=" hover:bg-gray-50 text-white border-white border-2  font-semibold px-6 py-2 sm:px-8 sm:py-3  text-sm sm:text-base">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ShopNow;
