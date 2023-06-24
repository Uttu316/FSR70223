import React from "react";
import styles from "./movieList.module.css";

const MovieListItem = (props) => {
  const { data, selectTab, selectedTab } = props;
  const { name, passengers, model, id } = data || {};

  const isActive = selectedTab ? selectedTab.id === id : false;

  const onClickItem = (e) => {
    if(isActive){
      selectTab(null);
      return;
    }
    selectTab(data);
  };
  return (
    <div
      onClick={onClickItem}
      className={`${styles.movieListItem} ${isActive ? styles.activeTab : ""}`}
    >
      <h2 className={styles.movieListItemTitle}>{name}</h2>
      <p className={styles.movieListItemSubtitle}>{model}</p>
      <p className={styles.movieListItemPill}>Passengers: {passengers}</p>
    </div>
  );
};
export default React.memo(MovieListItem);
