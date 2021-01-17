import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginForm = (props) => {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="username" className="mr-sm-2">Username</Label>
        <Input type="text" name="username" id="userName" placeholder="enter name" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="loginPassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="loginPassword" placeholder="enter password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default LoginForm;