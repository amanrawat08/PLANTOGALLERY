import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import data from "./Data";
function ProductInfo() {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const Mydata = data.find((item) => item.id === parseInt(id));

  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      className="w-[96vw] m-auto min-h-[70vh] my-1 bg-gray-100 flex  flex-wrap justify-center font-semibold items-center"
    >
      <div className="w-[400px] h-[70vh]">
        <img src={Mydata.url} className="h-[100%] w-full" alt="" />
      </div>
      <div className="w-[700px]  p-5">
        <div className="flex items-center justify-between 0 mt-9">
          <div className="text-5xl">{Mydata.name}</div>
          <div className="p-2 text-green-700 text-xl">
            Rating {Mydata.rating}
          </div>
        </div>
        <div className="mt-5 bg-red-600 inline-block px-3 rounded-md text-white">
          You Save Rs.{Mydata.fakePrice - Mydata.price}
        </div>
        <div className="flex items-end  mt-5">
          <span className="text-1xl mr-4">Price:</span>
          <div className="text-4xl font-semibold">Rs.{Mydata.price}</div>
          <div className="ml-3 line-through text-gray-700 ">
            Rs.{Mydata.fakePrice}
          </div>
        </div>
        <div className="mt-4">
          <span>
            Warrentty: <span className="text-gray-700">{Mydata.warranty}</span>{" "}
          </span>
        </div>
        <div className="mt-2 text-1xl flex items-center">
          Stock:{" "}
          {Mydata.inStock ? (
            <div className="ml-2 text-gray-700">Stock Available</div>
          ) : (
            <div className="ml-2 text-gray-700">Out Of Stock</div>
          )}
        </div>
        <div className="mt-4 flex items-center">
          <span className="mr-3">Quantity:</span>
          <div className="flex items-center border border-gray-300 px-3 py-1">
            <span onClick={() => (count > 1 ? setCount(count - 1) : null)}>
              <GrSubtract />
            </span>
            <span className="mr-4 ml-4">{count}</span>
            <span onClick={() => setCount(count + 1)}>
              <IoMdAdd />
            </span>
          </div>
        </div>
        <div className="mt-4">
          <span className="mr-3">Grand Total:</span>
          <span className="text-2xl text-red-600">
            Rs.{Mydata.price * count}
          </span>
        </div>
        <div className="m-5">
          <button className="mr-3 bg-yellow-400 px-5 rounded-md hover:opacity-80 font-semibold py-2">
            Add To Cart
          </button>
          <button className=" bg-yellow-400 px-5 rounded-md hover:opacity-80 font-semibold py-2">
            Buy Now
          </button>
        </div>
      </div>
      <div className="w-44">
        <img
          className="w-[100%]"
          src="https://tse4.mm.bing.net/th?id=OIP.nCuwb4dVK7DMVBxWJFcyUQHaHa&pid=Api&P=0&h=220"
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductInfo;
