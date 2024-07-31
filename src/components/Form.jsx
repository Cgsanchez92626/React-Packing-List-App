import React from "react";
import { useState } from "react";

function Form({onAddItem}) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // if(!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItem(newItem)
    setDescription("")
    setQuantity(1)
    // console.log(e.target);
  }

  function onQuantityChange(e) {
    e.preventDefault();
    setQuantity(Number(e.target.value));
  }

  function handleChange(e) {
    //   console.log(event.target)
    setDescription(e.target.value);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your 🐬 trip?</h3>
      <select value={quantity} name="" onChange={onQuantityChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        value={description}
        type="text"
        placeholder="item..."
        name=""
        onChange={handleChange}
      ></input>
      <button disabled={!description}>Add</button>
    </form>
  );
}

export default Form;
