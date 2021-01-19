import React from 'react';
import FriendItem from './FriendItem';

function FriendsList(props) {
  const friends = props.friends
  const trItem = friends.map((item, index) => (
    <FriendItem key={index} friend={item} />
  ))
  return (
    <tbody>{trItem}</tbody>
  );
}

export default FriendsList;