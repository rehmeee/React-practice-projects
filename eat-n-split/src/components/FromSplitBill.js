import React from "react";
import Button from "./Button";

function FromSplitBill({friend}) {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with {friend.name}</h2>
      <label htmlFor="">💰Bill Value</label>
      <input type="text" name="" id="" />
      <label htmlFor=""> 🧍🏾your Expense</label>
      <input type="text" />
      <label htmlFor="">🧑‍🤝‍🧑{friend.name} Expense</label>
      <input type="text" name="" id="" disabled />
      <label htmlFor="">🤑who is paying bill?</label>
      <select name="" id="">
        <option value="you">you</option>
        <option value="">{friend.name}</option>
      </select>
      <Button>split bill</Button>
    </form>
  );
}

export default FromSplitBill;
