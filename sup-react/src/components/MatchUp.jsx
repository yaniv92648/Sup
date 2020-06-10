import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import qs from "qs";
import { NavLink } from "react-router-dom";

function MatchUp() {
  useEffect(() => {
    timestampOnLoad();
  }, []);

  const [pageloaded, setPageLoaded] = useState({});
  const [pair1, setPair1] = useState({});
  const [pair2, setPair2] = useState({});
  const [pair3, setPair3] = useState({});
  const [pair4, setPair4] = useState({});
  const [pair5, setPair5] = useState({});

  const timestampOnLoad = () => {
    const loadTime = new Date();
    setPageLoaded({ page: loadTime });
    console.log("Loaded", loadTime);
  };

  const imageOne = () => {
    const now = new Date();
    console.log("cat", now);
    const pairone = { cat: now };
    setPair1(pairone);
  };

  const imageTwo = () => {
    console.log(pair1);
    const now = new Date();
    console.log("dog", now);
    const pairone = { dog: now };
    setPair1(pairone);
  };
  const imageThree = () => {
    const now = new Date();
    console.log("book", now);
    const pairtwo = { book: now };
    setPair2(pairtwo);
  };
  const imageFour = () => {
    const now = new Date();
    console.log("party", now);
    const pairtwo = { party: now };
    setPair2(pairtwo);
  };
  const imageFive = () => {
    const now = new Date();
    console.log("Town", now);
    const pairthree = { Town: now };
    setPair3(pairthree);
  };
  const imageSix = () => {
    const now = new Date();
    console.log("City", now);
    const pairthree = { City: now };
    setPair3(pairthree);
  };
  const imageSeven = () => {
    const now = new Date();
    console.log("sandwich", now);
    const pairfour = { sandwich: now };
    setPair4(pairfour);
  };
  const imageEight = () => {
    const now = new Date();
    console.log("gourmet-dish", now);
    const pairfour = { sandwich: now };
    setPair4(pairfour);
  };
  const imageNine = () => {
    const now = new Date();
    console.log("happy-art", now);
    const pairfive = { "happy-art": now };
    setPair5(pairfive);
  };
  const imageTen = () => {
    const now = new Date();
    console.log("sad-art", now);
    const pairfive = { "sad-art": now };
    setPair5(pairfive);
  };
  const postImageData = () => {
    console.log("posting to db");
    const postData = { pageloaded, pair1, pair2, pair3, pair4, pair5 };
    console.log(postData);
    // axios.post(`/getuser/${match.params.id}`).then((response) => {
    //           let data = response.data;
    //           setStudent(data);
    // }
  };

  const handleSubmit = () => {
    console.log("send 5 image names with timestamp and loaded timestamp");
    postImageData();
  };

  return (
    <div>
      <div>
        <Button
          disabled={Object.keys(pair1).length !== 0}
          onClick={(event) => imageOne(event)}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/cat.jpg"}
            alt="1"
            width="300px"
          />
        </Button>
        <span> or </span>
        <Button disabled={Object.keys(pair1).length !== 0} onClick={imageTwo}>
          <img
            src={process.env.PUBLIC_URL + "/images/dog.jpg"}
            alt="2"
            width="300px"
          />
        </Button>
      </div>
      <div>
        <Button disabled={Object.keys(pair2).length !== 0} onClick={imageThree}>
          <img
            src={process.env.PUBLIC_URL + "/images/book.jpg"}
            alt="3"
            width="300px"
          />
        </Button>
        <span> or </span>
        <Button disabled={Object.keys(pair2).length !== 0} onClick={imageFour}>
          <img
            src={process.env.PUBLIC_URL + "/images/party.jpg"}
            alt="4"
            width="300px"
          />
        </Button>
      </div>
      <div>
        <Button disabled={Object.keys(pair3).length !== 0} onClick={imageFive}>
          <img
            src={process.env.PUBLIC_URL + "/images/Town.jpg"}
            alt="5"
            width="300px"
          />
        </Button>
        <span> or </span>
        <Button disabled={Object.keys(pair3).length !== 0} onClick={imageSix}>
          <img
            src={process.env.PUBLIC_URL + "/images/City.jpg"}
            alt="6"
            width="300px"
          />
        </Button>
      </div>
      <div>
        <Button disabled={Object.keys(pair4).length !== 0} onClick={imageSeven}>
          <img
            src={process.env.PUBLIC_URL + "/images/sandwich.jpg"}
            alt="7"
            width="300px"
          />
        </Button>
        <span> or </span>
        <Button disabled={Object.keys(pair4).length !== 0} onClick={imageEight}>
          <img
            src={process.env.PUBLIC_URL + "/images/gourmet-dish.jpg"}
            alt="8"
            width="300px"
          />
        </Button>
      </div>
      <div>
        <Button disabled={Object.keys(pair5).length !== 0} onClick={imageNine}>
          <img
            src={process.env.PUBLIC_URL + "/images/happy-art.jpg"}
            alt="9"
            width="300px"
          />
        </Button>
        <span> or </span>
        <Button disabled={Object.keys(pair5).length !== 0} onClick={imageTen}>
          <img
            src={process.env.PUBLIC_URL + "/images/sad-art.jpg"}
            alt="10"
            width="300px"
          />
        </Button>
      </div>
      <Button className="none_yet" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      <div>
        <Button className="input-group-btn">
          <NavLink to="/dashboard" className="register-button">
            Matches
          </NavLink>
        </Button>
      </div>
    </div>
  );
}

export default MatchUp;
