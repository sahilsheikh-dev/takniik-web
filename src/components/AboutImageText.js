import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import OurMissionImg from "../assets/img/OurMissionImg.png";
import OurStoryImg from "../assets/img/OurStoryImg.png";
import OurTeamImg from "../assets/img/OurTeamImg.png";

const AboutImageText = () => {
  return (
    <Container>
      <div className="about-us">
        <div className="row about-our-section">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <img className="about-our-img" src={OurMissionImg} alt="img" />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <h1 className="about-our-title">
              Our <span className="hero-title-gradient">&nbsp;mission</span>
            </h1>
            <p className="about-out-description">
              We are raising a new, financially aware generation of Indians who
              understand the fundamentals of personal finance and are capable of
              making decisions in their best long term interest.
            </p>
          </div>
        </div>
        <div className="row about-our-section">
          <div className="col-md-6 col-lg-6 col-xl-6 d-none d-md-block d-lg-block d-xl-block">
            <h1 className="about-our-title">
              Our <span className="hero-title-gradient">&nbsp;culture</span>
            </h1>
            <p className="about-out-description">
              We are raising a new, financially aware generation of Indians who
              understand the fundamentals of personal finance and are capable of
              making decisions in their best long term interest.
            </p>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <img
              className="about-our-img about-img-right"
              src={OurStoryImg}
              alt="img"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 d-block d-md-none d-lg-none d-xl-none">
            <h1 className="about-our-title">
              Our <span className="hero-title-gradient">&nbsp;culture</span>
            </h1>
            <p className="about-out-description">
              We are raising a new, financially aware generation of Indians who
              understand the fundamentals of personal finance and are capable of
              making decisions in their best long term interest.
            </p>
          </div>
        </div>
        <div className="row about-our-section">
          <div className="col-md-6 col-lg-6 col-xl-6">
            <img className="about-our-img" src={OurTeamImg} alt="img" />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6">
            <h1 className="about-our-title">
              Our <span className="hero-title-gradient">&nbsp;story</span>
            </h1>
            <p className="about-out-description">
              We are raising a new, financially aware generation of Indians who
              understand the fundamentals of personal finance and are capable of
              making decisions in their best long term interest.
            </p>
            <div className="about-contact-btn">
              <Link
                to={"/contact"}
                className="hero-btn"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Contact Us
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutImageText;
