import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FriendList from "./components/FriendList";
import FromSplitBill from "./components/FromSplitBill";

export default function App(){
  return <div className = "app">
    <div className = "sidebar">
      
   <FriendList/>
   <FormAddFriend/>
   <Button>ADD Friends</Button>

    </div>
      <FromSplitBill/>
      
  </div>
}