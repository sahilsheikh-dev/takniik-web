import React from "react";
import AboutBgImg from "../../../assets/img/about-bg-img.png";

const AboutHero = () => {
  return (
    <div
      className="about-us about-hero"
      style={{
        backgroundImage: `url(${AboutBgImg})`,
      }}
    >
      <div className="w-100">
        <h1 className="about-hero-title text-white">About Us</h1>
        <p className="about-hero-subtitle text-white">
          We’re on our way to become the world’s largest content{" "}
          <br className="d-none d-md-block d-lg-block d-xl-block" /> company,
          diligently building the technological plumbing that{" "}
          <br className="d-none d-md-block d-lg-block d-xl-block" /> will power
          all content ever created.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
