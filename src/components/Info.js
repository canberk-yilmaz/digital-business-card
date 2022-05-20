import React from "react";
import Button from "react-bootstrap/Button";

export default function Info() {
  return (
    <div class="info">
      <img
        src={require("../assets/canberk-yilmaz-photo.JPG")}
        alt="canberk-yilmaz"
      />
      <h1>Canberk Yilmaz</h1>
      <h3>Frontend Developer</h3>
      <a href="https://canberkyilmaz.com" target="blank">
        canberkyilmaz.com
      </a>
      <div class="info-button-container">
        <Button
          className="button button__email"
          style={{ "margin-right": "1rem" }}
        >
          <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
          <a href="mailto:cyilmaz089@gmail.com" target="blank">Email</a>
        </Button>
        <Button className="button button__linkedin">
          <i className="fab fa-linkedin" aria-hidden="true"></i>
          <a href="https://linkedin.com/in/canberkyilmaz" target="blank">LinkedIn</a>
        </Button>
      </div>
    </div>
  );
}
