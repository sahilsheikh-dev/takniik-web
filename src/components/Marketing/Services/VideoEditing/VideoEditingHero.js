import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AboutBgImg from "../../../../assets/img/services/videoediting/ve-hero.png";

const VideoEditingHero = () => {
  return (
    <div
      className="about-us about-hero"
      style={{
        backgroundImage: `url(${AboutBgImg})`,
      }}
    >
      <Container>
        <div className="w-100 container mx-3">
          <h1 className="about-hero-title text-white text-start">
            Professional video
            <br className="d-none d-md-block d-lg-block d-xl-block" />
            editing services
          </h1>
          <p className="about-hero-subtitle text-white text-start">
            We are your one-stop solution for all{" "}
            <br className="d-none d-md-block d-lg-block d-xl-block" /> things
            growth
          </p>
          <div className="text-center text-md-start text-lg-start text-xl-start">
            <Button className="hero-btn">
              <Link
                to={"/contact"}
                style={{ textDecoration: "none", color: "#ffffff" }}
              >
                Create a Project &nbsp; <i class="bi bi-arrow-right"></i>{" "}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VideoEditingHero;