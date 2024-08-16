import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import TypingAnimator from "react-typing-animator";

export default function Navbar() {
  const textAni = [
    "Get 10% Off On Plantogallery Summer sale😁 ",
    "Use Code ( SUMR10 ) ",
  ];

  const navItems = [
    {
      name: "All Product",
      list: [
        "All Product",
        "Seeds",
        "Flower Bulbs",
        "Pots",
        "Soil & Fertilizers",
        "Pebbles",
        "Gifts",
        "Accessories",
        " Offers & Blogs",
      ],
    },
    {
      name: "Seeds",
      list: [
        "All Product",
        "Seeds",
        "Flower Bulbs",
        "Pots",
        "Soil & Fertilizers",
        "Pebbles",
        "Gifts",
        "Accessories",
        " Offers & Blogs",
      ],
    },
    {
      name: "Flower Bulb",
      list: [
        "All Product",
        "Seeds",
        "Flower Bulbs",
        "Pots",
        "Soil & Fertilizers",
        "Pebbles",
        "Gifts",
        "Accessories",
        " Offers & Blogs",
      ],
    },
    {
      name: "Pots",
      list: [
        "All Product",
        "Seeds",
        "Flower Bulbs",
        "Pots",
        "Soil & Fertilizers",
        "Pebbles",
        "Gifts",
        "Accessories",
        " Offers & Blogs",
      ],
    },
    {
      name: "Soil & Fertilizer",
      list: [
        "All Product",
        "Seeds",
        "Flower Bulbs",
        "Pots",
        "Soil & Fertilizers",
        "Pebbles",
        "Gifts",
        "Accessories",
        " Offers & Blogs",
      ],
    },
    {
      name: "Pebbles",
      list: [
        "All Product",
        "Seeds",
        "Flower Bulbs",
        "Pots",
        "Soil & Fertilizers",
        "Pebbles",
        "Gifts",
        "Accessories",
        " Offers & Blogs",
      ],
    },
    {
      name: "Gifts",
      list: [
        "All Product",
        "Seeds",
        "Flower Bulbs",
        "Pots",
        "Soil & Fertilizers",
        "Pebbles",
        "Gifts",
        "Accessories",
        " Offers & Blogs",
      ],
    },
    ,
    {
      name: "Accessories",
      list: [
        "All Product",
        "Seeds",
        "Flower Bulbs",
        "Pots",
        "Soil & Fertilizers",
        "Pebbles",
        "Gifts",
        "Accessories",
        " Offers & Blogs",
      ],
    },
    ,
    {
      name: "Offers",
      list: [
        "All Product",
        "Seeds",
        "Flower Bulbs",
        "Pots",
        "Soil & Fertilizers",
        "Pebbles",
        "Gifts",
        "Accessories",
        " Offers & Blogs",
      ],
    },
  ];
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

  return (
    <span className="fixed top-0 left-0 right-0 z-10">
      <div className="bg-green-700 w-screen text-center text-white">
        {/*   */}
        <TypingAnimator
          textArray={textAni}
          textColor="white"
          fontSize="1rem"
          textTransform="uppercase"
          loop
          typingSpeed={40}
          delaySpeed={1500}
          backspace
          height="30px"
        />
      </div>
      <nav className="h-16 flex px-9 bg-slate-100 items-center justify-between ">
        <img
          className="w-48"
          src="https://plantogallery.com/cdn/shop/files/new-logo-plantogallery_255x@2x.jpg?v=1637942726"
        />
        <div className="flex items-center justify-center ">
          <input
            className="outline-none py-2 px-1 border  border-gray-300 w-96 font-semibold rounded"
            type="text"
            placeholder="Enter Your Plant..."
          />
          <i className="text-black transition-all py-1 rounded-r text-4xl cursor-pointer hover:text-white hover:bg-green-500">
            <CiSearch />
          </i>
        </div>
        <select className="outline-none ml-5 border border-gray-300 w-44  px-2 py-1">
          {navOption.map((item, i) => (
            <option value="Item1" key={i}>
              {item}
            </option>
          ))}
        </select>
        <div className="flex items-center justify-center">
          <button className="hover:text-white hover:bg-green-700 p-2 rounded transition-all m-2 text-lg font-bold">
            login/Sign
          </button>
          <button className="hover:text-white hover:bg-green-700 p-2 rounded transition-all m-2 text-lg font-bold">
            Wishlist
          </button>
          <button className="text-4xl relative m-2 hover:text-white hover:bg-green-700 p-2 rounded transition-all">
            <CiShoppingCart />
            <span className="absolute text-red-600 top-2 right-3 text-sm font-bold bg-red-600 text-yellow-50 px-1 py-.5 rounded-full ">
              0
            </span>
          </button>
        </div>
      </nav>
      <div className="bg-slate-950 flex align-middle justify-center text-white ">
        {navItems.map((item, i) => (
          <span
            className="px-6 hover:bg-green-700 cursor-pointer transition-all relative group"
            key={i}
          >
            {item.name}
            <ul className="absolute left-0  bg-white rounded text-green-600 w-[200px] hidden group-hover:block">
              {item.list.map((listItem, k) => (
                <li
                  className="text-center hover:bg-slate-800  w-[100%] hover:text-white font-bold"
                  key={k}
                >
                  {listItem}
                </li>
              ))}
            </ul>
          </span>
        ))}
      </div>
    </span>
  );
}
