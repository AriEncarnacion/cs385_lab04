import * as React from "react";
import { ShoppingListInput } from "./ShoppingListInput";
import { ShoppingListItem } from "./ShoppingListItem";

// This component renders a <ul> with its children being
// an array of ShoppingListItems
export function ShoppingList(props) {
  const [list, setList] = React.useState([{ label: "turkey", inCart: false }]);

  // Handle adding the item to the cart
  const addItem = newItem => {
    const tempObj = { label: newItem, inCart: false };
    setList([...list, tempObj]);
  };

  // Handle removing the item from the cart
  const removeItem = index => event => {
    event.stopPropagation();
    console.log("Trying to remove index", index, "from the list");
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  };

  const toggleInCart = index => () => {
    console.log("Trying to toggle index", index, "from in/out of the cart");
    // Write your code to handle toggling the item's inCart flag in the cart
    setList([
      ...list.slice(0, index),
      { ...list[index], inCart: !list[index].inCart },
      ...list.slice(index + 1)
    ]);
  };

  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <ShoppingListItem
            key={index}
            name={item.label}
            inCart={item.inCart}
            onClick={toggleInCart(index)}
            onDelete={removeItem(index)}
          />
        ))}
      </ul>
      <ShoppingListInput onAdd={addItem} />
    </div>
  );
}
