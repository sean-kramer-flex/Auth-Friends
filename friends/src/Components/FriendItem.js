import React, { useState } from "react";
import { MdEdit, MdDeleteForever, MdSave } from "react-icons/md";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

function FriendItem(props) {
  const f = props.friend;

  const [isEdit, setIsEdit] = useState(false);

  const initialState = {
    name: '',
    age: '',
    email: ''
  }

  const [editedFriend, setEditedFriend] = useState(initialState)

  const inputHandler = (e) => {
    console.log('edit input: ', e.target.value);
setEditedFriend({[e.target.name]: e.target.value
})}

  const deleteFriend = (id) => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const saveEdit = (id) => {
    axiosWithAuth()
    .put(`http://localhost:5000/api/friends/${id}`, editedFriend)
    .then((res) => {
      console.log('put res: ', res)
      setIsEdit(!isEdit)
    }
    )
      .catch((err) => console.log(err))
  }

  return isEdit === true ? (
    <tr key={f.id}>
      <td>
        <input defaultValue={f.name} name='name' onChange={inputHandler}/>
      </td>
      <td>
        <input defaultValue={f.age} name='age' onChange={inputHandler}/>
      </td>
      <td>
        <input defaultValue={f.email} name='email' onChange={inputHandler}/>
      </td>
      <td>
        <MdSave onClick={() => saveEdit(f.id)}/>
      </td>
      <td onClick={() => deleteFriend(f.id)}>
        <MdDeleteForever />
      </td>
    </tr>
  ) : (
    <tr key={f.id}>
      <td>{f.name}</td>
      <td>{f.age}</td>
      <td>{f.email}</td>
      <td onClick={() => setIsEdit(true)}>
        <MdEdit />
      </td>
      <td onClick={() => deleteFriend(f.id)}>
        <MdDeleteForever />
      </td>
    </tr>
  );
}

export default FriendItem;
