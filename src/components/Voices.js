import React from "react";
import "./Voices.css";
import Per1 from "../assets/per1.jpg";
import Per2 from "../assets/per2.jpg";
import Per3 from "../assets/per3.jpg";
import Per4 from "../assets/per4.jpg";

const Voices = () => {
  return (
    <section id="about" className="voices">
      <div className="voices_h">
        <h1>Voices</h1>
      </div>
      <div className="voice_stats">
        <div className="stat">
          <h2>14</h2>
          <p>Years Strong</p>
        </div>
        <div className="stat">
          <h2>5000</h2>
          <p>Lives Changed</p>
        </div>
        <div className="stat">
          <h2>100+</h2>
          <p>Awareness Campaigns</p>
        </div>
      </div>
      <div className="voice_pers">
        <div className="persionOne persion">
          <div className="perProfile">
            <div className="perImg">
              <img src={Per1} alt="Per1" />
            </div>
            <div className="perName">
              <h3>Persion One</h3>
            </div>
          </div>
          <div className="perAbout">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            urna nec dui tristique euismod. Integer at nisl ac orci finibus
            malesuada.
          </div>
        </div>
        <div className="persionTwo persion">
          <div className="perProfile">
            <div className="perImg">
              <img src={Per2} alt="Per2" />
            </div>
            <div className="perName">
              <h3>Persion Two</h3>
            </div>
          </div>
          <div className="perAbout">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            urna nec dui tristique euismod. Integer at nisl ac orci finibus
            malesuada.
          </div>
        </div>
        <div className="persionThree persion">
          <div className="perProfile">
            <div className="perImg">
              <img src={Per3} alt="Per3" />
            </div>
            <div className="perName">
              <h3>Persion Three</h3>
            </div>
          </div>
          <div className="perAbout">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            urna nec dui tristique euismod. Integer at nisl ac orci finibus
            malesuada.
          </div>
        </div>
        <div className="persionFour persion">
          <div className="perProfile">
            <div className="perImg">
              <img src={Per4} alt="Per4" />
            </div>
            <div className="perName">
              <h3>Persion Four</h3>
            </div>
          </div>
          <div className="perAbout">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non
            urna nec dui tristique euismod. Integer at nisl ac orci finibus
            malesuada.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voices;
