import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// This is how you import your ShoppingList component
import { ShoppingList } from "./components/ShoppingList";

// This is the root of your React tree. You should render
// your <ShoppingList /> in here.
function App() {
  return (
    <div>
      <h1>Shopping List App</h1>
      <ShoppingList />
    </div>
  );
}

// We select the element in the real DOM where we will attach our React tree
const rootElement = document.getElementById("root");

// Attach the React tree
ReactDOM.render(<App />, rootElement);
