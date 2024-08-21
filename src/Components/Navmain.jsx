import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { MdAccountBox } from "react-icons/md";
import { FaBars } from "react-icons/fa";
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

  const dropdownHendler = () => {
    setCartDropDown(false);
    setDropDown(!dropDown);
  };
  const cartDrop = () => {
    setDropDown(false);
    setCartDropDown(!cartDropDown);
  };
  const dropdownRef = useRef(null);
  const dropCart = useRef(null);
  const handleClickOutside = (event) => {
    // Check if the clicked element is outside of the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
    if (dropCart.current && !dropCart.current.contains(event.target)) {
      setCartDropDown(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  return (
    <nav className="h-16 flex  p-9  bg-slate-100 items-center justify-between ">
      <div className="flex items-center justify-center">
        <span className=" text-3xl lg:hidden hover:text-[#008a00] cursor-pointer mr-2 transition-all duration-200">
          <FaBars />
        </span>
        <img
          className="xs:w-[190px] lg:w-[255px]"
          src="https://plantogallery.com/cdn/shop/files/new-logo-plantogallery_255x@2x.jpg?v=1637942726"
        />
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
            {dropDown && (
              <div className="absolute h-96  w-80 flex flex-col justify-start p-5  items-center bg-gray-200 overflow-auto top-13 -left-40 z-20 rounded-lg">
                <div className="text-black text-lg">Login to my account</div>
                <div className="text-gray-500 text-sm mt-4">
                  Enter your e-mail and password:
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-60 border outline-none border-gray-300 font-semibold px-2 py-1 mt-4 rounded "
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="w-60 border outline-none border-gray-300 font-semibold px-2 py-1 mt-4 rounded "
                />
                <button className="mt-5 border bg-green-600 w-60 hover:opacity-80 transition-all duration-500 px-3 py-2 text-white rounded">
                  Login
                </button>
                <div className="mt-5 text-sm text-gray-500">
                  New customer?{" "}
                  <span className="text-[#008a00] hover:underline underline-offset-4 ">
                    Create your account
                  </span>
                </div>
                <div className=" text-sm text-gray-500 mt-2">
                  Lost passowrd?{" "}
                  <span className="text-[#008a00] hover:underline underline-offset-4 ">
                    Recover password
                  </span>
                </div>
              </div>
            )}
          </span>
        </div>
        <div className=" sm:block xl:hidden text-4xl m-1 hover:text-[#008a00]">
          <MdAccountBox />
        </div>

        <div className="text-4xl hover:text-[#008a00]   flex items-center cursor-pointer ml-6 justify-between relative m-2  p-2 rounded transition-all group">
          <span className="relative" ref={dropCart} onClick={cartDrop}>
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
          {cartDropDown && (
            <div
              className="h-80 w-80 absolute bg-white top-12 -right-10 z-10 flex flex-col justify-between py-3 items-center rounded-lg
          "
            >
              <div className="text-9xl mt-9 text-black">
                <span className="text-gray-500">
                  <FaShoppingCart />
                </span>
                <div className="text-black text-xl">Your Cart is empty</div>
              </div>

              <button className="bg-[#008a00] hover:opacity-90 transition-all duration-400 text-white text-xl w-[90%] rounded p-2">
                Shop Our Product
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navmain;
