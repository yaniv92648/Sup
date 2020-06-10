import React from "react";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
// import car from "./public/images/anime.jpg";

function Home() {
  return (
    <div className="b">
      {/* <h1>Sup!</h1> */}

      <img
        src={process.env.PUBLIC_URL + "/images/suplgo.png"}
        alt="10"
        width="300px"
      />
      <h3>What do you want to talk about today?</h3>
      <p>Connect with like-minded people all around the world</p>
      <p>Play our interactive game and find your dream conversation partner</p>
      <p>Schedule a meeting on Google Meet</p>
      <p>New topics to ponder everyday based on your previous converstions</p>
      <Button className="round">
        <NavLink to="/register" className="register-button">
          Register
        </NavLink>
      </Button>
      <div className="input-group-btn">
        <Button classname="round">
          <NavLink to="/match" className="register-button">
            Match me!
          </NavLink>
        </Button>
      </div>
    </div>
  );
}
export default Home;
