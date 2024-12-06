import React from "react";
import "./Join.css";
// import JVideo from "../assets/vid.mp4";

const Join = () => {
  return (
    <section className="joinSec" id="joinSec">
      <div className="jVid">
        {/* <video src={JVideo} autoPlay muted loop></video> */}
      </div>
      <div className="join-card">
        <h1>Join Us</h1>
        <p>Be a part of our amazing community</p>
        <button>Sign Up</button>
      </div>
    </section>
  );
};

export default Join;
