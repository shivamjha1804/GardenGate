import React from "react";
import ReaxtStar from "react-rating-stars-component";

const DealCard = ({ item }) => {
  return (
    <div className="bg-gray-50 m-5 cursor-pointer rounded-[12px]">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover"
      />
      <h1 className="font-semibold text-xl p-2">{item.name}</h1>
      <div className="flex  pl-2 gap-4 items-center">
        <p className="text-slate-500 line-through">{item.crossedPrice}</p>
        <h1 className="text-lg font-medium">{item.price}</h1>
      </div>
      <ReaxtStar
        count={5} // Number of stars
        size={25} // Star size
        activeColor="#ffd700"
        edit={false} // Color of active stars
        value={item.rating} // Current rating value
        // onChange={handleRatingChange} // Callback when rating changes
      />
    </div>
  );
};

export default DealCard;
