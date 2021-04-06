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

function App() {
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
