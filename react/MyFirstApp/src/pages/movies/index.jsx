import React,{ useState } from "react";
import MoviesList from "../../components/moviesList";
import MovieDetails from "../../components/moviesList/movieDetails";
import styles from "./movies.module.css";
// Hooks
const Movies = () => {
    const [selectedTab,selectTab] = useState(null);
  return (
    <section className={styles.moviesSection}>
      <h1 className={styles.moviesSectionTitle} >Starships Guide</h1>
      <MoviesList selectedTab={selectedTab} selectTab={selectTab} />
      {selectedTab&& <MovieDetails details={selectedTab}/>} 
    </section>
  );
};

export default Movies;

// conditional rendering