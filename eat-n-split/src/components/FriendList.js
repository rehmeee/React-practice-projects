import React from 'react'
import Friend from './Friend';




function FriendList({initialFriends}) {
  return (
    <ul>
        {initialFriends.map((friend)=><Friend key={friend.id} id = {friend.id} name = {friend.name} imgurl = {friend.image} balance = {friend.balance}/>)}
    </ul>
  )
}

export default FriendList