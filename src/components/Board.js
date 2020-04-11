import React from "react";
import Item from "./Item";

const Board = (props) => {
  return (
    <ul>
      <Item key={props.user.id} user={props.user} />
    </ul>
  );
};

export default Board;
