import React from "react";
import NavBar from "../../Component/Nav/NavBar";
import UpperNavBar from "../../Component/Nav/UpperNavBar";
import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import PopularProduct from "../../Component/PopularProduct/PopularProduct";

const Home = () => {
  return (
    <div>
      <UpperNavBar />
      <NavBar />
      <Banner />
      <Category />
      <PopularProduct />
    </div>
  );
};

export default Home;
