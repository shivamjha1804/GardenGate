import React from "react";
import image1 from "../../assets/SingleProduct/image1.png";
import image2 from "../../assets/SingleProduct/image2.png";
import image3 from "../../assets/SingleProduct/image3.png";
import image4 from "../../assets/SingleProduct/image4.png";

const Product = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full p-6 space-y-8 lg:space-y-0 lg:space-x-10">
      {/* Images Section */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-4">
        <img
          src={image1}
          alt="product"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={image2}
          alt="product"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={image3}
          alt="product"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <img
          src={image4}
          alt="product"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Product Details Section */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-800">
          Marble Queen Pothos
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
          ₹550.00
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
          Marble queen pothos is a popular houseplant that is known for its
          beautiful foliage. It is a relatively easy plant to care for, making
          it a good choice for beginners.
        </p>
        <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-green-600 font-bold text-white rounded-lg hover:bg-green-700">
          Enquire Now
        </button>

        {/* Description Section */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          Description
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim adLorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim adLorem ipsum dolor
          sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
          ad
        </p>
      </div>
    </div>
  );
};

export default Product;
