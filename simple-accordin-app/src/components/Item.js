import React, { useState } from 'react'

function Item({title, text,key}) {
    const [showAnswer, setshowAnswer] = useState(false);
    function handleClick(){
      setshowAnswer(!showAnswer)
    }
  return (
    <div className = "item" onClick={handleClick}>
        <span>{key}</span>
      <h2>{title}</h2>
      {showAnswer ? <p>{text}</p>: ""}
      <span>{showAnswer ? "-" : "+"}</span>
        
    </div>
  )
}

export default Item