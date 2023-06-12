import END_POINTS from "../apis/endpoints";

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

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    fetch(END_POINTS.get_products)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
