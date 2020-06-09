import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <div>My Profile and Interests Here</div>
      <div>Lists of matches and link to Google Meet</div>
    </div>
  );
}

export default Dashboard;
