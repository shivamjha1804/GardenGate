import React from "react";
import DealCard from "../DealCard/DealCard";
import image1 from "../../assets/Deals/image1.png";
import image2 from "../../assets/Deals/image2.png";
import image3 from "../../assets/Deals/image3.png";
import image4 from "../../assets/Deals/image4.png";

const Recommended = () => {
  const deals = [
    {
      id: 1,
      name: "Plant Product",
      price: 100,
      image: image1,
      crossedPrice: 150,
      rating: 1,
    },
    {
      id: 2,
      name: "Plant Soil",
      price: 200,
      image: image2,
      crossedPrice: 250,
      rating: 2,
    },
    {
      id: 3,
      name: "Plant Water",
      price: 300,
      image: image3,
      crossedPrice: 350,
      rating: 3,
    },
    {
      id: 4,
      name: "Plant Fertilizer",
      price: 400,
      image: image4,
      crossedPrice: 450,
      rating: 4,
    },
    {
      id: 4,
      name: "Plant Fertilizer",
      price: 400,
      image: image4,
      crossedPrice: 450,
      rating: 5,
    },
  ];
  return (
    <div className="p-5">
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl border-b-2 pb-6">
        <a className="text-green-500">You’ll love</a> these too...
      </h1>

      <div className="flex flex-wrap">
        {deals.map((item, index) => (
          <DealCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
