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
      <Media>
        <img
          width={128}
          height={128}
          className="mr-3"
          src={process.env.PUBLIC_URL + "/images/anime1.jpeg"}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
      <div>My Profile and Interests Here</div>
      <div>Lists of matches and link to Google Meet</div>
      <div className="input-group-btn">
        <Button>
          <NavLink to="/home" className="register-button">
            Take me Home!
          </NavLink>
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
