import React from "react";
import Button from "./Button";
import { useState } from "react";
function FromSplitBill({friend}) {
  const [bill, setBill] = useState(0);
  const [yourExpense, setYourEXpense] = useState(0);
  const [payingBill, setPayingBill] = useState('you');
  function handleSplit(){
    if(payingBill === "you" && friend.balance <0){
      let balance =friend.balance +  bill- yourExpense;
      console.log(balance);
      
    }
    else {
      let balance = friend.balance - bill- yourExpense
      console.log(balance);

    }
  }


  return (
    <form className="form-split-bill" onSubmit={(e)=>e.preventDefault()}>
      <h2>Split the bill with {friend.name}</h2>
      <label htmlFor="">💰Bill Value</label>
      <input type="text" name="" id="" value={bill} onChange={(e)=> setBill(Number(e.target.value))} />
      <label htmlFor=""> 🧍🏾your Expense</label>
      <input type="text" value={yourExpense} onChange={(e)=> setYourEXpense(Number(e.target.value))}/>
      <label htmlFor="">🧑‍🤝‍🧑{friend.name} Expense</label>
      <input type="text" name="" id="" value={bill-yourExpense} disabled />
      <label htmlFor="">🤑who is paying bill?</label>
      <select name="" id="" value={payingBill} onChange={(e)=>setPayingBill(e.target.value)}>
        <option value="you">you</option>
        <option value={friend.name}>{friend.name}</option>
      </select>
      <Button onClick={handleSplit}>split bill</Button>
    </form>
  );
}

export default FromSplitBill;
