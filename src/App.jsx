import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import FrontSlider from "./Components/FrontSlider";
import Card from "./Components/Card";
import FrontCard from "./Components/FrontCard";
import FlowerBox from "./Components/FlowerBox";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
