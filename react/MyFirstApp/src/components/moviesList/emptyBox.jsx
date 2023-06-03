import React from "react";
import EmptyImage from "../../assets/images/empty.svg";
import styles from "./movieList.module.css";

const EmptyBox = () => {
  return (
    <div className={styles.emptyBox}>
      <img
        src={EmptyImage}
        alt="no starship"
        className={styles.emptyBoxImage}
      />
      <p className={styles.emptyBoxMsg}>No Starship available</p>
    </div>
  );
};

export default EmptyBox