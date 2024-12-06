import React from "react";
import "./Home.css";
// import Video from "../assets/vid.mp4";

const Home = () => {
  return (
    <section id="home" className="home section">
      <div className="video">
        {/* <video className="vid" autoPlay muted loop id="bg-video">
          <source src="" type="video/mp4" />
        </video> */}
      </div>
      <div className="content">
        <h1>Welcome to MyWebsite</h1>
        <p>Your go-to place for amazing content!</p>
      </div>
    </section>
  );
};

export default Home;
