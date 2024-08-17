import React from "react";
import Navbar from "./Navbar";
import IndorePlant from "./IndorePlant";
import FrontSlider from "./FrontSlider";
import FrontCard from "./FrontCard";
import FlowerBox from "./FlowerBox";
import ServiceCard from "./ServiceCard";
function Home() {
  return (
    <>
      <FrontSlider />
      <IndorePlant />
      <FrontCard />
      <FlowerBox />
      <ServiceCard />
    </>
  );
}
export default Home;
