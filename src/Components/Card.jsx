import React from "react";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AddToCart from "./AddToCart";
import toast from "react-hot-toast";
function Card(props) {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  //console.log(props.data);
  const atcHandler = () => {
    localStorage.setItem("cards", JSON.stringify(props.data));
    toast.success("Add to Cart Successfully");
  };
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-once="true"
        className="w-72 min-h-80 pb-1 rounded-md hover:shadow-2xl mt-6  hover:shadow-gray-500 transition-all duration-70000"
      >
        <div className="w-full h-64 relative">
          <div className="w-full h-full overflow-hidden cursor-pointer rounded-t-sm hover:opacity-95">
            <img
              className="w-full h-full object-cover rounded-t-sm hover:scale-110 transition-all duration-500"
              src={props.data.url}
              alt="Plant Image"
            />
          </div>
          <span className="absolute top-2 right-3 text-2xl bg-white p-2 rounded-full text-pink-600">
            <FaRegHeart />
          </span>
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="font-semibold hover:text-green-900 transition-all duration-500 cursor-pointer">
              {props.data.name}
            </div>
            <span className="bg-green-600 flex  items-center   px-1  rounded-md text-white">
              <span className="text-yellow-600 text-lg">
                {" "}
                <TiStarFullOutline />
              </span>{" "}
              <span> {props.data.rating}</span>
            </span>
          </div>
          <div className="mt-2 mb-2">
            <span className="text-2xl font-bold">
              &#x20b9;{props.data.price}
            </span>
            <span className="ml-2 text-gray-800 line-through">
              &#x20b9;{props.data.fakePrice}
            </span>

            <span className="ml-3 text-1xl text-red-800 font-bold">
              {props.data.offer}Off
            </span>
          </div>

          <button
            onClick={atcHandler}
            className="w-64 mt-1 border-none mx-auto flex justify-center
            items-center hover:text-white bg-yellow-500 py-1 rounded font-bold
            hover:bg-green-600 transition-all"
          >
            {" "}
            Add To Cart
          </button>
          <Link to={`/${props.data.id}`}>
            <button className="w-64 mt-1 border-none mx-auto flex justify-center items-center hover:text-white  bg-yellow-500 py-1 rounded font-bold hover:bg-green-600 transition-all">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
