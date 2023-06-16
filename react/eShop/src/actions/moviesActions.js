import axios from "axios";
import END_POINTS from "../apis/endpoints";

export const getPopularMovies = async () => {
  try {
    const { data } = await axios.get(END_POINTS.get_popular_movies);
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
export const getSearchMovies = (search) => {
  return axios.get(END_POINTS.get_search_movies, {
    params: {
      query: search,
    },
  });
};
