import React from "react";
import Button from "./Button";

function FormAddFriend({ name, setName, imageUrl, setImageUrl,addFriendToList }) {
  function handleFormSubmit(e) {
    addFriendToList(name,imageUrl)
    e.preventDefault();
  }
  return (
    <form className="form-add-friend">
      <label htmlFor="">👬Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="">🏙️Image url</label>
      <input
        type="text"
        name=""
        id=""
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />

      <Button onClick={handleFormSubmit}>Add</Button>
    </form>
  );
}

export default FormAddFriend;
