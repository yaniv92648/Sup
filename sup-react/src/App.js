import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Register from "./components/Register";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <NavBar></NavBar>
          <Switch>
            {/* <Route path="/" exact component={Home}></Route> */}
            <Route path="/register" exact component={Register}></Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
