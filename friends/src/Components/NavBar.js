import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.setItem('token', '')
  }

  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand href="/">Friend's App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/list">List of Friends</NavLink>
            </NavItem>
            <NavItem >
              <NavLink href="/login" >Login</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>
            <NavLink href="/" onClick={logout}>
              Log out
              </NavLink></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;