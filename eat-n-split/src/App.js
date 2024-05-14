import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import FromSplitBill from "./components/FromSplitBill";
import { useState } from "react";
export default function App(){
  const [showAddFriendForm, setShowAddFriendForm] = useState(false)
function handleShowAddFriend(){
  setShowAddFriendForm(show => !show);
}
  return <div className = "app">
    <div className = "sidebar">
      
   <FriendList/>
  {showAddFriendForm && <FormAddFriend/>}
   <Button onClick={handleShowAddFriend}>{showAddFriendForm ? "Close " : "Add Friends"}</Button>

    </div>
      <FromSplitBill/>
      
  </div>
}