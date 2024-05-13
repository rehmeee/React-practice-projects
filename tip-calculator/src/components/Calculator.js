import React from "react";
import { useState } from "react";
function Calculator() {
  const [billValue, setBillValue] = useState(0);
  const [myTipSugestion, setmyTipSugestion] = useState(0);
  const [friendTipSugestion, setFriendTipSugestion] = useState(0);
  function handleFriendSelect(e){
    console.log(e.target.value);
    setFriendTipSugestion(e.target.value)
  }

  return (
    <div>
      <span>How much is the bill?</span>
      <input
        type="text"
        name=""
        id=""
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />
      <br />
      <span>How much you like the service?</span>
      <select name="" id="" value={myTipSugestion} onChange={(e)=> setmyTipSugestion(e.target.value)}>
        <option value={0}> Dissatisfied 0%</option>
        <option value={5}> it was okay 5%</option>
        <option value={10}> it was good 10%</option>
        <option value={25}> its amazing 25%</option>
      </select>
      <br />
      <span>How much your friend like the service?</span>
      <select name="" id="" value={friendTipSugestion} onChange={(e)=>handleFriendSelect(e)}>
        <option value={0}> Dissatisfied 0%</option>
        <option value={5}> it was okay 5%</option>
        <option value={10}> it was good 10%</option>
        <option value={25}> its amazing 25%</option>
      </select>
    </div>
  );
}

export default Calculator;
