# CS 385 Lab 4

## Overview

Now you will update your shopping list app with new features:

1. A `<button>` next to each item in the list that, when clicked, deletes the item from the list.

2. User can click each item to toggle whether it's in the cart or not.

You can view a sample of the completed app [here](https://em.link/385/lab4/example) to get a clearer picture of what you're building.

## Instructions

Instructions are guidelines rather than exact steps. If you get stuck let me know.

1. Implement the removeItem function in ShoppingList.js that receives the index of a ShoppingListItem as an argument and removes it from the array.

2. Render a `<button>` after the item label inside the `<li>` in ShoppingListItem.js. When clicked it should call your removal function from step 1. You will need to pass this function as a prop to `<ShoppingListItem>` so that the `<button>` has access to it.

3. Modify your state array from an array of strings (like `["turkey"]`) to an array of objects like `[{label: "turkey", inCart: false}]`. You will need to update how you pass the name prop to ShoppingListItem and also change your addItem function to insert a new object instead of inserting the string. You should set inCart to false by default.

4. In ShoppingList.js, pass a prop called `inCart` to each `<ShoppingListItem>` which is read from your list state.

5. Implement the `toggleInCart` function ShoppingList.js which receives the index of a ShoppingListItem as an argument and toggles its `inCart` property inside the state between true and false. You should pass this function as a prop called `onClick` to each `<ShoppingListItem>`

6. You may notice that if you click the delete button, your item is now only changed between in cart and out of cart, and is no longer deleted. This is because both your toggleInCart and removeFromCart functions are detecting a click, and the toggle one overwrites the remove. To fix this, you can receive argument in your removeFromCart function, `event`, and call event.stopPropagation(). When enough get to this point during lab I'll explain what it is and why it's needed.
