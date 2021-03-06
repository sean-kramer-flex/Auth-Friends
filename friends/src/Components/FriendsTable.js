import React, {Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getFriends } from '../Redux/Actions/getFriendsActions'
import FriendsList from './FriendsList'
import FriendItem from './FriendItem'
import {axiosWithAuth} from '../Utils/axiosWithAuth'
import { Container, Table,Button } from 'reactstrap'
import { MdEdit, MdDeleteForever } from 'react-icons/md'


function FriendsTable (props) {
  console.log('table props: ', props);

// const [friends, setFriends] = useState([])

// const getFriends = () => {
//   axiosWithAuth()
//   .get("/api/friends")
//   .then(res => setFriends(res.data))
//   .catch(err => console.log(err))
// }

useEffect(() => {
  props.getFriends()
}, [])



  return(
    <Container>
    <Table>
      <thead style={{background: '#00141a', color: 'white'}}>
      <tr><th>Name</th><th>Age</th><th>Email</th><th>Edit</th><th>Delete</th></tr>
      </thead>

<FriendsList friends={props.friends}/>

      {/* <tbody>


        
        <FriendItem friends={friends} />
        {/* {friends.map(f => (
          <tr key={f.id}>
            <td>{f.name}</td>
            <td>{f.age}</td>
            <td>{f.email}</td>
            <td><MdEdit /></td>
            <td><MdDeleteForever /></td>
          </tr>
        ))} */}
       
      {/* </tbody> */} 
      <Button color="secondary" size="md" active onClick={() => props.history.push('/add')}>Add New</Button>
    </Table>

    </Container>

  )
}

const mapStateToProps = state => {
  console.log('state: ', state);
  return {
    friends: state.get.friends
  }
}



export default connect(mapStateToProps, {getFriends})(FriendsTable)