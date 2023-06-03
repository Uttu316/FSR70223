import React,{ useState } from "react";
import MoviesList from "../../components/moviesList";
import MovieDetails from "../../components/moviesList/movieDetails";
import SearchBar from "../../components/searchbar";
import styles from "./movies.module.css";
// Hooks
const Movies = () => {
    const [selectedTab,selectTab] = useState(null);
    const [search, setSearch] = useState("");
  return (
    <section className={styles.moviesSection}>
      <h1 className={styles.moviesSectionTitle} >Starships Guide</h1>
      <SearchBar selectTab={selectTab} search={search} setSearch={setSearch}/>
      <MoviesList search={search} selectedTab={selectedTab} selectTab={selectTab} />
      {selectedTab&& <MovieDetails details={selectedTab}/>} 
    </section>
  );
};

export default Movies;

// conditional rendering