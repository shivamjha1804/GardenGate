import React from "react";
import ReaxtStar from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const DealCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/GardenGate/product");
    // Scroll to the middle section after navigation
    setTimeout(() => {
      const middleSection = document.getElementById("product-details");
      if (middleSection) {
        middleSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 100); // Small delay to ensure the page has loaded
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gray-50 m-5 cursor-pointer rounded-[12px]"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover"
      />
      <h1 className="font-semibold text-xl p-2">{item.name}</h1>
      <div className="flex pl-2 gap-4 items-center">
        <p className="text-slate-500 line-through">{item.crossedPrice}</p>
        <h1 className="text-lg font-medium">{item.price}</h1>
      </div>
      <ReaxtStar
        count={5}
        size={25}
        activeColor="#ffd700"
        edit={false}
        value={item.rating}
      />
    </div>
  );
};

export default DealCard;
