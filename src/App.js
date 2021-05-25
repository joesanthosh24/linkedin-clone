import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./pages/login/login.component";
import Home from "./pages/home/home.component";

import Header from "./components/header/header.component";

import { getUserAuth } from "./redux/actions/index";

import "./App.css";

function App({ getUserAuth }) {
  useEffect(() => {
    getUserAuth();
  }, []);

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

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(null, mapDispatchToProps)(App);
