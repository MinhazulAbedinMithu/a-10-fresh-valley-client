import './App.css';
import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddProduct from './components/AddProduct/AddProduct';
import AdminPanel from './components/AdminPanel/AdminPanel';
import OrderNow from './components/OrderNow/OrderNow';
import Deals from './components/Deals/Deals';

export const UserContext = createContext()
function App() {
const [loggedInUser, setLoggedInUser] = useState();
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/addProduct'>
            <AddProduct/>
          </Route>
          <Route path='/deals'>
            <Deals/>
          </Route>
          <PrivateRoute path='/adminPanel'>
            <AdminPanel/>
          </PrivateRoute>
          <PrivateRoute path='/checkout/:id'>
            <CheckOut />
          </PrivateRoute>
          <PrivateRoute path='/orderNow'>
            <OrderNow/>
          </PrivateRoute>
          <Route path='*'>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
    
  );
}

export default App;
