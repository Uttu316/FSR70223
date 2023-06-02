import React from "react";
import styles from "./movieList.module.css";
import MovieListItem from "./movieListItem";
import { MOVIES_DATA } from "../../utils/movieData";

const MoviesList = (props) => {
  const { selectTab, selectedTab } = props;
  return (
    <div className={styles.moviesListContainer}>
      {MOVIES_DATA.map((item) => (
        <MovieListItem
          selectedTab={selectedTab}
          selectTab={selectTab}
          data={item}
        />
      ))}
    </div>
  );
};
export default MoviesList;
