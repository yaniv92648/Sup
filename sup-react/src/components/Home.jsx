import React from "react";
import "../App.css";

function Home() {
  return (
    <div>
      <h1>Sup!</h1>
      <img
        src={process.env.PUBLIC_URL + "/images/Sup.jpeg"}
        alt="10"
        width="200px"
      />
      <p>Find like-minded people for connection around the world</p>
      <p>Play our interactive game and find your dream conversation partner</p>
      <p>Schedule a meeting on Google Meet</p>
      <p>New topics to ponder everyday based on your previous converstions</p>
    </div>
  );
}
export default Home;
