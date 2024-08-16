import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import FrontSlider from "./Components/FrontSlider";
import Card from "./Components/Card";
function App() {
  return (
    <>
      <Navbar />
      <FrontSlider />
      <Card />
    </>
  );
}

export default App;
