import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>Join Our Movement Today!</h2>
        <div className="social-icons">
          <i className="fa-brands facebook fa-facebook"></i>
          <i className="fa-brands insta fa-square-instagram"></i>
          <i className="fa-brands twitter fa-twitter"></i>
          <i className="fa-brands youtube fa-youtube"></i>
        </div>
      </div>
      <div id="contactDetails">
        <div className="contact-form">
          <h3>Get in Touch Now!</h3>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="Number" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send it!</button>
          </form>
        </div>
        <div id="contact-details">
          <div className="contact-details">
            <h3>Contact Us</h3>
            <p>
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p>
              <strong>Email:</strong> contact@example.com
            </p>
            <p>
              <strong>Address:</strong> 123 Main Street, City, Country
            </p>
          </div>
          <div className="contact-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092846634312!2d-122.41941548468155!3d37.77492927975998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbbb7c16b%3A0x3073f2b6f6e6f017!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1637922519484!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
