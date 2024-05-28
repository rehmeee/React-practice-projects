import React from 'react'
import { useState } from "react";
// here we added children props
function ListBox({children}) {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
          {isOpen && (
            children
          )}
        </div>

  )
}

export default ListBox