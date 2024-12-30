import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import image1 from "../../assets/products/image.png";
import image2 from "../../assets/products/image2.png";
import image3 from "../../assets/products/image3.png";
import "./PopularProduct.css";
import PopularProductCard from "../PopularProductCard/PopularProductCard";

const PopularProduct = () => {
  const popularProduct = [
    {
      id: 1,
      name: "Croton Petra",
      image: image1,
      crossedPrice: 300,
      price: 350,
    },
    {
      id: 2,
      name: "PlaCroton Petrant",
      image: image2,
      crossedPrice: 340,
      price: 320,
    },
    {
      id: 3,
      name: "Seeds Croton ",
      image: image3,
      crossedPrice: 400,
      price: 360,
    },
    {
      id: 4,
      name: "Garden Croton ",
      image: image1,
      crossedPrice: 200,
      price: 250,
    },
    {
      id: 5,
      name: "Gardening Croton",
      image: image2,
      crossedPrice: 160,
      price: 100,
    },
    { id: 6, name: "Croton Pet", image: image3, crossedPrice: 500, price: 450 },
    { id: 7, name: "Croton Pe", image: image1, crossedPrice: 600, price: 550 },
    { id: 8, name: "Croton P", image: image2, crossedPrice: 700, price: 650 },
  ];

  return (
    <div className="flex flex-wrap flex-col sm:flex-row p-4 w-full">
      <div className="mb-6 flex flex-col md:flex-row justify-center items-center md:items-start md:mr-7 w-full md:w-auto">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex mb-2">
            <h1 className="text-4xl mr-2 font-normal text-gray-800">
              Most
            </h1>
            <h1 className="text-4xl font-bold text-gray-800">Popular</h1>
          </div>
          <h3 className="text-base text-gray-600">
            Meet our most lovable plants
          </h3>
          <button className="mt-4 px-6 py-2 text-black border-black border-2">
            SHOP BEST SELLERS
          </button>
        </div>
      </div>

      <div className="relative w-full md:w-[80%]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="category-swiper"
        >
          {popularProduct.map((item) => (
            <SwiperSlide key={item.id}>
              <PopularProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev custom-na">
          <h1 className="image-arro">❮</h1>
        </div>
        <div className="swiper-button-next custom-na">
          <h1 className="image-arro">❯</h1>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
