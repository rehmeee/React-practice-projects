import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import FromSplitBill from "./components/FromSplitBill";
import { useState } from "react";
const initialFriends = [
  {
    id: 118836,
    name: "Asad",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Alina",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Farhad",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
let friends = initialFriends;
export default function App() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const[selectedFriend, setSelectedFriend] = useState(null);
  // const [balance, setBalance] = useState(0);
  function handleShowAddFriend() {
    setShowAddFriendForm((show) => !show);
  }
  function handleFriendSelection(selectedFriend) {
    if(selectedFriend != null) {
      
      setSelectedFriend(selectedFriend);
    }
    else {
      setSelectedFriend(null)
    }
    console.log(selectedFriend);
  }
  function handleSetBalance(id, balance ){
    friends.map((friend)=> friend.id === id ? {...friend, balance:balance}: friend)
  }
  function addFriendToList(name,imageUrl) {
    console.log("addFriendToList is called ");
    friends = [...friends, {id : Date.now(),name: name, image : imageUrl, balance : 0}];
    console.log(friends);
    setImageUrl('');
    setName("");
    setShowAddFriendForm(false);
  }
  
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList initialFriends={friends} handleFriendSelection={handleFriendSelection}
        selectedFriend={selectedFriend}
        />
        {showAddFriendForm && (
          <FormAddFriend
            name={name}
            setName={setName}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            addFriendToList = {addFriendToList}
          />
        )}
        <Button onClick={handleShowAddFriend}>
          {showAddFriendForm ? "Close " : "Add Friends"}
        </Button>
      </div>
      {selectedFriend && <FromSplitBill friend = {selectedFriend} handleSetBalance={handleSetBalance}/>}
    </div>
  );
}
