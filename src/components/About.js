import React from "react";
import "./About.css";
import img from "../assets/mission.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about_hr">
        <h1>
          Our Mission <br /> Matter
        </h1>
      </div>
      <div className="about_m">
        <div className="mission_p">
          lorem30 Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dolor, odit nam exercitationem quaerat modi iste necessitatibus, quas
          iusto nostrum adipisci alias eaque optio aperiam culpa? Quis sed,
          cumque molestias porro, earum esse sequi ullam iste harum possimus
          ipsum voluptas aut ducimus error, ad repellendus veniam reprehenderit
          sit? Eaque, recusandae laborum!
        </div>
        <div className="mission_img">
          <img src={img} alt="Mission" />
        </div>
      </div>
    </section>
  );
};

export default About;
