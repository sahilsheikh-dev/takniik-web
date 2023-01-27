import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const BgImageHero = ({ HeroImg, Heading, SubHeading, BtnText, URL }) => {
  return (
    <div
      className="about-us about-hero"
      style={{
        backgroundImage: `url(${HeroImg})`,
        maxWidth: "100%",
      }}
    >
      <Container>
        <div className="w-100 container mx-3" style={{ maxWidth: "600px" }}>
          <h1 className="about-hero-title text-white text-start">{Heading}</h1>
          <p className="about-hero-subtitle text-white text-start">
            {SubHeading}
          </p>
          <div className="text-center text-md-start text-lg-start text-xl-start">
            <Button className="hero-btn">
              <Link
                to={URL}
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                {BtnText} &nbsp; <i className="bi bi-arrow-right"></i>{" "}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BgImageHero;
