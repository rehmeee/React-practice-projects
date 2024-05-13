import React from 'react'
import Button from './Button'

function FormAddFriend() {
  return (
    <form className='form-add-friend'>
        <label htmlFor="" >👬Friend name</label>
        <input type="text" />
        <label htmlFor="">🏙️Image url</label>
        <input type="text" name="" id="" />
        
        <Button>Add</Button>
    </form>
  )
}

export default FormAddFriend