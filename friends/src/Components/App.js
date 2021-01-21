import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import friendsReducer from '../Redux/friendsReducer'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home'
import NavBar from './NavBar';
import LoginForm from './LoginForm'
import FriendsTable from './FriendsTable';
import PrivateRoute from './PrivateRoute'
import AddNew from './AddNew';

const store = createStore(friendsReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

const App = () => {
  return (
    <Provider store={store}>
    <Router>
    
    <NavBar />
    
    <Route  exact path="/" component={Home} />
    <Route path="/login" component={LoginForm} />

    <PrivateRoute path="/list" component={FriendsTable} />
    <PrivateRoute path="/add" component={AddNew} />
    </Router>
    </Provider>
  )
}

export default App;