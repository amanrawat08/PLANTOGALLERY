import React from "react";
import BottomNav from "./BottomNav";
import { NavLink } from "react-router-dom";
import UpperNav from "./UpperNav";
import Navmain from "./Navmain";
export default function Navbar() {
  return (
    <span className=" sticky top-0 z-10">
      <UpperNav />
      <Navmain />
      <BottomNav />
    </span>
  );
}
