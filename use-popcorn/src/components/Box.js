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
          {/* remember here we render the children in simple as it is not nesserey to use the curly braces because we are already in javascript mode */}
          {isOpen && (

            children
          )}
        </div>

  )
}

export default ListBox