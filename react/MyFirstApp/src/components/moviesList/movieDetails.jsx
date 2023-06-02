import React from "react";
import styles from "./movieList.module.css";

const MovieDetails = (props) => {
  const { details } = props;
  const {
    name,
    model,
    passengers,
    crew,
    cargo_capacity,
    cost_in_credits,
    max_atmosphering_speed,
    created,
    manufacturer,
  } = details || {};
  return (
    <div className={styles.movieDetailsContainer}>
      <h3>Starship Details</h3>
      <p>{name}</p>
      <p>{model}</p>
      <p>{passengers}</p>
      <p>{crew}</p>
      <p>{cargo_capacity}</p>
      <p>{manufacturer}</p>
      <p>{cost_in_credits}</p>
      <p>{max_atmosphering_speed}</p>
      <p>{created}</p>
    </div>
  );
};

export default MovieDetails;
