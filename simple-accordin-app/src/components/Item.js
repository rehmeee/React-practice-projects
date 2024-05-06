
function Item({title, text, itemNo,curOpen,onClick}) {
  // now we lift the state above to just show the one item at at a time so we dont need of this state
    //const [showAnswer, setshowAnswer] = useState(false);
    function handleClick(){
      onClick(itemNo);
    }
    //console.log("the item no is " + itemNo);
    const isOpen = itemNo === curOpen;
    console.log("currently open is "+curOpen);
  return (
    <ul className = "item" onClick={handleClick}>

        <li className='number'>{itemNo > 9 ? itemNo +1 : `0${itemNo +1}`}</li>
      <li className="title">{title}
      <p className='text'>{isOpen? `${text}` : ""}</p></li>
      <li className='icon'>{isOpen ? "-" : "+"}</li>
        
    </ul>
  )
}

export default Item