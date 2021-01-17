import React, {Component, useEffect, useState } from 'react'
import {axiosWithAuth} from '../Utils/axiosWithAuth'
import { Container, Table } from 'reactstrap'


function FriendsList () {

const [friends, setFriends] = useState([])

const getFriends = () => {
  axiosWithAuth()
  .get("/api/friends")
  .then(res => setFriends(res.data))
  .catch(err => console.log(err))
}

useEffect(() => {
  getFriends()
}, [])

  return(
    <Container>
    <Table>
      <thead>
      <tr><th>Name</th><th>Age</th><th>Email</th><th>Edit</th><th>Delete</th></tr>
      </thead>
      <tbody>
        {friends.map(f => (
          <tr key={f.id}>
            <td>{f.name}</td>
            <td>{f.age}</td>
            <td>{f.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    
    </Container>

  )
}

export default FriendsList