import React from "react";
import ListItem from "./listItem";

const users = [
  {
    name: "Raja",
    age: 32,
  },
  {
    name: "Sharank",
    age: 21,
  },
  {
    name: "Jainendra",
    age: 12,
  },
  {
    name: "Nagma",
    age: 22,
  },
];

const List = () => {
  return (
    <section className="list-section">
      {users.map((user) => (
       <ListItem user={user} />
      ))}
    </section>
  );
};

export default List