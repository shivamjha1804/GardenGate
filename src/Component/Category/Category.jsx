import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import modules explicitly
import "swiper/css"; // Swiper styles
import "swiper/css/pagination"; // Optional styles
import "swiper/css/navigation"; // Optional styles
import CategoryCard from "../CategoryCard/CategoryCard";
import gandeningImage from "../../assets/Categories/gardening.png";
import plantImage from "../../assets/Categories/plant.png";
import seedImage from "../../assets/Categories/seeds.png";
import gardenImage from "../../assets/Categories/gardenPart.png";
import "./Category.css"; // Custom styles

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
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        // pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        className="category-swiper"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.id}>
            <CategoryCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-pre custom-nav">❮</div>
      <div className="swiper-button-nex custom-nav">❯</div>
    </div>
  );
};

export default Category;
