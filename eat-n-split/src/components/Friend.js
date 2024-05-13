import React from "react";
import Button from "./Button";

function Friend({ balance, id, name, imgurl }) {
  return (
    <li>
      <img src={imgurl} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className="red">
          {" "}
          you owe {name} {Math.abs(balance)} $
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {" "}
            {name} owes you  {Math.abs(balance)} $
        </p>
      )}
      {balance === 0 && (
        <p >
          {" "}
          you and {name} are even
        </p>
      )}
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
