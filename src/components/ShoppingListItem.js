import * as React from "react";

export function ShoppingListItem(props) {
  return (
    <li
      className="list__item"
      style={{ textDecoration: props.inCart ? "line-through" : undefined }}
      onClick={props.onClick}
    >
      {props.name}
      <button onClick={props.onDelete}> X </button>
    </li>
  );
}
