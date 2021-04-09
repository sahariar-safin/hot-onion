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

function App() {
  sessionStorage.setItem("id", [])
  return (
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
          <Route path="/dish/:id">
            <Product></Product>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
