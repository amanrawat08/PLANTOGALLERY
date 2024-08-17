import React from "react";
import data from "./Data";
import Card from "./Card";
function FrontCard() {
  return (
    <div className="flex items-center justify-center flex-wrap w-[96%] gap-10 m-auto my-1">
      {data.map((item, i) => (
        <Card data={item} />
      ))}
    </div>
  );
}
export default FrontCard;
