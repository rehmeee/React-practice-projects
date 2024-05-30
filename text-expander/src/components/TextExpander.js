import React from 'react'
import { useState } from "react";
function TextExpander({children,showText,byDefaultShow, hideText, wordsNumCollaps}) {
    const [show, setShow] = useState(byDefaultShow)
    let words = children.split( " ")
    console.log(words);
    console.log(children);
  return (
    <div>
        <p>{children.split(" ").map((word, i)=> i<5 ? `${word} ` : `...` )}</p>
        <button>{show ? hideText :showText }</button>
    </div>
  )
}

export default TextExpander