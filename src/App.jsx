import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Screen/Home/Home";
import SingleProduct from "./Screen/SingleProduct/SingleProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/GardenGate/" element={<Home />} />
      <Route path="/GardenGate/product" element={<SingleProduct />} />
    </Routes>
  );
};

export default App;
