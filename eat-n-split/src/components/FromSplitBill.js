import React from 'react'
import Button from './Button'

function FromSplitBill() {
  return (
    <form className='form-split-bill'>
      <h2>Split the bill with X</h2>
        <label htmlFor="">💰Bill Value</label>
        <input type="text" name="" id="" />
        <label htmlFor=""> 🧍🏾your Expense</label>
        <input type="text" />
        <label htmlFor="">🧑‍🤝‍🧑 Expense</label>
        <input type="text" name="" id="" disabled/>
        <label htmlFor="">🤑who is paying bill?</label>
        <select name="" id="">
          <option value="you">you</option>
          <option value="">{}</option>
        </select>
        <Button>split bill</Button>
    </form>
  )
}

export default FromSplitBill