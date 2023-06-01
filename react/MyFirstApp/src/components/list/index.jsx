import React from "react";
import { users as USERS_DATA } from "../../utils/data";
import ListItem from "./listItem";
import styles from "./list.module.css"

const List = () => {

  return (
    <section className={styles.list_section}>
      {USERS_DATA.map((user) => (
       <ListItem info={user} />
      ))}
    </section>
  );
};

export default List


