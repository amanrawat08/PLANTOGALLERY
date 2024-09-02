import { useState } from "react";

import Navbar from "./Components/Navbar";
import FrontSlider from "./Components/FrontSlider";
import Card from "./Components/Card";
import FrontCard from "./Components/FrontCard";
import FlowerBox from "./Components/FlowerBox";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
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
import Service2 from "./Components/Service2";
import ScrollTop from "./Components/ScrollTop";
import AddToCart from "./Components/AddToCart";
import ContractUs from "./Components/ContractUs";
import TOS from "./Components/TOS";
import RefundPolicy from "./Components/RefundPolicy";
import ShippingPolicy from "./Components/ShippingPolicy";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TAC from "./Components/TAC";
import Affiates from "./Components/Afflites";
import Search from "./Components/Search";
import About from "./Components/About";
import Error from "./Components/Error";
import store from "./Store/index";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <ScrollTop />
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
        <Route path="/Products/:id" element={<ProductInfo />}></Route>
        <Route path="/ContractUs" element={<ContractUs />}></Route>
        <Route path="/tos" element={<TOS />}></Route>
        <Route path="/refundpolicy" element={<RefundPolicy />}></Route>
        <Route path="/shippingpolicy" element={<ShippingPolicy />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/t&c" element={<TAC />}></Route>
        <Route path="/afflites" element={<Affiates />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>

      <Service2 />
      <Footer />
    </Provider>
  );
}

export default App;
