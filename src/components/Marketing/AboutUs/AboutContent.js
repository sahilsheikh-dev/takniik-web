import React from "react";
import { Container } from "react-bootstrap";
import AboutBulb from "../../../assets/svg/about-bulb.svg";
import AboutHand from "../../../assets/svg/about-hand.svg";
import AboutLamp from "../../../assets/svg/about-lamp.svg";

const AboutContent = () => {
  return (
    <Container>
      <div className="about-us">
        <h1 className="about-us-heading my-5">
          We're Building <br /> The Future Of Content
        </h1>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 text-center">
            <img
              className="about-content-img"
              src={AboutBulb}
              alt="img"
              style={{
                background:
                  "linear-gradient(135.44deg, #FFB423 0%, #FF5823 93.58%)",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px auto 30px auto",
              }}
            />
            <h5 className="fw-bold">Strive for Excellence</h5>
            <p>
              I wasn’t born to be mediocre, <br /> I thrive on success
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 text-center">
            <img
              className="about-content-img"
              src={AboutHand}
              alt="img"
              style={{
                background:
                  "linear-gradient(135.44deg, #23FFB0 0%, #2388FF 93.58%)",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px auto 30px auto",
              }}
            />
            <h5 className="fw-bold">
              Creator-friendly, <br /> Customer-centric
            </h5>
            <p>
              I wasn’t born to be mediocre, <br /> I thrive on success
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 text-center">
            <img
              className="about-content-img"
              src={AboutLamp}
              alt="img"
              style={{
                background:
                  "linear-gradient(135.44deg, #7829F8 0%, #EA00EF 93.58%)",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px auto 30px auto",
              }}
            />
            <h5 className="fw-bold">Passion for Action</h5>
            <p>
              I wasn’t born to be mediocre, <br /> I thrive on success
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutContent;
