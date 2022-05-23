import React from "react";
import Button from "react-bootstrap/Button";

const logo = require("../assets/canberk-yilmaz-photo.webp");

export default function Info() {
  return (
    <div className="info">
      <img src={logo} alt="canberk-yilmaz" loading="lazy" />
      <h1>Canberk Yilmaz</h1>
      <h3>Frontend Developer</h3>
      <a href="https://canberkyilmaz.com" target="blank">
        canberkyilmaz.com
      </a>
      <div className="info-button-container">
        <Button
          onClick={() => (window.location.href = "mailto:cyilmaz089@gmail.com")}
          className="button button__email"
        >
          <i className="fa fa-envelope" aria-hidden="true"></i> Email
        </Button>
        <Button
          onClick={() => window.open(`https://linkedin.com/in/canberkyilmaz`)}
          className="button button__linkedin"
        >
          <i className="fab fa-linkedin" aria-hidden="true"></i>
          LinkedIn
        </Button>
      </div>
    </div>
  );
}
