import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Register from "./components/Register";
import NavBar from "./components/Navbar";
import Login from "./components/GoogleLogin";
import MatchUp from "./components/MatchUp";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <NavBar></NavBar>
          <Switch>
            {/* <Route path="/" exact component={Home}></Route> */}
            {/* <Route path="/login" exact component={GoogleLogin}></Route> */}
            <Route path="/register" exact component={Register}></Route>
            <Route path="/match" exact component={MatchUp}></Route>
            <Route path="/dashboard" exact component={Dashboard}></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
