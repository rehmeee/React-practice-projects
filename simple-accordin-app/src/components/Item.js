import React, { useState } from 'react'

function Item({title, text, itemNo}) {
    const [showAnswer, setshowAnswer] = useState(false);
    console.log(itemNo);
    function handleClick(){
      setshowAnswer(!showAnswer)
    }
  return (
    <ul className = "item" onClick={handleClick}>

        <li className='number'>{itemNo}</li>
      <li className="title">{title}
      <p className='text'>{showAnswer ? `${text}` : ""}</p></li>
      <li className='icon'>{showAnswer ? "-" : "+"}</li>
        
    </ul>
  )
}

export default Item