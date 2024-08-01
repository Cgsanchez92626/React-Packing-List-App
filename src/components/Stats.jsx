import React from "react";

function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentPacked = Math.round((numPacked / numItems) *100)

  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list, and you already packed {numPacked}. You are ({percentPacked}%) complete!!</em>
    </footer>
  );
}

export default Stats;
