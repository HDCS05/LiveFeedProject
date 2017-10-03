import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/home" component={Home}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
