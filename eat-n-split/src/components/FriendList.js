import React from 'react'
import Friend from './Friend';




function FriendList({initialFriends,handleFriendSelection,selectedFriend}) {
  return (
    <ul>
        {initialFriends.map((friend)=><Friend key={friend.id} id = {friend.id} handleFriendSelection={handleFriendSelection} selectedFriend={selectedFriend} name = {friend.name} imgurl = {friend.image} balance = {friend.balance}/>)}
    </ul>
  )
}

export default FriendList