import React from "react";
import Item from "./Item";

function ItemList({ products, name }) {
  //   console.log(products);
  return (
    <div className="itemList flex flex-row justify-center">
      {products.map((product) => {
        // console.log(product);
        return <Item product={product} />;
      })}
    </div>
  );
}

export default ItemList;
