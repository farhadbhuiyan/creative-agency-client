import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import Order from './components/Dashboard/AddService/AddService';
import Review from './components/Dashboard/Review/Review';
import AddService from './components/Dashboard/AddService/AddService';
export const UserContext = createContext()


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute exact path='/dashboard'>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <PrivateRoute exact path='/add-service'>
          <AddService></AddService>
        </PrivateRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
