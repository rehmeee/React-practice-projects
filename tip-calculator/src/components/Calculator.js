import React from "react";
import { useState } from "react";
function Calculator() {
  const [billValue, setBillValue] = useState(null);
  const [myTipSugestion, setmyTipSugestion] = useState(0);
  const [friendTipSugestion, setFriendTipSugestion] = useState(0);
  const [avg,setAvg ] = useState(0);
  function handleFriendSelect(e){
    console.log(e.target.value);
    setFriendTipSugestion(Number(e.target.value))
    let a = ((Number(e.target.value)/100) *billValue + (myTipSugestion/100) * billValue)/2;
    setAvg(a);
  }
  function handleMySelect(e){
    console.log(e.target.value);
    setmyTipSugestion(Number(e.target.value))
    let a = ((Number(e.target.value)/100) *billValue + (friendTipSugestion/100) * billValue)/2;
    setAvg(a);
  }
  function handleReset() {
    setBillValue(""); // Reset bill value to null
    setmyTipSugestion(0); // Reset myTipSugestion to 0
    setFriendTipSugestion(0); // Reset friendTipSugestion to 0
    setAvg(0);
  }
  
//   function handleReset(){
//     setBillValue(null);
//     setmyTipSugestion(0);
//     setFriendTipSugestion(0);
//   }

  return (
    <div>
      <span>How much is the bill?</span>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter your bill"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
      <br />
      <span>How much you like the service?</span>
      <select name="" id="" value={myTipSugestion} onChange={(e)=> handleMySelect(e)}>
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
    {billValue >0? <div className="res">
        <span>so your total bill:</span>
        {billValue + avg }$ 
        <span>({billValue}$ + {avg}$ tip)</span>
        <br />
        <button onClick={handleReset}>Reset</button>
        </div> : "" }

    </div>
  );
}

export default Calculator;
