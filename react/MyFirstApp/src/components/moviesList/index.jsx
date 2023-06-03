import React from "react";
import styles from "./movieList.module.css";
import MovieListItem from "./movieListItem";
import { MOVIES_DATA } from "../../utils/movieData";
import EmptyBox from "./emptyBox";

const MoviesList = (props) => {
  const { selectTab, search, selectedTab } = props;
  const filteredData = MOVIES_DATA.filter((i) =>
    i.name.toLowerCase().includes(search)
  );

  const isEmpty = filteredData.length === 0;
  return (
    <div className={styles.moviesListContainer}>
      {filteredData.map((item) => (
        <MovieListItem
          selectedTab={selectedTab}
          selectTab={selectTab}
          key={item.id}
          data={item}
        />
      ))}
      {isEmpty && <EmptyBox />}
    </div>
  );
};
export default MoviesList;
