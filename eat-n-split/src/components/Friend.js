import React from "react";
import Button from "./Button";

function Friend({ balance, id, name, imgurl,handleFriendSelection,selectedFriend }) {
  function handleFormSplit(){
    if(selectedFriend !=null &&  selectedFriend.name === name){
      handleFriendSelection(null);
    }
    else {
      let selectedFriend = {id, name , imgurl, balance};
      handleFriendSelection(selectedFriend);
    }
  }
  return (
    <li className={selectedFriend != null ? id === selectedFriend.id ? "selected" : "" : ""}>
      <img src={imgurl} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          {" "}
          you owe {name} {Math.abs(balance)}$
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {" "}
            {name} owes you  {Math.abs(balance)}$
        </p>
      )}
      {balance === 0 && (
        <p >
          {" "}
          you and {name} are even
        </p>
      )}
      <Button onClick={handleFormSplit}>{selectedFriend !=null ? (selectedFriend.name === name ? "close" : "Select" ): "Select" }</Button>
    </li>
  );
}

export default Friend;
