import React, { useState } from 'react';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { axiosWithAuth } from '../Utils/axiosWithAuth';

function AddNew(props) {
 

      const initialState = {
        name: '',
        age: '',
        email: ''
      }
    const [newFriend, setNewFriend] = useState(initialState)
    
    const onChangeHandler = (e) => {
      setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }
    
    const onSubmitHandler = (e) => {
      e.preventDefault()
      console.log('submitted');
      axiosWithAuth()
      .post('http://localhost:5000/api/friends', newFriend)
      .then(res => {
      props.history.push('/list')
      })
      
      .catch(err => console.log(err))
    }
    
    
    
      return (
        <Container className="themed-container">
        <Form onSubmit={onSubmitHandler}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="name" className="mr-sm-2">name</Label>
            <Input type="text" name="name" id="name" placeholder="enter name" onChange={onChangeHandler}/>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="age" className="mr-sm-2">Age</Label>
            <Input type="age" name="age" id="age" placeholder="enter age" onChange={onChangeHandler}/>
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="email" className="mr-sm-2">Email</Label>
            <Input type="email" name="email" id="email" placeholder="enter email" onChange={onChangeHandler}/>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        </Container>
      );
    }

export default AddNew;