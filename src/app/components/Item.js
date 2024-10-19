import React from "react";
import Image from "next/image";

function Item({ product }) {
  console.log(product);
  return (
    <div>
      <Image src={product.image} className="center m-2" />
      <h1>{product.name}</h1>
      <p>${product.price}</p>
    </div>
  );
}

export default Item;
