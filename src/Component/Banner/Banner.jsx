import React from "react";
import bannerImage from "../../assets/mainBanner/image.png";

const Banner = () => {
  return (
    <div
      className="relative h-[225px] sm:h-[450px] md:h-[600px] lg:h-[700px] z-0 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-left text-white px-4 sm:px-6 md:px-12 lg:px-16">
        <h1 className="text-2xl w-[70%] lg:w-[40%] sm:text-3xl md:text-4xl lg:text-5xl max-w-lg sm:max-w-xl font-bold mb-4 leading-tight">
          Grab <span className="text-green-500">The Best Plants</span> For Your
          Needs
        </h1>
        <h3 className="text-xs w-[70%] lg:w-[40%] sm:text-sm md:text-lg lg:text-xl mb-6 max-w-xs sm:max-w-2xl leading-relaxed">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </h3>
        <button
          onClick={() => {
            window.open("https://wa.me/9123760995?text=Hello", "_blank");
          }}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-md text-sm sm:text-base"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
