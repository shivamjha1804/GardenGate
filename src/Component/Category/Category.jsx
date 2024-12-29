import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination"; // Optional styles
import "swiper/css/navigation"; // Optional styles
import CategoryCard from "../CategoryCard/CategoryCard";
import gandeningImage from "../../assets/Categories/gardening.png";
import plantImage from "../../assets/Categories/plant.png";
import seedImage from "../../assets/Categories/seeds.png";
import gardenImage from "../../assets/Categories/gardenPart.png";

const Category = () => {
  const categories = [
    { id: 1, name: "Gardening", image: gandeningImage },
    { id: 2, name: "Plant", image: plantImage },
    { id: 3, name: "Seeds", image: seedImage },
    { id: 4, name: "Garden", image: gardenImage },
    { id: 5, name: "Garden", image: gardenImage },
    { id: 6, name: "Garden", image: gardenImage },
    { id: 7, name: "Garden", image: gardenImage },
  ];

  return (
    <div className="my-5">
      <Swiper
        spaceBetween={1}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 5 },
        }}
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
