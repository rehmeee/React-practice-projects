import React from 'react'

function Bill({billValue, setBillValue}) {
  return (
    <div> <span>How much is the bill?</span>
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter your bill"
      value={billValue}
      onChange={(e) => setBillValue(Number(e.target.value))}
    /></div>
  )
}

export default Bill