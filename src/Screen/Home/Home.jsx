import React from "react";
import NavBar from "../../Component/Nav/NavBar";
import UpperNavBar from "../../Component/Nav/UpperNavBar";
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import PopularProduct from "../../Component/PopularProduct/PopularProduct";
import Deals from "../../Component/Deals/Deals";
import PanIndia from "../../Component/PanIndia/PanIndia";
import AboutUs from "../../Component/AboutUs/AboutUs";
import YoutubeVideo from "../../Component/YoutubeVideo/YoutubeVideo";
import ShopNow from "../../Component/ShopNow/ShopNow";

const Home = () => {
  return (
    <div>
      <UpperNavBar />
      <NavBar />
      <Banner />
      <Category />
      <PopularProduct />
      <Deals name={"Deal"} view={"View All"} />
      <Deals name={"Recommended For You"} />
      <PanIndia />
      <AboutUs />
      <YoutubeVideo/>
      <ShopNow/>
    </div>
  );
};

export default Home;
