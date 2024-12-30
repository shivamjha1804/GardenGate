import React from "react";
import image1 from "../../assets/Deals/image1.png";
import image2 from "../../assets/Deals/image2.png";
import image3 from "../../assets/Deals/image3.png";
import image4 from "../../assets/Deals/image4.png";
import DealCard from "../DealCard/DealCard";

const Deals = ({ name, view = "" }) => {
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
    <div className="mb-2">
      <div className="flex justify-between p-5">
        <h1 className="font-normal text-3xl">{name}</h1>
        {view !== "" && (
          <p className="text-slate-600 cursor-pointer hover:text-slate-800">
            View All
          </p>
        )}
      </div>
      <div className="flex flex-wrap">
        {deals.map((item, index) => (
          <DealCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
