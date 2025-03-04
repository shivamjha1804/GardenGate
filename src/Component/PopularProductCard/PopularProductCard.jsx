import React from "react";
import { useNavigate } from "react-router-dom";

const PopularProductCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/GardenGate/product");
    // Scroll to the middle section after navigation
    setTimeout(() => {
      const middleSection = document.getElementById("product-details");
      if (middleSection) {
        middleSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100); // Small delay to ensure the page has loaded
  };

  return (
    <div
      onClick={handleClick}
      className="max-w-xs mx-auto cursor-pointer bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 mb-2 mx-1"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-bold text-gray-800">{item.name}</h1>
        <div className="flex flex-row gap-4 items-center mt-2">
          <p className="text-gray-500 line-through">${item.crossedPrice}</p>
          <h1 className="text-lg font-medium text-gray-800">${item.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
