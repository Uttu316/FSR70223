import END_POINTS from "../apis/endpoints";
import axios from "axios";
import { fakeStore } from "../apis";

/*
   ********* Fetch implementation *********

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    fetch(END_POINTS.get_categories)
      .then((res) => res.json())
      .then((data) => {
        const categoris = data.map((i) => ({ id: i, label: i.toUpperCase() }));
        resolve(categoris);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
*/

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(END_POINTS.get_categories)
      .then(({ data }) => {
        const categoris = data.map((i) => ({
          id: i,
          label: i.toUpperCase(),
        }));
        resolve(categoris);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const getProducts = () => {
  const filters = new URLSearchParams(location.search);
  const sortBy = filters.get("sortBy");
  return new Promise((resolve, reject) => {
    fakeStore
      .get(END_POINTS.get_products, {
        params: {
          sort: sortBy,
        },
      })
      .then(({ data }) => {
        resolve({ data });
      })
      .catch((err) => {
        if (err && err.response) {
          const status = err.response.status;
          console.log(status);
        }
        reject(err);
      });
  });
};

export const getFilteredProducts = () => {
  const filters = new URLSearchParams(location.search);
  const category = filters.get("category") || "";
  const sortBy = filters.get("sortBy");
  const url = END_POINTS.get_category_products + category;
  return axios.get(url, {
    params: {
      sort: sortBy,
    },
  });
};
