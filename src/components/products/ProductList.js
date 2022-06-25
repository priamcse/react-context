import React from "react";
import SingleProduct from "./SingleProduct";

const ProductList = ({ products }) => {
  const productList = products.map((product) => {
    return <SingleProduct key={product.id} product={product} />;
  });
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {productList}
    </div>
  );
};

export default ProductList;
