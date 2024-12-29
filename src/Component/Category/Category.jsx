import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CategoryCard from "../CategoryCard/CategoryCard";
import gandeningImage from "../../assets/Categories/gardening.png";
import plantImage from "../../assets/Categories/plant.png";
import seedImage from "../../assets/Categories/seeds.png";
import gardenImage from "../../assets/Categories/gardenPart.png";
import "./Category.css";

const Category = () => {
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
    <div className="my-5 category-container">
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
  );
};

export default Category;
