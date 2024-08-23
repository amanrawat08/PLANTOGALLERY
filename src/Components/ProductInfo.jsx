import { useParams } from "react-router-dom";
import React from "react";
import data from "./Data";
function ProductInfo() {
  const { currId } = useParams();

  return (
    <div>
      {data.map((item, i) =>
        item.id === currId ? <div>{item.id}</div> : null
      )}
    </div>
  );
}

export default ProductInfo;
