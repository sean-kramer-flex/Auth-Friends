import React from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md'
import { axiosWithAuth } from '../Utils/axiosWithAuth';

function FriendItem(props) {
  const friends = props.friends

const deleteFriend = (id) => {
  axiosWithAuth()
  .delete(`http://localhost:5000/api/friends/${id}`)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

  return (
   <>
        {friends.map(f => (
          
          <tr key={f.id}>
            <td>{f.name}</td>
            <td>{f.age}</td>
            <td>{f.email}</td>
            <td ><MdEdit /></td>
            <td onClick={() => deleteFriend(f.id)}><MdDeleteForever /></td>
          </tr>
        ))}
   </>
  );
}

export default FriendItem;