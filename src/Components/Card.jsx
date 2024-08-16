import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
function Card() {
  const data = {
    name: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    price: 99,
    fakePrice: 129,
    offer: "30%",
    rating: 4.5,
  };
  return (
    <div className="w-72  pb-1">
      <div className="w-full h-64 relative">
        <div className="w-full h-full overflow-hidden cursor-pointer hover:opacity-95">
          <img
            className="w-full h-full object-cover relative hover:scale-110 transition-all duration-500"
            src="https://img.freepik.com/free-photo/still-life-with-indoor-plants_23-2151024963.jpg?uid=R154964719&ga=GA1.2.940856582.1720781664&semt=ais_hybrid"
            alt="Plant Image"
          />
        </div>
        <span className="absolute top-2 right-3 text-2xl bg-white p-2 rounded-full text-pink-600">
          <FaRegHeart />
        </span>
      </div>
      <div className="p-1">
        <div className="flex items-center ">
          <div className="font-semibold hover:text-green-900 transition-all duration-500 cursor-pointer">
            {data.name}
          </div>
          <span className="bg-green-600 flex  items-center  px-1  rounded-md text-white">
            <span className="text-yellow-600 text-lg">
              {" "}
              <TiStarFullOutline />
            </span>{" "}
            <span>|{data.rating}</span>
          </span>
        </div>
        <div className="mt-2 mb-2">
          <span className="text-3xl font-bold">&#x20b9;{data.price}</span>
          <span className="ml-2 text-gray-800 line-through">
            &#x20b9;{data.fakePrice}
          </span>
          <span className="ml-3 text-1xl text-red-800 font-bold">
            {data.offer}Off
          </span>
        </div>
      </div>
      {/* <button className="px-2  py-1 rounded-md absolute -bottom-1 right-1/2 text-2xl border-none mx-auto flex justify-center items-center bg-white  font-bold hover:bg-green-600 hover:text-white transition-all">
          <FaShoppingCart />
        </button> */}
      <button className="w-64 mt-1 border-none mx-auto flex justify-center items-center hover:text-white text-2xl  bg-yellow-500 py-1 rounded font-bold hover:bg-green-600 transition-all">
        <FaShoppingCart />
      </button>
      <button className="w-64 mt-1 border-none mx-auto flex justify-center items-center hover:text-white  bg-yellow-500 py-1 rounded font-bold hover:bg-green-600 transition-all">
        Buy Now
      </button>
    </div>
  );
}

export default Card;
