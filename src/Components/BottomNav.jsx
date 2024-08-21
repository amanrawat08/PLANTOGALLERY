import React from "react";
function BottomNav() {
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
  return (
    <div className="bg-slate-950   text-white xs:hidden lg:block sm:hidden  flex align-middle justify-center flex-wrap">
      {navItems.map((item, i) => (
        <span
          className="px-6 hover:bg-green-700 cursor-pointer transition-all relative group"
          key={i}
        >
          {item.name}
          <ul className="absolute left-0  bg-white rounded text-green-600 w-[200px] hidden group-hover:block pb-2">
            {item.list.map((listItem, k) => (
              <li
                className="text-center hover:bg-slate-800  w-[100%] hover:text-white py-1"
                key={k}
              >
                {listItem}
              </li>
            ))}
          </ul>
        </span>
      ))}
    </div>
  );
}

export default BottomNav;
