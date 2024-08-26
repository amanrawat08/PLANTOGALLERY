import React from "react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function FlowerBox() {
  const data = [
    {
      name: "Rose Flower For Your Home",

      url: "https://img.freepik.com/premium-photo/red-flower-with-red-center-that-says-no-name_1227606-4534.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      name: "Best Seeds For Flower",

      url: "https://img.freepik.com/free-photo/goji-berry_144627-13562.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      name: "Flower Bulbs For Growing Plant",

      url: "https://img.freepik.com/free-photo/vertical-closeup-red-calla-flower-with-long-stamen_181624-4311.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      name: "Flower Pots",

      url: "https://img.freepik.com/premium-photo/house-plant-anthurium-white-flowerpot-isolated-white-table-beige-background_72679-1984.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      name: "Soil and Fertilizer",

      url: "https://img.freepik.com/free-photo/gardening-composition-with-hand-pink-flower_23-2147673273.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      name: "Pebbles",
      hideurl:
        "https://img.freepik.com/free-photo/bowl-dried-goji-berries_114579-24595.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
      url: "https://img.freepik.com/free-photo/goji-berry_144627-13559.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      name: "Accessories",
      hideurl:
        "https://img.freepik.com/free-photo/gardening-concept-with-plants_23-2148000313.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
      url: "https://img.freepik.com/premium-photo/indoor-plant-concept-caring-indoor-plants_106035-306.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      name: "Gifts",
      hideurl:
        "https://img.freepik.com/free-photo/beautiful-red-poinsettia-arrangement_23-2149138717.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
      url: "https://img.freepik.com/premium-photo/christmas-mockup-red-background-with-new-year-s-gift-decorative-elements_584999-653.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
    {
      name: "Offers",
      hideurl:
        "https://img.freepik.com/free-photo/still-life-with-plants-deco_23-2149192211.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
      url: "https://img.freepik.com/free-photo/beautiful-red-poinsettia-assortment_23-2149138675.jpg?uid=R154964719&ga=GA1.1.940856582.1720781664&semt=ais_hybrid",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      className="min-h-80 mt-8 w-[96%] m-auto flex rounded-md flex-wrap gap-14 justify-center items-center"
    >
      {data.map((item, i) => (
        <div
          key={i}
          className="xs:w-60 xl:w-96 rounded-md overflow-hidden"
          data-aos="zoom-in"
          data-aos-once="true"
        >
          <div className="xs:h-60 xl:h-80 relative bg-green-200 rounded-md cursor-pointer group">
            <img
              className="h-full absolute w-full rounded-md duration-500 transition-all group-hover:scale-110"
              src={item.url}
              alt=""
            />

            <div className="flex absolute bg-black w-full bg-opacity-35 h-full  text-white items-center py-1 justify-center gap-2 flex-col text-center">
              <div className="text-center text-2xl font-bold hover:text-green-600 transition-all duration-300 cursor-pointer">
                {item.name}
              </div>
              <button className="hover:bg-yellow-500 hover:text-black px-4 bg-green-500 py-2 rounded-md text-white font-bold">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default FlowerBox;
