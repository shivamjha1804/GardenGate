import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gandeningImage from "../../assets/Categories/gardening.png";
import plantImage from "../../assets/Categories/plant.png";
import seedImage from "../../assets/Categories/seeds.png";
import gardenImage from "../../assets/Categories/gardenPart.png";
import "../Category/Category.css";

const PopularProduct = () => {
  const categories = [
    { id: 1, name: "Gardening", image: gandeningImage },
    { id: 2, name: "Plant", image: plantImage },
    { id: 3, name: "Seeds", image: seedImage },
    { id: 4, name: "Garden", image: gardenImage },
    { id: 5, name: "Garden", image: gardenImage },
    { id: 6, name: "Garden", image: gardenImage },
    { id: 7, name: "Garden", image: gardenImage },
    { id: 8, name: "Garden", image: gardenImage },
    { id: 9, name: "Garden", image: gardenImage },
    { id: 10, name: "Garden", image: gardenImage },
  ];

  return (
    <div className="flex flex-row w-full p-6">
      <div className=" mb-6 justify-center items-center mr-7">
        <div className="flex">
          <h1 className="text-left text-4xl mr-2 font-normal text-gray-800">
            Most
          </h1>
          <h1 className="text-left text-4xl font-bold text-gray-800">
            Popular
          </h1>
        </div>
        <h3 className="text-left text-base text-gray-600">
          Meet our most lovable plants
        </h3>
        <button className="mt-4   px-6 py-2 text-black border-black border-2">
          <h1 className="text-base">SHOP BEST SELLERS</h1>
        </button>
      </div>

      <div className="relative w-[80%]">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
          }}
          className="category-swiper"
        >
          {categories.map((item) => (
            <SwiperSlide key={item.id}>
              <CategoryCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev custom-nav">
          <h1 className="image-arrow">❮</h1>
        </div>
        <div className="swiper-button-next custom-nav">
          <h1 className="image-arrow">❯</h1>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
