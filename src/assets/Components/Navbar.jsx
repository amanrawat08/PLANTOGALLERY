import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="bg-green-500 w-screen text-center ">
        Get 10% Off On Plantogallery Summer sale Use Code ( SUMR10 )
      </div>
      <nav className="flex bg-yellow-200 items-center justify-between">
        <img
          className="w-48"
          src="https://plantogallery.com/cdn/shop/files/new-logo-plantogallery_255x@2x.jpg?v=1637942726"
          alt=""
        />
        <div>
          <input type="text" />
        </div>
        <div>
          <div></div>
        </div>
      </nav>
    </>
  );
}
