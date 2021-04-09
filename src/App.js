import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import { createContext, useState } from 'react';
import CheckOut from './components/CheckOut/CheckOut';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState([]);
  const handleCart = (id) => {
    const newCart = [...cart, id];
    setCart(newCart)
    sessionStorage.setItem("cart", JSON.stringify(newCart))
  }

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <div className="container">
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/checkout">
              <CheckOut cart={cart}></CheckOut>
            </Route>
            <Route path="/dish/:id">
              <Product handleCart={handleCart}></Product>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
