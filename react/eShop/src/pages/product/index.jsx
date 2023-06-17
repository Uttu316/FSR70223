import React from "react";
import Header from "../../components/Header";
import ProductContainer from "../../components/productContainer";

const Product = () => {
  return (
    <div>
      <Header showHome={true} showLogin={true} />
      <ProductContainer/>
    </div>
  );
};


export default Product