import React, { useEffect } from "react";
import { useState } from "react";
import { getPopularMovies, getSearchMovies } from "../../actions/moviesActions";

const Movies = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const onChangeInput = (e) => {
    const { value } = e.target;

    setSearch(value);
    if (value) {
      getSearchResults(value);
    } else {
      fetchMovies();
    }
  };

  const getSearchResults = async (value) => {
    try {
      const {data} = await getSearchMovies(value);
      const movies = (data && data.results) || [];
      setProducts(movies);
    } catch (e) {
      console.log(e);
    }
  };
  const fetchMovies = async () => {
    try {
      const data = await getPopularMovies();
      const movies = (data && data.results) || [];
      setProducts(movies);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    // componentDidMount
    fetchMovies();
  }, []);

  return (
    <div className="">
      <h1>Movies</h1>
      <div className="">
        <input
          placeholder="Search Movies"
          value={search}
          onChange={onChangeInput}
        />
      </div>

      {products.map((item) => (
        <Movie key={item.id} title={item.original_title} poster_path={item.poster_path} />
      ))}
    </div>
  );
};
const Movie = (props) => (
  <div className="movie" style={{ display: "inline-block", margin: 4 }}>
    <figure>
      <img
        src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`}
      />
      <figcaption>
        <h2 className="movie__title">{props.title}</h2>
      </figcaption>
    </figure>
  </div>
);
export default Movies;
