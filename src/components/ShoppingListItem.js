import * as React from "react";

export function ShoppingListItem(props) {
  const handleRemove = () => {
    props.onDelete(props.index)();
  };

  return (
    <li
      className="list__item"
      style={{ textDecoration: props.inCart ? "line-through" : undefined }}
      onClick={props.onClick}
    >
      {props.name}
      <button onClick={handleRemove}> X </button>
    </li>
  );
}
