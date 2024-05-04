import React, { useState } from 'react'

function Item({title, text,key}) {
    const [showAnswer, setshowAnswer] = useState(true);
  return (
    <div className = "item">
        <span>{key}</span>
      <h2>{title}</h2>
      {showAnswer ? <p>{text}</p>: ""}
      <span>{showAnswer ? "-" : "+"}</span>
        
    </div>
  )
}

export default Item