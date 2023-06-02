import React from "react";

const NFAccordians = () => {
  return (
    <div className="nf-faq-accordians">
      <Accordian
        title={"Title 1"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab1"
      />
      <Accordian
        title={"Title 2"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab2"
      />
      <Accordian
        title={"Title 3"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab3"
      />
      <Accordian
        title={"Title 4"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab4"
      />
      <Accordian
        title={"Title 5"}
        desc={`Netflix is a streaming service that offers a wide variety of
          award-winning TV shows, movies, anime, documentaries and more – on
          thousands of internet-connected devices.`}
        id="tab5"
      />
    </div>
  );
};

const Accordian = ({ title, desc, id }) => {
  return (
    <div className="nf-accordion">
      <input type="checkbox" id={id} />
      <label className="accordion-label" for={id}>
        <span> {title} </span> <i className="fa-solid fa-plus"></i>
      </label>
      <div className="accordion-content">{desc}</div>
    </div>
  );
};

export default NFAccordians