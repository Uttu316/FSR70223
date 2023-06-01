import React from "react";
const NFBanner = ({title,description,img}) => {
  return (
    <section className="nf-promotional-banner">
      <div className="nf-promotional-content">
        <h2 className="nf-promotional-heading">{title}</h2>
        <p className="nf-promotional-description">
          {description}
        </p>
      </div>
      <div className="nf-promotional-image">
        <img
          src={img}
          alt={title}
        />
      </div>
    </section>
  );
};

export default NFBanner