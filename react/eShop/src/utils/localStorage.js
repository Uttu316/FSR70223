export const getLS = (key) => {
  try {
    var value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

export const setLS = (key, value) => {
  if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  localStorage.setItem(key, value);
};

export const removeLS = (key) => {
  localStorage.removeItem(key);
};

export const clearLS = () => {
  localStorage.clear();
};
