import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import FrontSlider from "./Components/FrontSlider";
import Card from "./Components/Card";
import FrontCard from "./Components/FrontCard";
import FlowerBox from "./Components/FlowerBox";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AllProduct from "./Components/AllProduct";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seeds from "./Components/Seeds";
import Products from "./Components/Products";
import FlowerBulbs from "./Components/FlowerBulb";
import Offers from "./Components/Offers";
import Pots from "./Components/Pots";
import SoilFertilizer from "./Components/SoilFertilizer";
import Pebbles from "./Components/Pebbles";
import Gifts from "./Components/Gifts";
import Accessories from "./Components/Accessories";
import ProductInfo from "./Components/ProductInfo";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Seeds" element={<Seeds />}></Route>
        <Route path="/Products" element={<Products />}></Route>
        <Route path="/Flower Bulb" element={<FlowerBulbs />}></Route>
        <Route path="/Offers" element={<Offers />}></Route>
        <Route path="/Pots" element={<Pots />}></Route>
        <Route path="/Soil & Fertilizer" element={<SoilFertilizer />}></Route>
        <Route path="/Pebbles" element={<Pebbles />}></Route>
        <Route path="/Gifts" element={<Gifts />}></Route>
        <Route path="/Accessories" element={<Accessories />}></Route>
        <Route path="/:id" element={<ProductInfo />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
