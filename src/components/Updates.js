import React from "react";
import "./Updates.css";
import updatePic1 from "../assets/updatePic1.jpg";
import updatePic2 from "../assets/updatePic2.jpg";
import updatePic3 from "../assets/updatePic3.jpg";
import updatePic4 from "../assets/updatePic4.jpg";
import updatePic5 from "../assets/updatePic5.jpg";

const updatesData = [
  {
    img: updatePic1,
    title: "Celebrating 14 Years of Impact",
    date: "December 1, 2024",
    description:
      "We threw a party to celebrate our journey! Thanks to everyone who joined us in making a difference!",
  },
  {
    img: updatePic2,
    title: "New Campaign Launches Next Week!",
    date: "November 28, 2024",
    description:
      "Get ready for our exciting new awareness campaign! Stay tuned for details and how you can participate!",
  },
  {
    img: updatePic3,
    title: "Volunteer Opportunities Available Now!",
    date: "November 15, 2024",
    description:
      "Join our team of passionate volunteers and help us make a difference in the lives of disabled individuals!",
  },
  {
    img: updatePic4,
    title: "Success Stories That Inspire Us!",
    date: "November 5, 2024",
    description:
      "Read about the incredible journeys of those we've helped. Their stories will warm your heart and inspire action!",
  },
  {
    img: updatePic5,
    title: "Community Event Highlights",
    date: "October 25, 2024",
    description:
      "Check out the highlights from our recent community event, where we brought together people from all walks of life.",
  },
];

const Updates = () => {
  return (
    <section className="updateSec section" id="updateSec">
      <h1>Latest Buzz and Updates</h1>
      <div className="updates-container">
        {updatesData.map((update, index) => (
          <div key={index} className="update-card">
            <img src={update.img} alt={update.title} />
            <h3>{update.title}</h3>
            <p className="date">{update.date}</p>
            <p className="description">{update.description}</p>
            <button className="read-button">Read</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;
