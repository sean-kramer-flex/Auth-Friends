import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md'

function FriendItem(props) {
  const friends = props.friends
  return (
   <>
        {friends.map(f => (
          <tr key={f.id}>
            <td>{f.name}</td>
            <td>{f.age}</td>
            <td>{f.email}</td>
            <td><MdEdit /></td>
            <td><MdDeleteForever /></td>
          </tr>
        ))}
   </>
  );
}

export default FriendItem;