import * as React from "react";

// This component renders an <input> and a <button>
export function ShoppingListInput(props) {
  // Store the user's draft input
  const [draft, setDraft] = React.useState("");

  // Handle each keystroke in the input and store it in the draft
  const handleChange = e => {
    setDraft(e.target.value);
  };

  // Handle the "add item" button to commit the draft to the list
  const handleCommit = () => {
    // Commit the user's draft to the list
    props.onAdd(draft);

    // Reset the draft back to empty string
    setDraft("");
  };

  return (
    <div>
      <input value={draft} onChange={handleChange} />
      <button onClick={handleCommit}>Add item</button>
    </div>
  );
}
