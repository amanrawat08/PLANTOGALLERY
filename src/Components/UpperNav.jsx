import React from "react";

import TypingAnimator from "react-typing-animator";
import { SiGmail } from "react-icons/si";
function UpperNav() {
  const textAni = [
    "Get 10% Off On Plantogallery Summer sale😁 ",
    "Use Code ( SUMR10 ) ",
  ];
  return (
    <div className=" relative bg-[#008a00] w-full  p-[4px] text-center font-semibold text-white">
      <span className="">
        <TypingAnimator
          textArray={textAni}
          textColor="white"
          fontSize="15px"
          textTransform="uppercase"
          loop
          typingSpeed={40}
          delaySpeed={1500}
          backspace
          height="30px"
        />
      </span>
      <div className="flex absolute right-3 top-1 items-center mr-3 cursor-pointer font-semibold invisible  lg:visible">
        <i className="text-red-600 bg-white  rounded-sm px-1 mr-1">
          <SiGmail />
        </i>{" "}
        Subscribe & Save
      </div>
    </div>
  );
}
export default UpperNav;
