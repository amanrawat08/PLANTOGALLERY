import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";
import LoginForm from "./LoginForm";

function Navmain() {
  const navOption = [
    "All Category",
    "Diwali Gift",
    "Christmas Gift ",
    "Flower Bulbs",
    "flower Plant",
    "Soil & Fertilizers",
    "Flowers",
    "Flowers Seed",
    "Gifts",
    " Indore Plants",
  ];
  const [dropDown, setDropDown] = useState(false);
  const [cartDropDown, setCartDropDown] = useState(false);
  const [open, setOpen] = useState(false);

  const dropdownHendler = () => {
    setCartDropDown(false);
    setDropDown(!dropDown);
  };
  const cartDrop = () => {
    setDropDown(false);
    setCartDropDown(!cartDropDown);
  };
  const dropdownRef = useRef(null);
  const dropCartRef = useRef(null);
  const handleClickOutside = (event) => {
    // Check if the clicked element is outside of the dropdown
    if (dropCartRef.current && !dropCartRef.current.contains(event.target)) {
      setCartDropDown(false);
    }
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const cartHandler = () => {
    setOpen(true);
    console.log("hello");
  };
  return (
    <>
      <nav className="h-16 flex  p-9  bg-slate-100 items-center justify-between ">
        <div className="flex items-center justify-center">
          <span className=" text-3xl lg:hidden hover:text-[#008a00] cursor-pointer mr-2 transition-all duration-200">
            <FaBars />
          </span>
          <Link to="/">
            <img
              className="xs:w-[190px] lg:w-[255px]"
              src="https://plantogallery.com/cdn/shop/files/new-logo-plantogallery_255x@2x.jpg?v=1637942726"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center ">
          <input
            className="outline-none py-2 text-lg px-1 xs:hidden md:block  xl:w-[450px]  rounded"
            type="text"
            placeholder="Enter Your Plant..."
          />
          <select className="outline-none  2xl:block text-[#677279] xs:hidden xl:visible border border-none w-28  px- py-1">
            {navOption.map((item, i) => (
              <option className="text-center" value="Item1" key={i}>
                {item}
              </option>
            ))}
          </select>
          <i className=" transition-all p-3 xs:hidden md:block rounded ml-4 text-1xl cursor-pointer text-white  bg-[#008a00] ">
            <CiSearch />
          </i>
        </div>

        <div className="flex items-center justify-center">
          <div className="show flex flex-col  items-center  cursor-pointer xs:hidden xl:block">
            <span className="text-sm text-blue-500 opacity-75">Login/Sign</span>
            <span
              className="text-[#008a00] relative  font-semibold  "
              ref={dropdownRef}
            >
              <span
                onClick={dropdownHendler}
                className="flex items-center justify-between"
              >
                My account <FaAngleDown />
              </span>
              {dropDown && <LoginForm />}
            </span>
          </div>
          <div className=" sm:block xl:hidden text-4xl m-1 hover:text-[#008a00]">
            <MdAccountBox />
          </div>

          <div
            onClick={cartHandler}
            className="text-4xl hover:text-[#008a00]   flex items-center cursor-pointer ml-6 justify-between relative m-2  p-2 rounded transition-all group"
          >
            <span className="relative" ref={dropCartRef}>
              <IoCartOutline />
              <span className="absolute text-white -top-1 right-0 text-sm font-bold bg-red-600  px-1  rounded-full group-hover:scale-125 transition-all duration-700">
                0
              </span>
            </span>
            <span
              className="text-lg font-semibold xs:hidden xl:block"
              onClick={cartDrop}
            >
              Cart
            </span>
          </div>
        </div>
      </nav>
      <AddToCart open={open} setOpen={setOpen} />
    </>
  );
}

export default Navmain;
