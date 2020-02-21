import * as React from "react";
import { ShoppingListInput } from "./ShoppingListInput";
import { ShoppingListItem } from "./ShoppingListItem";

// This component renders a <ul> with its children being
// an array of ShoppingListItems
export function ShoppingList(props) {
  const [list, setList] = React.useState(["turkey"]);

  // Handle adding the item to the cart
  const addItem = newItem => {
    setList([...list, newItem]);
  };

  // Handle removing the item from the cart
  const removeItem = index => event => {
    console.log("Trying to remove index", index, "from the list");
    const deleteIndex = list.indexOf(index);
    setList([...list.slice(0, deleteIndex), ...list.slice(deleteIndex + 1)]);
  };

  const toggleInCart = index => () => {
    console.log("Trying to toggle index", index, "from in/out of the cart");
    // Write your code to handle toggling the item's inCart flag in the cart
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <ShoppingListItem key={index} name={item} onDelete={removeItem} />
        ))}
      </ul>
      <ShoppingListInput onAdd={addItem} />
    </div>
  );
}
