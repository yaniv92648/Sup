import React from "react";
import { Button } from "react-bootstrap";

function MatchUp() {
  const imageOne = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const imageTwo = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const imageThree = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const imageFour = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const imageFive = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const imageSix = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const imageSeven = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const imageEight = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const imageNine = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const imageTen = () => {
    const now = new Date();
    console.log("CLICKED", now);
  };
  const handleSubmit = () => {
    console.log("what to do here?");
  };

  return (
    <div>
      <div>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/cat.jpg"}
            alt="1"
            width="200px"
            onClick={imageOne}
          />
        </Button>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/dog.jpg"}
            alt="2"
            width="200px"
            onClick={imageTwo}
          />
        </Button>
      </div>
      <div>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/book.jpg"}
            alt="3"
            width="200px"
            onClick={imageThree}
          />
        </Button>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/party.jpg"}
            alt="4"
            width="200px"
            onClick={imageFour}
          />
        </Button>
      </div>
      <div>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/Town.jpg"}
            alt="5"
            width="200px"
            onClick={imageFive}
          />
        </Button>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/City.jpg"}
            alt="6"
            width="200px"
            onClick={imageSix}
          />
        </Button>
      </div>
      <div>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/sandwich.jpg"}
            alt="7"
            width="200px"
            onClick={imageSeven}
          />
        </Button>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/gourmet-dish.jpg"}
            alt="8"
            width="200px"
            onClick={imageEight}
          />
        </Button>
      </div>
      <div>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/happy-art.jpg"}
            alt="9"
            width="200px"
            onClick={imageNine}
          />
        </Button>
        <Button>
          <img
            src={process.env.PUBLIC_URL + "/images/sad-art.jpg"}
            alt="10"
            width="200px"
            onClick={imageTen}
          />
        </Button>
      </div>
      <Button className="none_yet" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default MatchUp;
