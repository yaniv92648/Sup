import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ListMatches(props) {
    useEffect(() => {
        loadDataFromDB();
      }, []);
  const [userData, setUserData] = useState({});

  const loadDatafromDB = () => {
      console.log("This will be a list")
    // axios.get("/home").then((response) => {
    //     setUserData(response.data)
    });
  };

    return (
      <div className="student-info" key={item._id.$oid}>
        <span className="student-id">id :{item._id.$oid}</span>
        <span className="time-created">enrolled :{item.created}</span>
        <span className="student-name">
          <Link to={`/student/${item._id.$oid}`}>
            {item.first_name} {item.last_name}
          </Link>
        </span>
      </div>
    );
  });

export default StudentList;
