import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Media } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

function Dashboard() {
  useEffect(() => {
    loadDataFromDB();
  }, []);
  const [userData, setUserData] = useState({});

  const loadDataFromDB = () => {
    console.log("This will be a list");
    // axios.get("/home").then((response) => {
    //     setUserData(response.data)
    // });
  };
  const fakeData = {
    username: "annalou",
    email: "anna@gmail.com",
    age: "26-35",
    language: "English",
    selections: "Crafts",
    interests: "Dancing",
    description: "I love to code!",
  };
  return (
    <div>
      <Media className="profile-box">
        <img
          width={128}
          height={128}
          className="mr-3 round-pics"
          src={process.env.PUBLIC_URL + "/images/anime1.jpeg"}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>My profile</h5>
          <p>Interests</p>
          <p>Todays talking points</p>
        </Media.Body>
      </Media>
      <Media className="match-box">
        <img
          width={128}
          height={128}
          className="mr-3 round-pics"
          src={process.env.PUBLIC_URL + "/images/animepp.jpeg"}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Match profile</h5>
          <p>Interests</p>
          <p>We matched today to talk about ...</p>
          <Button className="register-button" type="submit">
            <span className="register-button">Meet here</span>
          </Button>
        </Media.Body>
      </Media>
      <Media className="match-box">
        <img
          width={128}
          height={128}
          className="mr-3 round-pics"
          src={process.env.PUBLIC_URL + "/images/animepp.jpeg"}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Match profile</h5>
          <p>Interests</p>
          <p>We matched today to talk about ...</p>
          <Button className="register-button" type="submit">
            <span className="register-button">Meet here</span>
          </Button>
        </Media.Body>
      </Media>

      <div className="input-group-btn">
        <Button>
          <NavLink to="/home" className="register-button">
            Home
          </NavLink>
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
