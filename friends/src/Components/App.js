import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home'
import NavBar from './NavBar';
import LoginForm from './LoginForm'
import FriendsList from './FriendsList';
import PrivateRoute from './PrivateRoute'
import AddNew from './AddNew';

const App = () => {
  return (
    <Router>
    
    <NavBar />
    
    <Route  exact path="/" component={Home} />
    <Route path="/login" component={LoginForm} />

    <PrivateRoute path="/list" component={FriendsList} />
    <PrivateRoute path="/add" component={AddNew} />
    </Router>
  )
}

export default App;