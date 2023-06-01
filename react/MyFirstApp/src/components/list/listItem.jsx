import React from "react";
import styles from "./list.module.css";
const ListItem = (props) => {
    const {info} = props;
  return (
    <div className={styles.list_card}>
      <p className={styles.list_card_name}>{info.name}</p>
      <p className={styles.list_card_age}>{info.age}</p>
    </div>
  );
};
export default ListItem;
