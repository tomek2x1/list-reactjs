import React from "react";

const Item = (props) => {
  return (
    <li>
      {props.user.name} ma {props.user.age} lat i jest{" "}
      {props.user.sex === "female" ? " kobietą" : " mężczyzną"}
    </li>
  );
};

export default Item;
