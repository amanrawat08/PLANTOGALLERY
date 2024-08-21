import React from "react";
import Navbar from "./Navbar";
import IndorePlant from "./IndorePlant";
import FrontSlider from "./FrontSlider";
import FrontCard from "./FrontCard";
import FlowerBox from "./FlowerBox";
import ServiceCard from "./ServiceCard";
import About from "./About";
import Service2 from "./Service2";
function Home() {
  return (
    <>
      <FrontSlider />
      <IndorePlant />
      <FrontCard />
      <FlowerBox />
      <About />
      <Service2 />
    </>
  );
}
export default Home;
