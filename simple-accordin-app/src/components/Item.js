import React from 'react'

function Item({title, text,id,checkClicked,handleCheckclicked}) {
  return (
    <div className = "item" onClick={()=> handleCheckclicked(id)}>
        <span>{id}</span>
        <h3>{title}</h3>
        {checkClicked ? <p>{text}</p>: ""}
        <span>+</span>
        
    </div>
  )
}

export default Item