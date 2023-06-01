import React from "react";
import NFBanners from "../../components/netflix/banners";
import NFFaqs from "../../components/netflix/faqs";
import NFHero from "../../components/netflix/hero";
import "./nfStyle.css";

const NFHome = () => {
  return (
    <React.Fragment>
      <NFHero />
      <NFBanners />
      <NFFaqs />
    </React.Fragment>
  );
};

export default NFHome;
