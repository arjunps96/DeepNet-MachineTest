import React from "react";

import Product from "./Products";

const ProductList = (props) => {
  return (
    <ul>
      {props.products.map((product) => (
        <li key={product._id}>
          <Product name={product.name} price={product.price} />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
