import React from "react";
import Filters from "../../components/Filters";
import Header from "../../components/Header";
import HeroBanner from "../../components/heroBanner";
import ProductList from "../../components/productList";

const Home = () => {
  return (
    <div>
      <Header showLogin={true} />
      <HeroBanner />
      <Filters />
      <ProductList />
    </div>
  );
};
export default Home;
