import React from "react";

function Item({ item, onDeleteItem, onToggleItem }) {
  function handleDeleteItem() {
    onDeleteItem(item.id);
  }

  function handleToggleItem() {
    onToggleItem(item.id);
  }
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={handleToggleItem} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDeleteItem}>❌</button>
    </li>
  );
}

export default Item;
