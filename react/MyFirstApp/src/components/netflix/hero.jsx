import React from "react";
import NFHeader from "./header";
import NFSubscritpion from "./subscription";

const NFHero = () => {
  return (
    <section className="nf-hero-section">
      <div className="nf-hero-container">
        <NFHeader/>
        <div className="nf-hero-content">
          <h1 className="nf-hero-content-title">
            Unlimited movies, TV shows and more
          </h1>
          <p className="nf-hero-content-subtitle">
            Watch anywhere. Cancel anytime.
          </p>
        </div>
        <NFSubscritpion/>
      </div>
    </section>
  );
};

export default NFHero