import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "./Data";
function BottomNav() {
  return (
    <div className="bg-slate-950   text-white max-lg:hidden flex  justify-center">
      {navItems.map((item, i) => (
        <span
          className="px-6 hover:bg-green-700 cursor-pointer transition-all relative group"
          key={i}
        >
          <Link to={item.name}> {item.name}</Link>
          <ul className="absolute left-0  bg-white rounded text-green-600 w-[200px] hidden group-hover:block pb-2">
            {item.list.map((listItem, k) => (
              <li
                className=" hover:bg-slate-800  w-[100%] hover:text-white px-3 py-1"
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
