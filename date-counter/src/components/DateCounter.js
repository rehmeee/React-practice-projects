import React from "react";
import { useState } from "react";
import "../styles/datecounter.css";

function DateCounter() {
  let [range, setRange] = useState(0);
  let [currentDate, setCurrentDate] = useState(new Date("mar 10 2024"));
  let [inputText, setinputText] = useState(0);
  function handleChange(e) {
    console.log(e.target.value);
    setRange((range = e.target.value));
  }
  function handleDateDown() {
    if (parseInt(inputText) <= 0) return;
    setinputText(parseInt(inputText) - parseInt(range));
    console.log(inputText);
    const temp = new Date("mar 10 2024");
    //console.log(temp);
    //console.log(temp.toDateString());
    temp.setDate(temp.getDate() - parseInt(inputText));
    setCurrentDate(temp);
    console.log(currentDate.toDateString());
  }
  function handleDateup() {
    setinputText(parseInt(inputText) + parseInt(range));
    console.log(inputText);
    const date = new Date("mar 10 2024");
    date.setDate(date.getDate() + parseInt(inputText));
    setCurrentDate(date);
  }
  function handleInput(e) {
    setinputText((inputText = e.target.value));
  }
  return (
    <div className="date-counter">
      <input
        type="range"
        name=""
        id=""
        min={0}
        value={range}
        max={10}
        onChange={handleChange}
      />
      <span>{range}</span>
      <br />
      <button onClick={handleDateDown}>-</button>
      {/* <span>{currentDate.getMonth()}</span>
        <span>{currentDate.getDate()}</span>
        <span>{currentDate.getFullYear()}</span> <br /> */}
      <input type="number" value={inputText} onChange={handleInput} />
      <button onClick={handleDateup}>+</button>
      <br />
      <span>{currentDate.toDateString()}</span>
    </div>
  );
}

export default DateCounter;
