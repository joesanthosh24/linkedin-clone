import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login/login.component";
import Home from "./pages/home/home.component";

import Header from "./components/header/header.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
