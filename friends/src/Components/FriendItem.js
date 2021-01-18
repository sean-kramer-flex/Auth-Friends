import React, { useState } from 'react';
import { MdEdit, MdDeleteForever } from 'react-icons/md'
import { axiosWithAuth } from '../Utils/axiosWithAuth';

function FriendItem(props) {
  const friends = props.friends

const [isEdit, setIsEdit]=useState(false)

const deleteFriend = (id) => {
  axiosWithAuth()
  .delete(`http://localhost:5000/api/friends/${id}`)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

  return (
    isEdit === true ? (
      <>
      {friends.map(f => 
        <tr  key={f.id}>
        <td>
          <input defaultValue ={f.name}/>
        </td>
        <td><input defaultValue={f.age} />
        </td>
        <td>
          <input  defaultValue={f.email}/>
        </td>
        <td><i className="far fa-save" onClick={console.log('editted')}></i>
        </td>
        <td><i className="fas fa-trash"></i></td>
      </tr>
        )}
      
      </>
    ) : (
      <>
      {friends.map(f => 
          <tr key={f.id}>
          <td>{f.name}</td>
          <td>{f.age}</td>
          <td>{f.email}</td>
          <td onClick={() => setIsEdit(true)}><MdEdit /></td>
          <td onClick={() => deleteFriend(f.id)}><MdDeleteForever /></td>
        </tr>
        )
        }
 </>
    )

  );
}

export default FriendItem;