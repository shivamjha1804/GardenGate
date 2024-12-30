import React from "react";

const PopularProductCard = ({ item }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-56 object-cover"

      />
      <div className="">
        <h1 className="text-lg font-bold text-gray-800">{item.name}</h1>
        <div className="flex flex-row gap-4 items-center ">
          <p className="text-gray-500 line-through">{item.crossedPrice}</p>
          <h1 className="text-lg font-semibold text-gray-800">{item.price}</h1>
        </div>
      </div>
    </div>
  );
};

export default PopularProductCard;
