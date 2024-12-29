import React from "react";

const CategoryCard = ({ item }) => {
  return (
    <div className="bg-white relative   overflow-hidden flex flex-col items-center p-1 pt-0 cursor-pointer">
      <img
        className="w-30 h-30 object-cover rounded-lg"
        src={item.image}
        alt={item.name}
      />
      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
    </div>
  );
};

export default CategoryCard;
