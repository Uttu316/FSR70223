import React from "react";
const ListItem = (props) => {
    const {user} = props
  return (
    <div className="list-card">
      <p className="list-card-name">{user.name}</p>
      <p className="list-card-age">{user.age}</p>
    </div>
  );
};
export default ListItem;
